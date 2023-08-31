"use strict";
/*eslint-disable*/
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
    text-align: center;
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
    text-align: center;
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
              "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",
            sourcesContent: [
              '@media (max-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 2rem 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type="checkbox"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    color: #000;\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 75%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .add-task-wrapper {\r\n    height: auto;\r\n    width: 100%;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  #add-task-btn {\r\n    margin-left: auto;\r\n    font-size: 0.7rem;\r\n    color: #000;\r\n    height: 2rem;\r\n    border: 0;\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  #add-task-btn:hover {\r\n    color: #6060ff;\r\n    background-color: #fff;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-trash-can {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 1.2rem;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n\r\n/* Desktop media  */\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: rgb(231, 213, 189);\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  section {\r\n    height: auto;\r\n    margin: 4rem 20rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n\r\n  #todo-list {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .task {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n    cursor: grab;\r\n    margin-left: -2rem;\r\n    width: auto;\r\n  }\r\n\r\n  .task:nth-child(odd) {\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  .task:nth-child(even) {\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .task input[type="checkbox"] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  #new-task {\r\n    color: red;\r\n    height: 2rem;\r\n    text-align: start;\r\n    padding: 2px 1px 0 6px;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    width: 86.5%;\r\n    border: 0;\r\n    margin-left: 0.5rem;\r\n    background-color: #f7f7f9;\r\n  }\r\n\r\n  .add-task-wrapper {\r\n    height: auto;\r\n    width: 100%;\r\n    background-color: #f7f7f9;\r\n    border-bottom: 1px solid #fff;\r\n  }\r\n\r\n  #add-task-btn {\r\n    color: #000;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n    width: 10%;\r\n    height: 2rem;\r\n    border: 0;\r\n    background-color: #f7f7f9;\r\n    padding-right: 0.1px;\r\n  }\r\n\r\n  #add-task-btn:hover {\r\n    color: #fff;\r\n    background-color: #6070ff;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .task-description {\r\n    width: 100%;\r\n  }\r\n\r\n  #add-task {\r\n    margin-left: -10px;\r\n    width: 100%;\r\n  }\r\n\r\n  #clear-list {\r\n    width: 100%;\r\n    height: 2.5rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #clear-list:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  .me-1 {\r\n    width: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-arrows-rotate {\r\n    float: right;\r\n    padding: 0.5rem;\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .fa-trash-can {\r\n    margin-left: auto;\r\n    height: auto;\r\n    width: 1%;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .fa-trash-can:hover {\r\n    color: red;\r\n  }\r\n\r\n  .task.dragging {\r\n    opacity: 0.1;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n',
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
        /* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./update.js */ "./src/update.js");
        // index.js

        let tasks = [];

        const taskList = document.getElementById("task-list");
        const addTaskButton = document.querySelector("#add-task-btn");
        const newTaskInput = document.getElementById("new-task");

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

        // Load tasks from local storage when the page loads or reloads
        window.addEventListener("load", () => {
          const savedTasks = JSON.parse(localStorage.getItem("tasks"));
          tasks = savedTasks || [];
          saveTasksToLocalStorage();
          performJob();
        });

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

    /***/ "./src/update.js":
      /*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ initStatusUpdates: () =>
            /* binding */ initStatusUpdates,
          /* harmony export */
        });
        const initStatusUpdates = (
          tasksArray,
          saveToLocalStorage,
          clearListButton,
          updateIndexes,
          performJob,
          saveTasksToLocalStorage
        ) => {
          const checkboxes = document.querySelectorAll(
            "input[type='checkbox']"
          );

          checkboxes.forEach((taskItem) => {
            const checkbox = taskItem.querySelector("input[type='checkbox']");
            checkbox.addEventListener("change", () => {
              const taskIndex =
                parseInt(taskItem.getAttribute("data-index")) - 1;
              checkboxes[taskIndex].completed = checkbox.checked;
              saveTasksToLocalStorage();
              performJob();
            });
          });

          clearListButton.addEventListener("click", () => {
            tasksArray = tasksArray.filter((task) => !task.completed);
            saveToLocalStorage();
          });

          const savedTasks = JSON.parse(localStorage.getItem("tasks"));
          tasksArray = savedTasks || [];
          saveTasksToLocalStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbmV3RnVuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91cGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICN0b2RvLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgfVxyXG5cclxuICAudGFzayBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI25ldy10YXNrIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAycHggMXB4IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmFkZC10YXNrLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA2MGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICNjbGVhci1saXN0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLm1lLTEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5mYS1hcnJvd3Mtcm90YXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZhLXRyYXNoLWNhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnRhc2suZHJhZ2dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuXHJcbi8qIERlc2t0b3AgbWVkaWEgICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIxMywgMTg5KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDRyZW0gMjByZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgI3RvZG8tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGFzazpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICB9XHJcblxyXG4gIC50YXNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAjbmV3LXRhc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogODYuNSU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICB9XHJcblxyXG4gIC5hZGQtdGFzay13cmFwcGVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgI2FkZC10YXNrLWJ0biB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC4xcHg7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2stYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzBmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjY2xlYXItbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWxpc3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAubWUtMSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmZhLWFycm93cy1yb3RhdGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAuZmEtdHJhc2gtY2FuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZhLXRyYXNoLWNhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLnRhc2suZHJhZ2dpbmcge1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY3Vyc29yOiBncmFiYmluZztcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtJQUN6QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMTMsIDE4OSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0b2RvLWxpc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbmV3LXRhc2sge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDFweCAwIDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC10YXNrLXdyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhZGQtdGFzay1idG4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhZGQtdGFzay1idG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzYwNjBmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FkZC10YXNrIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NsZWFyLWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXItbGlzdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWUtMSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDElO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLmRyYWdnaW5nIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXNrdG9wIG1lZGlhICAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjEzLCAxODkpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiA0cmVtIDIwcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3RvZG8tbGlzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNuZXctdGFzayB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxcHggMCA2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDg2LjUlO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLXRhc2std3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FkZC10YXNrLWJ0biB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2FkZC10YXNrLWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3MGZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWRkLXRhc2sge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NsZWFyLWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXItbGlzdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWUtMSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDElO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdHJhc2gtY2FuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLmRyYWdnaW5nIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW5kZXguanNcclxuXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGluaXRUb2RvTGlzdCB9IGZyb20gXCIuL25ld0Z1bi5qc1wiO1xyXG5pbXBvcnQgXCIuL3VwZGF0ZS5qc1wiO1xyXG5cclxubGV0IHRhc2tzID0gW107XHJcblxyXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xyXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XHJcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2tcIik7XHJcblxyXG5jb25zdCBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVJbmRleGVzID0gKCkgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmluZGV4ID0gaW5kZXg7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwZXJmb3JtSm9iID0gKCkgPT4ge1xyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHRhc2tJdGVtLmNsYXNzTmFtZSA9IFwidGFza1wiO1xyXG4gICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xyXG4gICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0YXNrLmluZGV4KTtcclxuICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dGFzay5jb21wbGV0ZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9IGRhdGEtaW5kZXg9XCIke1xyXG4gICAgICBpbmRleCArIDFcclxuICAgIH1cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiIGRhdGEtaW5kZXg9XCIke2luZGV4ICsgMX1cIj48L2k+XHJcbiAgICBgO1xyXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICBpbml0VG9kb0xpc3QodGFza3MsIHVwZGF0ZUluZGV4ZXMsIHBlcmZvcm1Kb2IpO1xyXG59O1xyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IG5ld1Rhc2tJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgaWYgKG5ld1Rhc2tEZXNjcmlwdGlvbiAhPT0gXCJcIikge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgZGVzY3JpcHRpb246IG5ld1Rhc2tEZXNjcmlwdGlvbixcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsXHJcbiAgICB9O1xyXG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIG5ld1Rhc2suaW5kZXggPSB0YXNrcy5sZW5ndGg7XHJcbiAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgcGVyZm9ybUpvYigpO1xyXG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gTG9hZCB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2Ugd2hlbiB0aGUgcGFnZSBsb2FkcyBvciByZWxvYWRzXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgc2F2ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XHJcbiAgdGFza3MgPSBzYXZlZFRhc2tzIHx8IFtdO1xyXG4gIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgcGVyZm9ybUpvYigpO1xyXG59KTtcclxuIiwiLy8gbmV3RnVuLmpzXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFRvZG9MaXN0ID0gKHRhc2tzQXJyYXkpID0+IHtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcclxuICBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrXCIpO1xyXG4gIGNvbnN0IGNsZWFyTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXItbGlzdFwiKTtcclxuXHJcbiAgY29uc3Qgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzQXJyYXkpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVJbmRleGVzID0gKCkgPT4ge1xyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICB0YXNrLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGVyZm9ybUpvYiA9ICgpID0+IHtcclxuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICB0YXNrSXRlbS5jbGFzc05hbWUgPSBcInRhc2tcIjtcclxuICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xyXG4gICAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHRhc2suaW5kZXgpO1xyXG4gICAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dGFzay5jb21wbGV0ZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvblwiPiR7dGFzay5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiPjwvaT5cclxuICAgICAgYDtcclxuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG5cclxuICAgIHRhc2tJdGVtcy5mb3JFYWNoKCh0YXNrSXRlbSkgPT4ge1xyXG4gICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFxyXG4gICAgICAgICAgXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICAgICAgICB0YXNrSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGZyb21JbmRleCA9XHJcbiAgICAgICAgICBwYXJzZUludChldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIikpIC0gMTtcclxuICAgICAgICBjb25zdCB0b0luZGV4ID0gcGFyc2VJbnQodGFza0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkgLSAxO1xyXG5cclxuICAgICAgICBjb25zdCBtb3ZlZFRhc2sgPSB0YXNrc0FycmF5LnNwbGljZShmcm9tSW5kZXgsIDEpWzBdO1xyXG4gICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKHRvSW5kZXgsIDAsIG1vdmVkVGFzayk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUluZGV4ZXMoKTtcclxuICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICB0YXNrc0FycmF5W3Rhc2tJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgLSAxXS5jb21wbGV0ZWQgPVxyXG4gICAgICAgICAgY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdHJhc2gtY2FuXCIpO1xyXG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0YXNrc0FycmF5LnNwbGljZSh0YXNrSXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpIC0gMSwgMSk7XHJcbiAgICAgICAgdXBkYXRlSW5kZXhlcygpO1xyXG4gICAgICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgcGVyZm9ybUpvYigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBwcm9tcHQoXHJcbiAgICAgICAgICBcIkVkaXQgdGFzayBkZXNjcmlwdGlvbjpcIixcclxuICAgICAgICAgIHRhc2tzQXJyYXlbdGFza0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSAtIDFdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAobmV3RGVzY3JpcHRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgIHRhc2tzQXJyYXlbdGFza0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSAtIDFdLmRlc2NyaXB0aW9uID1cclxuICAgICAgICAgICAgbmV3RGVzY3JpcHRpb247XHJcbiAgICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgcGVyZm9ybUpvYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBuZXdUYXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKG5ld1Rhc2tEZXNjcmlwdGlvbiAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBuZXdUYXNrRGVzY3JpcHRpb24sXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgdGFza3NBcnJheS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICB1cGRhdGVJbmRleGVzKCk7XHJcbiAgICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY2xlYXJMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0YXNrc0FycmF5ID0gdGFza3NBcnJheS5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XHJcbiAgICB1cGRhdGVJbmRleGVzKCk7XHJcbiAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgcGVyZm9ybUpvYigpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcclxuICB0YXNrc0FycmF5ID0gc2F2ZWRUYXNrcyB8fCBbXTtcclxuXHJcbiAgdXBkYXRlSW5kZXhlcygpO1xyXG4gIHBlcmZvcm1Kb2IoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRTdGF0dXNVcGRhdGVzID0gKFxyXG4gIHRhc2tzQXJyYXksXHJcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlLFxyXG4gIGNsZWFyTGlzdEJ1dHRvbixcclxuICB1cGRhdGVJbmRleGVzLFxyXG4gIHBlcmZvcm1Kb2IsXHJcbiAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2VcclxuKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xyXG5cclxuICBjaGVja2JveGVzLmZvckVhY2goKHRhc2tJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHBhcnNlSW50KHRhc2tJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpIC0gMTtcclxuICAgICAgY2hlY2tib3hlc1t0YXNrSW5kZXhdLmNvbXBsZXRlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIHBlcmZvcm1Kb2IoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjbGVhckxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRhc2tzQXJyYXkgPSB0YXNrc0FycmF5LmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzYXZlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcclxuICB0YXNrc0FycmF5ID0gc2F2ZWRUYXNrcyB8fCBbXTtcclxuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSgpO1xyXG4gIHVwZGF0ZUluZGV4ZXMoKTtcclxuICBwZXJmb3JtSm9iKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
