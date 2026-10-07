import { works, editionFor, coverUrl } from "./data/catalog.js";

const body=document.body;
const genre=body.dataset.genre;
const lang=body.dataset.lang==="en"?"en":"fr";
const labels={
  fr:{books:"livres",search:"Rechercher dans cette aile…",empty:"Aucun livre ne correspond à cette recherche.",review:"Notre regard"},
  en:{books:"books",search:"Search this wing…",empty:"No book matches this search.",review:"Our take"}
}[lang];

const genreLabels={
  fr:{fantasy:"Fantasy",scifi:"Science-fiction",polar:"Polar",jeunesse:"Jeunesse"},
  en:{fantasy:"Fantasy",scifi:"Science fiction",polar:"Crime",jeunesse:"Young readers"}
}[lang];

const list=works.filter(w=>w.genre===genre && editionFor(w,lang));
const grid=document.querySelector("#bookGrid");
const count=document.querySelector("#bookCount");
const search=document.querySelector("#wingSearch");
const dialog=document.querySelector("#bookDialog");

count.textContent=`${list.length} ${labels.books}`;
search.placeholder=labels.search;

function fallbackGradient(work){
  return `linear-gradient(145deg,${work.colors[0]},${work.colors[1]})`;
}
function makeCard(work){
  const edition=editionFor(work,lang);
  const button=document.createElement("button");
  button.type="button";button.className="book-card";
  button.setAttribute("aria-label",`${edition.title} — ${work.author}`);

  const wrap=document.createElement("span");wrap.className="book-card__cover-wrap";
  const cover=document.createElement("span");cover.className="book-card__cover";cover.style.background=fallbackGradient(work);
  const url=coverUrl(edition,"L");
  if(url){
    const img=document.createElement("img");img.src=url;img.alt="";img.loading="lazy";img.decoding="async";
    img.addEventListener("error",()=>{img.remove();cover.innerHTML=`<span class="book-card__fallback">${edition.title}</span>`;});
    cover.appendChild(img);
  }else cover.innerHTML=`<span class="book-card__fallback">${edition.title}</span>`;
  wrap.appendChild(cover);

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
  const url=coverUrl(e,"L");
  if(url){
    const img=new Image();img.onload=()=>cover.style.backgroundImage=`url("${url}")`;img.src=url;
  }
  if(!dialog.open)dialog.showModal();
}
search.addEventListener("input",e=>render(e.target.value));

const order=["fantasy","scifi","polar","jeunesse"];
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
