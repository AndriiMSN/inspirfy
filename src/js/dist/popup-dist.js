!function(){const e=document.querySelectorAll(".start-earning"),t=document.querySelector(".start__earning"),l=document.querySelector(".start__earning .start__earning__close"),o=document.querySelectorAll(".write__us__block__button"),c=document.querySelector(".lets__talk"),r=document.querySelector(".lets__talk .lets__talk__close"),s=document.querySelector("html"),n=document.querySelectorAll(".lets__talk .svg-text"),i=document.querySelectorAll(".start__earning .svg-text");let d=0;function a(e){for(const t of e){const e=!!t.querySelectorAll("text")&&t.querySelectorAll("text");let l,o;if(l=e[0].getBBox().width,o=e[0].getBBox().height,e.length>0)for(let t=1;t<e.length;t++)l=l>e[t].getBBox().width?l:e[t].getBBox().width,o+=e[t].getBBox().height;t&&(t.style.width=`${l}px`),t&&(t.style.height=`${o}px`)}}function u(e,t,l,o){let c;e.forEach((e=>{e.addEventListener("click",(()=>(c=e,d=pageYOffset,c.classList.add("clicked"),setTimeout((()=>{t.classList.add("open"),o&&a(o),o&&window.addEventListener("resize",(()=>{a(o)})),s.classList.add("lock")}),300),c)))})),l.addEventListener("click",(e=>{s.classList.remove("lock"),c.classList.remove("clicked"),t.classList.remove("open"),window.scrollTo(0,d)}))}u(e,t,l,i),u(o,c,r,n)}();
//# sourceMappingURL=popup-dist.js.map