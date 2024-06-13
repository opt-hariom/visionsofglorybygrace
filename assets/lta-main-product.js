"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _callSuper(t,e,r){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)})(t)}function _construct(t,e,r){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&_setPrototypeOf(o,r.prototype),o}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("lta-product-bundles")||customElements.define("lta-product-bundles",function(t){function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).select=t.querySelector("select"),t.getVariantData(),t.addEventListener("input",t.onVariantChange.bind(_assertThisInitialized(t))),t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"onVariantChange",value:function(){var t=this,e=this.select.options[this.select.selectedIndex].value,r=this.dataset.originalSection?this.dataset.originalSection:this.dataset.section;this.currentVariant=this.variantData.find(function(t){return t.id==e}),fetch("".concat(this.dataset.url,"?variant=").concat(e,"&section_id=").concat(r)).then(function(t){return t.text()}).then(function(e){var n=(new DOMParser).parseFromString(e,"text/html"),o=document.getElementById("price-".concat(r)),i=n.getElementById("price-".concat(r)),a=document.getElementById("ProductSaleTag-".concat(r)),c=n.getElementById("ProductSaleTag-".concat(r)),u=n.getElementById("Sku-".concat(r)),l=document.getElementById("Sku-".concat(r)),s=n.getElementById("Inventory-".concat(r)),d=document.getElementById("Inventory-".concat(r)),f=n.getElementById("Volume-".concat(r));t.updateMedia(n);var y=document.getElementById("Price-Per-Item-".concat(r)),p=n.getElementById("Price-Per-Item-".concat(r)),m=document.getElementById("Volume-".concat(r)),h=document.getElementById("Quantity-Rules-".concat(r)),v=document.getElementById("Volume-Note-".concat(r));v&&v.classList.remove("hidden"),m&&m.classList.remove("hidden"),h&&h.classList.remove("hidden"),i&&o&&(o.innerHTML=i.innerHTML),s&&d&&(d.innerHTML=s.innerHTML),a&&c&&(a.innerHTML=c.innerHTML),u&&l&&(l.innerHTML=u.innerHTML,l.classList.toggle("hidden",u.classList.contains("hidden"))),f&&m&&(m.innerHTML=f.innerHTML),p&&y&&(y.innerHTML=p.innerHTML,y.classList.toggle("hidden",p.classList.contains("hidden")));var _=document.getElementById("price-".concat(r));_&&_.classList.remove("hidden"),d&&d.classList.toggle("hidden",""===s.innerText),publish(PUB_SUB_EVENTS.variantChange,{data:{sectionId:r,html:n,variant:t.currentVariant}})}).catch(function(t){console.log(t)})}},{key:"updateMedia",value:function(t){var e="true"==this.dataset.updateMedia;if(console.log(e),e){var r,n,o=document.querySelector('[id^="MediaGallery-'.concat(this.dataset.section,'"] ul')),i=t.querySelector('[id^="MediaGallery-'.concat(this.dataset.section,'"] ul')),a=function(){var t=Array.from(o.querySelectorAll("li[data-media-id]")),e=new Set(t.map(function(t){return t.dataset.mediaId})),r=new Map(t.map(function(t,e){return[t.dataset.mediaId,{item:t,index:e}]}));return[t,e,r]};if(o&&i){for(var c=_slicedToArray(a(),3),u=c[0],l=c[1],s=c[2],d=Array.from(i.querySelectorAll("li[data-media-id]")),f=new Set(d.map(function(t){return t.dataset.mediaId})),y=!1,p=d.length-1;p>=0;p--)l.has(d[p].dataset.mediaId)||(o.prepend(d[p]),y=!0);for(var m=0;m<u.length;m++)f.has(u[m].dataset.mediaId)||(u[m].remove(),y=!0);if(y){var h=_slicedToArray(a(),3);u=h[0],l=h[1],s=h[2]}d.forEach(function(t,e){var r=s.get(t.dataset.mediaId);if(r&&r.index!==e){o.insertBefore(r.item,o.querySelector("li:nth-of-type(".concat(e+1,")")));var n=_slicedToArray(a(),3);u=n[0],l=n[1],s=n[2]}})}if(this.currentVariant.featured_media)null===(r=document.querySelector('[id^="MediaGallery-'.concat(this.dataset.section,'"]')))||void 0===r||null===(n=r.setActiveMedia)||void 0===n||n.call(r,"".concat(this.dataset.section,"-").concat(this.currentVariant.featured_media.id));var v=document.querySelector("#ProductModal-".concat(this.dataset.section," .product-media-modal__content")),_=t.querySelector("product-modal");v&&_&&(v.innerHTML=_.innerHTML)}}},{key:"getVariantData",value:function(){return this.variantData=this.variantData||JSON.parse(this.querySelector('[type="application/json"]').textContent),this.variantData}}]),e}());