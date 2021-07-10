(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([n.id,":root {\n    --primary-color: rgb(13,106,134);\n}\n\n*{\n    box-sizing: border-box;\n    outline: 0;    \n}\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: var(--primary-color);\n    text-align: center;\n}\n\n.container {\n    max-width: 640px;\n    margin: 5px auto;\n    background-color: burlywood;\n    padding: 20px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1em;\n    font-weight: 1em;\n    \n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    \n}\n\nform input {\n    font-size: 1.2em;\n    height: 30px;\n    padding: 0 20px;\n}\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: chocolate;\n    font-size: 1.3em;\n    font-weight: 700;\n}\n\n.cpf-gerado {\n    border: 1px solid darkgoldenrod;\n    color: rgb(59, 56, 56);\n    background-color: beige;\n    width: 100%;    \n    font-size: 1.2em;\n    text-align: center;\n    padding: 5px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,oCAAoC;IACpC,cAAc;IACd,gBAAgB;;AAEpB;;AAEA;IACI,cAAc;IACd,WAAW;;AAEf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n:root {\n    --primary-color: rgb(13,106,134);\n}\n\n*{\n    box-sizing: border-box;\n    outline: 0;    \n}\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: var(--primary-color);\n    text-align: center;\n}\n\n.container {\n    max-width: 640px;\n    margin: 5px auto;\n    background-color: burlywood;\n    padding: 20px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1em;\n    font-weight: 1em;\n    \n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    \n}\n\nform input {\n    font-size: 1.2em;\n    height: 30px;\n    padding: 0 20px;\n}\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: chocolate;\n    font-size: 1.3em;\n    font-weight: 700;\n}\n\n.cpf-gerado {\n    border: 1px solid darkgoldenrod;\n    color: rgb(59, 56, 56);\n    background-color: beige;\n    width: 100%;    \n    font-size: 1.2em;\n    text-align: center;\n    padding: 5px;\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(u," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=r(f),A={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(e[p].references++,e[p].updater(A)):e.push({identifier:f,updater:o(A,t),references:1}),i.push(f)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var u=t(n,o),s=0;s<a.length;s++){var l=r(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function e(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var t=function(){function r(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:n.replace(/\D+/g,"")})}var t,o,a;return t=r,a=[{key:"geraDigito",value:function(e){var r,t=0,o=e.length+1,a=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var n=t.next();return c=n.done,n},e:function(n){u=!0,i=n},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw i}}}}(e);try{for(a.s();!(r=a.n()).done;){var i=r.value;t+=o*Number(i),o--}}catch(n){a.e(n)}finally{a.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(o=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var n=this.cpfLimpo.slice(0,-2),e=r.geraDigito(n),t=r.geraDigito(n+e);this.novoCPF=n+e+t}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&e(t.prototype,o),a&&e(t,a),r}();function o(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var a,i=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r;return e=n,(r=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(e-n)+e))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),e=t.geraDigito(n),r=n+e+t.geraDigito(n+e);return this.formatado(r)}}])&&o(e.prototype,r),n}(),c=r(379),u=r.n(c),s=r(795),l=r.n(s),f=r(695),p=r.n(f),A=r(216),d=r.n(A),g=r(122),m={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=r.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=p()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};m.domAPI=l(),m.insertStyleElement=d(),u()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals,a=new i,document.querySelector(".cpf-gerado").innerHTML=a.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map