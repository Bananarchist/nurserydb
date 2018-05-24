/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableView_vue_vue_type_template_id_89b590dc__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableView_vue_vue_type_script_lang_js__ = __webpack_require__(4);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__TableView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__TableView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__TableView_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__TableView_vue_vue_type_template_id_89b590dc__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__TableView_vue_vue_type_template_id_89b590dc__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('89b590dc', component.options)
    } else {
      api.reload('89b590dc', component.options)
    }
    module.hot.accept("./TableView.vue?vue&type=template&id=89b590dc", function () {
      api.rerender('89b590dc', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/TableView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(1);

var _TableView2 = _interopRequireDefault(_TableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        tableView: _TableView2.default
    },
    data: function data() {
        var _ref;

        return _ref = {
            loading: false,
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: [],
            category: "",
            size: "",
            wildlife: "",
            description: ""
        }, _defineProperty(_ref, "description", ""), _defineProperty(_ref, "all_collections", []), _ref;
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.loading = true;
            return fetch("/species/" + this.id, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                return fetch("species/" + _this.id + "/collections", {
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    method: "GET"
                }).then(function (data2) {
                    return data2.json();
                }).then(function (data2) {
                    data[0].all_collections = data2;
                    _this.loading = false;
                    return data[0];
                });
            }).then(function (data) {
                _this.taxa = data.taxa;
                _this.common = data.common;
                _this.tags = data.tags;
                _this.category = data.category;
                _this.size = data.size;
                _this.wildlife = data.wildlife;
                _this.description = data.description;
                _this.description = data.description;
                _this.all_collections = data.all_collections;
            });
        },
        authenticated: function authenticated() {
            return true;
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EditableRow = __webpack_require__(29);

var _EditableRow2 = _interopRequireDefault(_EditableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        editableRow: _EditableRow2.default
    },
    props: {
        collection: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        table: {
            type: String,
            default: ""
        },
        headers: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            sort: {
                direction: 1,
                key: ""
            },
            filter: {
                on: "",
                key: ""
            },
            limit: {
                start: 0,
                run: 100
            },
            current_page: 0
        };
    },

    computed: {
        columns: function columns() {
            return this.headers.length ? this.headers : Object.keys(this.collection.length ? this.collection[0] : []);
        },
        filteredList: function filteredList() {
            var _this = this;

            if (this.filter.on && this.filter.key) {
                return this.collection.filter(function (item) {
                    return item[_this.filter.key].toString().match(_this.filter.on);
                });
            }
            return this.collection;
        },
        list: function list() {
            var l = this.filteredList;
            if (this.limit.run) {
                l = l.slice(this.limit.start, this.limit.start + this.limit.run);
            }
            return l;
        },
        pages: function pages() {
            return Math.ceil(this.filteredList.length / this.limit.run);
        }
    },
    methods: {
        goToPage: function goToPage(page) {
            this.current_page = page;
            this.limit.start = page * this.limit.run;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataCell = __webpack_require__(32);

var _DataCell2 = _interopRequireDefault(_DataCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "editable-row",
    components: {
        dataCell: _DataCell2.default
    },
    props: ["columns", "row_data", "table"],
    data: function data() {
        return {
            editing: false

        };
    },

    methods: {
        isIDLink: function isIDLink(key) {
            return key.match(/id$/);
        },
        tableFor: function tableFor(key) {
            //janky af
            var m_t = key.match(/id$/);
            if (m_t && m_t.index) {
                return key.match(/^(\S+)_/)[1];
            } else {
                return this.table;
            }
        }
    }
}; //
//
//
//
//
//

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["contents", "column", "list", "editing"],
    data: function data() {
        return {};
    },
    computed: {
        //edit mode...
        isID: function isID() {
            return !!this.column.match(/id$/);
        }
    },
    methods: {
        swapEditMode: function swapEditMode() {
            this.editing = !this.editing;
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {



































/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(1);

var _TableView2 = _interopRequireDefault(_TableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        collectionList: _TableView2.default
    },
    data: function data() {
        return {
            loaded: false,
            list: [],
            cat: this.$route.params.id
        };
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.loaded = false;
            fetch("/category/" + this.cat, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this.list = data;
                _this.loaded = true;
            });
        }
    }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            id: parseInt(this.$route.params.id),
            taxa: "",
            common: "",
            tags: "",
            category: "",
            size: "",
            added_to_inventory: "",
            price: "",
            for_sale: 0,
            quantity: 0,
            species_id: 0,
            credit: "",
            source: "",
            location: ""
        };
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            fetch("/collection/" + this.id, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this.taxa = data[0].taxa;
                _this.common = data[0].common;
                _this.tags = data[0].tags;
                _this.category = data[0].category;
                _this.size = data[0].size;
                _this.quantity = data[0].quantity;
                _this.for_sale = data[0].for_sale;
                _this.price = data[0].price;
                _this.added_to_inventory = data[0].added_to_inventory;
                _this.species_id = data[0].species_id;
                _this.credit = data[0].credit;
                _this.source = data[0].source;
                _this.location = data[0].location;
                return data[0];
            });
        },
        authenticated: function authenticated() {
            return true;
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(1);

var _TableView2 = _interopRequireDefault(_TableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        collectionList: _TableView2.default
    },
    data: function data() {
        return {
            loaded: false,
            species: []
        };
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.loaded = false;
            fetch("/species/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this.species = data;
                _this.loaded = true;
            });
        }
    }
}; //
//
//
//
//
//
//

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(1);

