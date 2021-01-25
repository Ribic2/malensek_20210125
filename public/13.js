(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Reviews.vue",
  data: function data() {
    return {
      reviews: [],
      comment: null,
      rating: null,
      id: this.$route.params.id
    };
  },
  methods: {
    getReviews: function getReviews() {
      var _this = this;

      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getReviews(this.id).then(function (results) {
        _this.reviews = results.data;
      });
    },
    addReview: function addReview() {
      var _this2 = this;

      var data = {
        comment: this.comment,
        rating: this.rating
      };
      _services_api__WEBPACK_IMPORTED_MODULE_0__["default"].addReview(this.id, data).then(function (response) {
        _this2.getReviews();
      });
    }
  },
  mounted: function mounted() {
    this.getReviews();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/View.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Item/View.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reviews */ "./resources/js/pages/Item/Reviews.vue");
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.js */ "./resources/js/services/api.js");
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Reviews: _Reviews__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      product: '',
      images: [],
      selectedImage: null,
      favouritesButton: _mdi_js__WEBPACK_IMPORTED_MODULE_2__["mdiStar"]
    };
  },
  methods: {
    getItemData: function getItemData() {
      var _this = this;

      var id = this.$route.params.id;
      _services_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProductData(id).then(function (results) {
        _this.product = results.data.item;
        _this.images = results.data.images;
        console.log(results.data.images);
        _this.selectedImage = '/storage/' + results.data.images[0];
      });
    },

    /**
     * Sends request to Vuex that will store newly added favourite item
     * @param {OBJECT} e
     */
    addToFavourites: function addToFavourites(e) {
      if (this.$store.state.user.user === null) {
        this.$store.dispatch('addToFavouritesGuest', {
          items: e
        });
      } else {
        this.$store.dispatch('addToFavourites', e.id);
      }
    },

    /**
     * Adds product to cart
     */
    addToCart: function addToCart(product) {
      // If user is not registered, if not it will call function for guest
      // otherwise it will call function to add item to cart for logged in user
      if (this.$store.state.user.user === null) {
        var data = {
          items: product,
          quantity: 1
        };
        return this.$store.dispatch('addItemToCartGuest', data);
      } else {
        var _data = {
          id: product.id,
          quantity: 1
        };
        return this.$store.dispatch('addItemToCart', _data);
      }
    },
    selectImage: function selectImage(e) {
      this.selectedImage = e;
    }
  },
  mounted: function mounted() {
    this.getItemData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { attrs: { "min-height": "350" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Dodaj oceno\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    [
                      _c(
                        "div",
                        [
                          _c("v-rating", {
                            model: {
                              value: _vm.rating,
                              callback: function($$v) {
                                _vm.rating = $$v
                              },
                              expression: "rating"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-textarea", {
                            attrs: { outlined: "", "no-resize": "" },
                            model: {
                              value: _vm.comment,
                              callback: function($$v) {
                                _vm.comment = $$v
                              },
                              expression: "comment"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                id: "addReviewButton",
                                color: "primary"
                              },
                              on: { click: _vm.addReview }
                            },
                            [_vm._v("Oddaj oceno\n                        ")]
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.reviews, function(review) {
          return _c(
            "v-col",
            { key: review.id, attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { attrs: { height: "200" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(review.user.Name) +
                        " " +
                        _vm._s(review.user.Surname) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-rating", {
                        attrs: { readonly: "" },
                        model: {
                          value: review.rating,
                          callback: function($$v) {
                            _vm.$set(review, "rating", $$v)
                          },
                          expression: "review.rating"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(review.comment) +
                        "\n                "
                    )
                  ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", xs: "12", sm: "12", md: "12", lg: "6" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-responsive",
                        { attrs: { "aspect-ratio": 16 / 9, height: "500px" } },
                        [
                          _c("v-img", {
                            attrs: {
                              src: _vm.selectedImage,
                              height: "100%",
                              width: "100%"
                            }
                          })
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
                "v-row",
                _vm._l(_vm.images, function(image, i) {
                  return _c(
                    "v-col",
                    {
                      key: i,
                      staticClass: "images",
                      attrs: { cols: "2", md: "3", sm: "3" }
                    },
                    [
                      _c("v-img", {
                        attrs: { src: "/storage/" + image },
                        on: {
                          click: function($event) {
                            return _vm.selectImage("/storage/" + image)
                          }
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { "min-height": "200", elevation: "0" } },
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "font-weight-bold" },
                            [_c("h1", [_vm._v(_vm._s(_vm.product.itemName))])]
                          ),
                          _vm._v(" "),
                          _c("v-card-text", { staticClass: "black--text" }, [
                            _vm._v(
                              _vm._s(_vm.product.itemDescription) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("h3", { staticClass: "mt-2" }, [
                                      _vm._v(
                                        "€" +
                                          _vm._s(_vm.product.itemPrice) +
                                          ".00"
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    [
                                      _c("v-rating", {
                                        attrs: { readonly: "" },
                                        model: {
                                          value: _vm.product.OverallRating,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.product,
                                              "OverallRating",
                                              $$v
                                            )
                                          },
                                          expression: "product.OverallRating"
                                        }
                                      })
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
                            "v-card-actions",
                            [
                              _vm.product.delisted === 0 &&
                              _vm.product.quantity > 0 &&
                              !_vm.$store.getters.setCart(_vm.product.id)
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-2",
                                      attrs: { elevation: "0", ripple: false },
                                      on: {
                                        click: function($event) {
                                          return _vm.addToCart(_vm.product)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "V košarico\n                            "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.product.delisted === 0 &&
                              _vm.product.quantity > 0 &&
                              _vm.$store.getters.setCart(_vm.product.id)
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-2",
                                      attrs: { elevation: "0", ripple: false },
                                      on: {
                                        click: function($event) {
                                          return _vm.addToCart(_vm.product)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Izdelek je že v košarici\n                            "
                                      )
                                    ]
                                  )
                                : _vm.product.quantity <= 0 ||
                                  _vm.product.delisted === 1
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        elevation: "0",
                                        disabled: "",
                                        ripple: false
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Izdelka ni na voljo\n                            "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addToFavourites(_vm.product)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: this.$store.getters.setFavourites(
                                          _vm.product.id
                                        )
                                          ? "blue"
                                          : null
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.favouritesButton))]
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
      ),
      _vm._v(" "),
      _c("v-row", [_c("Reviews")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Item/Reviews.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/Item/Reviews.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reviews.vue?vue&type=template&id=42fed8f0&scoped=true& */ "./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true&");
/* harmony import */ var _Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reviews.vue?vue&type=script&lang=js& */ "./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VRating */ "./node_modules/vuetify/lib/components/VRating/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42fed8f0",
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VRating: vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_8__["VRating"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Item/Reviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/Reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=template&id=42fed8f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/Reviews.vue?vue&type=template&id=42fed8f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_42fed8f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Item/View.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Item/View.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=7de2c888& */ "./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/pages/Item/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VRating */ "./node_modules/vuetify/lib/components/VRating/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__["VImg"],VRating: vuetify_lib_components_VRating__WEBPACK_IMPORTED_MODULE_9__["VRating"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_10__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Item/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Item/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Item/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=7de2c888& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Item/View.vue?vue&type=template&id=7de2c888&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_7de2c888___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);