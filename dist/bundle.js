!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=React},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);function i(){var e=document.getElementById("mySidenav");null!==e&&(e.style.width="0px")}n.openNav=function(){var e=document.getElementById("mySidenav");null!==e&&(e.style.width="250px")},n.closeNav=i;var a=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.closeNavOnClick=function(){i()},n}return r(n,e),n.prototype.render=function(){return o.createElement("div",{id:"mySidenav",className:"App-sidenav"},o.createElement("button",{className:"Closenav",onClick:this.closeNavOnClick},"×"),o.createElement("a",{href:"#"},"Decks"),o.createElement("a",{href:"#"},"Add Card"),o.createElement("a",{href:"#"},"Whats webdev"),o.createElement("a",{href:"#"},"Options"))},n}(o.Component);n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(3),i=t(4),a=t(5);o.render(r.createElement(i.default,{name:"deckhello"}),document.getElementById("headerbar")),o.render(r.createElement(a.default,null),document.getElementById("deckpage"))},function(e,n){e.exports=ReactDOM},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(1);function i(){o.openNav()}var a=function(e){return r.createElement("header",{className:"App-header"},r.createElement("table",{className:"Headertable"},r.createElement("tr",null,r.createElement("td",{className:"Headercolm"},r.createElement("button",{className:"Opennav",onClick:i},"☰")),r.createElement("td",{className:"Headercolm"},r.createElement("h3",null,e.name)),r.createElement("td",{className:"Headercolm"}))))};a.defaultProps={name:"deck"},n.default=a},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);t(6);var i=t(11),a=t(1),c=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.openNavOnClick=function(){a.openNav()},n}return r(n,e),n.prototype.render=function(){return o.createElement("body",null,o.createElement(a.default,null),o.createElement("div",{className:"App"},o.createElement("br",null)," ",o.createElement("br",null),o.createElement(i.default,null)))},n}(o.Component);n.default=c},function(e,n,t){var r=t(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(8)(!1)).push([e.i,"/* basic style for page */\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body {\r\n    background-color: lightgrey;\r\n  }\r\n  \r\n  a { \r\n    text-decoration: none; \r\n    color: black;\r\n  }\r\n  \r\n  /* covers description and footer */\r\n  .App {\r\n    text-align: center;\r\n  }\r\n  \r\n  /* side navigation Sidenav.tsx */\r\n  .App-sidenav {\r\n    height: 100%;\r\n    width: 0px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .App-sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 23px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .App-sidenav a:hover {\r\n    color: white;\r\n    background-color: black;\r\n  }\r\n  \r\n  .Opennav, .Closenav {\r\n    color: white;\r\n    background-color: Transparent;\r\n    background-repeat:no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    outline:none;\r\n  }\r\n  \r\n  .Closenav {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 20px;\r\n    margin-left: 50px;\r\n    font-size: 40px;\r\n  }\r\n  \r\n  .Opennav {\r\n    float: left;\r\n    padding-left: 10px;\r\n    padding-bottom: 15px;\r\n    font-size: 30px;\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .Sidenav {padding-top: 15px;}\r\n    .Sidenav a {font-size: 18px;}\r\n    }\r\n  \r\n  /* header with title and sideNav open button Header.tsx */\r\n  .App-header {\r\n    text-align: center;\r\n    background-color: #222;\r\n    height: 50px;\r\n    padding: 0px;\r\n    color: white;\r\n  }\r\n  \r\n  .Headertable {\r\n    margin: 0px auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  .Headercolm {\r\n    width: 33%;\r\n  }\r\n  \r\n  /* menu where you select your deck Deckselection_menu.tsx */\r\n  .App-selectionmenu {\r\n    display: inline-block;\r\n    padding-bottom: 100px;\r\n  }\r\n\r\n  .Accordion {\r\n    background-color: white;\r\n    color: #222;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 55vw;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.active, .Accordion:hover {\r\n    background-color: #222;\r\n    color: white;\r\n}\r\n\r\n.Panel {\r\n    padding: 0 18px;\r\n    background-color: white;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: max-height 0.2s ease-out;\r\n}",""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r={},o=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),a=null,c=0,s=[],l=t(10);function u(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],n))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(h(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:c}}}}function f(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function p(e,n){var t=i(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),s.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,t);t.insertBefore(n,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=s.indexOf(e);n>=0&&s.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return v(n,e.attrs),p(e,n),n}function v(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function h(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var s=c++;t=a||(a=m(n)),r=y.bind(null,t,s,!1),o=y.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),p(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){d(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return u(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var a=t[i];(c=r[a.id]).refs--,o.push(c)}e&&u(f(e,n),n);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function y(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o,i=t(0),a=document.getElementsByClassName("Accordion"),c=function(e){function n(n){var t=e.call(this,n)||this;return t.listenForAccordion=t.listenForAccordion.bind(t),t}return r(n,e),n.prototype.listenForAccordion=function(){for(o=0;o<a.length;o++)a[o].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})},n.prototype.render=function(){return i.createElement("div",{className:"App-selectionmenu"},i.createElement("button",{className:"Accordion",onClick:this.listenForAccordion},"Section 1"),i.createElement("div",{className:"Panel"},i.createElement("p",null,"Lorem ipsum...")),i.createElement("button",{className:"Accordion",onClick:this.listenForAccordion},"Section 2"),i.createElement("div",{className:"Panel"},i.createElement("p",null,"Lorem ipsum...")),i.createElement("button",{className:"Accordion",onClick:this.listenForAccordion},"Section 3"),i.createElement("div",{className:"Panel"},i.createElement("p",null,"Lorem ipsum...")))},n}(i.Component);n.default=c}]);
//# sourceMappingURL=bundle.js.map