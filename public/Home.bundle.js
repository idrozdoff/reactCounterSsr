(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./src/components/Header/style.js\");\nvar _dec, _class;\n\n\n\n\n\n\n\n\nlet Header = (_dec = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"style\"]), _dec(_class = class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const {\n      classes\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      position: \"static\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      variant: \"h5\",\n      color: \"inherit\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"NavLink\"], {\n      className: classes.link,\n      to: \"/\"\n    }, \"SSR\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"NavLink\"], {\n      className: classes.link,\n      to: \"/profile\"\n    }, \"Profile\"))));\n  }\n\n}) || _class);\n\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/style.js":
/*!****************************************!*\
  !*** ./src/components/Header/style.js ***!
  \****************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"style\", function() { return style; });\nconst style = {\n  link: {\n    marginRight: 20\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.js?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./src/components/Home/style.js\");\nvar _dec, _class;\n\n\n\n\n\n\n\nlet Home = (_dec = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"style\"]), _dec(_class = class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const {\n      classes,\n      count,\n      increase,\n      decrease,\n      increaseAsync,\n      decreaseAsync\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      elevation: 4,\n      className: classes.paper,\n      align: \"center\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      variant: \"h5\"\n    }, \"Redux-Counter\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      variant: \"subtitle1\"\n    }, \"Counter: \", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.btns\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: increase,\n      className: classes.btn\n    }, \"Increase\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: decrease\n    }, \"Decrease\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.btns\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: increaseAsync,\n      className: classes.btn\n    }, \"Async Increase\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      variant: \"contained\",\n      color: \"primary\",\n      onClick: decreaseAsync\n    }, \"Async Decrease\")));\n  }\n\n}) || _class);\n\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/Home/style.js":
/*!**************************************!*\
  !*** ./src/components/Home/style.js ***!
  \**************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"style\", function() { return style; });\nconst style = {\n  paper: {\n    margin: \"auto\",\n    marginTop: 200,\n    width: \"40%\",\n    padding: 15\n  },\n  btn: {\n    marginRight: 20\n  },\n  btns: {\n    marginBottom: 20\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Home/style.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ \"./src/actions/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Home */ \"./src/components/Home/index.js\");\nvar _dec, _class, _temp;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst mapStateToProps = state => ({\n  count: state.count\n});\n\nconst mapDispatchToProps = dispatch => ({\n  actions: Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"bindActionCreators\"])(_actions__WEBPACK_IMPORTED_MODULE_4__, dispatch)\n});\n\nlet HomeContainer = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = class HomeContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"increase\", () => {\n      this.props.actions.increase();\n    });\n\n    _defineProperty(this, \"decrease\", () => {\n      this.props.actions.decrease();\n    });\n\n    _defineProperty(this, \"increaseAsync\", () => {\n      this.props.actions.increaseAsync();\n    });\n\n    _defineProperty(this, \"decreaseAsync\", () => {\n      this.props.actions.decreaseAsync();\n    });\n  }\n\n  render() {\n    const {\n      count\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"SSR Counter\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Web App - Home Page\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      count: count,\n      increase: this.increase,\n      decrease: this.decrease,\n      increaseAsync: this.increaseAsync,\n      decreaseAsync: this.decreaseAsync\n    }));\n  }\n\n}, _temp)) || _class);\n\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ })

}]);