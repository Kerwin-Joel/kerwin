parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RNe0":[function(require,module,exports) {
var define;
var e;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(o,r,n,i){var c,a="function"==typeof parcelRequire&&parcelRequire,l="function"==typeof require&&require;function u(e,t){if(!r[e]){if(!o[e]){var n="function"==typeof parcelRequire&&parcelRequire;if(!t&&n)return n(e,!0);if(a)return a(e,!0);if(l&&"string"==typeof e)return l(e);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}s.resolve=function(t){return o[e][1][t]||t},s.cache={};var c=r[e]=new u.Module(e);o[e][0].call(c.exports,s,c,c.exports,this)}return r[e].exports;function s(e){return u(s.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=o,u.cache=r,u.parent=a,u.register=function(e,t){o[e]=[function(e,o){o.exports=t},{}]};for(var s=0;s<n.length;s++)try{u(n[s])}catch(d){c||(c=d)}if(n.length){var f=u(n[n.length-1]);"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=f:"function"==typeof e&&e.amd&&e(function(){return f})}if(parcelRequire=u,c)throw c;return u}({clu1:[function(e,t,o){},{"./../font/Calibre-SemiBold.woff":[["Calibre-SemiBold.21cc3335.woff","Mg7X"],"Mg7X"],"./../font/Calibre-SemiBold.ttf":[["Calibre-SemiBold.2c27f793.ttf","rJ82"],"rJ82"],"./../font/Calibre-Semibold.svg":[["Calibre-Semibold.320db03b.svg","u7ET"],"u7ET"],"./../font/Calibre-Medium.woff":[["Calibre-Medium.bb31c6b1.woff","t3eK"],"t3eK"],"./../font/Calibre-Medium.ttf":[["Calibre-Medium.cb484263.ttf","LVc2"],"LVc2"],"./../font/Calibre-Regular.woff":[["Calibre-Regular.0e30637c.woff","ktK6"],"ktK6"],"./../font/Calibre-Regular.ttf":[["Calibre-Regular.ad23bcd8.ttf","GVeT"],"GVeT"],"./../img/svg/home-bg.svg":[["home-bg.065ecd97.svg","LI0O"],"LI0O"]}],Focm:[function(e,t,o){"use strict";e("./sass/main.scss");var r=gsap.timeline();r.to("#logo",{yPercent:-20,opacity:0,delay:4}),r.to(".preloader",{transform:"scaleY(0)",transformOrigin:"top",delay:"-=3"}),document.querySelectorAll(".social-links--box a").forEach(function(e){e.target="_blank"});var n=document.querySelector(".cursor");window.onmousemove=function(e){n.setAttribute("style","top: ".concat(e.pageY,"px; left: ").concat(e.pageX,"px; z-index: 2;"))};var i=gsap.timeline({paused:!0,reversed:!0});i.to(".box",{height:"100vh",duration:.5,transformOrigin:"bottom",stagger:.3}),i.to(".mobile-logo",{opacity:"1"}),i.to(".nav-main__content",{opacity:"1",visibility:"visible",yPercent:-5,duration:.5,transformOrigin:"bottom",stagger:.3});var c=document.querySelector(".nav-icon");c.onclick=function(){i.reversed()?(this.classList.add("nav-anim"),i.play(),document.body.classList.add("noScroll")):(this.classList.remove("nav-anim"),i.reverse(),document.body.classList.remove("noScroll"))},document.querySelectorAll(".list__item a").forEach(function(e){e.addEventListener("click",function(){document.body.classList.remove("noScroll"),i.reverse(),c.classList.remove("nav-anim")})})},{"./sass/main.scss":"clu1"}]},{},["Focm"]);
},{}]},{},["RNe0"], null)
//# sourceMappingURL=/src.c6420a36.js.map