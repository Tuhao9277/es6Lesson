!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){t.exports=e(1)},function(t,r,e){"use strict";e(2),e(3)},function(t,r,e){"use strict"},function(t,r,e){"use strict";var n=function(){return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(n=(u=l.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var o={a:1,b:2};var i=[1,2];var u=1,l=2,a=[l,u];u=a[0],l=a[1];var c,f,s=n([1,2],2);c=s[0],f=s[1],console.log(c,f);var v,d,y=n([1,2,3,4,5],4);v=y[0],d=y[3],console.log(v,d);var p,b,g,m=(g=[1,2,3,4,5],Array.isArray(g)?g:Array.from(g));p=m[0],b=m.slice(2),console.log(p,b);var j={p:42,q:!0},x=j.p,O=j.q;console.log(x,O);var S={a:3},h=S.a,_=void 0===h?10:h,A=S.b,P=void 0===A?5:A;console.log(_,P);var w={title:"abc",test:[{title:"text",desc:"description"}]},M=w.title,T=n(w.test,1)[0].title;console.log(M,T)}]);