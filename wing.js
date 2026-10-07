import { works, editionFor, coverUrl } from "./data/catalog.js";
import { linksFor } from "./data/links.js";

const body=document.body;
const genre=body.dataset.genre;
const lang=body.dataset.lang==="en"?"en":"fr";
const labels={
  fr:{
    books:"livres",
    search:"Rechercher dans cette aile…",
    empty:"Aucun livre ne correspond à cette recherche.",
    review:"Notre regard",
    buy:"Où l’acheter",
    reviews:"Critiques externes",
    affiliate:"Lien affilié",
    merchantNote:"En tant que Partenaire Amazon, Libria réalise un bénéfice sur les achats remplissant les conditions requises. Les autres liens affiliés peuvent également générer une commission sans surcoût pour vous.",
    read:"Lire la critique",
    searchReviews:"Rechercher des chroniques",
    visit:"Voir chez"
  },
  en:{
    books:"books",
    search:"Search this wing…",
    empty:"No book matches this search.",
    review:"Our take",
    buy:"Where to buy",
    reviews:"External reviews",
    affiliate:"Affiliate link",
    merchantNote:"When a link is affiliated, Libria may earn a commission at no extra cost to you.",
    read:"Read review",
    searchReviews:"Search literary blogs",
    visit:"View at"
  }
}[lang];

const genreLabels={
  fr:{fantasy:"Fantasy",scifi:"Science-fiction",polar:"Polar",jeunesse:"Jeunesse",classics:"Classiques",romance:"Romance",horror:"Horreur"},
  en:{fantasy:"Fantasy",scifi:"Science fiction",polar:"Crime",jeunesse:"Young readers",classics:"Classics",romance:"Romance",horror:"Horror"}
}[lang];

const list=works.filter(w=>w.genre===genre && editionFor(w,lang));
const grid=document.querySelector("#bookGrid");
const count=document.querySelector("#bookCount");
const search=document.querySelector("#wingSearch");
const dialog=document.querySelector("#bookDialog");

function ensureLinkSections(){
  const bodyEl=dialog.querySelector(".book-dialog__body");
  if(!bodyEl || bodyEl.querySelector("#dialogCommerce")) return;

  const commerce=document.createElement("section");
  commerce.className="book-links book-links--commerce";
  commerce.id="dialogCommerce";
  commerce.innerHTML=`
    <div class="book-links__heading">
      <span class="book-links__kicker">${labels.buy}</span>
      <small>${labels.merchantNote}</small>
    </div>
    <div class="merchant-links" id="dialogOffers"></div>
  `;

  const external=document.createElement("section");
  external.className="book-links book-links--reviews";
  external.id="dialogExternalReviews";
  external.innerHTML=`
    <div class="book-links__heading">
      <span class="book-links__kicker">${labels.reviews}</span>
    </div>
    <div class="external-reviews" id="dialogReviews"></div>
  `;

  bodyEl.append(commerce,external);
}

ensureLinkSections();

count.textContent=`${list.length} ${labels.books}`;
search.placeholder=labels.search;

function fallbackGradient(work){
  return `linear-gradient(145deg,${work.colors[0]},${work.colors[1]})`;
}

const dynamicCoverCache=new Map();

function imageLoads(url,timeoutMs=6500){
  return new Promise((resolve)=>{
    if(!url){ resolve(false); return; }
    const img=new Image();
    let settled=false;
    const finish=(ok)=>{
      if(settled) return;
      settled=true;
      window.clearTimeout(timer);
      img.onload=null;
      img.onerror=null;
      resolve(ok);
    };
    const timer=window.setTimeout(()=>finish(false),timeoutMs);
    img.onload=()=>finish(img.naturalWidth>20&&img.naturalHeight>20);
    img.onerror=()=>finish(false);
    img.referrerPolicy="no-referrer";
    img.src=url;
  });
}

function directCoverCandidates(work,edition,size){
  const candidates=[];
  const seen=new Set();
  const push=(value)=>{
    if(!value||seen.has(value)) return;
    seen.add(value);
    candidates.push(value);
  };

  push(coverUrl(edition,size));

  const siblings=[work.editions?.en,work.editions?.fr];
  siblings.forEach((candidate)=>{
    if(candidate&&candidate!==edition) push(coverUrl(candidate,size));
  });

  return candidates;
}

