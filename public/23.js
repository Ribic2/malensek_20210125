(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue */ "./resources/js/pages/index/Item.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    item: _Item_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      show: false,
      categories: [],
      selectedItem: null,
      filterEnabled: _mdi_js__WEBPACK_IMPORTED_MODULE_2__["mdiChevronDown"],
      filterDisabled: _mdi_js__WEBPACK_IMPORTED_MODULE_2__["mdiChevronUp"]
    };
  },
  methods: {
    /**
     *  Gets all categories
     */
    getCategories: function getCategories() {
      var _this = this;

      _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories().then(function (response) {
        _this.categories = response.data;
      });
    },

    /**
     *  Calls all items when page is loaded or vuex state is empty
     */
    selectAllItems: function selectAllItems() {
      var _this2 = this;

      if (this.items.length === 0) {
        _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getItemsCustomer().then(function (response) {
          _this2.$store.dispatch('addToItems', response.data);
        });
      }
    },

    /**
     * Method is used for calling all items, it set on a button
     */
    selectAllItemsCategory: function selectAllItemsCategory() {
      var _this3 = this;

      _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getItemsCustomer().then(function (response) {
        _this3.$store.dispatch('addToItems', response.data);
      });
    },
    selectSelectedItems: function selectSelectedItems(category) {
      var _this4 = this;

      var data = {
        category: category
      };
      _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].getSpecificItems(data).then(function (response) {
        _this4.$store.dispatch('addToItems', response.data);
      });
    }
    /**
     * Selects specific items from specific category
     */

  },
  computed: {
    items: function items() {
      return this.$store.state.products.items;
    }
  },
  mounted: function mounted() {
    this.getCategories(), this.selectAllItems();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index/index.vue?vue&type=template&id=aba26008&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index/index.vue?vue&type=template&id=aba26008& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-card",
            { attrs: { color: "#6C3FB8", dark: "" } },
            [
              _c(
                "v-card-actions",
                [
                  _c("v-card-title", [_vm._v("Trgovina")]),
                  _vm._v(" "),
                  _vm.categories.length !== 0
                    ? _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.show = !_vm.show
                            }
                          }
                        },
                        [
                          _c("v-icon", [
                            _vm._v(
                              _vm._s(
                                _vm.show
                                  ? _vm.filterDisabled
                                  : _vm.filterEnabled
                              )
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.categories.length > 0
                ? _c("v-expand-transition", [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.show,
                            expression: "show"
                          }
                        ]
                      },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  rounded: "",
                                  color: "#6C3FB8",
                                  elevation: "0"
                                },
                                on: { click: _vm.selectAllItemsCategory }
                              },
                              [
                                _vm._v(
                                  "\n                            Vsi izdelki\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.categories, function(category, index) {
                              return _c(
                                "v-btn",
                                {
                                  key: index,
                                  staticClass: "ma-2",
                                  attrs: {
                                    rounded: "",
                                    color: "#6C3FB8",
                                    elevation: "0"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.selectSelectedItems(
                                        category.categories
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(category.categories) +
                                      "\n                        "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(_vm.items, function(item) {
              return _c(
                "v-col",
                {
                  key: item.id,
                  attrs: { xl: "3", lg: "4", md: "6", sm: "12", cols: "12" }
                },
                [_c("item", { attrs: { product: item } })],
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

/***/ "./resources/js/pages/index/index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/index/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=aba26008& */ "./resources/js/pages/index/index.vue?vue&type=template&id=aba26008&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VExpandTransition: vuetify_lib_components_transitions__WEBPACK_IMPORTED_MODULE_7__["VExpandTransition"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/index/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/index/index.vue?vue&type=template&id=aba26008&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/index/index.vue?vue&type=template&id=aba26008& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=aba26008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index/index.vue?vue&type=template&id=aba26008&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_aba26008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);