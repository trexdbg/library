import { works, editionFor } from "./data/catalog.js";

const lang = document.documentElement.lang === "en" ? "en" : "fr";
const copy = {
  fr:{
    fantasy:{title:"Fantasy",desc:"Royaumes, quêtes, magie et grands cycles.",cta:"Entrer dans l’aile Fantasy"},
    scifi:{title:"Science-fiction",desc:"Futurs possibles, espace, technologie et idées.",cta:"Entrer dans l’observatoire"},
    polar:{title:"Polar",desc:"Enquêtes, noir, suspense et zones d’ombre.",cta:"Entrer dans le cabinet des ombres"},
    jeunesse:{title:"Jeunesse",desc:"Aventure, merveilleux et premières grandes lectures.",cta:"Entrer dans le salon des merveilles"}
  },
  en:{
    fantasy:{title:"Fantasy",desc:"Kingdoms, quests, magic and sweeping sagas.",cta:"Enter the Fantasy wing"},
    scifi:{title:"Science fiction",desc:"Possible futures, space, technology and ideas.",cta:"Enter the observatory"},
    polar:{title:"Crime",desc:"Mystery, noir, suspense and hidden truths.",cta:"Enter the cabinet of shadows"},
    jeunesse:{title:"Young readers",desc:"Adventure, wonder and unforgettable first reads.",cta:"Enter the room of wonders"}
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

function selectWing(genre){
  const meta=copy[genre];
  const n=countFor(genre);
  title.textContent=meta.title;
  desc.textContent=meta.desc;
  count.textContent=`${n} ${lang==="fr" ? "livres actuellement" : "books currently"}`;
  cta.textContent=meta.cta+" →";
  cta.href=wingHref(genre);
  idx.textContent=String(["fantasy","scifi","polar","jeunesse"].indexOf(genre)+1).padStart(2,"0");
}
wings.forEach(el=>{
  const genre=el.dataset.wing;
  el.setAttribute("href",wingHref(genre));
  el.addEventListener("mouseenter",()=>selectWing(genre));
  el.addEventListener("focus",()=>selectWing(genre));
});
document.querySelectorAll("[data-mobile-wing]").forEach(el=>{
  const genre=el.dataset.mobileWing;
  el.href=wingHref(genre);
  el.querySelector("[data-count]").textContent=`${countFor(genre)} ${lang==="fr"?"livres":"books"}`;
});
selectWing("fantasy");