async function openLibrarySearchCover(work,edition,size){
  const titles=[edition.title,work.editions?.en?.title,work.editions?.fr?.title]
    .filter((title,index,array)=>title&&array.indexOf(title)===index);

  for(const title of titles){
    try{
      const params=new URLSearchParams({
        title,
        author:work.author,
        fields:"cover_i,title,author_name",
        limit:"8"
      });
      const response=await fetch(`https://openlibrary.org/search.json?${params.toString()}`,{
        headers:{Accept:"application/json"}
      });
      if(!response.ok) continue;
      const data=await response.json();
      for(const doc of data.docs||[]){
        if(!doc.cover_i) continue;
        const url=`https://covers.openlibrary.org/b/id/${doc.cover_i}-${size}.jpg?default=false`;
        if(await imageLoads(url)) return url;
      }
    }catch{}
  }
  return "";
}

async function googleBooksCover(work,edition){
  const titles=[edition.title,work.editions?.en?.title,work.editions?.fr?.title]
    .filter((title,index,array)=>title&&array.indexOf(title)===index);

  for(const title of titles){
    try{
      const q=`intitle:"${title}" inauthor:"${work.author}"`;
      const params=new URLSearchParams({q,maxResults:"8",printType:"books"});
      const response=await fetch(`https://www.googleapis.com/books/v1/volumes?${params.toString()}`);
      if(!response.ok) continue;
      const data=await response.json();

      for(const item of data.items||[]){
        const links=item.volumeInfo?.imageLinks||{};
        const raw=links.extraLarge||links.large||links.medium||links.small||links.thumbnail||links.smallThumbnail;
        if(!raw) continue;
        const url=raw.replace(/^http:/,"https:").replace("&edge=curl","");
        if(await imageLoads(url)) return url;
      }
    }catch{}
  }
  return "";
}

async function resolveCover(work,edition,size="L"){
  const cacheKey=`v3:${work.id}:${lang}:${size}`;
  if(dynamicCoverCache.has(cacheKey)) return dynamicCoverCache.get(cacheKey);

  try{
    const stored=sessionStorage.getItem(`libria-cover:${cacheKey}`);
    if(stored){
      const value=stored==="none"?"":stored;
      dynamicCoverCache.set(cacheKey,value);
      return value;
    }
  }catch{}

  for(const candidate of directCoverCandidates(work,edition,size)){
    if(await imageLoads(candidate)){
      dynamicCoverCache.set(cacheKey,candidate);
      try{sessionStorage.setItem(`libria-cover:${cacheKey}`,candidate);}catch{}
      return candidate;
    }
  }

  const openLibrary=await openLibrarySearchCover(work,edition,size);
  if(openLibrary){
    dynamicCoverCache.set(cacheKey,openLibrary);
    try{sessionStorage.setItem(`libria-cover:${cacheKey}`,openLibrary);}catch{}
    return openLibrary;
  }

  const google=await googleBooksCover(work,edition);
  if(google){
    dynamicCoverCache.set(cacheKey,google);
    try{sessionStorage.setItem(`libria-cover:${cacheKey}`,google);}catch{}
    return google;
  }

  dynamicCoverCache.set(cacheKey,"");
  try{sessionStorage.setItem(`libria-cover:${cacheKey}`,"none");}catch{}
  return "";
}

