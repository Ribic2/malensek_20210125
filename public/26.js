(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.cookie__bar {\n  -ms-overflow-style: none;\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  z-index: 9999;\n  width: 100%;\n  background: #eee;\n  padding: 20px 20px;\n  align-items: center;\n  box-shadow: 0 -4px 4px rgba(198, 198, 198, 0.05);\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif;\n  line-height: 1.5;\n}\n.cookie__bar--bottom {\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.cookie__bar--top {\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.cookie__bar__wrap {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n@media (min-width: 768px) {\n.cookie__bar__wrap {\n        flex-direction: row;\n}\n}\n.cookie__bar__postpone-button {\n    margin-right: auto;\n    -ms-flex: 1 1 auto;\n}\n@media (min-width: 768px) {\n.cookie__bar__postpone-button {\n        margin-right: 10px;\n}\n}\n.cookie__bar__postpone-button:hover {\n      opacity: 0.8;\n      cursor: pointer;\n}\n.cookie__bar__content {\n    margin-right: 0;\n    margin-bottom: 20px;\n    font-size: 0.9rem;\n    max-height: 103px;\n    overflow: auto;\n    width: 100%;\n    -ms-flex: 1 1 auto;\n}\n@media (min-width: 768px) {\n.cookie__bar__content {\n        margin-right: auto;\n        margin-bottom: 0;\n}\n}\n.cookie__bar__buttons {\n    transition: all 0.2s ease;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n@media (min-width: 768px) {\n.cookie__bar__buttons {\n        flex-direction: row;\n        width: auto;\n}\n}\n.cookie__bar__buttons__button {\n      display: inline-block;\n      font-weight: 400;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      border: 1px solid transparent;\n      padding: 0.375rem 0.75rem;\n      line-height: 1.5;\n      border-radius: 3px;\n      font-size: 0.9rem;\n}\n.cookie__bar__buttons__button:hover {\n        cursor: pointer;\n        text-decoration: none;\n}\n.cookie__bar__buttons__button--accept {\n        -ms-flex: 1 1 auto;\n        background: #4caf50;\n        background: linear-gradient(#5cb860, #4caf50);\n        color: #fff;\n}\n.cookie__bar__buttons__button--accept:hover {\n          background: #409343;\n}\n.cookie__bar__buttons__button--decline {\n        -ms-flex: 1 1 auto;\n        background: #f44336;\n        background: linear-gradient(#f55a4e, #f44336);\n        color: #fff;\n        margin-bottom: 10px;\n}\n.cookie__bar__buttons__button--decline:hover {\n          background: #f21f0f;\n}\n@media (min-width: 768px) {\n.cookie__bar__buttons__button--decline {\n            margin-bottom: 0;\n            margin-right: 10px;\n}\n}\n.cookie__floating {\n  -ms-overflow-style: none;\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  z-index: 9999;\n  width: 90%;\n  background: #fafafa;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  box-shadow: 0 4px 8px rgba(198, 198, 198, 0.3);\n  border: 1px solid #ddd;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif;\n  line-height: 1.5;\n  border-radius: 6px;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n.cookie__floating {\n      max-width: 300px;\n}\n}\n@media (min-width: 768px) {\n.cookie__floating--bottom-left {\n      bottom: 20px;\n      left: 20px;\n      right: auto;\n      margin: 0 0;\n}\n}\n@media (min-width: 768px) {\n.cookie__floating--bottom-right {\n      bottom: 20px;\n      right: 20px;\n      left: auto;\n      margin: 0 0;\n}\n}\n@media (min-width: 768px) {\n.cookie__floating--top-right {\n      top: 20px;\n      bottom: auto;\n      right: 20px;\n      left: auto;\n      margin: 0 0;\n}\n}\n@media (min-width: 768px) {\n.cookie__floating--top-left {\n      top: 20px;\n      bottom: auto;\n      right: auto;\n      left: 20px;\n      margin: 0 0;\n}\n}\n.cookie__floating__postpone-button {\n    display: inline-flex;\n    padding: 5px 0 0 20px;\n    margin-bottom: -10px;\n    margin-right: auto;\n}\n.cookie__floating__postpone-button:hover {\n      opacity: 0.8;\n      cursor: pointer;\n}\n.cookie__floating__content {\n    font-size: 0.95rem;\n    margin-bottom: 5px;\n    padding: 15px 20px;\n    max-height: 105px;\n    overflow: auto;\n}\n@media (min-width: 768px) {\n.cookie__floating__content {\n        margin-bottom: 10px;\n}\n}\n.cookie__floating__buttons {\n    transition: all 0.2s ease;\n    display: flex;\n    flex-direction: row;\n    height: auto;\n    width: 100%;\n}\n.cookie__floating__buttons__button {\n      background-color: #eee;\n      font-weight: bold;\n      font-size: 0.90rem;\n      width: 100%;\n      min-height: 40px;\n      white-space: nowrap;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      border-bottom: 1px solid #ddd;\n      border-top: 1px solid #ddd;\n      border-left: none;\n      border-right: none;\n      padding: 0.375rem 0.75rem;\n}\n.cookie__floating__buttons__button:first-child {\n        border-right: 1px solid #ddd;\n}\n.cookie__floating__buttons__button:hover {\n        cursor: pointer;\n        text-decoration: none;\n}\n.cookie__floating__buttons__button--accept {\n        color: #4caf50;\n        -ms-flex: 1 1 auto;\n}\n.cookie__floating__buttons__button--accept:hover {\n          background: #409343;\n          color: #fff;\n}\n.cookie__floating__buttons__button--decline {\n        color: #f44336;\n        -ms-flex: 1 1 auto;\n}\n.cookie__floating__buttons__button--decline:hover {\n          background: #f21f0f;\n          color: #fff;\n}\n.slideFromBottom-enter, .slideFromBottom-leave-to {\n  transform: translate(0px, 10em);\n}\n.slideFromBottom-enter-to, .slideFromBottom-leave {\n  transform: translate(0px, 0px);\n}\n.slideFromBottom-enter-active {\n  transition: transform .2s ease-out;\n}\n.slideFromBottom-leave-active {\n  transition: transform .2s ease-in;\n}\n.slideFromTop-enter, .slideFromTop-leave-to {\n  transform: translate(0px, -10em);\n}\n.slideFromTop-enter-to, .slideFromTop-leave {\n  transform: translate(0px, 0px);\n}\n.slideFromTop-enter-active {\n  transition: transform .2s ease-out;\n}\n.slideFromTop-leave-active {\n  transition: transform .2s ease-in;\n}\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/tiny-cookie/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/tiny-cookie/es/index.js ***!
  \**********************************************/
/*! exports provided: isEnabled, get, getAll, set, getRaw, setRaw, remove, isCookieEnabled, getCookie, getAllCookies, setCookie, getRawCookie, setRawCookie, removeCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnabled", function() { return isEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRaw", function() { return getRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRaw", function() { return setRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCookieEnabled", function() { return isEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCookies", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawCookie", function() { return getRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRawCookie", function() { return setRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return remove; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/tiny-cookie/es/util.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // Check if the browser cookie is enabled.

function isEnabled() {
  var key = '@key@';
  var value = '1';
  var re = new RegExp("(?:^|; )" + key + "=" + value + "(?:;|$)");
  document.cookie = key + "=" + value + ";path=/";
  var enabled = re.test(document.cookie);

  if (enabled) {
    // eslint-disable-next-line
    remove(key);
  }

  return enabled;
} // Get the cookie value by key.


function get(key, decoder) {
  if (decoder === void 0) {
    decoder = decodeURIComponent;
  }

  if (typeof key !== 'string' || !key) {
    return null;
  }

  var reKey = new RegExp("(?:^|; )" + Object(_util__WEBPACK_IMPORTED_MODULE_0__["escapeRe"])(key) + "(?:=([^;]*))?(?:;|$)");
  var match = reKey.exec(document.cookie);

  if (match === null) {
    return null;
  }

  return typeof decoder === 'function' ? decoder(match[1]) : match[1];
} // The all cookies


function getAll(decoder) {
  if (decoder === void 0) {
    decoder = decodeURIComponent;
  }

  var reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g;
  var cookies = {};
  var match;
  /* eslint-disable no-cond-assign */

  while (match = reKey.exec(document.cookie)) {
    reKey.lastIndex = match.index + match.length - 1;
    cookies[match[1]] = typeof decoder === 'function' ? decoder(match[2]) : match[2];
  }

  return cookies;
} // Set a cookie.


function set(key, value, encoder, options) {
  if (encoder === void 0) {
    encoder = encodeURIComponent;
  }

  if (typeof encoder === 'object' && encoder !== null) {
    /* eslint-disable no-param-reassign */
    options = encoder;
    encoder = encodeURIComponent;
    /* eslint-enable no-param-reassign */
  }

  var attrsStr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["convert"])(options || {});
  var valueStr = typeof encoder === 'function' ? encoder(value) : value;
  var newCookie = key + "=" + valueStr + attrsStr;
  document.cookie = newCookie;
} // Remove a cookie by the specified key.


