!function(e){var t={};function o(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(r,c,function(t){return e[t]}.bind(null,c));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){const o=document.querySelector(".header__mobBtn"),r=document.querySelector(".mobile__menu"),c=document.querySelector(".mobile__menu__close"),s=document.querySelectorAll("body section"),a=document.querySelectorAll(".scrolling-block"),n=(document.querySelector(".header"),document.querySelectorAll(".mobile__menu__nav__items li"));document.querySelector(".arrow__up");o.addEventListener("click",()=>{document.querySelector("html").classList.add("lock"),r.classList.add("open"),n.forEach(e=>{e.classList.remove("active")}),pageYOffset<=a[4].offsetTop?n[0].classList.add("active"):pageYOffset>=a[5].offsetTop&&pageYOffset<a[6].offsetTop?n[1].classList.add("active"):pageYOffset>=a[6].offsetTop&&pageYOffset<a[7].offsetTop?n[2].classList.add("active"):pageYOffset>=a[7].offsetTop&&pageYOffset<a[8].offsetTop?n[3].classList.add("active"):pageYOffset>=a[8].offsetTop&&pageYOffset<a[9].offsetTop?n[4].classList.add("active"):pageYOffset>=a[9].offsetTop&&n[5].classList.add("active")}),n.forEach(e=>{e.addEventListener("click",()=>{n.forEach(e=>e.classList.remove("active"));let t=e.getAttribute("data-nav");e.classList.add("active"),r.classList.remove("open"),s.forEach(e=>{e.classList.remove("blur")}),document.querySelector("html").classList.remove("lock"),$("html,body").animate({scrollTop:document.querySelector(".".concat(t)).offsetTop,behavior:"smooth"},800)})}),c.addEventListener("click",()=>{document.querySelector("html").classList.remove("lock"),r.classList.remove("open")})}]);