async function hydrateCardCover(cover,work,edition){
  const url=await resolveCover(work,edition,"L");
  if(!url || !cover.isConnected) return;

  const img=document.createElement("img");
  img.alt="";
  img.loading="lazy";
  img.decoding="async";
  img.referrerPolicy="no-referrer";
  img.addEventListener("load",()=>{
    if(!cover.isConnected) return;
    cover.innerHTML="";
    cover.appendChild(img);
  },{once:true});
  img.addEventListener("error",()=>img.remove(),{once:true});
  img.src=url;
}
function makeCard(work){
  const edition=editionFor(work,lang);
  const button=document.createElement("button");
  button.type="button";button.className="book-card";
  button.setAttribute("aria-label",`${edition.title} — ${work.author}`);

  const wrap=document.createElement("span");wrap.className="book-card__cover-wrap";
  const cover=document.createElement("span");cover.className="book-card__cover";cover.style.background=fallbackGradient(work);
  cover.innerHTML=`<span class="book-card__fallback">${edition.title}</span>`;
  wrap.appendChild(cover);
  hydrateCardCover(cover,work,edition);

  const copy=document.createElement("span");copy.className="book-card__copy";
  copy.innerHTML=`<strong>${edition.title}</strong><span>${work.author}</span><small>${edition.tags.slice(0,2).join(" · ")}</small>`;
  button.append(wrap,copy);
  button.addEventListener("click",()=>openBook(work));
  return button;
}
function render(query=""){
  const q=query.trim().toLowerCase();
  grid.innerHTML="";
  const filtered=list.filter(work=>{
    const e=editionFor(work,lang);
    return !q || [e.title,e.subtitle,work.author,...e.tags].join(" ").toLowerCase().includes(q);
  });
  if(!filtered.length){
    const p=document.createElement("p");p.className="empty-state";p.textContent=labels.empty;grid.appendChild(p);return;
  }
  filtered.forEach(w=>grid.appendChild(makeCard(w)));
}
function openBook(work){
  const e=editionFor(work,lang);
  document.querySelector("#dialogTitle").textContent=e.title;
  document.querySelector("#dialogSubtitle").textContent=e.subtitle||"";
  document.querySelector("#dialogAuthor").textContent=work.author;
  document.querySelector("#dialogSummary").textContent=e.summary;
  document.querySelector("#dialogReview").textContent=e.review;
  document.querySelector("#dialogReviewLabel").textContent=labels.review;
  const tags=document.querySelector("#dialogTags");tags.innerHTML="";
  e.tags.forEach(tag=>{const s=document.createElement("span");s.textContent=tag;tags.appendChild(s);});
  const cover=document.querySelector("#dialogCover");
  cover.style.backgroundImage=fallbackGradient(work);
  resolveCover(work,e,"L").then((url)=>{
    if(!url) return;
    const img=new Image();
    img.onload=()=>cover.style.backgroundImage=`url("${url}")`;
    img.src=url;
  });

  const links=linksFor(work,e,lang);
  const offersEl=document.querySelector("#dialogOffers");
  const reviewsEl=document.querySelector("#dialogReviews");
  offersEl.innerHTML="";
  reviewsEl.innerHTML="";

  links.offers.forEach((offer)=>{
    const a=document.createElement("a");
    a.className="merchant-link";
    a.href=offer.url;
    a.target="_blank";
    a.rel=offer.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
    a.innerHTML=`
      <span><small>${labels.visit}</small><strong>${offer.merchant}</strong></span>
      <span class="merchant-link__meta">${offer.affiliate ? labels.affiliate : "↗"}</span>
    `;
    offersEl.appendChild(a);
  });

  links.reviews.forEach((review)=>{
    const a=document.createElement("a");
    a.className=`external-review${review.search ? " external-review--search" : ""}`;
    a.href=review.url;
    a.target="_blank";
    a.rel="noopener noreferrer";
    a.innerHTML=`
      <span class="external-review__source">${review.source} · ${review.kind}</span>
      <strong>${review.title}</strong>
      <span class="external-review__cta">${review.search ? labels.searchReviews : labels.read} ↗</span>
    `;
    reviewsEl.appendChild(a);
  });

  document.querySelector("#dialogExternalReviews").hidden=!links.reviews.length;
  if(!dialog.open)dialog.showModal();
}
search.addEventListener("input",e=>render(e.target.value));

const order=["fantasy","scifi","polar","jeunesse","classics","romance","horror"];
document.querySelectorAll("[data-genre-link]").forEach(a=>{
  const g=a.dataset.genreLink;
  a.textContent=genreLabels[g];
  a.href=`../${g}/`;
  if(g===genre)a.setAttribute("aria-current","page");
});
const switchLang=lang==="fr"?"en":"fr";
document.querySelector("#languageSwitch").href=`../../${switchLang}/${genre}/`;
document.querySelector("#languageSwitch").textContent=switchLang.toUpperCase();
render();