function remove(key, options) {
  var opts = {
    expires: -1
  };

  if (options) {
    opts = _extends({}, options, opts);
  }

  return set(key, 'a', opts);
} // Get the cookie's value without decoding.


function getRaw(key) {
  return get(key, null);
} // Set a cookie without encoding the value.


function setRaw(key, value, options) {
  return set(key, value, null, options);
}



/***/ }),

/***/ "./node_modules/tiny-cookie/es/util.js":
/*!*********************************************!*\
  !*** ./node_modules/tiny-cookie/es/util.js ***!
  \*********************************************/
/*! exports provided: hasOwn, escapeRe, computeExpires, convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRe", function() { return escapeRe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeExpires", function() { return computeExpires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
} // Escape special characters.


function escapeRe(str) {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
} // Return a future date by the given string.


function computeExpires(str) {
  var lastCh = str.charAt(str.length - 1);
  var value = parseInt(str, 10);
  var expires = new Date();

  switch (lastCh) {
    case 'Y':
      expires.setFullYear(expires.getFullYear() + value);
      break;

    case 'M':
      expires.setMonth(expires.getMonth() + value);
      break;

    case 'D':
      expires.setDate(expires.getDate() + value);
      break;

    case 'h':
      expires.setHours(expires.getHours() + value);
      break;

    case 'm':
      expires.setMinutes(expires.getMinutes() + value);
      break;

    case 's':
      expires.setSeconds(expires.getSeconds() + value);
      break;

    default:
      expires = new Date(str);
  }

  return expires;
} // Convert an object to a cookie option string.


function convert(opts) {
  var res = ''; // eslint-disable-next-line

  for (var key in opts) {
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        var expires = opts[key];

        if (typeof expires !== 'object') {
          expires += typeof expires === 'number' ? 'D' : '';
          expires = computeExpires(expires);
        }

        res += ";" + key + "=" + expires.toUTCString();
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += ";" + key;
        }
      } else {
        res += ";" + key + "=" + opts[key];
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/';
  }

  return res;
}



/***/ }),

