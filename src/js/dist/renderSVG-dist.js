!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);function r(t){for(const n of t){const t=!!n.querySelectorAll("text")&&n.querySelectorAll("text");let e,r;if(e=t[0].getBBox().width,r=t[0].getBBox().height,t.length>0)for(let n=1;n<t.length;n++)e=e>t[n].getBBox().width?e:t[n].getBBox().width,r+=t[n].getBBox().height;n&&(n.style.width="".concat(e,"px")),n&&(n.style.height="".concat(r,"px"))}}setTimeout(()=>{const t=document.querySelectorAll(".svg-text");r(t),window.addEventListener("resize",()=>{r(t)})},4e3),setTimeout(()=>{const t=()=>{const t=document.querySelector(".hero__title__inspiration.svg-text"),n=t.querySelector("text").getBBox();t.style.width="".concat(n.width,"px"),t.style.height="".concat(n.height,"px")};t(),window.addEventListener("resize",()=>{t()})},1e3);const o=document.querySelectorAll(".faq__toggle__items__item__title__question");!function(){for(let t=1;t<o.length+1;t++){let n=t>9?t:"0"+t.toString(),e='\n             <svg \n                class="svg-text svg-text-faq" \n                shape-rendering="geometricPrecision"\n                xmlns="http://www.w3.org/2000/svg">\n                 <text \n                    text-rendering="geometricPrecision"\n                    x="0" \n                    y="80%">\n                        '.concat(n,"\n                 </text>\n             </svg>\n        ");o[t-1].insertAdjacentHTML("beforebegin",e)}}()},function(t,n,e){var r=e(2),o=e(4),i=e(5),u=e(17),c=e(12),f=c("iterator"),a=c("toStringTag"),s=i.values;for(var l in o){var p=r[l],y=p&&p.prototype;if(y){if(y[f]!==s)try{u(y,f,s)}catch(t){y[f]=s}if(y[a]||u(y,a,l),o[l])for(var v in i)if(y[v]!==i[v])try{u(y,v,i[v])}catch(t){y[v]=i[v]}}}},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(3))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(6),o=e(11),i=e(44),u=e(45),c=e(48),f="Array Iterator",a=u.set,s=u.getterFor(f);t.exports=c(Array,"Array",(function(t,n){a(this,{type:f,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(7),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(8),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(12),o=e(30),i=e(19),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){var r=e(2),o=e(13),i=e(26),u=e(27),c=e(28),f=e(29),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,e){var r=e(14),o=e(15);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(16),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},function(t,n,e){var r=e(2),o=e(17);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(18),o=e(19),i=e(25);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(18),o=e(20),i=e(23),u=e(24),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(18),o=e(8),i=e(21);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(22),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(22);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(22);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(8);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(28);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r,o=e(23),i=e(31),u=e(39),c=e(38),f=e(40),a=e(21),s=e(43),l=s("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(y("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete v.prototype[u[e]];return v()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(18),o=e(19),i=e(23),u=e(32);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},function(t,n,e){var r=e(33),o=e(39);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(26),o=e(6),i=e(34).indexOf,u=e(38);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(6),o=e(35),i=e(37),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(36),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(41);t.exports=r("document","documentElement")},function(t,n,e){var r=e(42),o=e(2),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(2);t.exports=r},function(t,n,e){var r=e(13),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,u=e(46),c=e(2),f=e(22),a=e(17),s=e(26),l=e(43),p=e(38),y=c.WeakMap;if(u){var v=new y,g=v.get,x=v.has,h=v.set;r=function(t,n){return h.call(v,t,n),n},o=function(t){return g.call(v,t)||{}},i=function(t){return x.call(v,t)}}else{var d=l("state");p[d]=!0,r=function(t,n){return a(t,d,n),n},o=function(t){return s(t,d)?t[d]:{}},i=function(t){return s(t,d)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(2),o=e(47),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(15),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){"use strict";var r=e(49),o=e(58),i=e(60),u=e(64),c=e(63),f=e(17),a=e(52),s=e(12),l=e(14),p=e(44),y=e(59),v=y.IteratorPrototype,g=y.BUGGY_SAFARI_ITERATORS,x=s("iterator"),h="keys",d="values",b="entries",m=function(){return this};t.exports=function(t,n,e,s,y,S,O){o(e,n,s);var w,j,_,T=function(t){if(t===y&&E)return E;if(!g&&t in A)return A[t];switch(t){case h:case d:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},P=n+" Iterator",L=!1,A=t.prototype,M=A[x]||A["@@iterator"]||y&&A[y],E=!g&&M||T(y),I="Array"==n&&A.entries||M;if(I&&(w=i(I.call(new t)),v!==Object.prototype&&w.next&&(l||i(w)===v||(u?u(w,v):"function"!=typeof w[x]&&f(w,x,m)),c(w,P,!0,!0),l&&(p[P]=m))),y==d&&M&&M.name!==d&&(L=!0,E=function(){return M.call(this)}),l&&!O||A[x]===E||f(A,x,E),p[n]=E,y)if(j={values:T(d),keys:S?E:T(h),entries:T(b)},O)for(_ in j)(g||L||!(_ in A))&&a(A,_,j[_]);else r({target:n,proto:!0,forced:g||L},j);return j}},function(t,n,e){var r=e(2),o=e(50).f,i=e(17),u=e(52),c=e(16),f=e(53),a=e(57);t.exports=function(t,n){var e,s,l,p,y,v=t.target,g=t.global,x=t.stat;if(e=g?r:x?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(y=o(e,s))&&y.value:e[s],!a(g?s:v+(x?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(18),o=e(51),i=e(25),u=e(6),c=e(24),f=e(26),a=e(20),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(17),i=e(26),u=e(16),c=e(47),f=e(45),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r=e(26),o=e(54),i=e(50),u=e(19);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(41),o=e(55),i=e(56),u=e(23);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(33),o=e(39).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(8),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(59).IteratorPrototype,o=e(30),i=e(25),u=e(63),c=e(44),f=function(){return this};t.exports=function(t,n,e){var a=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,e){"use strict";var r,o,i,u=e(60),c=e(17),f=e(26),a=e(12),s=e(14),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||f(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(26),o=e(61),i=e(43),u=e(62),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(8);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(19).f,o=e(26),i=e(12)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(23),o=e(65);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(22);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}}]);
//# sourceMappingURL=renderSVG-dist.js.map