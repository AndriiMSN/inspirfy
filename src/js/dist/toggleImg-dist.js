!function(e){var t={};function s(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(i,l,function(t){return e[t]}.bind(null,l));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t){const s=document.querySelectorAll(".target__toggle__block__title"),i=document.querySelector(".target__slider__img__images__toggle-1"),l=".target__slider__img__images__toggle-1",o=document.querySelector(".target__slider__img__images__toggle-1 + img"),c=document.querySelector(".target__slider__img__elements__buttons .left"),r=document.querySelector(".target__slider__img__elements__buttons .right");s.forEach(e=>{}),s.forEach(e=>{b(e,s,i,o,l)}),r.addEventListener("click",()=>{E(s,i)}),c.addEventListener("click",()=>{S(s,i)});const a=document.querySelectorAll(".selling__toggle__block__title"),n=document.querySelectorAll(".selling__slider__img__elements__buttons .left"),d=document.querySelectorAll(".selling__slider__img__elements__buttons .right"),_=document.querySelectorAll(".mob-selling__slider"),m=document.querySelectorAll(".selling__slider");a.forEach((e,t)=>{e.addEventListener("click",()=>{}),b(e,a,m,_,t)}),d.forEach((e,t)=>{e.addEventListener("click",()=>{E(a,m)})}),n.forEach((e,t)=>{e.addEventListener("click",()=>{S(a,m)})});const u=document.querySelectorAll(".tools__toggle__block__title"),f=document.querySelector(".tools__slider__img__images__toggle-1"),h=".tools__slider__img__images__toggle-1",g=document.querySelector(".tools__slider__img__images__toggle-1 + img"),p=document.querySelector(".tools__slider__img__elements__buttons .left"),v=document.querySelector(".tools__slider__img__elements__buttons .right");function y(e,t,s){if(e.classList.contains("active")){t.forEach(e=>{e.classList.remove("active"),e.classList.add("disabled")}),t[s].classList.remove("disabled"),t[s].classList.add("active");let e=t[s].querySelector(".toggle-bg-img");if(!e.classList.contains("rippled")){let t=e.className.split(" ")[0];!function(e,t){e.ripples({resolution:40,perturbance:.15,interactive:!1,width:t});let s=.5*e.outerWidth(),i=.5*e.outerHeight(),l=200,o=.15;e.ripples("drop",s,i,l,o),setTimeout(()=>{e.ripples("set","perturbance",.1)},600),setTimeout(()=>{e.ripples("set","perturbance",.05)},900),setTimeout(()=>{e.ripples("set","perturbance",.025)},1200),setTimeout(()=>{e.ripples("set","perturbance",0),e.ripples("destroy")},1500)}($(".".concat(t)),e.clientWidth)}e.classList.remove("rippled"),t[s].querySelectorAll(".toggle-parent").forEach(e=>{if(!e.classList.contains("animate")){let t=e.querySelector(".toggle-div"),s=document.querySelector(".selling .container").clientWidth,i=document.documentElement.clientWidth,l=(i-s)/2+s/2;e.style.maxWidth="".concat(l,"px");let o=e.clientWidth;e.style.transform=l==o?"translateX(-".concat((i-s)/2,"px)"):"translateX(-15%)",t.style.width="".concat(o,"px"),t.classList.remove("op-0"),window.addEventListener("resize",()=>{let s=document.documentElement.clientWidth;if(s>1150){let i=document.querySelector(".selling .container").clientWidth,l=(s-i)/2+i/2;e.style.maxWidth="".concat(l,"px");let o=e.clientWidth;e.style.transform=l==o?"translateX(-".concat((s-i)/2,"px)"):"translateX(-15%)",t.style.width="".concat(o,"px");let c=t.querySelector("canvas");c&&(c.style.width="".concat(o,"px"),c.style.maxWidth="".concat(e.style.maxWidth,"px"))}}),q($(".".concat(t.className.split(" ")[0])),o),e.classList.add("animate"),setTimeout(()=>{e.classList.remove("animate")},1200)}})}else t[s].querySelectorAll(".toggle-div").forEach(e=>{e.classList.add("op-0")})}function L(e,t,s){e.classList.contains("active")&&t.querySelectorAll(".mob-toggle-parent").forEach(e=>{if(!e.classList.contains("animate")){e.style.maxWidth="".concat(document.documentElement.clientWidth,"px");let t=e.querySelector(".mob-toggle-div"),s=e.clientWidth;t.style.width="".concat(s,"px"),window.addEventListener("resize",()=>{let s=document.documentElement.clientWidth;if(s<=1150){e.style.maxWidth="".concat(s,"px");let i=e.clientWidth;t.style.width="".concat(i,"px"),t.style.maxWidth="".concat(s,"px");let l=t.querySelector("canvas");l&&(l.style.width="".concat(i,"px"),l.style.maxWidth="".concat(s,"px"))}}),q($(".".concat(t.className.split(" ")[0])),s),e.classList.add("animate"),setTimeout(()=>{e.classList.remove("animate")},1200)}})}function b(e,t,s,i,l){e.addEventListener("click",()=>{document.documentElement.clientWidth>1150?(e.classList.contains("active")&&!e.classList.contains("rm-active")?e.classList.remove("active"):(t.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")),t[0].classList.remove("rm-active"),y(e,s,l)):(e.classList.contains("active")?e.classList.remove("active"):(t.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")),t[0].classList.remove("rm-active"),L(e,i[l]))})}function E(e,t){let s,i=-1;e.forEach((e,t)=>{if(e.classList.contains("active"))return i=t,i}),e.forEach(e=>{e.classList.remove("active")});s=i+1>=e.length?0:i+1,e[s].classList.add("active"),y(e[s],t,s)}function S(e,t){let s,i=-1;e.forEach((e,t)=>{if(e.classList.contains("active"))return i=t,i}),e.forEach(e=>{e.classList.remove("active")});s=i-1<=-1?e.length-1:i-1,e[s].classList.add("active"),y(e[s],t,s)}function q(e,t){e.ripples({resolution:40,perturbance:.15,interactive:!1,width:t});let s=.5*e.outerWidth(),i=.5*e.outerHeight();e.ripples("drop",s,i,200,.15),setTimeout(()=>{e.ripples("set","perturbance",.1)},400),setTimeout(()=>{e.ripples("set","perturbance",.05)},600),setTimeout(()=>{e.ripples("set","perturbance",.025)},1e3),setTimeout(()=>{e.ripples("set","perturbance",0),e.ripples("destroy")},1200)}u.forEach(e=>{b(e,u,f,g,h)}),v.addEventListener("click",()=>{E(u,f)}),p.addEventListener("click",()=>{S(u,f)});const x=document.querySelectorAll(".mob-target__slider__img__elements__buttons .left"),T=document.querySelectorAll(".mob-target__slider__img__elements__buttons .right");x.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;s.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),s.forEach(e=>{e.classList.remove("active")});e=t-1<=-1?s.length-1:t-1,s[e].classList.add("active"),$("html,body").animate({scrollTop:s[e].offsetTop-40,behavior:"smooth"},800)})}),T.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;s.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),s.forEach(e=>{e.classList.remove("active")});e=t+1>=s.length?0:t+1,s[e].classList.add("active"),$("html,body").animate({scrollTop:s[e].offsetTop-40,behavior:"smooth"},800)})});const W=document.querySelectorAll(".mob-selling__slider__img__elements__buttons .left"),k=document.querySelectorAll(".mob-selling__slider__img__elements__buttons .right");W.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;a.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),a.forEach(e=>{e.classList.remove("active")});e=t-1<=-1?a.length-1:t-1,a[e].classList.add("active"),$("html,body").animate({scrollTop:a[e].offsetTop-40,behavior:"smooth"},800),L(a[e],_[e])})}),k.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;a.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),a.forEach(e=>{e.classList.remove("active")});e=t+1>=a.length?0:t+1,a[e].classList.add("active"),$("html,body").animate({scrollTop:a[e].offsetTop-40,behavior:"smooth"},800),L(a[e],_[e])})});const A=document.querySelectorAll(".mob-tools__slider__img__elements__buttons .left"),w=document.querySelectorAll(".mob-tools__slider__img__elements__buttons .right");A.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;u.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),u.forEach(e=>{e.classList.remove("active")});e=t-1<=-1?u.length-1:t-1,u[e].classList.add("active"),$("html,body").animate({scrollTop:document.querySelector(".tools").offsetTop+u[e].offsetTop-40,behavior:"smooth"},800)})}),w.forEach(e=>{e.addEventListener("click",()=>{let e,t=-1;u.forEach((e,s)=>{if(e.classList.contains("active"))return t=s,t}),u.forEach(e=>{e.classList.remove("active")});e=t+1>=u.length?0:t+1,u[e].classList.add("active"),$("html,body").animate({scrollTop:document.querySelector(".tools").offsetTop+u[e].offsetTop-40,behavior:"smooth"},800)})})}]);