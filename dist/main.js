!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".menu__icon"),t=document.querySelector(".popup-menu"),n=t.querySelector(".popup-dialog-menu"),o=document.documentElement.clientWidth,i=!1,r=function(){t.style.visibility="visible",o<=576?n.style.top="582px":n.style.right=o<=1024?"549px":"639px",i=!0},c=function(){t.style.visibility="hidden",n.style.top="0px",n.style.right="0px",i=!1};e.addEventListener("click",r),n.addEventListener("click",(function(e){var t=e.target;if(t.matches(".close-menu")&&c(),t.matches(".menu-link")&&!t.closest(".link-list-menu")){e.preventDefault(),c();var n=t.getAttribute("href").substr(1);n&&document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}})),window.addEventListener("resize",(function(){o=document.documentElement.clientWidth,i&&(c(),r())}))},i=function(){var e=document.querySelector(".button-footer");e.addEventListener("click",(function(t){t.preventDefault();var n=e.querySelector("a").getAttribute("href").substr(1);n&&document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))},r=function(){var e=document.querySelector(".popup-repair-types"),t=(document.querySelector(".link-list-menu"),document.querySelector(".link-list-repair"),document.querySelector(".popup-menu")),n=t.querySelector(".popup-dialog-menu"),o=document.documentElement.clientWidth,i=function(){e.style.visibility="visible"},r=function(){e.addEventListener("click",(function(t){var n=t.target;!n.matches(".close")&&n.closest(".popup-dialog-repair-types")||(e.style.visibility="hidden")}))};document.body.addEventListener("click",(function(e){var c=e.target;c.closest(".link-list-menu")?(i(),t.style.visibility="hidden",o<=576?n.style.top="0px":n.style.right="0px",r()):c.closest(".link-list-repair")&&(i(),r())}))},c=function(){var e=0;document.querySelectorAll('input[name="phone"]').forEach((function(t){t.addEventListener("focus",(function(){0===e&&(t.value="+7 (",e++)})),t.addEventListener("input",(function(e){t.value=t.value.replace(/[^\d\(\)\-\+\ ]+/g,"").substr(0,18),t.value.length<4&&(t.value="+7 ("),7===t.value.length&&null!==e.data&&(t.value+=") "),12===t.value.length&&null!==e.data&&(t.value+="-"),15===t.value.length&&null!==e.data&&(t.value+="-")}))}))},l=function(){var e=document.querySelector(".popup-privacy");document.body.addEventListener("click",(function(t){var n=t.target;n.classList.contains("link-privacy")&&(e.style.visibility="visible"),n.classList.contains("link-privacy")||n.closest(".popup-dialog-privacy")||(e.style.visibility="hidden")}))},a=function(){var e=document.querySelectorAll(".formula-item__icon"),t=document.querySelectorAll(".formula-item-popup");e.forEach((function(e,n){e.addEventListener("mouseover",(function(){var o=e.getBoundingClientRect().top,i=e.offsetHeight;if(e.classList.add("active-item"),o<i+130){e.parentNode.style.zIndex=999;var r=t[n].textContent;t[n].style.transform="rotate(180deg)",t[n].innerHTML='<div class="formula-popup-text"> '.concat(r,"</div>"),t[n].querySelector(".formula-popup-text").style.transform="rotate(180deg)",t[n].style.top="90px",t[n].style.visibility="visible",t[n].style.opacity=1,t[n].style.zIndex=999}else e.parentNode.style.zIndex=999,t[n].style.zIndex=999,t[n].style="",t[n].querySelector(".formula-popup-text")&&(t[n].querySelector(".formula-popup-text").style=""),t[n].style.transform="rotate(0deg)",t[n].style.visibility="visible",t[n].style.opacity=1})),e.addEventListener("mouseout",(function(){e.classList.remove("active-item"),t[n].style.visibility="hidden",e.parentNode.style.zIndex=1,t[n].style.zIndex=1}))}))},u=function(){var e=document.querySelectorAll("form");e.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n=e.parentNode.querySelector(".form-alarm-msg");n&&(n.style.display="none");var o,i=e.querySelector('input[name="phone"]'),r=e.querySelector('input[name="name"]');if(e.querySelector('input[type="checkbox"]').checked&&18===i.value.length){o=r?{tel:i.value,name:r.value}:{tel:i.value};(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(o).then((function(t){if(200!==t.status)throw new Error("Произошла неизвестная ошибка. Пожалуйста, попробуйте позже.");var n;(n=document.querySelector(".popup-thank")).style.visibility="visible",n.addEventListener("click",(function(e){e.target.closest(".feedback-wrap")&&!e.target.classList.contains("close-thank")||(n.style.visibility="hidden")})),setTimeout((function(){n.style.visibility="hidden"}),5e3),e.querySelectorAll("input").forEach((function(e){e.value="","checkbox"===e.type&&(e.checked=!1)}))})).catch((function(t){!function(e,t){e.insertAdjacentHTML("beforebegin",'\n            <div class="form-alarm-msg" style="font-size: 7; color: red; width: 350px; ">\n            '.concat(t,".</div>")),setTimeout((function(){e.parentNode.querySelector(".form-alarm-msg").style.display="none"}),5e3)}(e,t)}))}else!function(e){e.insertAdjacentHTML("beforebegin",'\n            <div class="form-alarm-msg" style="font-size: 7; color: red; width: 350px; ">\n            Пожалуйста, проверьте номер и согласитесь с политикой конфиденциальности!</div>'),setTimeout((function(){e.parentNode.querySelector(".form-alarm-msg").style.display="none"}),5e3)}(e)}))}))},s=function(){var e=function(e){var t;(t=document.createElement("style")).textContent="\n    .active-list {\n    border: 3px solid #c05d00!important;\n    }\n    ",document.head.append(t);var n=document.querySelector(".nav-list-popup-repair"),o=document.querySelector(".popup-repair-types-content__head-date");e.forEach((function(e,t){0!==t?n.insertAdjacentHTML("beforeend",'\n    <button class="button_o popup-repair-types-nav__item">'.concat(e.title,"</button>\n    ")):o.textContent=e.date})),(n=document.querySelector(".nav-list-popup-repair")).querySelectorAll(".popup-repair-types-nav__item").forEach((function(t){t.addEventListener("click",(function(){var o=document.getElementById("switch-inner");n.querySelector(".active-list")&&n.querySelector(".active-list").classList.remove("active-list"),t.classList.add("active-list");var i=document.querySelector(".popup-repair-types-content-table__list");i.textContent="",i.append(document.createElement("tbody"));var r,c=i.querySelector("tbody");e.forEach((function(e){e.title===t.textContent&&(r=e.priceList,o.textContent=e.title)})),r.forEach((function(e){c.insertAdjacentHTML("beforeend",'\n    <tr class="mobile-row">\n    <td class="repair-types-name">'.concat(e.typeService,'</td>\n    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n    <td class="repair-types-value">').concat(e.units,'</td>\n    <td class="repair-types-value">').concat(e.cost," руб.</td>\n    </tr>\n    "))}))}))}))};fetch("./db/db.json").then((function(e){if(200!==e.status)throw new Error("Status network is not 200");return e.json()})).then((function(t){e(t)})).catch((function(e){console.error(e)}))},d=function(){var e=document.querySelectorAll(".button_wide"),t=document.querySelector(".popup-consultation");e.forEach((function(e){e.addEventListener("click",(function(){t.style.visibility="visible"}))})),t.addEventListener("click",(function(e){e.target.closest(".feedback-wrap")&&!e.target.closest(".close-consultation")||(t.style.visibility="hidden")}))},p=function(){document.querySelector(".accordion").querySelectorAll("h2").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".accordion").querySelector(".msg-active").classList.remove("msg-active"),e.classList.add("msg-active")}))}))};(function(){var e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord a"),n=document.querySelector(".header-contacts__phone-number-accord"),o=function(t){e.style.transform="rotate(".concat(t,"deg)")};e.addEventListener("click",(function(){"0"!==t.style.opacity&&t.style.opacity?"1"===t.style.opacity&&(n.style.top="0px",t.style.opacity=0,o(0)):(n.style.top="30px",t.style.opacity=1,o(180))}))})(),o(),i(),r(),c(),l(),a(),u(),s(),d(),p()}]);