/***/ "./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-cookie-accept-decline.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.esm.js ***!
  \**************************************************************************************/
/*! exports provided: default, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var tiny_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-cookie */ "./node_modules/tiny-cookie/es/index.js");


//

var script = {
    name: 'vue-cookie-accept-decline',
    props: {
        elementId: {
            type: String,
            required: true
        },

        debug: {
            type: Boolean,
            default: false
        },

        disableDecline: {
            type: Boolean,
            default: false
        },

        // floating: bottom-left, bottom-right, top-left, top-rigt
        // bar:  bottom, top
        position: {
            type: String,
            default: 'bottom-left'
        },

        // floating, bar
        type: {
            type: String,
            default: 'floating'
        },

        // slideFromBottom, slideFromTop, fade
        transitionName: {
            type: String,
            default: 'slideFromBottom'
        },

        showPostponeButton: {
            type: Boolean,
            default: false
        },

        forceCookies: {
            type: Boolean,
            default: false
        }
    },
    data: function data () {
        return {
            status: null,
            supportsLocalStorage: true,
            isOpen: false
        }
    },
    computed: {
        containerPosition: function containerPosition () {
            return ("cookie--" + (this.position))
        },
        containerType: function containerType () {
            return ("cookie--" + (this.type))
        }
    },
    mounted: function mounted () {
        this.checkLocalStorageFunctionality();
        this.init();
    },
    methods: {
        init: function init () {
            var visitedType = this.getCookieStatus();
            if (visitedType && (visitedType === 'accept' || visitedType === 'decline' || visitedType === 'postpone')) {
                this.isOpen = false;
            }

            if (!visitedType) {
                this.isOpen = true;
            }

            this.status = visitedType;
            this.$emit('status', visitedType);
        },
        checkLocalStorageFunctionality: function checkLocalStorageFunctionality () {

            if (this.forceCookies) {
                this.supportsLocalStorage = false;
                return;
            }

            // Check for availability of localStorage
            try {
                var test = '__vue-cookie-accept-decline-check-localStorage';
                window.localStorage.setItem(test, test);
                window.localStorage.removeItem(test);
            } catch (e) {
                console.error('Local storage is not supported, falling back to cookie use');
                this.supportsLocalStorage = false;
            }
        },
        setCookieStatus: function setCookieStatus (type) {
            if (this.supportsLocalStorage) {
                if (type === 'accept') {
                    localStorage.setItem(("vue-cookie-accept-decline-" + (this.elementId)), 'accept');
                }
                if (type === 'decline') {
                    localStorage.setItem(("vue-cookie-accept-decline-" + (this.elementId)), 'decline');
                }
                if (type === 'postpone') {
                    localStorage.setItem(("vue-cookie-accept-decline-" + (this.elementId)), 'postpone');
                }
            } else {
                if (type === 'accept') {
                    Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_0__["set"])(("vue-cookie-accept-decline-" + (this.elementId)), 'accept');
                }
                if (type === 'decline') {
                    Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_0__["set"])(("vue-cookie-accept-decline-" + (this.elementId)), 'decline');
                }
                if (type === 'postpone') {
                    Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_0__["set"])(("vue-cookie-accept-decline-" + (this.elementId)), 'postpone');
                }
            }
        },
        getCookieStatus: function getCookieStatus () {
            if (this.supportsLocalStorage) {
                return localStorage.getItem(("vue-cookie-accept-decline-" + (this.elementId)))
            } else {
                return Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_0__["get"])(("vue-cookie-accept-decline-" + (this.elementId)))
            }
        },
        accept: function accept () {
            if (!this.debug) {
                this.setCookieStatus('accept');
            }

            this.status = 'accept';
            this.isOpen = false;
            this.$emit('clicked-accept');
        },
        decline: function decline () {
            if (!this.debug) {
                this.setCookieStatus('decline');
            }

            this.status = 'decline';
            this.isOpen = false;
            this.$emit('clicked-decline');
        },
        postpone: function postpone () {
            if (!this.debug) {
                this.setCookieStatus('postpone');
            }

            this.status = 'postpone';
            this.isOpen = false;
            this.$emit('clicked-postpone');
        },
        removeCookie: function removeCookie () {
            localStorage.removeItem(("vue-cookie-accept-decline-" + (this.elementId)));
            this.status = null;
            this.$emit('removed-cookie');
        }
    },
}

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { appear: "", name: _vm.transitionName } }, [
    _vm.isOpen
      ? _c(
          "div",
          {
            staticClass: "cookie",
            class: [
              "cookie__" + _vm.type,
              "cookie__" + _vm.type + "--" + _vm.position
            ],
            attrs: { id: _vm.elementId }
          },
          [
            _c("div", { class: "cookie__" + _vm.type + "__wrap" }, [
              _vm.showPostponeButton === true
                ? _c(
                    "div",
                    {
                      class: "cookie__" + _vm.type + "__postpone-button",
                      attrs: { title: "Close" },
                      on: { click: _vm.postpone }
                    },
                    [
                      _vm._t("postponeContent", [
                        _vm._v("\n                    ×\n                ")
                      ])
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { class: "cookie__" + _vm.type + "__content" },
                [
                  _vm._t("message", [
                    _vm._v(
                      "\n                    We use cookies to ensure you get the best experience on our website. "
                    ),
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https://cookiesandyou.com/",
                          target: "_blank"
                        }
                      },
                      [_vm._v("Learn More...")]
                    )
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { class: "cookie__" + _vm.type + "__buttons" }, [
                _vm.disableDecline === false
                  ? _c(
                      "button",
                      {
                        class: [
                          "cookie__" + _vm.type + "__buttons__button",
                          "cookie__" + _vm.type + "__buttons__button--decline"
                        ],
                        on: { click: _vm.decline }
                      },
                      [
                        _vm._t("declineContent", [
                          _vm._v(
                            "\n                        Opt Out\n                    "
                          )
                        ])
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    class: [
                      "cookie__" + _vm.type + "__buttons__button",
                      "cookie__" + _vm.type + "__buttons__button--accept"
                    ],
                    on: { click: _vm.accept }
                  },
                  [
                    _vm._t("acceptContent", [
                      _vm._v(
                        "\n                        Got It!\n                    "
                      )
                    ])
                  ],
                  2
                )
              ])
            ])
          ]
        )
      : _vm._e()
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  )

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VueCookieAcceptDecline', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ __webpack_exports__["default"] = (component);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);