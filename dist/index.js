!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["react","react-router-dom"],t):"object"==typeof exports?exports.ReactRoutesConfig=t(require("react"),require("react-router-dom")):e.ReactRoutesConfig=t(e.React,e.ReactRouterDOM)}(window,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var u=r(0),i=r.n(u),a=r(1);function f(e,t){var r="/"===e?e:e.replace(/\/$/,"");return"/"===r[0]?r:t?"".concat(t,"/").concat(r).replace(/\/\//g,"/"):r}var l=function(e){return function(e){if(!e||!e.length)return null;var t=e.find((function(e){return"*"===e.path}));return t&&e.splice(e.indexOf(t),1),function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=[],l=[];return r.forEach((function(e){e.redirect?u.push(e):l.push(e)})),i.a.createElement(a.Switch,o,[].concat(l,u).map((function(t){var r=f(t.path,n.parentPath),o=c({},t);return["children","render","component"].forEach((function(e){Reflect.deleteProperty(o,e)})),t.redirect?i.a.createElement(a.Redirect,{key:r,from:r,to:t.redirect,exact:t.exact}):i.a.createElement(a.Route,Object.assign({},o,{key:r,path:r,render:function(o){var c=t.children?e(t.children,{parentPath:r},{location:null==o?void 0:o.location}):null;return t.component?i.a.createElement(t.component,Object.assign({},o,n),c):c}}))})),(null==t?void 0:t.component)&&i.a.createElement(a.Route,{path:"*",component:t.component}))}(e)}(e.routes)};l.displayName="(render-by-config)Routes";t.default=l}])}));