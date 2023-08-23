"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 768px) {
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(231, 213, 189);
    width: 100%;
    height: auto;
  }

  section {
    height: auto;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
  }

  #todo-list {
    background-color: #fff;
  }

  .task {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: grab;
    margin-left: -2rem;
    width: auto;
  }

  .task:nth-child(odd) {
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  .task:nth-child(even) {
    background-color: #f7f7f9;
  }

  .task input[type="checkbox"] {
    margin-right: 10px;
  }

  #new-task {
    height: 2rem;
    text-align: start;
    padding: 2px 1px 0 6px;
    font-size: 1rem;
    font-weight: 700;
    width: 87%;
    border: 0;
    margin-left: 0.5rem;
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  .task-description {
    width: 100%;
  }

  #add-task {
    margin-left: -10px;
  }

  #clear-list {
    width: 100%;
    height: 2.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  #clear-list:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .me-1 {
    width: auto;
    display: flex;
    flex-direction: column;
  }

  .fa-arrows-rotate {
    float: right;
    padding: 0.5rem;
    font-size: 0.6rem;
  }

  .fa-rotate-90 {
    margin-left: auto;
    font-size: 0.7rem;
    padding-right: 0.5rem;
  }

  .fa-ellipsis-vertical {
    margin-left: auto;
    height: auto;
    width: 1%;
    margin-right: 0.8rem;
  }

  .task.dragging {
    opacity: 0.1;
    cursor: grabbing;
  }
}

/* Desktop media  */

@media (min-width: 768px) {
  body {
    font-family: Arial, sans-serif;
    background-color: rgb(231, 213, 189);
    width: 100%;
    height: auto;
  }

  section {
    height: auto;
    margin: 4rem 20rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
  }

  #todo-list {
    background-color: #fff;
  }

  .task {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: grab;
    margin-left: -2rem;
    width: auto;
  }

  .task:nth-child(odd) {
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  .task:nth-child(even) {
    background-color: #f7f7f9;
  }

  .task input[type="checkbox"] {
    margin-right: 10px;
  }

  #new-task {
    height: 2rem;
    text-align: start;
    padding: 2px 1px 0 6px;
    font-size: 1rem;
    font-weight: 700;
    width: 94%;
    border: 0;
    margin-left: 0.5rem;
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  .task-description {
    width: 100%;
  }

  #add-task {
    margin-left: -10px;
    width: 100%;
  }

  #clear-list {
    width: 100%;
    height: 2.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  #clear-list:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .me-1 {
    width: auto;
    display: flex;
    flex-direction: column;
  }

  .fa-arrows-rotate {
    float: right;
    padding: 0.5rem;
    font-size: 0.6rem;
  }

  .fa-rotate-90 {
    margin-left: auto;
    font-size: 0.7rem;
    padding-right: 0.5rem;
  }

  .fa-ellipsis-vertical {
    margin-left: auto;
    height: auto;
    width: 1%;
    margin-right: 0.5rem;
  }

  .task.dragging {
    opacity: 0.1;
    cursor: grabbing;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF;;AAEA,mBAAmB;;AAEnB;EACE;IACE,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF","sourcesContent":["@media (max-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 2rem 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type=\"checkbox\"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 87%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-rotate-90 {\r\n    margin-left: auto;\r\n    font-size: 0.7rem;\r\n    padding-right: 0.5rem;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 0.8rem;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n\r\n/* Desktop media  */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 4rem 20rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type=\"checkbox\"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 94%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n    width: 100%;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-rotate-90 {\r\n    margin-left: auto;\r\n    font-size: 0.7rem;\r\n    padding-right: 0.5rem;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 0.5rem;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const tasks = [
  {
    description: 'Build Multi-page Applications',
    completed: false,
    index: 1
  },
  {
    description: 'Develop Single Page Applications',
    completed: true,
    index: 2
  },
  {
    description: 'Create To-Do-Lists',
    completed: false,
    index: 3
  }
];

let draggedTaskIndex = null;

const performJob = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
      <span class="task-description">${task.description}</span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    taskList.appendChild(taskItem);
  });

  const taskItems = document.querySelectorAll('.task');
  taskItems.forEach((taskItem, index) => {
    taskItem.setAttribute('draggable', true);
    taskItem.setAttribute('data-index', index);

    taskItem.addEventListener('dragstart', (event) => {
      draggedTaskIndex = parseInt(event.target.getAttribute('data-index'));
    });

    taskItem.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    taskItem.addEventListener('drop', (event) => {
      const targetIndex = parseInt(event.target.getAttribute('data-index'));
      if (draggedTaskIndex !== null) {
        const [draggedTask] = tasks.splice(draggedTaskIndex, 1);
        tasks.splice(targetIndex, 0, draggedTask);
        draggedTaskIndex = null;
        performJob();
      }
    });
  });
};