var _TableView2 = _interopRequireDefault(_TableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        collectionList: _TableView2.default
    },
    data: function data() {
        return {
            loaded: false,
            collections: []
        };
    },
    created: function created() {
        this.fetchData();
    },

    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.loaded = false;
            fetch("/collection/", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this.collections = data;
                _this.loaded = true;
            });
        }
    }
}; //
//
//
//
//
//
//

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["collection"],
    data: function data() {
        return {
            formData: {
                size: "",
                //added_to_inventory: "",
                price: "",
                for_sale: 0,
                quantity: 0,
                species_id: 0,
                credit: "",
                source: "",
                location: ""
            },
            _tags: [],
            editing: !!this.$route.params.id,
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false,
            species: []
        };
    },
    created: function created() {
        var _this = this;

        var sequencer = Promise.resolve();
        if (this.editing && this.$route.params.id) {
            //fetch collection
            sequencer.then(function () {
                return _this.fetchCollection(_this.$route.params.id);
            });
        }
        //fetch species list
        sequencer.then(function () {
            return _this.fetchSpecies();
        });
    },

    methods: {
        fetchCollection: function fetchCollection() {
            var _this2 = this;

            this.loaded_c = false;
            fetch("/collection/" + this.id, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                //this.formData = Object.assign({}, this.formData, data[0]);
                /*                this.formData.category = data[0].category;
                                this.formData.size = data[0].size;
                                this.formData.quantity = data[0].quantity;
                                this.formData.for_sale = data[0].for_sale;
                                this.formData.price = data[0].price;
                                this.formData.added_to_inventory = data[0].added_to_inventory;
                                this.formData.species_id = data[0].species_id;
                                this.formData.credit = data[0].credit;
                                this.formData.source = data[0].source;
                                this.formData.location = data[0].location;*/
                Object.keys(_this2.formData).forEach(function (k) {
                    if (!!data[0][k]) {
                        _this2.formData[k] = data[0][k];
                    }
                });
                _this2.loaded_c = true;
                return data[0];
            });
        },
        fetchSpecies: function fetchSpecies() {
            var _this3 = this;

            this.loaded_s = false;
            fetch("/species/short", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this3.species = data;
                _this3.loaded_s = true;
            });
        },
        valid: function valid() {
            return false; //lol
        },
        saveChanges: function saveChanges() {
            var _this4 = this;

            if (this.valid()) {
                var method = this.editing ? "POST" : "PUT";
                var url = "/collection/" + (this.editing ? this.id : "");
                this.saving = true;
                fetch(url, {
                    method: method,
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                }).then(function (data) {
                    return data.json();
                }).then(function (data) {
                    console.log(data);
                    //get id
                    //redirect to collection view/id
                    _this4.saving = false;
                });
            }
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["species"],
    data: function data() {
        return {
            formData: {
                common: "",
                //added_to_inventory: "",
                taxa: "",
                size: "",
                category: "",
                wildlife: "",
                description: ""
            },
            _tags: [],
            editing: !!this.$route.params.id,
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false
        };
    },

    computed: {
        tags: {
            get: function get() {
                return this._tags.join();
            },
            set: function set(v) {
                if (typeof v == "string") {
                    this._tags = v.split(",");
                } else {
                    this._tags = this._tags;
                }
            }
        }
    },
    created: function created() {
        var _this = this;

        var sequencer = Promise.resolve();
        if (this.editing && this.$route.params.id) {
            sequencer.then(function () {
                return _this.fetchSpecies();
            });
            //don't need collections yet
            //sequencer.then(
            //    () => this.fetchCollection(this.$route.params.id)
            //)
        }
    },

    methods: {
        fetchCollection: function fetchCollection() {
            var _this2 = this;

            this.loaded_c = false;
            fetch("/collection/" + this.id, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                //this.formData = Object.assign({}, this.formData, data[0]);
                /*                this.formData.category = data[0].category;
                                this.formData.size = data[0].size;
                                this.formData.quantity = data[0].quantity;
                                this.formData.for_sale = data[0].for_sale;
                                this.formData.price = data[0].price;
                                this.formData.added_to_inventory = data[0].added_to_inventory;
                                this.formData.species_id = data[0].species_id;
                                this.formData.credit = data[0].credit;
                                this.formData.source = data[0].source;
                                this.formData.location = data[0].location;*/
                Object.keys(_this2.formData).forEach(function (k) {
                    if (!!data[0][k]) {
                        _this2.formData[k] = data[0][k];
                    }
                });
                _this2.loaded_c = true;
                return data[0];
            });
        },
        fetchSpecies: function fetchSpecies() {
            var _this3 = this;

            this.loaded_s = false;
            fetch("/species/" + this.id, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "GET"
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                //this.species = data;
                Object.keys(_this3.formData).forEach(function (k) {
                    if (!!data[0][k]) {
                        _this3.formData[k] = data[0][k];
                    }
                });
                _this3.tags = data[0].tags || "";
                _this3.loaded_s = true;
            });
        },
        valid: function valid() {
            return false; //lol
        },
        saveChanges: function saveChanges() {
            var _this4 = this;

            if (this.valid()) {
                var method = this.editing ? "POST" : "PUT";
                var url = "/species/" + (this.editing ? this.id : "");
                this.saving = true;
                fetch(url, {
                    method: method,
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                }).then(function (data) {
                    return data.json();
                }).then(function (data) {
                    console.log(data);
                    //get id
                    //redirect to collection view/id
                    _this4.saving = false;
                });
            }
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SpeciesView = __webpack_require__(24);

var _SpeciesView2 = _interopRequireDefault(_SpeciesView);

var _CategoryView = __webpack_require__(36);

var _CategoryView2 = _interopRequireDefault(_CategoryView);

var _CollectionView = __webpack_require__(39);

var _CollectionView2 = _interopRequireDefault(_CollectionView);

var _AllSpecies = __webpack_require__(42);

var _AllSpecies2 = _interopRequireDefault(_AllSpecies);

var _AllCollections = __webpack_require__(45);

var _AllCollections2 = _interopRequireDefault(_AllCollections);

var _CollectionEdit = __webpack_require__(48);

var _CollectionEdit2 = _interopRequireDefault(_CollectionEdit);

var _SpeciesEdit = __webpack_require__(51);

var _SpeciesEdit2 = _interopRequireDefault(_SpeciesEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: "/collection/all", component: _AllCollections2.default, name: "view_all_collections" }, { path: "/species/all", component: _AllSpecies2.default, name: "view_all_species" }, { path: "/species/:id", component: _SpeciesView2.default, name: "view_species_by_id" }, { path: "/collection/:id", component: _CollectionView2.default, name: "view_collection_by_id" }, { path: "/species/category/:id", component: _CategoryView2.default, name: "view_category" }, { path: "/collection/:id/edit", component: _CollectionEdit2.default, name: "edit_collection" }, { path: "/species/:id/edit", component: _SpeciesEdit2.default, name: "edit_species" }];

