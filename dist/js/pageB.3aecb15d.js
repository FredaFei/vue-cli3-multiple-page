(function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],p=0,l=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={pageB:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=a;c.push([1,"chunk-vendors"]),r()})({"077d":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getSlides",(function(){return S}));r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._v("page B")])},i=[],u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=r("a8db"),s=r("bc3a"),f=r.n(s);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}f.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var b={version:"1.0",ts:parseInt((new Date).getTime()/1e3)};function d(e){var t="",r=Object.assign(l({},b),e||{});for(var n in r)t+="".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r[n]),"&");return t}var O=f.a.create({baseURL:"",timeout:1e4});O.interceptors.request.use((function(e){return"get"===e.method&&(e.params=Object.assign(l({},b),e.params||{})),"post"===e.method&&(e.transformRequest=[d]),e}),(function(e){return Promise.reject(e)})),O.interceptors.response.use((function(e){var t=+e.data.res_code;return 999===t?Promise.reject(e):0===t?Promise.reject(e):e}),(function(e){return Promise.reject(e)}));var y=O,v=(r("a481"),r("386d"),r("4917"),r("3b2b"),r("d225")),g=r("b0b4"),j=function(){function e(){Object(v["a"])(this,e)}return Object(g["a"])(e,[{key:"setStorage",value:function(e,t,r){window[e]&&window[e].setItem(t,JSON.stringify(r))}},{key:"getStorage",value:function(e,t){return window[e].getItem(t)&&JSON.parse(window[e].getItem(t))}},{key:"concatSearch",value:function(e){var t="?";for(var r in e)t+="".concat(r,"=").concat(e[r],"&");return t}},{key:"getQueryString",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.href,n=r.indexOf("?"),o=r.substr(n+1).match(t);return null!=o?unescape(o[2]):null}},{key:"parseQuery",value:function(){var e=window.location.search,t=e.length,r=e.substr(1,t-2),n=/([^&=\s]+)[=\s]?([^&=\s]*)/g,o={};while(n.exec(r)){var c=RegExp.$1,i=RegExp.$2;o.hasOwnProperty(c)&&""!==i?o[c]=[o[c],i]:o[c]=i}return o}}]),e}();new j;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.url,r=e.method,n=void 0===r?"get":r,o=Object(a["a"])(e,["url","method"]);return new Promise((function(e,r){y(h({url:t,method:n},o)).then((function(t){e(t.data)}),(function(e){return r(e)}))}))},P=m,S=function(){return P({url:"/h5/adsPictureList"})};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=D({},n),k={name:"pageB",created:function(){E.getSlides().then((function(e){console.log(e)}),(function(e){console.log(e)}))}},_=k,R=r("2877"),I=Object(R["a"])(_,c,i,!1,null,null,null),C=I.exports;r("db4d"),r("4942"),r("6861");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(C)}}).$mount("#app")},1:function(e,t,r){e.exports=r("077d")},4942:function(e,t){!function(){var e=document.documentElement,t=function(){var t=e.clientWidth;if(t){var r=t/7.5;r=r>100?100:r,e.style.fontSize=r+"px"}};document.addEventListener&&(window.onresize=t,document.addEventListener("DOMContentLoaded",t,!1))}()},6861:function(e,t,r){}});
//# sourceMappingURL=pageB.3aecb15d.js.map