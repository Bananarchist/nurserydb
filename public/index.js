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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/viewVue.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/AllCollections.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/AllCollections.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(/*! ./TableView.vue */ "./public/vue/TableView.vue");

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
                    "accept": "application/json",
                    "Authorization": "Basic " + btoa("admin:1994")
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/AllSpecies.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/AllSpecies.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(/*! ./TableView.vue */ "./public/vue/TableView.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryEdit.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CategoryEdit.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _c_store = __webpack_require__(/*! ../c_store.js */ "./public/c_store.js");

var _c_store2 = _interopRequireDefault(_c_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ["category"],
    data: function data() {
        return {
            formData: {
                category: ""
            },
            saving: false
        };
    },
    created: function created() {},

    methods: {
        saveChanges: function saveChanges() {
            var _this = this;

            if (this.valid()) {
                var method = this.editing ? "POST" : "PUT";
                var url = "/category/" + (this.editing ? this.category : "");
                this.saving = true;
                $("#savingProgressModal").modal("show");
                /*fetch(url, {
                    method,
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                })
                .then(data=>data.json())
                .then(data=> {
                    console.log(data);
                    //get id
                    //redirect to collection view/id
                    this.saving = false;
                });*/
                //pause 1 sec, set this.saving=false
                //will update * where category = category set category=new_category
                window.setTimeout(function () {
                    $("#savingProgressModal").modal("hide");
                    _this.saving = false;
                    if (_this.editing) {
                        _this.$router.push({ name: "view_category", params: { id: _this.id } });
                    } else {
                        //route to returned ID
                    }
                }, 1000);
            }
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
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryView.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CategoryView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(/*! ./TableView.vue */ "./public/vue/TableView.vue");

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
            cat: this.$route.params.id,
            id: this.$route.params.id
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionEdit.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CollectionEdit.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _c_store = __webpack_require__(/*! ../c_store.js */ "./public/c_store.js");

var _c_store2 = _interopRequireDefault(_c_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        } else {
            this.loaded_c = true;
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
            _c_store2.default.getCollectionBy({ id: this.id }).then(function (data) {
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
            return true; //lol
        },
        saveChanges: function saveChanges() {
            var _this4 = this;

            if (this.valid()) {
                var method = this.editing ? "POST" : "PUT";
                var url = "/collection/" + (this.editing ? this.id : "");
                this.saving = true;
                $("#savingProgressModal").modal("show");
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
                    $("#savingProgressModal").modal("hide");
                    _this4.saving = false;
                    if (_this4.editing) {
                        _this4.$router.push({ name: "view_collection_by_id", params: { id: _this4.id } });
                    } else {
                        _this4.$router.push({ name: "view_collection_by_id", params: { id: data.insertId } });
                    }
                });
            }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CollectionView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
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
        },
        handleDelete: function handleDelete() {
            var _this2 = this;

            fetch("/collection/" + this.id, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                $("#deleteConfirmationModal").modal("hide");
                //this.saving = false;
                _this2.$router.push({ name: "view_all_collections", params: { id: _this2.id } });
            });
            //send delete
            //onload, redirect to allcollections
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/DataCell.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/EditableRow.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/EditableRow.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataCell = __webpack_require__(/*! ./DataCell.vue */ "./public/vue/DataCell.vue");

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesEdit.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/SpeciesEdit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
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
//
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
                description: "",
                tags: ""
            },
            _tags: [],
            editing: !!this.$route.params.id,
            id: this.$route.params.id,
            loaded_c: false,
            loaded_s: false,
            saving: false
        };
    },

    computed: {},
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
        } else {
            this.loaded_s = true;
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
                _this3.loaded_s = true;
            });
        },
        valid: function valid() {
            return true; //lol
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
                    $("#savingProgressModal").modal("hide");
                    _this4.saving = false;
                    if (_this4.editing) {
                        _this4.$router.push({ name: "view_species_by_id", params: { id: _this4.id } });
                    } else {
                        _this4.$router.push({ name: "view_species_by_id", params: { id: data.insertId } });
                    }
                });
                $("#savingProgressModal").modal("show");
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesView.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/SpeciesView.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TableView = __webpack_require__(/*! ./TableView.vue */ "./public/vue/TableView.vue");

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
//
//
//
//
//
//
//
//
//
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
                _this.tags = data.tags.split(",");
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
        },
        handleDelete: function handleDelete() {
            var _this2 = this;

            //send delete
            //onload, redirect to allspecies
            fetch("/species/" + this.id, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }).then(function (data) {
                return data.json();
            }).then(function (data) {
                $("#deleteConfirmationModal").modal("hide");
                //this.saving = false;
                _this2.$router.push({ name: "view_all_species", params: { id: _this2.id } });
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/TableView.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/TableView.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EditableRow = __webpack_require__(/*! ./EditableRow.vue */ "./public/vue/EditableRow.vue");

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
                run: 50
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
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=style&index=0&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./public/vue/DataCell.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



































/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/AllCollections.vue?vue&type=template&id=039d3345":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/AllCollections.vue?vue&type=template&id=039d3345 ***!
  \***************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.loaded
        ? _c("collection-list", {
            attrs: {
              collection: _vm.collections,
              table: "collection",
              headers: [
                "id",
                "species_id",
                "taxa",
                "common",
                "size",
                "quantity",
                "for_sale",
                "location",
                "price",
                "source",
                "added_to_inventory",
                "credit"
              ]
            }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c ***!
  \***********************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.loaded
        ? _c("collection-list", {
            attrs: {
              collection: _vm.species,
              table: "species",
              headers: [
                "id",
                "taxa",
                "common",
                "category",
                "tags",
                "description",
                "size",
                "wildlife"
              ]
            }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79 ***!
  \*************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "collectioninfo" } }, [
    _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "category" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.formData.category,
              expression: "formData.category"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", id: "category", placeholder: "Vines" },
          domProps: { value: _vm.formData.category },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.formData, "category", $event.target.value)
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
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "savingProgressModal", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Updating category")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-content" }, [
                _c("p", [
                  _vm._v(
                    "You will be redirected upon completion of your request"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass:
                      "progress-bar progress-bar-striped progress-bar-animated",
                    staticStyle: { width: "75%" },
                    attrs: { role: "progressbar" }
                  })
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryView.vue?vue&type=template&id=2702e594":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CategoryView.vue?vue&type=template&id=2702e594 ***!
  \*************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("h2", [
        _vm._v(_vm._s(_vm.cat) + " "),
        _c(
          "small",
          { staticClass: "text-muted" },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "edit_category", params: { id: _vm.id } } }
              },
              [_vm._v("edit")]
            )
          ],
          1
        )
      ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9 ***!
  \***************************************************************************************************************************************************************************************************/
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
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "savingProgressModal", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Saving collection")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-content" }, [
                _c("p", [
                  _vm._v(
                    "You will be redirected upon completion of your request"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass:
                      "progress-bar progress-bar-striped progress-bar-animated",
                    staticStyle: { width: "75%" },
                    attrs: { role: "progressbar" }
                  })
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionView.vue?vue&type=template&id=36552cf4":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/CollectionView.vue?vue&type=template&id=36552cf4 ***!
  \***************************************************************************************************************************************************************************************************/
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
      _c(
        "router-link",
        {
          staticClass: "btn btn-primary",
          attrs: { to: { name: "edit_collection", params: { id: _vm.id } } }
        },
        [_vm._v("Edit this collection")]
      ),
      _c("button", { staticClass: "btn btn-primary" }, [
        _vm._v("Split this collection")
      ]),
      _c(
        "button",
        {
          staticClass: "btn btn-warning",
          attrs: {
            "data-toggle": "modal",
            "data-target": "#deleteConfirmationModal"
          }
        },
        [_vm._v("Delete this collection")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          attrs: {
            id: "deleteConfirmationModal",
            tabindex: "-1",
            role: "dialog"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Delete this " + _vm._s(_vm.taxa) + " collection?")
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("No")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.handleDelete()
                        }
                      }
                    },
                    [_vm._v("Yes")]
                  )
                ])
              ])
            ]
          )
        ]
      )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [_c("span", { attrs: { "area-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=template&id=490618fd":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/DataCell.vue?vue&type=template&id=490618fd ***!
  \*********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/EditableRow.vue?vue&type=template&id=51d47595":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/EditableRow.vue?vue&type=template&id=51d47595 ***!
  \************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6 ***!
  \************************************************************************************************************************************************************************************************/
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
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.category,
                  expression: "formData.category"
                }
              ],
              staticClass: "form-control",
              attrs: {
                list: "category_options",
                type: "text",
                id: "category",
                placeholder: "Trees & Shrubs"
              },
              domProps: { value: _vm.formData.category },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "category", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "wildlife" } }, [
              _vm._v("Wildlife interactions")
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
                  value: _vm.formData.tags,
                  expression: "formData.tags"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "tags",
                placeholder: "Waterwise, edible fruit"
              },
              domProps: { value: _vm.formData.tags },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "tags", $event.target.value)
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
      : _vm._e(),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("datalist", { attrs: { id: "category_options" } }, [
      _c("option", { attrs: { value: "Perennials, Vines, Ferns" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "Trees & Shrubs" } }),
      _vm._v(" "),
      _c("option", { attrs: { value: "Rain Garden Emergents & Perennials" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "savingProgressModal", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Saving species")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-content" }, [
                _c("p", [
                  _vm._v(
                    "You will be redirected upon completion of your request"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress" }, [
                  _c("div", {
                    staticClass:
                      "progress-bar progress-bar-striped progress-bar-animated",
                    staticStyle: { width: "75%" },
                    attrs: { role: "progressbar" }
                  })
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80 ***!
  \************************************************************************************************************************************************************************************************/
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
          return _c(
            "a",
            {
              staticClass: "btn btn-outline-info btn-sm",
              attrs: { href: "tags/" + t }
            },
            [_vm._v(_vm._s(t))]
          )
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
      _c(
        "button",
        {
          staticClass: "btn btn-warning",
          attrs: {
            "data-toggle": "modal",
            "data-target": "#deleteConfirmationModal"
          }
        },
        [_vm._v("Delete this species")]
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("Collections in inventory")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main_view" },
        [
          _c("table-view", {
            attrs: {
              collection: _vm.all_collections,
              table: "collection",
              headers: [
                "id",
                "size",
                "location",
                "quantity",
                "for_sale",
                "price",
                "source",
                "added_to_inventory",
                "credit"
              ]
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal",
          attrs: {
            id: "deleteConfirmationModal",
            tabindex: "-1",
            role: "dialog"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Delete " + _vm._s(_vm.taxa) + " from database?")
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _vm._v(
                    "\n                    This will also delete the " +
                      _vm._s(_vm.all_collections.length) +
                      " associated collections\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("No")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.handleDelete()
                        }
                      }
                    },
                    [_vm._v("Yes")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [_c("span", { attrs: { "area-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/TableView.vue?vue&type=template&id=89b590dc":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./public/vue/TableView.vue?vue&type=template&id=89b590dc ***!
  \**********************************************************************************************************************************************************************************************/
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
    _vm.pages && _vm.pages - 1
      ? _c(
          "ul",
          { staticClass: "pagination justify-content-center mb-2" },
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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

/***/ "./public/c_store.js":
/*!***************************!*\
  !*** ./public/c_store.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getRecordBy(list, data) {
    if (data.hasOwnProperty("id")) {
        return fetch("/" + list + "/" + data.id, {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method: "GET"
        }).then(function (data) {
            return data.json();
        });
    }
}

function filterRecords(list, filters) {
    return fetch("/" + list + "/", {
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        method: "GET"
    }).then(function (data) {
        return data.json();
    });
}

exports.default = {
    data: {
        collections: [],
        collections_retrieved: null,
        species: [],
        species_retrieved: null
    },
    getCollectionBy: function getCollectionBy() {
        if (arguments.length) {
            return getRecordBy("collection", arguments[0]);
        }
    },
    getSpeciesBy: function getSpeciesBy() {
        if (arguments.length) {
            return getRecordBy("species", arguments[0]);
        }
    },
    filterCollections: function filterCollections() {
        var _this = this;

        return filterRecords("collection").then(function (data) {
            _this.data.collections = data;
            return data;
        });
    },
    filterSpecies: function filterSpecies() {
        var _this2 = this;

        return filterRecords("species").then(function (data) {
            _this2.data.species = data;
            return data;
        });;
    }
};

/***/ }),

/***/ "./public/viewVue.js":
/*!***************************!*\
  !*** ./public/viewVue.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SpeciesView = __webpack_require__(/*! ./vue/SpeciesView.vue */ "./public/vue/SpeciesView.vue");

var _SpeciesView2 = _interopRequireDefault(_SpeciesView);

var _CategoryView = __webpack_require__(/*! ./vue/CategoryView.vue */ "./public/vue/CategoryView.vue");

var _CategoryView2 = _interopRequireDefault(_CategoryView);

var _CollectionView = __webpack_require__(/*! ./vue/CollectionView.vue */ "./public/vue/CollectionView.vue");

var _CollectionView2 = _interopRequireDefault(_CollectionView);

var _AllSpecies = __webpack_require__(/*! ./vue/AllSpecies.vue */ "./public/vue/AllSpecies.vue");

var _AllSpecies2 = _interopRequireDefault(_AllSpecies);

var _AllCollections = __webpack_require__(/*! ./vue/AllCollections.vue */ "./public/vue/AllCollections.vue");

var _AllCollections2 = _interopRequireDefault(_AllCollections);

var _CollectionEdit = __webpack_require__(/*! ./vue/CollectionEdit.vue */ "./public/vue/CollectionEdit.vue");

var _CollectionEdit2 = _interopRequireDefault(_CollectionEdit);

var _SpeciesEdit = __webpack_require__(/*! ./vue/SpeciesEdit.vue */ "./public/vue/SpeciesEdit.vue");

var _SpeciesEdit2 = _interopRequireDefault(_SpeciesEdit);

var _CategoryEdit = __webpack_require__(/*! ./vue/CategoryEdit.vue */ "./public/vue/CategoryEdit.vue");

var _CategoryEdit2 = _interopRequireDefault(_CategoryEdit);

var _c_store = __webpack_require__(/*! ./c_store.js */ "./public/c_store.js");

var _c_store2 = _interopRequireDefault(_c_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: "/collection/all", component: _AllCollections2.default, name: "view_all_collections" }, { path: "/species/all", component: _AllSpecies2.default, name: "view_all_species" }, { path: "/species/:id", component: _SpeciesView2.default, name: "view_species_by_id" }, { path: "/collection/:id", component: _CollectionView2.default, name: "view_collection_by_id" }, { path: "/species/category/:id", component: _CategoryView2.default, name: "view_category" }, { path: "/species/category/:id/edit", component: _CategoryEdit2.default, name: "edit_category" }, { path: "/collection/:id/edit", component: _CollectionEdit2.default, name: "edit_collection" }, { path: "/species/:id/edit", component: _SpeciesEdit2.default, name: "edit_species" }, { path: "/create/collection", component: _CollectionEdit2.default, name: "create_collection" }, { path: "/create/species", component: _SpeciesEdit2.default, name: "create_species" }];

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
            name: "create_species"
        }, {
            title: "Add Collection",
            name: "create_collection"
        }],
        shared: _c_store2.default.data,
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
                body: JSON.stringify({ password: "" })
            }).then(function (data) {
                sessionStorage.setItem("pass", "");
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

/***/ "./public/vue/AllCollections.vue":
/*!***************************************!*\
  !*** ./public/vue/AllCollections.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllCollections.vue?vue&type=template&id=039d3345 */ "./public/vue/AllCollections.vue?vue&type=template&id=039d3345");
/* harmony import */ var _AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllCollections.vue?vue&type=script&lang=js */ "./public/vue/AllCollections.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/AllCollections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/AllCollections.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./public/vue/AllCollections.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AllCollections.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/AllCollections.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/AllCollections.vue?vue&type=template&id=039d3345":
/*!*********************************************************************!*\
  !*** ./public/vue/AllCollections.vue?vue&type=template&id=039d3345 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AllCollections.vue?vue&type=template&id=039d3345 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/AllCollections.vue?vue&type=template&id=039d3345");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllCollections_vue_vue_type_template_id_039d3345__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/AllSpecies.vue":
/*!***********************************!*\
  !*** ./public/vue/AllSpecies.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllSpecies.vue?vue&type=template&id=60b8af6c */ "./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c");
/* harmony import */ var _AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllSpecies.vue?vue&type=script&lang=js */ "./public/vue/AllSpecies.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/AllSpecies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/AllSpecies.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./public/vue/AllSpecies.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./AllSpecies.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/AllSpecies.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c":
/*!*****************************************************************!*\
  !*** ./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AllSpecies.vue?vue&type=template&id=60b8af6c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/AllSpecies.vue?vue&type=template&id=60b8af6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllSpecies_vue_vue_type_template_id_60b8af6c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/CategoryEdit.vue":
/*!*************************************!*\
  !*** ./public/vue/CategoryEdit.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryEdit.vue?vue&type=template&id=3f38de79 */ "./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79");
/* harmony import */ var _CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryEdit.vue?vue&type=script&lang=js */ "./public/vue/CategoryEdit.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/CategoryEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/CategoryEdit.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./public/vue/CategoryEdit.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./CategoryEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79":
/*!*******************************************************************!*\
  !*** ./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CategoryEdit.vue?vue&type=template&id=3f38de79 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryEdit.vue?vue&type=template&id=3f38de79");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryEdit_vue_vue_type_template_id_3f38de79__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/CategoryView.vue":
/*!*************************************!*\
  !*** ./public/vue/CategoryView.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryView.vue?vue&type=template&id=2702e594 */ "./public/vue/CategoryView.vue?vue&type=template&id=2702e594");
/* harmony import */ var _CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryView.vue?vue&type=script&lang=js */ "./public/vue/CategoryView.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/CategoryView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/CategoryView.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./public/vue/CategoryView.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./CategoryView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/CategoryView.vue?vue&type=template&id=2702e594":
/*!*******************************************************************!*\
  !*** ./public/vue/CategoryView.vue?vue&type=template&id=2702e594 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CategoryView.vue?vue&type=template&id=2702e594 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CategoryView.vue?vue&type=template&id=2702e594");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_2702e594__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/CollectionEdit.vue":
/*!***************************************!*\
  !*** ./public/vue/CollectionEdit.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionEdit.vue?vue&type=template&id=4e8b25d9 */ "./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9");
/* harmony import */ var _CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionEdit.vue?vue&type=script&lang=js */ "./public/vue/CollectionEdit.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/CollectionEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/CollectionEdit.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./public/vue/CollectionEdit.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./CollectionEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9":
/*!*********************************************************************!*\
  !*** ./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CollectionEdit.vue?vue&type=template&id=4e8b25d9 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionEdit.vue?vue&type=template&id=4e8b25d9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionEdit_vue_vue_type_template_id_4e8b25d9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/CollectionView.vue":
/*!***************************************!*\
  !*** ./public/vue/CollectionView.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionView.vue?vue&type=template&id=36552cf4 */ "./public/vue/CollectionView.vue?vue&type=template&id=36552cf4");
/* harmony import */ var _CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionView.vue?vue&type=script&lang=js */ "./public/vue/CollectionView.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/CollectionView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/CollectionView.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./public/vue/CollectionView.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./CollectionView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/CollectionView.vue?vue&type=template&id=36552cf4":
/*!*********************************************************************!*\
  !*** ./public/vue/CollectionView.vue?vue&type=template&id=36552cf4 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CollectionView.vue?vue&type=template&id=36552cf4 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/CollectionView.vue?vue&type=template&id=36552cf4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionView_vue_vue_type_template_id_36552cf4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/DataCell.vue":
/*!*********************************!*\
  !*** ./public/vue/DataCell.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataCell.vue?vue&type=template&id=490618fd */ "./public/vue/DataCell.vue?vue&type=template&id=490618fd");
/* harmony import */ var _DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataCell.vue?vue&type=script&lang=js */ "./public/vue/DataCell.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataCell.vue?vue&type=style&index=0&lang=css */ "./public/vue/DataCell.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/DataCell.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/DataCell.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./public/vue/DataCell.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./DataCell.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/DataCell.vue?vue&type=style&index=0&lang=css":
/*!*****************************************************************!*\
  !*** ./public/vue/DataCell.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./DataCell.vue?vue&type=style&index=0&lang=css */ "./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/DataCell.vue?vue&type=template&id=490618fd":
/*!***************************************************************!*\
  !*** ./public/vue/DataCell.vue?vue&type=template&id=490618fd ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DataCell.vue?vue&type=template&id=490618fd */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/DataCell.vue?vue&type=template&id=490618fd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataCell_vue_vue_type_template_id_490618fd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/EditableRow.vue":
/*!************************************!*\
  !*** ./public/vue/EditableRow.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableRow.vue?vue&type=template&id=51d47595 */ "./public/vue/EditableRow.vue?vue&type=template&id=51d47595");
/* harmony import */ var _EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableRow.vue?vue&type=script&lang=js */ "./public/vue/EditableRow.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/EditableRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/EditableRow.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./public/vue/EditableRow.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./EditableRow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/EditableRow.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/EditableRow.vue?vue&type=template&id=51d47595":
/*!******************************************************************!*\
  !*** ./public/vue/EditableRow.vue?vue&type=template&id=51d47595 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./EditableRow.vue?vue&type=template&id=51d47595 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/EditableRow.vue?vue&type=template&id=51d47595");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableRow_vue_vue_type_template_id_51d47595__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/SpeciesEdit.vue":
/*!************************************!*\
  !*** ./public/vue/SpeciesEdit.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesEdit.vue?vue&type=template&id=4e346bb6 */ "./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6");
/* harmony import */ var _SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesEdit.vue?vue&type=script&lang=js */ "./public/vue/SpeciesEdit.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/SpeciesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/SpeciesEdit.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./public/vue/SpeciesEdit.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6":
/*!******************************************************************!*\
  !*** ./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesEdit.vue?vue&type=template&id=4e346bb6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesEdit.vue?vue&type=template&id=4e346bb6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesEdit_vue_vue_type_template_id_4e346bb6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/SpeciesView.vue":
/*!************************************!*\
  !*** ./public/vue/SpeciesView.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeciesView.vue?vue&type=template&id=7ea05d80 */ "./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80");
/* harmony import */ var _SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeciesView.vue?vue&type=script&lang=js */ "./public/vue/SpeciesView.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/SpeciesView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/SpeciesView.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./public/vue/SpeciesView.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80":
/*!******************************************************************!*\
  !*** ./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SpeciesView.vue?vue&type=template&id=7ea05d80 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/SpeciesView.vue?vue&type=template&id=7ea05d80");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeciesView_vue_vue_type_template_id_7ea05d80__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./public/vue/TableView.vue":
/*!**********************************!*\
  !*** ./public/vue/TableView.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView.vue?vue&type=template&id=89b590dc */ "./public/vue/TableView.vue?vue&type=template&id=89b590dc");
/* harmony import */ var _TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableView.vue?vue&type=script&lang=js */ "./public/vue/TableView.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "public/vue/TableView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./public/vue/TableView.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./public/vue/TableView.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./public/vue/TableView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./public/vue/TableView.vue?vue&type=template&id=89b590dc":
/*!****************************************************************!*\
  !*** ./public/vue/TableView.vue?vue&type=template&id=89b590dc ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=template&id=89b590dc */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./public/vue/TableView.vue?vue&type=template&id=89b590dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_89b590dc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=index.js.map