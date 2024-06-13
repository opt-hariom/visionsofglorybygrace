"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _callSuper(t,e,o){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,o||[],_getPrototypeOf(t).constructor):e.apply(t,o))}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(o,t)})(t)}function _construct(t,e,o){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var n=new(t.bind.apply(t,r));return o&&_setPrototypeOf(n,o.prototype),n}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}customElements.get("lta-collection-all")||customElements.define("lta-collection-all",function(t){function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).changeCollections(),t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"changeCollections",value:function(){var t=this;this.collectionTabs=this.querySelectorAll("[data-tab]"),this.collections=this.querySelectorAll("[data-collection]"),this.collectionTabs.forEach(function(e){e.addEventListener("click",function(){if(!e.classList.contains("is-active")){var o=e.dataset.tab||"all";if(t.collectionTabs.forEach(function(t){e==t?t.classList.add("is-active"):t.classList.remove("is-active")}),"all"!=o){var r=t.querySelector(o);r&&t.collections.forEach(function(t){t==r?r.classList.remove("hidden"):t.classList.add("hidden")})}else t.collections.forEach(function(t){t.classList.remove("hidden")})}})})}}]),e}());