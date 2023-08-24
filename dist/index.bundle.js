/*eslint-disable*/
"use strict";
(self["webpackChunkwebpack_demo"] =
  self["webpackChunkwebpack_demo"] || []).push([
  ["index"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `@media (max-width: 768px) {
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
    color: #000;
    height: 2rem;
    text-align: start;
    padding: 2px 1px 0 6px;
    font-size: 1rem;
    font-weight: 700;
    width: 75%;
    border: 0;
    margin-left: 0.5rem;
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  .add-task-wrapper {
    height: auto;
    width: 100%;
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  #add-task-btn {
    margin-left: auto;
    font-size: 0.7rem;
    color: #000;
    height: 2rem;
    border: 0;
    background-color: #f7f7f9;
  }

  #add-task-btn:hover {
    color: #6060ff;
    background-color: #fff;
    text-decoration: underline;
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

  .fa-trash-can {
    margin-left: auto;
    height: auto;
    width: 1%;
    margin-right: 1.2rem;
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
    color: red;
    height: 2rem;
    text-align: start;
    padding: 2px 1px 0 6px;
    font-size: 1rem;
    font-weight: 700;
    width: 86.5%;
    border: 0;
    margin-left: 0.5rem;
    background-color: #f7f7f9;
  }

  .add-task-wrapper {
    height: auto;
    width: 100%;
    background-color: #f7f7f9;
    border-bottom: 1px solid #fff;
  }

  #add-task-btn {
    color: #000;
    font-size: 0.9rem;
    font-weight: 700;
    width: 10%;
    height: 2rem;
    border: 0;
    background-color: #f7f7f9;
    padding-right: 0.1px;
  }

  #add-task-btn:hover {
    color: #fff;
    background-color: #6070ff;
    text-decoration: underline;
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

  .fa-trash-can {
    margin-left: auto;
    height: auto;
    width: 1%;
    margin-right: 1rem;
  }

  .fa-trash-can:hover {
    color: red;
  }

  .task.dragging {
    opacity: 0.1;
    cursor: grabbing;
  }
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE;IACE,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,yBAAyB;EAC3B;;EAEA;IACE,cAAc;IACd,sBAAsB;IACtB,0BAA0B;EAC5B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF;;AAEA,mBAAmB;;AAEnB;EACE;IACE,8BAA8B;IAC9B,oCAAoC;IACpC,WAAW;IACX,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,SAAS;IACT,mBAAmB;IACnB,yBAAyB;EAC3B;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,6BAA6B;EAC/B;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,SAAS;IACT,yBAAyB;IACzB,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,yBAAyB;IACzB,0BAA0B;EAC5B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;AACF",
            sourcesContent: [
              '@media (max-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 2rem 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type="checkbox"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    color: #000;\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 75%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .add-task-wrapper {\r\n    height: auto;\r\n    width: 100%;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  #add-task-btn {\r\n    margin-left: auto;\r\n    font-size: 0.7rem;\r\n    color: #000;\r\n    height: 2rem;\r\n    border: 0;\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  #add-task-btn:hover {\r\n    color: #6060ff;\r\n    background-color: #fff;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-trash-can {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 1.2rem;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n\r\n/* Desktop media  */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 4rem 20rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type="checkbox"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    color: red;\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 86.5%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .add-task-wrapper {\r\n    height: auto;\r\n    width: 100%;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  #add-task-btn {\r\n    color: #000;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n    width: 10%;\r\n    height: 2rem;\r\n    border: 0;\r\n    background-color: #f7f7f9;\r\n    padding-right: 0.1px;\r\n  }\r\n\r\n  #add-task-btn:hover {\r\n    color: #fff;\r\n    background-color: #6070ff;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n    width: 100%;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-trash-can {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .fa-trash-can:hover {\r\n    color: red;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");
        /* harmony import */ var _newFun_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./newFun.js */ "./src/newFun.js");
        // index.js

        let tasks = [];

        const taskList = document.getElementById("task-list");
        const addTaskButton = document.querySelector("#add-task-btn");
        const newTaskInput = document.getElementById("new-task");
        const clearListButton = document.getElementById("clear-list");

        const saveTasksToLocalStorage = () => {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        };

        const updateIndexes = () => {
          tasks.forEach((task, index) => {
            task.index = index;
          });
        };

        const performJob = () => {
          taskList.innerHTML = "";

          tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.className = "task";
            taskItem.setAttribute("draggable", true);
            taskItem.setAttribute("data-index", task.index);
            taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${
              index + 1
            }">
      <span class="task-description">${task.description}</span>
      <i class="fa-regular fa-trash-can" data-index="${index + 1}"></i>
    `;
            taskList.appendChild(taskItem);
          });

          (0, _newFun_js__WEBPACK_IMPORTED_MODULE_1__.initTodoList)(
            tasks,
            updateIndexes,
            performJob
          );
        };

        addTaskButton.addEventListener("click", () => {
          const newTaskDescription = newTaskInput.value.trim();
          if (newTaskDescription !== "") {
            const newTask = {
              description: newTaskDescription,
              completed: false,
              index: tasks.length + 1,
            };
            tasks.push(newTask);
            newTask.index = tasks.length;
            saveTasksToLocalStorage();
            performJob();
            newTaskInput.value = "";
          }
        });

        clearListButton.addEventListener("click", () => {
          tasks = [];
          updateIndexes();
          saveTasksToLocalStorage();
          performJob();
        });

        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        tasks = savedTasks || [];

        updateIndexes();
        performJob();

        /***/
      },

    /***/ "./src/newFun.js":
      /*!***********************!*\
  !*** ./src/newFun.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ initTodoList: () => /* binding */ initTodoList,
          /* harmony export */
        });
        // newFun.js

        const initTodoList = (tasksArray) => {
          const taskList = document.getElementById("task-list");
          const addTaskButton = document.querySelector("#add-task-btn");
          const newTaskInput = document.getElementById("new-task");
          const clearListButton = document.getElementById("clear-list");

          const saveTasksToLocalStorage = () => {
            localStorage.setItem("tasks", JSON.stringify(tasksArray));
          };

          const updateIndexes = () => {
            tasksArray.forEach((task, index) => {
              task.index = index + 1;
            });
          };

          const performJob = () => {
            taskList.innerHTML = "";

            tasksArray.forEach((task) => {
              const taskItem = document.createElement("li");
              taskItem.className = "task";
              taskItem.setAttribute("draggable", true);
              taskItem.setAttribute("data-index", task.index);
              taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span class="task-description">${task.description}</span>
        <i class="fa-regular fa-trash-can"></i>
      `;
              taskList.appendChild(taskItem);
            });

            const taskItems = document.querySelectorAll(".task");

            taskItems.forEach((taskItem) => {
              taskItem.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData(
                  "text/plain",
                  taskItem.getAttribute("data-index")
                );
              });

              taskItem.addEventListener("dragover", (event) => {
                event.preventDefault();
              });

              taskItem.addEventListener("drop", (event) => {
                event.preventDefault();
                const fromIndex =
                  parseInt(event.dataTransfer.getData("text/plain")) - 1;
                const toIndex =
                  parseInt(taskItem.getAttribute("data-index")) - 1;

                const movedTask = tasksArray.splice(fromIndex, 1)[0];
                tasksArray.splice(toIndex, 0, movedTask);

                updateIndexes();
                saveTasksToLocalStorage();
                performJob();
              });

              const checkbox = taskItem.querySelector("input[type='checkbox']");
              checkbox.addEventListener("change", () => {
                tasksArray[taskItem.getAttribute("data-index") - 1].completed =
                  checkbox.checked;
                saveTasksToLocalStorage();
              });

              const deleteButton = taskItem.querySelector(".fa-trash-can");
              deleteButton.addEventListener("click", () => {
                tasksArray.splice(taskItem.getAttribute("data-index") - 1, 1);
                updateIndexes();
                saveTasksToLocalStorage();
                performJob();
              });

              const taskDescription =
                taskItem.querySelector(".task-description");
              taskDescription.addEventListener("click", () => {
                const newDescription = prompt(
                  "Edit task description:",
                  tasksArray[taskItem.getAttribute("data-index") - 1]
                    .description
                );
                if (newDescription !== null) {
                  tasksArray[
                    taskItem.getAttribute("data-index") - 1
                  ].description = newDescription;
                  saveTasksToLocalStorage();
                  performJob();
                }
              });
            });
          };

          addTaskButton.addEventListener("click", () => {
            const newTaskDescription = newTaskInput.value.trim();
            if (newTaskDescription !== "") {
              const newTask = {
                description: newTaskDescription,
                completed: false,
              };
              tasksArray.push(newTask);
              updateIndexes();
              saveTasksToLocalStorage();
              performJob();
              newTaskInput.value = "";
            }
          });

          clearListButton.addEventListener("click", () => {
            tasksArray = tasksArray.filter((task) => !task.completed);
            updateIndexes();
            saveTasksToLocalStorage();
            performJob();
          });

          const savedTasks = JSON.parse(localStorage.getItem("tasks"));
          tasksArray = savedTasks || [];

          updateIndexes();
          performJob();
        };

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxvREFBb0QsWUFBWSx1Q0FBdUMsNkNBQTZDLG9CQUFvQixxQkFBcUIsT0FBTyxtQkFBbUIscUJBQXFCLDBCQUEwQixzQkFBc0IsK0JBQStCLE9BQU8sY0FBYywyQkFBMkIsNkJBQTZCLE9BQU8sc0JBQXNCLCtCQUErQixPQUFPLGlCQUFpQixzQkFBc0IsNEJBQTRCLDRCQUE0QixxQkFBcUIsMkJBQTJCLG9CQUFvQixPQUFPLGdDQUFnQyxrQ0FBa0Msc0NBQXNDLE9BQU8saUNBQWlDLGtDQUFrQyxPQUFPLDBDQUEwQywyQkFBMkIsT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsK0JBQStCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLGtCQUFrQiw0QkFBNEIsa0NBQWtDLHNDQUFzQyxPQUFPLDZCQUE2QixxQkFBcUIsb0JBQW9CLGtDQUFrQyxzQ0FBc0MsT0FBTyx5QkFBeUIsMEJBQTBCLDBCQUEwQixvQkFBb0IscUJBQXFCLGtCQUFrQixrQ0FBa0MsT0FBTywrQkFBK0IsdUJBQXVCLCtCQUErQixtQ0FBbUMsT0FBTyw2QkFBNkIsb0JBQW9CLE9BQU8scUJBQXFCLDJCQUEyQixPQUFPLHVCQUF1QixvQkFBb0IsdUJBQXVCLHlCQUF5QiwwQkFBMEIsT0FBTyw2QkFBNkIsd0JBQXdCLG1DQUFtQyxPQUFPLGlCQUFpQixvQkFBb0Isc0JBQXNCLCtCQUErQixPQUFPLDZCQUE2QixxQkFBcUIsd0JBQXdCLDBCQUEwQixPQUFPLHlCQUF5QiwwQkFBMEIscUJBQXFCLGtCQUFrQiw2QkFBNkIsT0FBTywwQkFBMEIscUJBQXFCLHlCQUF5QixPQUFPLEtBQUssK0RBQStELFlBQVksdUNBQXVDLDZDQUE2QyxvQkFBb0IscUJBQXFCLE9BQU8sbUJBQW1CLHFCQUFxQiwyQkFBMkIsc0JBQXNCLCtCQUErQixPQUFPLGNBQWMsMkJBQTJCLDZCQUE2QixPQUFPLHNCQUFzQiwrQkFBK0IsT0FBTyxpQkFBaUIsc0JBQXNCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLDJCQUEyQixvQkFBb0IsT0FBTyxnQ0FBZ0Msa0NBQWtDLHNDQUFzQyxPQUFPLGlDQUFpQyxrQ0FBa0MsT0FBTywwQ0FBMEMsMkJBQTJCLE9BQU8scUJBQXFCLG1CQUFtQixxQkFBcUIsMEJBQTBCLCtCQUErQix3QkFBd0IseUJBQXlCLHFCQUFxQixrQkFBa0IsNEJBQTRCLGtDQUFrQyxPQUFPLDZCQUE2QixxQkFBcUIsb0JBQW9CLGtDQUFrQyxzQ0FBc0MsT0FBTyx5QkFBeUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsbUJBQW1CLHFCQUFxQixrQkFBa0Isa0NBQWtDLDZCQUE2QixPQUFPLCtCQUErQixvQkFBb0Isa0NBQWtDLG1DQUFtQyxPQUFPLDZCQUE2QixvQkFBb0IsT0FBTyxxQkFBcUIsMkJBQTJCLG9CQUFvQixPQUFPLHVCQUF1QixvQkFBb0IsdUJBQXVCLHlCQUF5QiwwQkFBMEIsT0FBTyw2QkFBNkIsd0JBQXdCLG1DQUFtQyxPQUFPLGlCQUFpQixvQkFBb0Isc0JBQXNCLCtCQUErQixPQUFPLDZCQUE2QixxQkFBcUIsd0JBQXdCLDBCQUEwQixPQUFPLHlCQUF5QiwwQkFBMEIscUJBQXFCLGtCQUFrQiwyQkFBMkIsT0FBTywrQkFBK0IsbUJBQW1CLE9BQU8sMEJBQTBCLHFCQUFxQix5QkFBeUIsT0FBTyxLQUFLLHVCQUF1QjtBQUNqM047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1UTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNxQjtBQUNzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLGlCQUFpQjtBQUN4RCx1REFBdUQsVUFBVTtBQUNqRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSx3REFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakUseUNBQXlDLGlCQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9uZXdGdW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICN0b2RvLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgfVxyXG5cclxuICAudGFzayBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI25ldy10YXNrIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAycHggMXB4IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmFkZC10YXNrLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA2MGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gICNjbGVhci1saXN0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLm1lLTEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5mYS1hcnJvd3Mtcm90YXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZhLXRyYXNoLWNhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhc2suZHJhZ2dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuXHJcbi8qIERlc2t0b3AgbWVkaWEgICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIxMywgMTg5KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDRyZW0gMjByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgI3RvZG8tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICB9XHJcblxyXG4gIC50YXNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjbmV3LXRhc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogODYuNSU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICB9XHJcblxyXG4gIC5hZGQtdGFzay13cmFwcGVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgI2FkZC10YXNrLWJ0biB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4xcHg7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzBmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY2xlYXItbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWxpc3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAubWUtMSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmZhLWFycm93cy1yb3RhdGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuZmEtdHJhc2gtY2FuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZhLXRyYXNoLWNhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLnRhc2suZHJhZ2dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kby1saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI25ldy10YXNrIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxcHggMCA2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWRkLXRhc2stYnRuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM2MDYwZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhZGQtdGFzayB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhci1saXN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZS0xIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10cmFzaC1jYW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMSU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2suZHJhZ2dpbmcge1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgbWVkaWEgICovXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMTMsIDE4OSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDRyZW0gMjByZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kby1saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI25ldy10YXNrIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogODYuNSU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtdGFzay13cmFwcGVyIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWRkLXRhc2stYnRuIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMC4xcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDcwZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhZGQtdGFzayB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXItbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXItbGlzdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWUtMSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDElO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLmRyYWdnaW5nIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW5kZXguanNcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGluaXRUb2RvTGlzdCB9IGZyb20gXCIuL25ld0Z1bi5qc1wiO1xyXG5cclxubGV0IHRhc2tzID0gW107XHJcblxyXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XHJcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2tcIik7XHJcbmNvbnN0IGNsZWFyTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItbGlzdFwiKTtcclxuXHJcbmNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUluZGV4ZXMgPSAoKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIHRhc2suaW5kZXggPSBpbmRleDtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHBlcmZvcm1Kb2IgPSAoKSA9PiB7XHJcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgdGFza0l0ZW0uY2xhc3NOYW1lID0gXCJ0YXNrXCI7XHJcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XHJcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2suaW5kZXgpO1xyXG4gICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0YXNrLmNvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0gZGF0YS1pbmRleD1cIiR7XHJcbiAgICAgIGluZGV4ICsgMVxyXG4gICAgfVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuXCIgZGF0YS1pbmRleD1cIiR7aW5kZXggKyAxfVwiPjwvaT5cclxuICAgIGA7XHJcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XHJcbiAgfSk7XHJcblxyXG4gIGluaXRUb2RvTGlzdCh0YXNrcywgdXBkYXRlSW5kZXhlcywgcGVyZm9ybUpvYik7XHJcbn07XHJcblxyXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gbmV3VGFza0lucHV0LnZhbHVlLnRyaW0oKTtcclxuICBpZiAobmV3VGFza0Rlc2NyaXB0aW9uICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogbmV3VGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcclxuICAgIH07XHJcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgbmV3VGFzay5pbmRleCA9IHRhc2tzLmxlbmd0aDtcclxuICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBwZXJmb3JtSm9iKCk7XHJcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5jbGVhckxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB0YXNrcyA9IFtdO1xyXG4gIHVwZGF0ZUluZGV4ZXMoKTtcclxuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIHBlcmZvcm1Kb2IoKTtcclxufSk7XHJcblxyXG5jb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcclxudGFza3MgPSBzYXZlZFRhc2tzIHx8IFtdO1xyXG5cclxudXBkYXRlSW5kZXhlcygpO1xyXG5wZXJmb3JtSm9iKCk7XHJcbiIsIi8vIG5ld0Z1bi5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRUb2RvTGlzdCA9ICh0YXNrc0FycmF5KSA9PiB7XHJcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcclxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XHJcbiAgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFza1wiKTtcclxuICBjb25zdCBjbGVhckxpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyLWxpc3RcIik7XHJcblxyXG4gIGNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrc0FycmF5KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlSW5kZXhlcyA9ICgpID0+IHtcclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBlcmZvcm1Kb2IgPSAoKSA9PiB7XHJcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGFza0l0ZW0uY2xhc3NOYW1lID0gXCJ0YXNrXCI7XHJcbiAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcclxuICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrLmluZGV4KTtcclxuICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3Rhc2suY29tcGxldGVkID8gXCJjaGVja2VkXCIgOiBcIlwifT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW5cIj48L2k+XHJcbiAgICAgIGA7XHJcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuXHJcbiAgICB0YXNrSXRlbXMuZm9yRWFjaCgodGFza0l0ZW0pID0+IHtcclxuICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcclxuICAgICAgICAgIFwidGV4dC9wbGFpblwiLFxyXG4gICAgICAgICAgdGFza0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmcm9tSW5kZXggPVxyXG4gICAgICAgICAgcGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpKSAtIDE7XHJcbiAgICAgICAgY29uc3QgdG9JbmRleCA9IHBhcnNlSW50KHRhc2tJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpIC0gMTtcclxuXHJcbiAgICAgICAgY29uc3QgbW92ZWRUYXNrID0gdGFza3NBcnJheS5zcGxpY2UoZnJvbUluZGV4LCAxKVswXTtcclxuICAgICAgICB0YXNrc0FycmF5LnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZFRhc2spO1xyXG5cclxuICAgICAgICB1cGRhdGVJbmRleGVzKCk7XHJcbiAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBwZXJmb3JtSm9iKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGFza3NBcnJheVt0YXNrSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpIC0gMV0uY29tcGxldGVkID1cclxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZhLXRyYXNoLWNhblwiKTtcclxuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGFza3NBcnJheS5zcGxpY2UodGFza0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSAtIDEsIDEpO1xyXG4gICAgICAgIHVwZGF0ZUluZGV4ZXMoKTtcclxuICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gcHJvbXB0KFxyXG4gICAgICAgICAgXCJFZGl0IHRhc2sgZGVzY3JpcHRpb246XCIsXHJcbiAgICAgICAgICB0YXNrc0FycmF5W3Rhc2tJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgLSAxXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKG5ld0Rlc2NyaXB0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0YXNrc0FycmF5W3Rhc2tJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgLSAxXS5kZXNjcmlwdGlvbiA9XHJcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gbmV3VGFza0lucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmIChuZXdUYXNrRGVzY3JpcHRpb24gIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogbmV3VGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICAgIHRhc2tzQXJyYXkucHVzaChuZXdUYXNrKTtcclxuICAgICAgdXBkYXRlSW5kZXhlcygpO1xyXG4gICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICBwZXJmb3JtSm9iKCk7XHJcbiAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNsZWFyTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdGFza3NBcnJheSA9IHRhc2tzQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xyXG4gICAgdXBkYXRlSW5kZXhlcygpO1xyXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHBlcmZvcm1Kb2IoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XHJcbiAgdGFza3NBcnJheSA9IHNhdmVkVGFza3MgfHwgW107XHJcblxyXG4gIHVwZGF0ZUluZGV4ZXMoKTtcclxuICBwZXJmb3JtSm9iKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
