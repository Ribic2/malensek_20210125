(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/errors/empty.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
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
  props: ["errorText"],
  name: "error",
  data: function data() {
    return {
      errorIcon: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiEmoticonSadOutline"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kosarica_items_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kosarica/items.vue */ "./resources/js/pages/kosarica/items.vue");
/* harmony import */ var _kosarica_credentials_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kosarica/credentials.vue */ "./resources/js/pages/kosarica/credentials.vue");
/* harmony import */ var _kosarica_paymentMethod_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kosarica/paymentMethod.vue */ "./resources/js/pages/kosarica/paymentMethod.vue");
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
    items: _kosarica_items_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    credentials: _kosarica_credentials_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    paymentMethod: _kosarica_paymentMethod_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      counter: 1,
      check: '',
      dialog: false,
      isGuest: ''
    };
  },
  methods: {
    redirectToFrontPage: function redirectToFrontPage() {
      this.$router.push({
        name: 'index'
      });
    },
    // Checks if user is authenticated (confirmed his mail) and if it is new customer (first order)
    checkUser: function checkUser() {
      if (this.user === null) {
        return false;
      } //&& this.user.isNewCustomer === false && this.user.length > 0
      else if (this.user.isAuth && this.user.isNewCustomer === 0 && this.user.length !== null) {
          return true;
        } else if (this.guest !== null && this.guest.isNewCustomer === 0 && this.guest.isAuth) {
          return true;
        }

      return false;
    }
  },
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    },
    cart: function cart() {
      return this.$store.state.cart.cart;
    },
    guest: function guest() {
      return this.$store.state.user.guest;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_errors_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/errors/empty */ "./resources/js/pages/errors/empty.vue");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
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
    empty: _pages_errors_empty__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      error: false,
      add: _mdi_js__WEBPACK_IMPORTED_MODULE_2__["mdiPlus"],
      minus: _mdi_js__WEBPACK_IMPORTED_MODULE_2__["mdiMinus"]
    };
  },
  methods: {
    /**
     * Removes item from cart array
     * @param item it item object
     */
    deleteCartProduct: function deleteCartProduct(item) {
      var _this = this;

      // If user is not logged in, then localstorage/state is modified
      // Else it updates database
      if (this.user.length === 0) {
        this.cart.forEach(function (element, index) {
          if (element === item) {
            _this.$store.state.cart.cart.splice(index, 1);
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.$store.state.cart.cart));
      } else {
        _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].deleteFromCart(item.itemId).then(function () {
          _this.$store.dispatch('getCart');
        });
      }
    },

    /**
     * Sets quantity to provided quantity
     * @param id item id
     * @param quantityChange quantity of an item in user's cart to change to
     */
    changeQuantityCustom: function changeQuantityCustom(id, quantityChange) {
      var _this2 = this;

      console.log(quantityChange); // Checks if given input is bigger than 0

      if (quantityChange > 0) {
        this.$store.state.cart.cart.forEach(function (element) {
          if (element.items.id === id) {
            element.quantity = parseInt(quantityChange);
          }
        });
        var data = {
          quantity: quantityChange,
          cart: this.cart ? this.cart : null,
          token: this.user.token ? this.user.token : null
        };
        _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].changeQuantityCustom(id, data).then(function (response) {
          // If given value is bigger than current stock then it sets quantity to current item stock
          if (response.data.id) {
            _this2.$store.dispatch('updateQuantity', {
              id: response.data.id,
              quantity: response.data.quantity
            });
          }
        }); // Re-stores everything to localstorage

        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    },

    /**
     * Changes quantity for registered user
     * @param item is item object
     * @param quantityChange
     */
    changeQuantity: function changeQuantity(item, quantityChange) {
      var _this3 = this;

      // Checks if user is guest
      if (this.user.length === 0) {
        this.cart.forEach(function (element) {
          if (element === item) {
            // Check if quantity is getting incremented or decremented
            if (element.quantity + quantityChange <= element.items.quantity && element.quantity + quantityChange > 0) {
              element.quantity += quantityChange;
            }
          }
        });
        localStorage.setItem('cart', JSON.stringify(this.$store.state.cart.cart));
      } else {
        if (quantityChange === 1) {
          this.$store.state.cart.cart.forEach(function (element) {
            if (element === item) {
              if (element.items.quantity >= element.quantity + 1) {
                element.quantity = parseInt(element.quantity) + 1;
                _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].changeCartItemQuantity(item.itemId, {
                  quantity: quantityChange
                });
              }
            }
          });
        } else if (quantityChange === -1) {
          this.$store.state.cart.cart.forEach(function (element) {
            if (element === item) {
              if (element.quantity - 1 > 0) {
                element.quantity = parseInt(element.quantity) - 1;
                _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].changeCartItemQuantity(item.itemId, {
                  quantity: quantityChange
                });
              }
            }
          });
        } else if (quantityChange > 1) {
          _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].changeCartItemQuantity(item.itemId, {
            quantity: quantityChange
          }).then(function (response) {
            // If id of an item is returned, it means that given quantity was biggest than stock quantity
            if (response.data.id) {
              _this3.$store.dispatch('updateQuantity', {
                id: response.data.id,
                quantity: response.data.quantity
              });
            } else {
              _this3.$store.dispatch('updateQuantity', {
                id: item.itemId,
                quantity: quantityChange
              });
            }
          });
        }
      }
    }
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart.cart;
    },
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#icon {\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { "fill-height": "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { attrs: { elevation: "0" } },
                [
                  _c(
                    "v-card-actions",
                    [
                      _c("v-icon", { attrs: { size: "100", id: "icon" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.errorIcon) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(_vm.errorText))
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-stepper",
        {
          model: {
            value: _vm.counter,
            callback: function($$v) {
              _vm.counter = $$v
            },
            expression: "counter"
          }
        },
        [
          _c(
            "v-stepper-header",
            [
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.counter > 1, step: "1" } },
                [_vm._v("Košarica")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.counter > 2, step: "2" } },
                [_vm._v("Naslov")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-stepper-step", { attrs: { step: "3" } }, [
                _vm._v("Način dostave in plačila")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-stepper-items",
            [
              _c(
                "v-stepper-content",
                { attrs: { step: "1" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mb-12",
                      attrs: { elevation: "0", "min-height": "60vh" }
                    },
                    [_c("items")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.cart.length > 0
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "float-right",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.checkUser()
                                ? (_vm.counter = 3)
                                : (_vm.counter = 2)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Nadaljuj\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "2" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mb-12",
                      attrs: { "min-height": "60vh", elevation: "0" }
                    },
                    [_c("credentials")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.counter = 1
                        }
                      }
                    },
                    [_vm._v("Nazaj\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "float-right",
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          return _vm.redirectToFrontPage()
                        }
                      }
                    },
                    [_vm._v("Prekini\n                ")]
                  ),
                  _vm._v(" "),
                  _vm.checkUser()
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "float-right",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.counter = 3
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Nadaljuj\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "3" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mb-12",
                      attrs: { elevation: 0, "min-height": "60vh" }
                    },
                    [_c("paymentMethod")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.checkUser()
                            ? (_vm.counter = 1)
                            : (_vm.counter = 2)
                        }
                      }
                    },
                    [_vm._v("Nazaj\n                ")]
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
        "v-dialog",
        {
          attrs: { width: "400" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "div",
                { attrs: { id: "iconHolder" } },
                [
                  _c("v-icon", { attrs: { size: "250", color: "green" } }, [
                    _vm._v(
                      "mdi-checkbox-marked-circle-outline\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", { attrs: { id: "cardText" } }, [
                _vm._v("Oddaja uspešno oddana!")
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _vm.cart.length == 0
        ? _c(
            "v-row",
            [
              _c("empty", {
                attrs: { icon: "mdi-cart", "error-text": "Košarica je prazna!" }
              })
            ],
            1
          )
        : _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                _vm._l(_vm.cart, function(item) {
                  return _c(
                    "v-card",
                    {
                      key: item.id,
                      staticClass: "mt-3",
                      attrs: { "min-height": "200" }
                    },
                    [
                      _c(
                        "v-row",
                        { staticClass: "p-3" },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: { cols: "12", md: "2", lg: "2", xl: "2" }
                            },
                            [
                              _c("v-img", {
                                staticClass: "productImg",
                                attrs: {
                                  "aspect-ratio": 4 / 3,
                                  src:
                                    "storage" +
                                    item.items.itemImgDir +
                                    "/" +
                                    item.items.itemImg,
                                  alt: "Slika ne obstaja"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xl: "2", lg: "2" } },
                            [
                              _c("p", { staticClass: "title" }, [
                                _vm._v("Ime izdelka")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "headline" }, [
                                _vm._v(_vm._s(item.items.itemName))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xl: "2", lg: "2" } },
                            [
                              _c("p", { staticClass: "title" }, [
                                _vm._v("Količina")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "headline" }, [
                                _vm._v(_vm._s(item.quantity))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xl: "2", lg: "2" } },
                            [
                              _c("p", { staticClass: "title" }, [
                                _vm._v("Cena izdelka")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "headline" }, [
                                _vm._v(
                                  _vm._s(
                                    parseFloat(item.items.itemPrice).toFixed(2)
                                  ) + " €"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", xl: "2", lg: "2" } },
                            [
                              _c("p", { staticClass: "title" }, [
                                _vm._v("Skupna cena")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "headline" }, [
                                _vm._v(
                                  "Cena: " +
                                    _vm._s(
                                      parseFloat(
                                        item.items.itemPrice * item.quantity
                                      ).toFixed(2)
                                    ) +
                                    "\n                            €"
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-btn-toggle",
                                {
                                  staticClass:
                                    "quantityChangerHolder mb-1 mt-5",
                                  attrs: { rounded: "" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { height: "56" },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeQuantity(item, 1)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v(_vm._s(_vm.add))])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-text-field",
                                    {
                                      staticClass: "quantityField",
                                      attrs: {
                                        flat: "",
                                        outlined: "",
                                        value: item.quantity
                                      },
                                      on: {
                                        focusout: function($event) {
                                          return _vm.changeQuantityCustom(
                                            item.items.id,
                                            item.quantity
                                          )
                                        }
                                      },
                                      model: {
                                        value: item.quantity,
                                        callback: function($$v) {
                                          _vm.$set(item, "quantity", $$v)
                                        },
                                        expression: "item.quantity"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(item.quantity) +
                                          "\n\n\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { height: "56" },
                                      on: {
                                        click: function($event) {
                                          return _vm.changeQuantity(item, -1)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v(_vm._s(_vm.minus))])],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-1 mt-5",
                                  attrs: {
                                    color: "error",
                                    width: "90%",
                                    block: _vm.$vuetify.breakpoint.mobile
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteCartProduct(item)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            izbriši\n                        "
                                  )
                                ]
                              )
                            ],
                            1
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
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/errors/empty.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/errors/empty.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty.vue?vue&type=template&id=3cd2b1dc& */ "./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc&");
/* harmony import */ var _empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.vue?vue&type=script&lang=js& */ "./resources/js/pages/errors/empty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/errors/empty.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/errors/empty.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/errors/empty.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./empty.vue?vue&type=template&id=3cd2b1dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/errors/empty.vue?vue&type=template&id=3cd2b1dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_empty_vue_vue_type_template_id_3cd2b1dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/kosarica/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/kosarica/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7a1c401a&scoped=true& */ "./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VStepper */ "./node_modules/vuetify/lib/components/VStepper/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a1c401a",
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VStepper: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepper"],VStepperContent: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperContent"],VStepperHeader: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperHeader"],VStepperItems: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperItems"],VStepperStep: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/kosarica/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7a1c401a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/index.vue?vue&type=template&id=7a1c401a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7a1c401a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/kosarica/items.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/kosarica/items.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.vue?vue&type=template&id=747f77e1&scoped=true& */ "./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true&");
/* harmony import */ var _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.vue?vue&type=script&lang=js& */ "./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtnToggle */ "./node_modules/vuetify/lib/components/VBtnToggle/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "747f77e1",
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VBtnToggle: vuetify_lib_components_VBtnToggle__WEBPACK_IMPORTED_MODULE_5__["VBtnToggle"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/kosarica/items.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/items.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./items.vue?vue&type=template&id=747f77e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/kosarica/items.vue?vue&type=template&id=747f77e1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_items_vue_vue_type_template_id_747f77e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);