const clearList = () => {
  tasks.length = 0;
  performJob();
};

document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.querySelector('.fa-rotate-90');
  const newTaskInput = document.getElementById('new-task');
  const clearListButton = document.getElementById('clear-list');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', () => {
    const newTaskDescription = newTaskInput.value.trim();
    if (newTaskDescription !== '') {
      const newTask = {
        description: newTaskDescription,
        completed: false,
        index: tasks.length + 1
      };
      tasks.push(newTask);
      newTaskInput.value = '';
      performJob();
    }
  });

  clearListButton.addEventListener('click', clearList);

  taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
      const index = event.target.getAttribute('data-index');
      tasks[index].completed = event.target.checked;
    } else if (event.target.classList.contains('fa-ellipsis-vertical')) {
      const index = event.target.getAttribute('data-index');
      tasks.splice(index, 1);
    }
    performJob();
  });

  taskList.addEventListener('dragenter', (event) => {
    const target = event.target;
    if (target.classList.contains('task')) {
      target.classList.add('dragging');
    }
  });

  taskList.addEventListener('dragleave', (event) => {
    const target = event.target;
    if (target.classList.contains('task')) {
      target.classList.remove('dragging');
    }
  });

  taskList.addEventListener('dragend', () => {
    const draggingTask = taskList.querySelector('.dragging');
    if (draggingTask) {
      draggingTask.classList.remove('dragging');
    }
  });

  performJob();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sb0RBQW9ELFlBQVksdUNBQXVDLDZDQUE2QyxvQkFBb0IscUJBQXFCLE9BQU8sbUJBQW1CLHFCQUFxQiwwQkFBMEIsc0JBQXNCLCtCQUErQixPQUFPLGNBQWMsMkJBQTJCLDZCQUE2QixPQUFPLHNCQUFzQiwrQkFBK0IsT0FBTyxpQkFBaUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLDJCQUEyQixvQkFBb0IsT0FBTyxnQ0FBZ0Msa0NBQWtDLHNDQUFzQyxPQUFPLGlDQUFpQyxrQ0FBa0MsT0FBTywwQ0FBMEMsMkJBQTJCLE9BQU8scUJBQXFCLHFCQUFxQiwwQkFBMEIsK0JBQStCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLGtCQUFrQiw0QkFBNEIsa0NBQWtDLHNDQUFzQyxPQUFPLDZCQUE2QixvQkFBb0IsT0FBTyxxQkFBcUIsMkJBQTJCLE9BQU8sdUJBQXVCLG9CQUFvQix1QkFBdUIseUJBQXlCLDBCQUEwQixPQUFPLDZCQUE2Qix3QkFBd0IsbUNBQW1DLE9BQU8saUJBQWlCLG9CQUFvQixzQkFBc0IsK0JBQStCLE9BQU8sNkJBQTZCLHFCQUFxQix3QkFBd0IsMEJBQTBCLE9BQU8seUJBQXlCLDBCQUEwQiwwQkFBMEIsOEJBQThCLE9BQU8saUNBQWlDLDBCQUEwQixxQkFBcUIsa0JBQWtCLDZCQUE2QixPQUFPLDBCQUEwQixxQkFBcUIseUJBQXlCLE9BQU8sS0FBSywrREFBK0QsWUFBWSx1Q0FBdUMsNkNBQTZDLG9CQUFvQixxQkFBcUIsT0FBTyxtQkFBbUIscUJBQXFCLDJCQUEyQixzQkFBc0IsK0JBQStCLE9BQU8sY0FBYywyQkFBMkIsNkJBQTZCLE9BQU8sc0JBQXNCLCtCQUErQixPQUFPLGlCQUFpQixzQkFBc0IsNEJBQTRCLDRCQUE0QixxQkFBcUIsMkJBQTJCLG9CQUFvQixPQUFPLGdDQUFnQyxrQ0FBa0Msc0NBQXNDLE9BQU8saUNBQWlDLGtDQUFrQyxPQUFPLDBDQUEwQywyQkFBMkIsT0FBTyxxQkFBcUIscUJBQXFCLDBCQUEwQiwrQkFBK0Isd0JBQXdCLHlCQUF5QixtQkFBbUIsa0JBQWtCLDRCQUE0QixrQ0FBa0Msc0NBQXNDLE9BQU8sNkJBQTZCLG9CQUFvQixPQUFPLHFCQUFxQiwyQkFBMkIsb0JBQW9CLE9BQU8sdUJBQXVCLG9CQUFvQix1QkFBdUIseUJBQXlCLDBCQUEwQixPQUFPLDZCQUE2Qix3QkFBd0IsbUNBQW1DLE9BQU8saUJBQWlCLG9CQUFvQixzQkFBc0IsK0JBQStCLE9BQU8sNkJBQTZCLHFCQUFxQix3QkFBd0IsMEJBQTBCLE9BQU8seUJBQXlCLDBCQUEwQiwwQkFBMEIsOEJBQThCLE9BQU8saUNBQWlDLDBCQUEwQixxQkFBcUIsa0JBQWtCLDZCQUE2QixPQUFPLDBCQUEwQixxQkFBcUIseUJBQXlCLE9BQU8sS0FBSyx1QkFBdUI7QUFDbnpMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDck8xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQyxjQUFjLE1BQU07QUFDcEYsdUNBQXVDLGlCQUFpQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICN0b2RvLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgfVxyXG5cclxuICAudGFzayBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI25ldy10YXNrIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YXNrLWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2FkZC10YXNrIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcblxyXG4gICNjbGVhci1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAjY2xlYXItbGlzdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC5tZS0xIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZmEtYXJyb3dzLXJvdGF0ZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5mYS1yb3RhdGUtOTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhc2suZHJhZ2dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuXHJcbi8qIERlc2t0b3AgbWVkaWEgICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIxMywgMTg5KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDRyZW0gMjByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgI3RvZG8tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICB9XHJcblxyXG4gIC50YXNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjbmV3LXRhc2sge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAycHggMXB4IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY2xlYXItbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWxpc3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAubWUtMSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmZhLWFycm93cy1yb3RhdGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuZmEtcm90YXRlLTkwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZmEtZWxsaXBzaXMtdmVydGljYWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC50YXNrLmRyYWdnaW5nIHtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kby1saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI25ldy10YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogODclO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhZGQtdGFzayB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZS0xIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1yb3RhdGUtOTAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay5kcmFnZ2luZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRGVza3RvcCBtZWRpYSAgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIxMywgMTg5KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogNHJlbSAyMHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0b2RvLWxpc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmV3LXRhc2sge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAycHggMXB4IDAgNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHdpZHRoOiA5NCU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FkZC10YXNrIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZS0xIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1yb3RhdGUtOTAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay5kcmFnZ2luZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgdGFza3MgPSBbXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdCdWlsZCBNdWx0aS1wYWdlIEFwcGxpY2F0aW9ucycsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgaW5kZXg6IDFcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnRGV2ZWxvcCBTaW5nbGUgUGFnZSBBcHBsaWNhdGlvbnMnLFxyXG4gICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgaW5kZXg6IDJcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIFRvLURvLUxpc3RzJyxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBpbmRleDogM1xyXG4gIH1cclxuXTtcclxuXHJcbmxldCBkcmFnZ2VkVGFza0luZGV4ID0gbnVsbDtcclxuXHJcbmNvbnN0IHBlcmZvcm1Kb2IgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XHJcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0YXNrSXRlbS5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3Rhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9IGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pPlxyXG4gICAgYDtcclxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuICB0YXNrSXRlbXMuZm9yRWFjaCgodGFza0l0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xyXG4gICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICBkcmFnZ2VkVGFza0luZGV4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgICAgaWYgKGRyYWdnZWRUYXNrSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBbZHJhZ2dlZFRhc2tdID0gdGFza3Muc3BsaWNlKGRyYWdnZWRUYXNrSW5kZXgsIDEpO1xyXG4gICAgICAgIHRhc2tzLnNwbGljZSh0YXJnZXRJbmRleCwgMCwgZHJhZ2dlZFRhc2spO1xyXG4gICAgICAgIGRyYWdnZWRUYXNrSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjbGVhckxpc3QgPSAoKSA9PiB7XHJcbiAgdGFza3MubGVuZ3RoID0gMDtcclxuICBwZXJmb3JtSm9iKCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtcm90YXRlLTkwJyk7XHJcbiAgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XHJcbiAgY29uc3QgY2xlYXJMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWxpc3QnKTtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcclxuXHJcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IG5ld1Rhc2tJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAobmV3VGFza0Rlc2NyaXB0aW9uICE9PSAnJykge1xyXG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBuZXdUYXNrRGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMVxyXG4gICAgICB9O1xyXG4gICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgcGVyZm9ybUpvYigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjbGVhckxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckxpc3QpO1xyXG5cclxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gICAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJykpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBwZXJmb3JtSm9iKCk7XHJcbiAgfSk7XHJcblxyXG4gIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2snKSkge1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzaycpKSB7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZHJhZ2dpbmdUYXNrID0gdGFza0xpc3QucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XHJcbiAgICBpZiAoZHJhZ2dpbmdUYXNrKSB7XHJcbiAgICAgIGRyYWdnaW5nVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwZXJmb3JtSm9iKCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==