import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function d(s){const r=s.hits.map(o=>`<li class="images-list-item">
  <a class="img-link" href=${o.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${o.webformatURL} alt=${o.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${o.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${o.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${o.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${o.downloads}</p>
      </li>
    </ul>
</li>`).join(`
`);m.imageList.innerHTML=r}document.querySelector(".search-form"),document.querySelector(".search-input"),document.querySelector(".search-btn"),document.querySelector(".images-list");function p(s){const r="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"44319460-4af2fb7eeaa8b0840083a4a49",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}),e=`${r}${o}?${a}`;return console.log(e),fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(t.status)})}const i={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};i.loader.style.display="none";let c;i.imageSearchForm.addEventListener("submit",s=>{if(s.preventDefault(),c=s.target.elements.userData.value,c.trim()==="")return i.imageList.innerHTML="",l.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});document.querySelector(".loader"),i.loader.style.display="block",p(c).then(r=>{if(r.hits.length===0)return i.imageList.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});d(r),new u(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>i.loader.style.display="none").catch(r=>{console.log(r),i.loader.style.display="none"}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
