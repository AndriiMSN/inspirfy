!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);const r=document.querySelector(".hero__title"),o=/^[qypgj]/g;!function(t,n){let e=o.test(t)?"60%":"65%";const r='\n        <svg \n            shape-rendering="geometricPrecision" \n            class= "'.concat(n.className.split(" ")[0],'__inspiration svg-text"\n            xmlns="http://www.w3.org/2000/svg"\n            dominant-baseline="middle"\n            text-anchor="middle"\n            >\n                <text \n                    dominant-baseline="middle"\n                    text-anchor="middle"\n                    text-rendering="geometricPrecision"\n                     x="50%" \n                     y= ').concat(e,">\n                    ").concat(t,"\n                 </text>\n          </svg>\n    ");n.insertAdjacentHTML("afterbegin",r),setTimeout(()=>{const t=()=>{const t=document.querySelector(".".concat(n.className.split(" ")[0],"__inspiration.svg-text")),e=t.querySelector("text").getBBox();t.style.width="".concat(e.width,"px"),t.style.height="".concat(e.height,"px")};t(),window.addEventListener("resize",()=>{t()})},1e3)}("Inspiration",r);const i=[167,346,498,298],c=document.querySelectorAll(".brands__count__block__number");!function(){for(let t=0;t<c.length;t++){let n='\n            <svg \n                class="svg-text-brands svg-text" \n                shape-rendering="geometricPrecision"\n                \n                xmlns="http://www.w3.org/2000/svg">\n                    <text \n                        text-rendering="geometricPrecision"\n                        x="0" \n                        y="95%">\n                            '.concat(i[t],"\n                    </text>\n             </svg>\n        ");c[t].innerHTML=n}}();const u=document.querySelectorAll(".toggle__block"),a=["Target","Selling","Tools"],s=["Audience","Format","Unique"];function f(t){for(const n of t){const t=!!n.querySelector("text")&&n.querySelector("text").getBBox();n&&(n.style.width="".concat(t.width,"px")),n&&(n.style.height="".concat(t.height,"px"))}}!function(){for(let t=0;t<u.length;t++){let n=o.test(s[t])?"85%":"80%",e=2==t?'\n                   <h1>\n                        \n                            <svg \n                            class="svg-text-toggle svg-text" \n                            shape-rendering="geometricPrecision"\n                            xmlns="http://www.w3.org/2000/svg">\n                                 <text \n                                    text-rendering="geometricPrecision" \n                                    x="0" \n                                    y='.concat(n,">\n                                        ").concat(s[t],"\n                                  </text>\n                             </svg>\n                         \n                          ").concat(a[t],"\n                    </h1>\n            "):"\n               <h1>\n                    ".concat(a[t],'\n                    \n                        <svg \n                        class="svg-text-toggle svg-text" \n                        shape-rendering="geometricPrecision"\n                        xmlns="http://www.w3.org/2000/svg">\n                             <text \n                                text-rendering="geometricPrecision" \n                                x="0" \n                                y=').concat(n,">\n                                    ").concat(s[t],"\n                              </text>\n                         </svg>\n                     \n                </h1>\n        ");u[t].insertAdjacentHTML("afterbegin",e)}}(),setTimeout(()=>{const t=document.querySelectorAll(".svg-text");f(t),window.addEventListener("resize",()=>{f(t)})},4e3)},function(t,n,e){var r=e(2),o=e(4),i=e(5),c=e(17),u=e(12),a=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==f)try{c(v,a,f)}catch(t){v[a]=f}if(v[s]||c(v,s,l),o[l])for(var y in i)if(v[y]!==i[y])try{c(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(3))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(6),o=e(11),i=e(44),c=e(45),u=e(48),a="Array Iterator",s=c.set,f=c.getterFor(a);t.exports=u(Array,"Array",(function(t,n){s(this,{type:a,target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(7),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(8),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(12),o=e(30),i=e(19),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){var r=e(2),o=e(13),i=e(26),c=e(27),u=e(28),a=e(29),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,n,e){var r=e(14),o=e(15);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(16),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,n,e){var r=e(2),o=e(17);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(18),o=e(19),i=e(25);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(18),o=e(20),i=e(23),c=e(24),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(18),o=e(8),i=e(21);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(22),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(22);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(22);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(8);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(28);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r,o=e(23),i=e(31),c=e(39),u=e(38),a=e(40),s=e(21),f=e(43),l=f("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=s("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete y.prototype[c[e]];return y()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(18),o=e(19),i=e(23),c=e(32);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(33),o=e(39);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(26),o=e(6),i=e(34).indexOf,c=e(38);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(6),o=e(35),i=e(37),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(36),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(41);t.exports=r("document","documentElement")},function(t,n,e){var r=e(42),o=e(2),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(2);t.exports=r},function(t,n,e){var r=e(13),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(46),u=e(2),a=e(22),s=e(17),f=e(26),l=e(43),p=e(38),v=u.WeakMap;if(c){var y=new v,g=y.get,x=y.has,d=y.set;r=function(t,n){return d.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},i=function(t){return x.call(y,t)}}else{var h=l("state");p[h]=!0,r=function(t,n){return s(t,h,n),n},o=function(t){return f(t,h)?t[h]:{}},i=function(t){return f(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(2),o=e(47),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(15),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){"use strict";var r=e(49),o=e(58),i=e(60),c=e(64),u=e(63),a=e(17),s=e(52),f=e(12),l=e(14),p=e(44),v=e(59),y=v.IteratorPrototype,g=v.BUGGY_SAFARI_ITERATORS,x=f("iterator"),d="keys",h="values",m="entries",b=function(){return this};t.exports=function(t,n,e,f,v,S,w){o(e,n,f);var O,j,_,P=function(t){if(t===v&&E)return E;if(!g&&t in M)return M[t];switch(t){case d:case h:case m:return function(){return new e(this,t)}}return function(){return new e(this)}},T=n+" Iterator",L=!1,M=t.prototype,A=M[x]||M["@@iterator"]||v&&M[v],E=!g&&A||P(v),k="Array"==n&&M.entries||A;if(k&&(O=i(k.call(new t)),y!==Object.prototype&&O.next&&(l||i(O)===y||(c?c(O,y):"function"!=typeof O[x]&&a(O,x,b)),u(O,T,!0,!0),l&&(p[T]=b))),v==h&&A&&A.name!==h&&(L=!0,E=function(){return A.call(this)}),l&&!w||M[x]===E||a(M,x,E),p[n]=E,v)if(j={values:P(h),keys:S?E:P(d),entries:P(m)},w)for(_ in j)(g||L||!(_ in M))&&s(M,_,j[_]);else r({target:n,proto:!0,forced:g||L},j);return j}},function(t,n,e){var r=e(2),o=e(50).f,i=e(17),c=e(52),u=e(16),a=e(53),s=e(57);t.exports=function(t,n){var e,f,l,p,v,y=t.target,g=t.global,x=t.stat;if(e=g?r:x?r[y]||u(y,{}):(r[y]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(g?f:y+(x?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(18),o=e(51),i=e(25),c=e(6),u=e(24),a=e(26),s=e(20),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(17),i=e(26),c=e(16),u=e(47),a=e(45),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(s=!0):delete t[n],s?t[n]=e:o(t,n,e)):s?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,n,e){var r=e(26),o=e(54),i=e(50),c=e(19);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){var r=e(41),o=e(55),i=e(56),c=e(23);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(33),o=e(39).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(8),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(59).IteratorPrototype,o=e(30),i=e(25),c=e(63),u=e(44),a=function(){return this};t.exports=function(t,n,e){var s=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,s,!1,!0),u[s]=a,t}},function(t,n,e){"use strict";var r,o,i,c=e(60),u=e(17),a=e(26),s=e(12),f=e(14),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||a(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(26),o=e(61),i=e(43),c=e(62),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(8);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(19).f,o=e(26),i=e(12)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(23),o=e(65);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(22);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}}]);
//# sourceMappingURL=renderSVG-dist.js.map