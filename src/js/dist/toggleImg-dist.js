!function(e){var t={};function l(s){if(t[s])return t[s].exports;var c=t[s]={i:s,l:!1,exports:{}};return e[s].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=t,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(s,c,function(t){return e[t]}.bind(null,c));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t){const l=document.querySelectorAll(".target__toggle__block__title"),s=document.querySelectorAll(".target__slider__img__elements__buttons .left"),c=document.querySelectorAll(".target__slider__img__elements__buttons .right"),i=document.querySelectorAll(".mob-target__slider"),o=document.querySelectorAll(".target__slider");l.forEach((e,t)=>{b(e,l,o,i,t)}),c.forEach((e,t)=>{e.addEventListener("click",()=>{L(l,o)})}),s.forEach((e,t)=>{e.addEventListener("click",()=>{E(l,o)})});const r=document.querySelectorAll(".selling__toggle__block__title"),n=document.querySelectorAll(".selling__slider__img__elements__buttons .left"),a=document.querySelectorAll(".selling__slider__img__elements__buttons .right"),d=document.querySelectorAll(".mob-selling__slider"),u=document.querySelectorAll(".selling__slider");r.forEach((e,t)=>{e.addEventListener("click",()=>{}),b(e,r,u,d,t)}),a.forEach((e,t)=>{e.addEventListener("click",()=>{L(r,u)})}),n.forEach((e,t)=>{e.addEventListener("click",()=>{E(r,u)})});const _=document.querySelectorAll(".tools__toggle__block__title"),m=document.querySelector(".tools__slider__img__images__toggle-1"),p=".tools__slider__img__images__toggle-1",f=document.querySelector(".tools__slider__img__images__toggle-1 + img"),g=document.querySelector(".tools__slider__img__elements__buttons .left"),v=document.querySelector(".tools__slider__img__elements__buttons .right");function h(e,t,l){if(e.classList.contains("active")){t.forEach(e=>{e.classList.remove("active"),e.classList.add("disabled")}),t[l].classList.remove("disabled"),t[l].classList.add("active");let e=t[l].querySelector(".toggle-bg-img");if(!e.classList.contains("rippled")){let t=e.className.split(" ")[0];!function(e,t){e.ripples({resolution:40,perturbance:.15,interactive:!1,width:t});let l=.5*e.outerWidth(),s=.5*e.outerHeight(),c=200,i=.15;e.ripples("drop",l,s,c,i),setTimeout(()=>{e.ripples("set","perturbance",.1)},600),setTimeout(()=>{e.ripples("set","perturbance",.05)},900),setTimeout(()=>{e.ripples("set","perturbance",.025)},1200),setTimeout(()=>{e.ripples("set","perturbance",0),e.ripples("destroy")},1500)}($(".".concat(t)),e.clientWidth)}e.classList.remove("rippled"),t[l].querySelectorAll(".toggle-parent").forEach(e=>{if(!e.classList.contains("animate")){let t=e.querySelector(".toggle-div"),l=document.querySelector(".selling .container").clientWidth,s=document.documentElement.clientWidth,c=(s-l)/2+l/2;e.style.maxWidth="".concat(c,"px");let i=e.clientWidth;e.style.transform=c==i?"translateX(-".concat((s-l)/2,"px)"):"translateX(-15%)",t.style.width="".concat(i,"px"),t.classList.remove("op-0"),window.addEventListener("resize",()=>{let l=document.documentElement.clientWidth;if(l>1150){let s=document.querySelector(".selling .container").clientWidth,c=(l-s)/2+s/2;e.style.maxWidth="".concat(c,"px");let i=e.clientWidth;e.style.transform=c==i?"translateX(-".concat((l-s)/2,"px)"):"translateX(-15%)",t.style.width="".concat(i,"px");let o=t.querySelector("canvas");o&&(o.style.width="".concat(i,"px"),o.style.maxWidth="".concat(e.style.maxWidth,"px"))}}),S($(".".concat(t.className.split(" ")[0])),i),e.classList.add("animate"),setTimeout(()=>{e.classList.remove("animate")},1200)}})}else t[l].querySelectorAll(".toggle-div").forEach(e=>{e.classList.add("op-0")})}function y(e,t,l){e.classList.contains("active")&&t.querySelectorAll(".mob-toggle-parent").forEach(e=>{if(!e.classList.contains("animate")){e.style.maxWidth="".concat(document.documentElement.clientWidth,"px");let t=e.querySelector(".mob-toggle-div"),l=e.clientWidth;t.style.width="".concat(l,"px"),window.addEventListener("resize",()=>{let l=document.documentElement.clientWidth;if(l<=1150){e.style.maxWidth="".concat(l,"px");let s=e.clientWidth;t.style.width="".concat(s,"px"),t.style.maxWidth="".concat(l,"px");let c=t.querySelector("canvas");c&&(c.style.width="".concat(s,"px"),c.style.maxWidth="".concat(l,"px"))}}),S($(".".concat(t.className.split(" ")[0])),l),e.classList.add("animate"),setTimeout(()=>{e.classList.remove("animate")},1200)}})}function b(e,t,l,s,c){e.addEventListener("click",()=>{document.documentElement.clientWidth>1150?(e.classList.contains("active")&&!e.classList.contains("rm-active")?e.classList.remove("active"):(t.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")),t[0].classList.remove("rm-active"),h(e,l,c)):(e.classList.contains("active")?e.classList.remove("active"):(t.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")),t[0].classList.remove("rm-active"),y(e,s[c]))})}function L(e,t){let l,s=-1;e.forEach((e,t)=>{if(e.classList.contains("active"))return e.classList.contains("rm-active")?s=-1:(s=t,s)}),e.forEach(e=>{e.classList.remove("active")});l=s+1>=e.length?0:s+1,e[l].classList.remove("rm-active"),e[l].classList.add("active"),h(e[l],t,l)}function E(e,t){let l,s=-1;e.forEach((e,t)=>{if(e.classList.contains("active"))return e.classList.contains("rm-active")?s=0:(s=t,s)}),e.forEach(e=>{e.classList.remove("active")});l=s-1<=-1?e.length-1:s-1,e[l].classList.remove("rm-active"),e[l].classList.add("active"),h(e[l],t,l),t[0].querySelector(".toggle-bg-img").classList.remove("rippled")}function S(e,t){e.ripples({resolution:40,perturbance:.15,interactive:!1,width:t});let l=.5*e.outerWidth(),s=.5*e.outerHeight();e.ripples("drop",l,s,200,.15),setTimeout(()=>{e.ripples("set","perturbance",.1)},400),setTimeout(()=>{e.ripples("set","perturbance",.05)},600),setTimeout(()=>{e.ripples("set","perturbance",.025)},1e3),setTimeout(()=>{e.ripples("set","perturbance",0),e.ripples("destroy")},1200)}_.forEach(e=>{b(e,_,m,f,p)}),v.addEventListener("click",()=>{L(_,m)}),g.addEventListener("click",()=>{E(_,m)});const q=document.querySelectorAll(".mob-target__slider__img__elements__buttons .left"),x=document.querySelectorAll(".mob-target__slider__img__elements__buttons .right"),W=document.querySelector(".target");q.forEach(e=>{M(e,l,W)}),x.forEach(e=>{P(e,l,W,i)});const A=document.querySelectorAll(".mob-selling__slider__img__elements__buttons .left"),T=document.querySelectorAll(".mob-selling__slider__img__elements__buttons .right"),k=document.querySelector(".selling");A.forEach(e=>{M(e,r,k)}),T.forEach(e=>{P(e,r,k,d)});const w=document.querySelectorAll(".mob-tools__slider__img__elements__buttons .left"),j=document.querySelectorAll(".mob-tools__slider__img__elements__buttons .right"),O=document.querySelector(".tools");function P(e,t,l,s){e.addEventListener("click",()=>{let e,c=-1;t.forEach((e,t)=>{if(e.classList.contains("active"))return c=t,c}),t.forEach(e=>{e.classList.remove("active")});e=c+1>=t.length?0:c+1,t[e].classList.add("active"),$("html,body").animate({scrollTop:l.offsetTop+t[e].offsetTop,behavior:"smooth"},800),y(t[e],s[e])})}function M(e,t,l,s){e.addEventListener("click",()=>{let e,c=-1;t.forEach((e,t)=>{if(e.classList.contains("active"))return c=t,c}),t.forEach(e=>{e.classList.remove("active")});e=c-1<=-1?_.length-1:c-1,t[e].classList.add("active"),$("html,body").animate({scrollTop:l.offsetTop+t[e].offsetTop,behavior:"smooth"},800),y(t[e],s[e])})}w.forEach(e=>{M(e,_,O)}),j.forEach(e=>{P(e,_,O)})}]);