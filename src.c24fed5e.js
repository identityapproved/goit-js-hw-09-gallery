parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k87A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=document.querySelector(".js-gallery"),r=document.querySelector(".lightbox"),i=document.querySelector(".lightbox__overlay"),s=document.querySelector(".lightbox__button"),a=document.querySelector(".lightbox__image"),o=e.default.map(({preview:e,original:t,description:n},r)=>`<li class="gallery__item">\n          <a\n            class="gallery__link"\n            href="${t}">\n            <img\n              class="gallery__image"\n              src="${e}"\n              data-source="${t}"\n              data-index="${r}"\n              alt="${n}"\n            />\n          </a>\n        </li>`).join("");function c(e){e.preventDefault(),"IMG"===e.target.nodeName&&(r.classList.add("is-open"),a.src=e.target.dataset.source,window.addEventListener("keydown",l),window.addEventListener("keydown",u),s.addEventListener("click",d),i.addEventListener("click",d))}function d(){window.removeEventListener("keydown",l),window.removeEventListener("keydown",u),r.classList.remove("is-open"),a.src=""}function l(e){"Escape"===e.key&&d()}function u(e){if(!r.classList.contains("is-open"))return;const t=n.querySelectorAll(".gallery__image"),i=[...t].find(e=>e.dataset.source===a.src),s=Number(i.dataset.index);if("ArrowRight"===e.key){if(s+1===t.length)return;const e=[...t].find(e=>Number(e.dataset.index)===s+1);a.src=e.dataset.source}else if("ArrowLeft"===e.key){if(s-1==-1)return;const e=[...t].find(e=>Number(e.dataset.index)===s-1);a.src=e.dataset.source}}n.insertAdjacentHTML("beforeend",o),n.addEventListener("click",c);
},{"./gallery-items.js":"k87A"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.c24fed5e.js.map