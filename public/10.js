(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "spinnerOverlay",
  computed: {
    spinner: function spinner() {
      return this.$store.state.user.spinner;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cookie_accept_decline_dist_vue_cookie_accept_decline_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css */ "./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css");
/* harmony import */ var vue_cookie_accept_decline_dist_vue_cookie_accept_decline_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cookie_accept_decline_dist_vue_cookie_accept_decline_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_cookie_accept_decline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cookie-accept-decline */ "./node_modules/vue-cookie-accept-decline/dist/vue-cookie-accept-decline.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_spinnerOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/spinnerOverlay */ "./resources/js/components/spinnerOverlay.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SpinnerOverlay: _components_spinnerOverlay__WEBPACK_IMPORTED_MODULE_4__["default"],
    VueCookieAcceptDecline: vue_cookie_accept_decline__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      cookieStatus: '',
      links: [{
        label: 'TRGOVINA',
        url: '/',
        route: "index"
      }, {
        label: 'KONTAKT',
        url: '/contact'
      }, {
        label: 'PRILJUBLJENO',
        url: '/favourites'
      }],
      userLinks: [{
        label: 'Prijava',
        icon: 'mdi-login',
        url: '/login'
      }, {
        label: 'Registracija',
        icon: 'mdi-account-edit',
        url: '/register'
      }],
      drawer: false,
      accountIcon: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiAccountCircle"],
      cartIcon: _mdi_js__WEBPACK_IMPORTED_MODULE_3__["mdiCart"]
    };
  },
  methods: {
    authUser: function authUser() {
      return this.$store.dispatch('getUser');
    },
    getCart: function getCart() {
      return this.$store.dispatch('getCart');
    },
    getFavourites: function getFavourites() {
      return this.$store.dispatch('getFavourites');
    },
    logout: function logout() {
      return this.$store.dispatch('logout');
    },
    getFavouritesGuest: function getFavouritesGuest() {
      return this.$store.dispatch('getFavoritesGuest');
    },
    getCartGuest: function getCartGuest() {
      return this.$store.dispatch('getCartGuest');
    },
    setGuest: function setGuest() {
      return this.$store.dispatch('setGuest');
    },
    callDependOnUser: function callDependOnUser() {
      var _this = this;

      _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].getUsersData().then(function (response) {
        _this.getFavourites();

        _this.getCart();

        _this.$store.commit('SET_USER_DATA', response.data.user);
      })["catch"](function () {
        _this.getFavouritesGuest();

        _this.getCartGuest();

        _this.setGuest();
      });
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].getUsersData().then(function (response) {
      _this2.getFavourites();

      _this2.getCart();

      _this2.$store.commit('SET_USER_DATA', response.data.user);
    })["catch"](function (err) {
      _this2.getFavouritesGuest();

      _this2.getCartGuest();

      _this2.setGuest();
    });
  },
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#logo[data-v-06bc2b2d] {\n    border-radius: 500px;\n}\n#mainContainer[data-v-06bc2b2d] {\n    min-height: 86vh;\n}\n.v-card__text > a[data-v-06bc2b2d] {\n    color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.spinner
    ? _c(
        "v-overlay",
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64" }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            width: "300",
            app: "",
            temporary: "",
            "disable-resize-watcher": "",
            "disable-route-watcher": ""
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", { staticClass: "title" }, [
                    _vm._v("\n                    Uporabnik\n                ")
                  ]),
                  _vm._v(" "),
                  _c("v-divider")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          this.user.length === 0
            ? _c(
                "v-list",
                { attrs: { dense: "", nav: "" } },
                _vm._l(_vm.userLinks, function(link) {
                  return _c(
                    "v-list-item",
                    { key: link.label },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            width: "100%",
                            elevation: 0,
                            rounded: "",
                            color: "#6C3FB8",
                            dark: "",
                            ripple: false,
                            to: link.url
                          }
                        },
                        [
                          _c("v-icon", [_vm._v(_vm._s(link.icon))]),
                          _vm._v(
                            "\n                    " +
                              _vm._s(link.label) +
                              "\n                "
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            : _c(
                "v-list",
                { attrs: { dense: "", nav: "" } },
                [
                  _c("h5", { staticClass: "text-center" }, [
                    _vm._v(
                      "Dobrodošli " +
                        _vm._s(this.$store.state.user.user.Name) +
                        "\n                " +
                        _vm._s(this.$store.state.user.user.Surname)
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            width: "100%",
                            rounded: "",
                            color: "#6C3FB8",
                            dark: "",
                            ripple: false,
                            elevation: 0
                          },
                          on: {
                            click: function($event) {
                              return _vm.logout()
                            }
                          }
                        },
                        [
                          _c("v-icon", [_vm._v("mdi-logout")]),
                          _vm._v(
                            "\n                    Odjava\n                "
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            rounded: "",
                            color: "#6C3FB8",
                            dark: "",
                            width: "100%",
                            to: "/reset-password"
                          }
                        },
                        [_vm._v("Spremeni geslo\n                ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            rounded: "",
                            dark: "",
                            width: "100%",
                            to: "/profile",
                            color: "#6C3FB8"
                          }
                        },
                        [_vm._v("Ogled profila\n                ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: { app: "", color: "#6C3FB8", dark: "" },
          scopedSlots: _vm._u([
            {
              key: "extension",
              fn: function() {
                return [
                  _c(
                    "v-tabs",
                    { attrs: { "align-with-title": "" } },
                    _vm._l(_vm.links, function(link) {
                      return _c(
                        "v-tab",
                        { key: link.label, attrs: { to: link.url } },
                        [_vm._v(_vm._s(link.label))]
                      )
                    }),
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "v-app-bar-nav-icon",
            [
              _c("v-img", {
                attrs: {
                  src: "/storage/store/FullColor_1280x1024_300dpi.jpg",
                  width: "2",
                  height: "48",
                  id: "logo"
                },
                on: {
                  click: function($event) {
                    _vm.$route.name !== "/" ? _vm.$router.push("/") : null
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    depressed: "",
                    color: "#6C3FB8",
                    width: "auto",
                    ripple: false
                  },
                  on: {
                    click: function($event) {
                      return _vm.$router.push("/")
                    }
                  }
                },
                [_vm._v("Uniq Cards\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-1",
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.drawer = !_vm.drawer
                }
              }
            },
            [_c("v-icon", [_vm._v(_vm._s(_vm.accountIcon))])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { staticClass: "mr-1", attrs: { to: "/cart", icon: "" } },
            [
              _c(
                "v-badge",
                {
                  attrs: {
                    content:
                      this.$store.state.cart.cart == null
                        ? ""
                        : this.$store.state.cart.cart.length,
                    value:
                      this.$store.state.cart.cart == null
                        ? ""
                        : this.$store.state.cart.cart.length,
                    overlap: ""
                  }
                },
                [_c("v-icon", [_vm._v(_vm._s(_vm.cartIcon))])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c("SpinnerOverlay"),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { id: "mainContainer" } },
            [_c("router-view")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { color: "#6C3FB8", padless: "" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-center",
              attrs: { color: "#6C3FB8", flat: "", tile: "", width: "100%" }
            },
            [
              _c(
                "v-card-text",
                [
                  _c("router-link", { attrs: { to: "/opodjetju" } }, [
                    _vm._v("O podjetju")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/splosni-pogoji" } }, [
                    _vm._v("Splosni pogoji")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "white--text" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(new Date().getFullYear()) +
                    " © "
                ),
                _c("strong", [_vm._v("UniqCards")])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "VueCookieAcceptDecline",
        {
          ref: "myPanel1",
          attrs: {
            elementId: "myPanel1",
            debug: false,
            position: "bottom-left",
            type: "floating",
            disableDecline: true,
            transitionName: "slideFromBottom",
            showPostponeButton: false
          }
        },
        [
          _c("div", { attrs: { slot: "message" }, slot: "message" }, [
            _vm._v(
              "\n            Ta spletna stran uporablja piškotke.\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "acceptContent" }, slot: "acceptContent" },
            [_vm._v("\n            V redu\n        ")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/spinnerOverlay.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/spinnerOverlay.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinnerOverlay.vue?vue&type=template&id=51172782& */ "./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782&");
/* harmony import */ var _spinnerOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinnerOverlay.vue?vue&type=script&lang=js& */ "./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "./node_modules/vuetify/lib/components/VOverlay/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _spinnerOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_4__["VOverlay"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_5__["VProgressCircular"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/spinnerOverlay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinnerOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./spinnerOverlay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/spinnerOverlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinnerOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./spinnerOverlay.vue?vue&type=template&id=51172782& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/spinnerOverlay.vue?vue&type=template&id=51172782&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinnerOverlay_vue_vue_type_template_id_51172782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/default.vue":
/*!******************************************!*\
  !*** ./resources/js/layouts/default.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=06bc2b2d&scoped=true& */ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&");
/* harmony import */ var _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.vue?vue&type=script&lang=js& */ "./resources/js/layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06bc2b2d",
  null
  
)

/* vuetify-loader */























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_6__["VAppBar"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_6__["VAppBarNavIcon"],VBadge: vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_7__["VBadge"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_8__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_9__["VCardText"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_12__["VFooter"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_14__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__["VListItemTitle"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_16__["VMain"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_17__["VNavigationDrawer"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_18__["VTab"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_18__["VTabs"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/default.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=style&index=0&id=06bc2b2d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_06bc2b2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=template&id=06bc2b2d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/default.vue?vue&type=template&id=06bc2b2d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_06bc2b2d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);