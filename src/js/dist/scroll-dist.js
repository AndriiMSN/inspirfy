!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=!1,o=1600,i=0;window.scrollTo(0,0);const s=document.querySelectorAll(".scrolling-block"),c=document.querySelector(".lets__talk"),l=document.querySelector(".start__earning");function a(){return i+1!==s.length?(i++,s[i-1].classList.remove("active"),s[i].classList.add("active"),s[i].classList.add("animate"),i!==s.length?s[i-1].classList.add("active"):s[i-1].classList.add("invise"),s[i+1]&&(s[i+1].classList.remove("active"),s[i+1].classList.add("invise"))):i=i,i}function r(){return i-1!=-1?(i--,s[i].classList.remove("invise"),s[i+1].classList.remove("active"),s[i].classList.add("animate"),s[i].classList.add("active"),s[i+1].classList.add("invise")):i=i,i}function f(){i===s.length-2?$("html,body").animate({scrollTop:s[i].offsetTop-(document.documentElement.clientHeight-s[i].clientHeight)/2,behavior:"smooth"},800,()=>{setTimeout(()=>{},o)}):$("html,body").animate({scrollTop:s[i].offsetTop,behavior:"smooth"},800,()=>{setTimeout(()=>{},o)})}function u(e,t,i){n||0===s[2].offsetTop||(n=!0,0!==t?(e.preventDefault(),setTimeout((function(){n=!1}),o)):n=!1,t>0&&0===i?(a(),f()):t<0&&0===i&&(r(),f()))}window.addEventListener("wheel",(function(e){if(c.classList.contains("open")||l.classList.contains("open"))return!1;if(document.documentElement.clientWidth>=1366){let t=e.deltaY,n=e.deltaX,o=s[s.length-1].offsetTop;pageYOffset>o-10?t<0&&0===n&&(e.preventDefault(),u(e,t,n)):(0!==t&&e.preventDefault(),u(e,t,n))}}),{passive:!1});let d=0,m=0;function p(e,t,o){if(!n&&0!==s[2].offsetTop){if(n=!0,t>30||t<-30?(e.preventDefault(),setTimeout((function(){n=!1}),400)):n=!1,t<-30)return a(),f(),i;t>30&&(r(),f())}}window.addEventListener("touchmove",e=>{if(document.documentElement.clientWidth>=1366)if(c.classList.contains("open")||l.classList.contains("open"));else{let t=s[s.length-1].offsetTop,n=e.changedTouches[0].clientY-d;if(!(pageYOffset>t-10))return e.preventDefault(),e.stopPropagation(),!1;if(n>0)return e.preventDefault(),e.stopPropagation(),!1}},document.documentElement.clientWidth>=1366?{passive:!1}:{passive:!0}),window.addEventListener("touchstart",e=>{if(document.documentElement.clientWidth>=1366)return d=e.changedTouches[0].clientY,m=e.changedTouches[0].clientX,!1},{passive:!1}),window.addEventListener("touchend",(function(e){if(c.classList.contains("open")||l.classList.contains("open"))return!1;let t=e.changedTouches[0].clientY-d,n=e.changedTouches[0].clientX-m;if(document.documentElement.clientWidth>=1366&&0!==t&&0!==n){console.log(n,t);let o=s[s.length-1].offsetTop;pageYOffset<o-10?t<50&&t>-50?e.preventDefault():p(e,t,n):t>0&&p(e,t,n)}}),{passive:!1}),window.addEventListener("scroll",e=>{e.preventDefault(),i!==s.length-1&&document.documentElement.clientWidth>=1366&&(i===s.length-2?window.scrollTo(0,s[i].offsetTop-(document.documentElement.clientHeight-s[i].clientHeight)/2):window.scrollTo(0,s[i].offsetTop))}),window.addEventListener("scroll",e=>{if(document.documentElement.clientWidth<1366){document.documentElement.clientHeight;for(let e=0;e<s.length;e++)if(s[e+1]&&pageYOffset>s[e].offsetTop+s[e].clientHeight-10&&pageYOffset<s[e+1].offsetTop+s[e+1].clientHeight)return console.log(e),i=e,s[i].classList.add("animate"),i}}),window.addEventListener();const h=document.querySelector(".arrow__up");["click","touchend"].forEach(e=>h.addEventListener(e,()=>(i=0,$("html,body").animate({scrollTop:s[i].offsetTop,behavior:"smooth"},800),i))),document.querySelectorAll(".header__nav__items li").forEach(e=>{let t=e.getAttribute("data-nav"),n=e.getAttribute("data-counter");["click","touchend"].forEach(o=>e.addEventListener(o,()=>{i=+n,document.querySelector("html").classList.remove("lock"),s.forEach(e=>{e.classList.add("active")}),$("html,body").animate({scrollTop:document.querySelector(".".concat(t)).offsetTop,behavior:"smooth"},800),setTimeout(()=>{s[i].classList.add("animate")},300)},!1))}),document.onkeydown=function(e){if(document.documentElement.clientWidth>=1366){if(32===e.keyCode&&e.target===document.body){let t=s[s.length-1].offsetTop;if(pageYOffset>t-10);else if(c.classList.contains("open")||l.classList.contains("open"));else{if(n||0===s[2].offsetTop)return void e.preventDefault();n=!0,setTimeout((function(){n=!1}),700),a(),f()}}if("38"==e.keyCode){let t=s[s.length-1].offsetTop;if(pageYOffset>t-10);else if(c.classList.contains("open")||l.classList.contains("open"));else{if(n||0===s[2].offsetTop)return void e.preventDefault();n=!0,setTimeout((function(){n=!1}),700),r(),f()}}else if("40"==e.keyCode){let t=s[s.length-1].offsetTop;if(pageYOffset>t-10);else if(c.classList.contains("open")||l.classList.contains("open"));else{if(n||0===s[2].offsetTop)return void e.preventDefault();n=!0,setTimeout((function(){n=!1}),700),a(),f()}}}}}]);