!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(){var e=document.querySelector(".menu__icon"),t=document.querySelector(".popup-menu"),r=t.querySelector(".popup-dialog-menu");e.addEventListener("click",(function(){t.style.visibility="visible",r.style.right="639px"})),r.addEventListener("click",(function(e){var n=e.target;if(n.matches(".close-menu"))t.style.visibility="hidden",r.style.right="0px";else if(n.matches(".menu-link")){e.preventDefault(),t.style.visibility="hidden",r.style.right="0px";var o=n.getAttribute("href").substr(1);o&&document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})}}))},o=function(){var e=document.querySelector(".button-footer");e.addEventListener("click",(function(t){t.preventDefault();var r=e.querySelector("a").getAttribute("href").substr(1);r&&document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))};(function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord a"),r=document.querySelector(".header-contacts__phone-number-accord"),n=function(t){e.style.transform="rotate(".concat(t,"deg)")};e.addEventListener("click",(function(){"0"!==t.style.opacity&&t.style.opacity?"1"===t.style.opacity&&(r.style.top="0px",t.style.opacity=0,n(0)):(r.style.top="30px",t.style.opacity=1,n(180))}))})(),n(),o()}]);