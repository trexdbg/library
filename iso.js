import { works, editionFor } from "./data/catalog.js";

const lang = document.documentElement.lang === "en" ? "en" : "fr";
const copy = {
  fr:{
    fantasy:{title:"Fantasy",desc:"Royaumes, quêtes, magie et grands cycles.",cta:"Entrer dans l’aile Fantasy"},
    scifi:{title:"Science-fiction",desc:"Futurs possibles, espace, technologie et idées.",cta:"Entrer dans l’observatoire"},
    polar:{title:"Polar",desc:"Enquêtes, noir, suspense et zones d’ombre.",cta:"Entrer dans le cabinet des ombres"},
    jeunesse:{title:"Jeunesse",desc:"Aventure, merveilleux et premières grandes lectures.",cta:"Entrer dans le salon des merveilles"},
    classics:{title:"Classiques",desc:"Les grandes œuvres qui continuent de traverser les générations.",cta:"Entrer dans la galerie des classiques"},
    romance:{title:"Romance",desc:"Histoires d'amour, de choix, de mémoire et de liens humains.",cta:"Entrer dans le salon des sentiments"},
    horror:{title:"Horreur",desc:"Gothique, surnaturel, peur et grands cauchemars littéraires.",cta:"Entrer dans la crypte des ombres"}
  },
  en:{
    fantasy:{title:"Fantasy",desc:"Kingdoms, quests, magic and sweeping sagas.",cta:"Enter the Fantasy wing"},
    scifi:{title:"Science fiction",desc:"Possible futures, space, technology and ideas.",cta:"Enter the observatory"},
    polar:{title:"Crime",desc:"Mystery, noir, suspense and hidden truths.",cta:"Enter the cabinet of shadows"},
    jeunesse:{title:"Young readers",desc:"Adventure, wonder and unforgettable first reads.",cta:"Enter the room of wonders"},
    classics:{title:"Classics",desc:"Great works that continue to cross generations.",cta:"Enter the classics gallery"},
    romance:{title:"Romance",desc:"Love, choices, memory and human connection.",cta:"Enter the romance salon"},
    horror:{title:"Horror",desc:"Gothic, supernatural dread and literary nightmares.",cta:"Enter the chamber of shadows"}
  }
}[lang];

function wingHref(genre){
  const parts=location.pathname.split("/").filter(Boolean);
  const routed=parts.includes("fr")||parts.includes("en");
  return routed ? `./${genre}/` : `./${lang}/${genre}/`;
}
function countFor(genre){
  return works.filter(w=>w.genre===genre && editionFor(w,lang)).length;
}

const title=document.querySelector("#wingTitle");
const desc=document.querySelector("#wingDesc");
const count=document.querySelector("#wingCount");
const cta=document.querySelector("#wingCta");
const idx=document.querySelector("#wingIndex");
const wings=[...document.querySelectorAll("[data-wing]")];
const mapWrap=document.querySelector(".iso-map-wrap");
const totalBooks=works.filter(w=>editionFor(w,lang)).length;
document.querySelectorAll("[data-library-count]").forEach(el=>{
  el.textContent=`${totalBooks} ${lang==="fr" ? "livres" : "books"}`;
});

const focusOffsets={
  fantasy:[70,18],
  scifi:[-62,18],
  polar:[72,-30],
  jeunesse:[-64,-30],
  classics:[0,54],
  romance:[0,-58],
  horror:[-96,0]
};

function selectWing(genre,{focus=true}={}){
  const meta=copy[genre];
  const n=countFor(genre);
  title.textContent=meta.title;
  desc.textContent=meta.desc;
  count.textContent=`${n} ${lang==="fr" ? "livres actuellement" : "books currently"}`;
  cta.textContent=meta.cta+" →";
  cta.href=wingHref(genre);
  idx.textContent=String(["fantasy","scifi","polar","jeunesse","classics","romance","horror"].indexOf(genre)+1).padStart(2,"0");
  wings.forEach(el=>el.classList.toggle("is-active",focus&&el.dataset.wing===genre));
  if(mapWrap){
    if(focus){
      const [x,y]=focusOffsets[genre]||[0,0];
      mapWrap.dataset.activeWing=genre;
      mapWrap.style.setProperty("--focus-x",x+"px");
      mapWrap.style.setProperty("--focus-y",y+"px");
      mapWrap.style.setProperty("--focus-scale","1.09");
    }else{
      delete mapWrap.dataset.activeWing;
      mapWrap.style.setProperty("--focus-x","0px");
      mapWrap.style.setProperty("--focus-y","0px");
      mapWrap.style.setProperty("--focus-scale","1.045");
    }
  }
}
wings.forEach(el=>{
  const genre=el.dataset.wing;
  el.setAttribute("href",wingHref(genre));
  el.setAttribute("aria-label",`${copy[genre].title} — ${copy[genre].desc}`);
  el.addEventListener("mouseenter",()=>selectWing(genre));
  el.addEventListener("focus",()=>selectWing(genre));
  el.addEventListener("touchstart",()=>selectWing(genre),{passive:true});
});

if(mapWrap){
  mapWrap.addEventListener("pointermove",event=>{
    if(event.pointerType==="touch") return;
    const r=mapWrap.getBoundingClientRect();
    const nx=(event.clientX-r.left)/r.width-.5;
    const ny=(event.clientY-r.top)/r.height-.5;
    mapWrap.style.setProperty("--cam-x",(nx*-15).toFixed(1)+"px");
    mapWrap.style.setProperty("--cam-y",(ny*-10).toFixed(1)+"px");
  });
  mapWrap.addEventListener("pointerleave",()=>{
    mapWrap.style.setProperty("--cam-x","0px");
    mapWrap.style.setProperty("--cam-y","0px");
    delete mapWrap.dataset.activeWing;
    mapWrap.style.setProperty("--focus-x","0px");
    mapWrap.style.setProperty("--focus-y","0px");
    mapWrap.style.setProperty("--focus-scale","1.045");
    wings.forEach(el=>el.classList.remove("is-active"));
  });
}
document.querySelectorAll("[data-mobile-wing]").forEach(el=>{
  const genre=el.dataset.mobileWing;
  el.href=wingHref(genre);
  el.querySelector("[data-count]").textContent=`${countFor(genre)} ${lang==="fr"?"livres":"books"}`;
});
selectWing("fantasy",{focus:false});