var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    el: "#nursery",
    data: {
        links: [{
            title: "All Collections",
            name: "view_all_collections"
        }, {
            title: "All Species",
            name: "view_all_species"
        }, {
            title: "Add Species",
            name: "edit_species"
        }, {
            title: "Add Collection",
            name: "edit_collection"
        }],
        inputPass: ""
    },
    methods: {
        authenticate: function authenticate() {
            //check with server if pass correct
            fetch("/authenticate", {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ password: "1994" })
            }).then(function (data) {
                sessionStorage.setItem("pass", "1994");
            }).catch(function (data) {
                console.log(data);
            });
        }
    },
    computed: {
        authenticated: function authenticated() {
            return !!sessionStorage.getItem("pass");
        }
    },
    router: router
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpeciesView_vue_vue_type_template_id_7ea05d80__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpeciesView_vue_vue_type_script_lang_js__ = __webpack_require__(2);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__SpeciesView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__SpeciesView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__SpeciesView_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__SpeciesView_vue_vue_type_template_id_7ea05d80__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__SpeciesView_vue_vue_type_template_id_7ea05d80__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('7ea05d80', component.options)
    } else {
      api.reload('7ea05d80', component.options)
    }
    module.hot.accept("./SpeciesView.vue?vue&type=template&id=7ea05d80", function () {
      api.rerender('7ea05d80', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/SpeciesView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__["b"]; });


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "speciesinfo" } },
    [
      _c("h2", [_vm._v(_vm._s(_vm.taxa))]),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(_vm.common))]),
      _vm._v(" "),
      _c(
        "h5",
        [
          _c(
            "router-link",
            { attrs: { to: "/species/category/" + _vm.category } },
            [_vm._v(_vm._s(_vm.category))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " " + _vm._s(_vm.description) + "\n    Size: " + _vm._s(_vm.size)
        ),
        _c("br"),
        _vm._v("\n    Wildlife\n    ")
      ]),
      _c("p", [_vm._v(_vm._s(_vm.wildlife))]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "tags" } },
        _vm._l(_vm.tags, function(t) {
          return _c("a", { attrs: { href: "tags/" + t } }, [_vm._v("t")])
        })
      ),
      _vm._v(" "),
      _vm.authenticated
        ? _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "edit_species", params: { id: _vm.id } } }
            },
            [_vm._v("Edit this species")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("h3", [_vm._v("Collections in inventory")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main_view" },
        [
          _c("table-view", {
            attrs: { collection: _vm.all_collections, table: "collection" }
          })
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__["b"]; });


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table table-hover" }, [
      _c("thead", { staticClass: "thead-light sticky-top" }, [
        _c(
          "tr",
          { staticClass: "sticky-top" },
          _vm._l(_vm.columns, function(key) {
            return _c(
              "th",
              {
                key: key,
                staticClass: "sticky-top",
                class: { "bg-info": _vm.filter.key == key }
              },
              [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.filter.key = _vm.filter.key == key ? "" : key
                      }
                    }
                  },
                  [_vm._v(_vm._s(key))]
                )
              ]
            )
          })
        ),
        _vm._v(" "),
        _vm.filter.key
          ? _c("tr", { staticClass: "sticky-top p-0" }, [
              _c("th", { attrs: { colspan: _vm.columns.length } }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.on,
                      expression: "filter.on"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "search_filter", type: "text" },
                  domProps: { value: _vm.filter.on },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.filter, "on", $event.target.value)
                    }
                  }
                })
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.list, function(c, index) {
          return _c("editable-row", {
            key: c.id,
            attrs: { columns: _vm.columns, row_data: c, table: _vm.table }
          })
        })
      )
    ]),
    _vm._v(" "),
    _vm.pages
      ? _c(
          "ul",
          { staticClass: "pagination justify-content-center" },
          [
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: !_vm.current_page }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        _vm.goToPage(_vm.current_page - 1)
                      }
                    }
                  },
                  [_vm._v("Previous")]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(Array(_vm.pages), function(_, page) {
              return _c(
                "li",
                {
                  class: { active: _vm.current_page == page, "page-item": true }
                },
                [
                  _c(
                    "a",
                    {
                      key: page,
                      staticClass: "page-link",
                      on: {
                        click: function($event) {
                          _vm.goToPage(page)
                        }
                      }
                    },
                    [_vm._v(_vm._s(page + 1))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: _vm.current_page + 1 == _vm.pages }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    on: {
                      click: function($event) {
                        _vm.goToPage(_vm.current_page + 1)
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              ]
            )
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EditableRow_vue_vue_type_template_id_51d47595__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditableRow_vue_vue_type_script_lang_js__ = __webpack_require__(6);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__EditableRow_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__EditableRow_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__EditableRow_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__EditableRow_vue_vue_type_template_id_51d47595__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__EditableRow_vue_vue_type_template_id_51d47595__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('51d47595', component.options)
    } else {
      api.reload('51d47595', component.options)
    }
    module.hot.accept("./EditableRow.vue?vue&type=template&id=51d47595", function () {
      api.rerender('51d47595', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/EditableRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__["b"]; });


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tr",
    {
      on: {
        dblclick: function($event) {
          _vm.editing = !_vm.editing
        }
      }
    },
    _vm._l(_vm.columns, function(key) {
      return _c("data-cell", {
        key: key,
        attrs: {
          contents: _vm.row_data[key],
          column: key,
          list: _vm.tableFor(key),
          editing: _vm.editing
        }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataCell_vue_vue_type_template_id_490618fd__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataCell_vue_vue_type_script_lang_js__ = __webpack_require__(8);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__DataCell_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__DataCell_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataCell_vue_vue_type_style_index_0_lang_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__DataCell_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__DataCell_vue_vue_type_template_id_490618fd__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__DataCell_vue_vue_type_template_id_490618fd__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('490618fd', component.options)
    } else {
      api.reload('490618fd', component.options)
    }
    module.hot.accept("./DataCell.vue?vue&type=template&id=490618fd", function () {
      api.rerender('490618fd', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/DataCell.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__["b"]; });


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "td",
    [
      _vm.isID
        ? _c(
            "router-link",
            { attrs: { to: "/" + _vm.list + "/" + _vm.contents } },
            [_vm._v(_vm._s(_vm.contents))]
          )
        : _c(
            "div",
            {
              on: {
                dblclick: function($event) {
                  _vm.editing = !_vm.editing
                }
              }
            },
            [
              !_vm.editing
                ? _c("span", [_vm._v(_vm._s(_vm.contents))])
                : _vm._e(),
              _vm._v(" "),
              _vm.editing
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.contents,
                        expression: "contents"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.contents },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.contents = $event.target.value
                      }
                    }
                  })
                : _vm._e()
            ]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css___default.a); 

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CategoryView_vue_vue_type_template_id_2702e594__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CategoryView_vue_vue_type_script_lang_js__ = __webpack_require__(11);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__CategoryView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__CategoryView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__CategoryView_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__CategoryView_vue_vue_type_template_id_2702e594__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__CategoryView_vue_vue_type_template_id_2702e594__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2702e594', component.options)
    } else {
      api.reload('2702e594', component.options)
    }
    module.hot.accept("./CategoryView.vue?vue&type=template&id=2702e594", function () {
      api.rerender('2702e594', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/CategoryView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__["b"]; });


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v(_vm._s(_vm.cat))]),
      _vm._v(" "),
      _vm.loaded
        ? _c("collection-list", {
            attrs: { collection: _vm.list, table: "species" }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loaded ? _c("span", [_vm._v("Loading gimma second...")]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CollectionView_vue_vue_type_template_id_36552cf4__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionView_vue_vue_type_script_lang_js__ = __webpack_require__(13);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__CollectionView_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__CollectionView_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__CollectionView_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__CollectionView_vue_vue_type_template_id_36552cf4__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__CollectionView_vue_vue_type_template_id_36552cf4__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('36552cf4', component.options)
    } else {
      api.reload('36552cf4', component.options)
    }
    module.hot.accept("./CollectionView.vue?vue&type=template&id=36552cf4", function () {
      api.rerender('36552cf4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/CollectionView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__["b"]; });


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "collectioninfo" } },
    [
      _c(
        "h2",
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "view_species_by_id",
                  params: { id: _vm.species_id }
                }
              }
            },
            [
              _vm._v(_vm._s(_vm.common) + " ("),
              _c("i", [_vm._v(_vm._s(_vm.taxa))]),
              _vm._v(")")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "h5",
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "view_category",
                  params: { category: _vm.category }
                }
              }
            },
            [_vm._v(_vm._s(_vm.category))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v(_vm._s(_vm.size))]),
            _c("td", [_vm._v(_vm._s(_vm.price))]),
            _c("td", [_vm._v(_vm._s(_vm.for_sale))]),
            _c("td", [_vm._v(_vm._s(_vm.quantity))])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.authenticated
        ? _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "edit_collection", params: { id: _vm.id } } }
            },
            [_vm._v("Edit this collection")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Size")]),
        _c("th", [_vm._v("Price")]),
        _c("th", [_vm._v("For Sale")]),
        _c("th", [_vm._v("Total")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AllSpecies_vue_vue_type_template_id_60b8af6c__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AllSpecies_vue_vue_type_script_lang_js__ = __webpack_require__(15);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__AllSpecies_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__AllSpecies_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__AllSpecies_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__AllSpecies_vue_vue_type_template_id_60b8af6c__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__AllSpecies_vue_vue_type_template_id_60b8af6c__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('60b8af6c', component.options)
    } else {
      api.reload('60b8af6c', component.options)
    }
    module.hot.accept("./AllSpecies.vue?vue&type=template&id=60b8af6c", function () {
      api.rerender('60b8af6c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/AllSpecies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__["b"]; });


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loaded
        ? _c("collection-list", {
            attrs: { collection: _vm.species, table: "species" }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loaded ? _c("span", [_vm._v("Loading gimma sec...")]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AllCollections_vue_vue_type_template_id_039d3345__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AllCollections_vue_vue_type_script_lang_js__ = __webpack_require__(17);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__AllCollections_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__AllCollections_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__AllCollections_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__AllCollections_vue_vue_type_template_id_039d3345__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__AllCollections_vue_vue_type_template_id_039d3345__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('039d3345', component.options)
    } else {
      api.reload('039d3345', component.options)
    }
    module.hot.accept("./AllCollections.vue?vue&type=template&id=039d3345", function () {
      api.rerender('039d3345', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/AllCollections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__["b"]; });


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loaded
        ? _c("collection-list", {
            attrs: { collection: _vm.collections, table: "collection" }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loaded ? _c("span", [_vm._v("Loading gimma sec...")]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CollectionEdit_vue_vue_type_template_id_4e8b25d9__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionEdit_vue_vue_type_script_lang_js__ = __webpack_require__(19);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__CollectionEdit_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__CollectionEdit_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__CollectionEdit_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__CollectionEdit_vue_vue_type_template_id_4e8b25d9__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__CollectionEdit_vue_vue_type_template_id_4e8b25d9__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4e8b25d9', component.options)
    } else {
      api.reload('4e8b25d9', component.options)
    }
    module.hot.accept("./CollectionEdit.vue?vue&type=template&id=4e8b25d9", function () {
      api.rerender('4e8b25d9', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/CollectionEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__["b"]; });


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "collectioninfo" } }, [
    this.loaded_s
      ? _c("form", [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "species" } }, [_vm._v("Species")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.species_id,
                    expression: "formData.species_id"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "species" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.formData,
                      "species_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.species, function(s, index) {
                return _c(
                  "option",
                  {
                    attrs: { label: s.taxa + " - " + s.common },
                    domProps: { value: s.id }
                  },
                  [_vm._v(_vm._s(s.taxa) + " - " + _vm._s(s.common))]
                )
              })
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "size" } }, [_vm._v("Potting Size")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.size,
                  expression: "formData.size"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "size", placeholder: "1-gal" },
              domProps: { value: _vm.formData.size },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "size", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "quantity" } }, [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.quantity,
                  expression: "formData.quantity"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "quantity", placeholder: "0" },
              domProps: { value: _vm.formData.quantity },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "quantity", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "for_sale" } }, [_vm._v("For Sale")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.for_sale,
                  expression: "formData.for_sale"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "for_sale", placeholder: "0" },
              domProps: { value: _vm.formData.for_sale },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "for_sale", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "price" } }, [_vm._v("Sale Price")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.price,
                  expression: "formData.price"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "price", placeholder: "$5.00" },
              domProps: { value: _vm.formData.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "price", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "credit" } }, [
              _vm._v("Potter/Salvager/Propagator")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.credit,
                  expression: "formData.credit"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "credit",
                placeholder: "Erica Guttman"
              },
              domProps: { value: _vm.formData.credit },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "credit", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "source" } }, [_vm._v("Plant Source")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.source,
                  expression: "formData.source"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "source",
                placeholder: "Darlin Creek"
              },
              domProps: { value: _vm.formData.source },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "source", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "location" } }, [
              _vm._v("Current Location")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.location,
                  expression: "formData.location"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "location", placeholder: "NPSN" },
              domProps: { value: _vm.formData.location },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "location", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: { click: _vm.saveChanges }
            },
            [_vm._v("Save")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpeciesEdit_vue_vue_type_template_id_4e346bb6__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpeciesEdit_vue_vue_type_script_lang_js__ = __webpack_require__(21);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__SpeciesEdit_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__SpeciesEdit_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__SpeciesEdit_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__SpeciesEdit_vue_vue_type_template_id_4e346bb6__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__SpeciesEdit_vue_vue_type_template_id_4e346bb6__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/Kaz/proj/plandy/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4e346bb6', component.options)
    } else {
      api.reload('4e346bb6', component.options)
    }
    module.hot.accept("./SpeciesEdit.vue?vue&type=template&id=4e346bb6", function () {
      api.rerender('4e346bb6', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "public/vue/SpeciesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__["b"]; });


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "speciesinfo" } }, [
    this.loaded_s
      ? _c("form", [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "taxa" } }, [
              _vm._v("Taxanomical Name")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.taxa,
                  expression: "formData.taxa"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "taxa", placeholder: "Homo sapiens" },
              domProps: { value: _vm.formData.taxa },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "taxa", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "size" } }, [
              _vm._v("Species Full Size")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.size,
                  expression: "formData.size"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "size", placeholder: "1-gal" },
              domProps: { value: _vm.formData.size },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "size", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "formData.category" } }, [
              _vm._v("Category")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.category,
                    expression: "formData.category"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "category" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.formData,
                      "category",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "Perennials, Vines, Ferns" } }, [
                  _vm._v("Perennials, Vines, Ferns")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "Trees & Shrubs" } }, [
                  _vm._v("Trees & Shrubs")
                ]),
                _vm._v(" "),
                _c(
                  "option",
                  { attrs: { value: "Rain Garden Emergents & Perennials" } },
                  [_vm._v("Rain Garden Emergents & Perennials")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "wildlife" } }, [
              _vm._v("Wildlife Interactions")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.wildlife,
                  expression: "formData.wildlife"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "wildlife", placeholder: "Deer will eat these" },
              domProps: { value: _vm.formData.wildlife },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "wildlife", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "description" } }, [
              _vm._v("Species description")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.description,
                  expression: "formData.description"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "description", placeholder: "This plant is pretty" },
              domProps: { value: _vm.formData.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "description", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "tags" } }, [_vm._v("Tags")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tags,
                  expression: "tags"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "tags",
                placeholder: "Waterwise, edible fruit"
              },
              domProps: { value: _vm.tags },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tags = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: { click: _vm.saveChanges }
            },
            [_vm._v("Save")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map