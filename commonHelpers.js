import{a as v,S as q,i as s}from"./assets/vendor-95dc692e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function p(o,e){const n="https://pixabay.com/api/",t={key:"43143035-9a4852fc5446c1c5b1cb84510",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await v.get(n,{params:t})).data}const g=o=>o.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <ul class="gallery-image-info">
        <li>
          <h3>Likes</h3>
          <p>${e.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p>${e.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p>${e.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p>${e.downloads}</p>
        </li>
      </ul>
    </a>
    </li>`).join(""),d=document.querySelector(".search-form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),y=new q(".gallery a",{captionsData:"alt",captionDelay:250});let l,a=1,L=0;const P=15;d.addEventListener("submit",R);async function R(o){if(o.preventDefault(),l=d.elements.query.value.trim(),!l)return s.error({title:"Error",message:"Please fill in the search field!",position:"topRight"});f(),c.innerHTML="",a=1;try{w();const e=await p(l,a);L=Math.ceil(e.totalHits/P);const i=g(e.hits);if(c.insertAdjacentHTML("beforeend",i),y.refresh(),e.hits.length===0){s.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b()}catch{s.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",position:"topRight"})}finally{S(),d.reset()}}h.addEventListener("click",M);async function M(){a+=1,f(),w();try{const o=await p(l,a),e=g(o.hits);c.insertAdjacentHTML("beforeend",e),y.refresh()}catch{s.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later!",position:"topRight"})}$(),S(),b()}function b(){a>=L?(f(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):E()}function w(){m.classList.remove("hidden")}function S(){m.classList.add("hidden")}function E(){h.classList.remove("hidden")}function f(){h.classList.add("hidden")}function $(){const o=c.firstChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
