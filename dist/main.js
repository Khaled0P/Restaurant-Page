/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Tangerine&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.background {\\r\\n    background-size: cover;\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    position: fixed;\\r\\n    z-index: -2;\\r\\n\\r\\n}\\r\\n\\r\\n/**************** nav bar*********************/\\r\\n\\r\\nheader {\\r\\n    background-color: rgba(0, 0, 0, .8);\\r\\n    padding: 0 10px;\\r\\n\\r\\n    display: flex;\\r\\n    justify-content: flex-start;\\r\\n    flex-wrap: nowrap;\\r\\n}\\r\\n\\r\\nheader .logo {\\r\\n    margin-right: auto;\\r\\n    margin-left: 1em;\\r\\n    padding: 3px;\\r\\n}\\r\\n\\r\\nheader .logo img {\\r\\n    width: 10%;\\r\\n}\\r\\n\\r\\nheader nav {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\nnav button {\\r\\n    background: none;\\r\\n    border: none;\\r\\n    color: white;\\r\\n    font-size: 1.1rem;\\r\\n    padding: 5px 10px;\\r\\n    text-transform: capitalize;\\r\\n}\\r\\n\\r\\nnav button:hover {\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n/******** page Container********/\\r\\n\\r\\n.Content {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-top: 5rem;\\r\\n    margin-bottom: 5rem;\\r\\n}\\r\\n\\r\\n/************8 Home Page ************/\\r\\n.homeContainer {\\r\\n    font-family: 'Tangerine', cursive, sans-serif;\\r\\n    color: white;\\r\\n    font-size: 2rem;\\r\\n    background-color: rgba(0, 0, 0, .8);\\r\\n    padding: 10px 4rem;\\r\\n\\r\\n    display: flex;\\r\\n    gap: 15px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.homeImg img {\\r\\n    height: 350px;\\r\\n    width: 450px;\\r\\n    border-radius: 10%;\\r\\n}\\r\\n\\r\\n\\r\\n/*********************** Menu Page *************************/\\r\\n\\r\\n.menuContainer {\\r\\n    font-family: 'Tangerine', cursive, sans-serif;\\r\\n    color: white;\\r\\n    font-size: 2rem;\\r\\n    background-color: rgba(0, 0, 0, .8);\\r\\n    padding: 10px 4rem;\\r\\n    width: auto;\\r\\n\\r\\n    display: flex;\\r\\n    gap: 15px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.menuContainer .menu {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    gap: 30px;\\r\\n}\\r\\n\\r\\n.menuItem {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    min-height: 100%;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.menuItem h1 {\\r\\n    margin: 10px;\\r\\n}\\r\\n\\r\\n.menuItem p {\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.menuItem .thumb {\\r\\n    padding-bottom: 60%;\\r\\n    background-size: cover;\\r\\n    background-position: center center;\\r\\n}\\r\\n\\r\\n.aboutContainer {\\r\\n    font-family: sans-serif;\\r\\n    color: white;\\r\\n    font-size: 2rem;\\r\\n    background-color: rgba(0, 0, 0, .8);\\r\\n    padding: 10px 4rem;\\r\\n    width: 60%;\\r\\n    border-radius: 8px;\\r\\n\\r\\n    display: flex;\\r\\n    gap: 30px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.aboutContainer h1 {\\r\\n    font-family: 'Tangerine', cursive, sans-serif;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction aboutPage() {\r\n  const aboutContainer = document.createElement('div');\r\n  aboutContainer.classList.add('aboutContainer');\r\n  aboutContainer.innerHTML = `<h1>About our Page</h1>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam\r\n          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis\r\n          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat\r\n          voluptatibus nulla iure aliquam?\r\n        </p>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam\r\n          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis\r\n          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat\r\n          voluptatibus nulla iure aliquam?\r\n        </p>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam\r\n          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis\r\n          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat\r\n          voluptatibus nulla iure aliquam?\r\n        </p>`;\r\n  return aboutContainer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ backGround)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _attachments_background_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attachments/background-img.jpg */ \"./attachments/background-img.jpg\");\n\r\n\r\n\r\nfunction backGround() {\r\n  const backGround = document.createElement('div');\r\n  backGround.classList.add('background');\r\n  backGround.style.backgroundImage = `url(${_attachments_background_img_jpg__WEBPACK_IMPORTED_MODULE_1__})`;\r\n\r\n  return backGround;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/background.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _attachments_home_pic_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attachments/home-pic.jpg */ \"./attachments/home-pic.jpg\");\n\r\n\r\n\r\nfunction homePage() {\r\n  const homeContainer = document.createElement('div');\r\n\r\n  homeContainer.innerHTML = `<h1>The best restaurant in the city</h1>\r\n        <h1> Hurry up and try our food</h1>\r\n        <div class=\"homeImg\"><img src = \"${_attachments_home_pic_jpg__WEBPACK_IMPORTED_MODULE_1__}\"></div>\r\n        <h1>Order online or visit us!</h1>`;\r\n  homeContainer.classList.add('homeContainer');\r\n  return homeContainer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst Content = document.getElementById('Content');\n\ndocument.body.insertBefore((0,_background__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Content);\ndocument.body.insertBefore((0,_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), Content);\n\nconst homeBtn = document.querySelector('button.home');\nconst menuBtn = document.querySelector('button.menu');\nconst aboutBtn = document.querySelector('button.about');\n\nContent.classList.add('Content');\n\n//switch page on click\nconst clearPage = function () {\n  while (Content.firstChild) {\n    Content.removeChild(Content.firstChild);\n  }\n};\n\nContent.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\nhomeBtn.addEventListener('click', () => {\n  clearPage();\n  Content.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n});\n\nmenuBtn.addEventListener('click', () => {\n  clearPage();\n  Content.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\naboutBtn.addEventListener('click', () => {\n  clearPage();\n  Content.appendChild((0,_aboutPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _attachments_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attachments/pizza.jpg */ \"./attachments/pizza.jpg\");\n/* harmony import */ var _attachments_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attachments/pasta.jpg */ \"./attachments/pasta.jpg\");\n/* harmony import */ var _attachments_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attachments/chicken.jpg */ \"./attachments/chicken.jpg\");\n/* harmony import */ var _attachments_salad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attachments/salad.jpg */ \"./attachments/salad.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction homePage() {\r\n  const menuContainer = document.createElement('div');\r\n  menuContainer.classList.add('menuContainer');\r\n  const menu = document.createElement('div');\r\n  menu.classList.add('menu');\r\n  const menuItems = [];\r\n  for (let i = 0; i < 4; i++) {\r\n    const item = document.createElement('div');\r\n    item.classList.add('menuItem');\r\n    menuItems.push(item);\r\n  }\r\n\r\n  menuItems[0].innerHTML = `<div\r\n              class=\"thumb\"\r\n              style=\"background-image: url(${_attachments_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__})\"\r\n            ></div>\r\n            <h1>Try our piza</h1>`;\r\n  menuItems[1].innerHTML = `<div class=\"menuItem\">\r\n            <div\r\n              class=\"thumb\"\r\n              style=\"background-image: url(${_attachments_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__})\"\r\n            ></div>\r\n            <h1>The Best Grilled Chicken</h1>`;\r\n  menuItems[2].innerHTML = ` <div\r\n              class=\"thumb\"\r\n              style=\"background-image: url(${_attachments_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__})\"\r\n            ></div>\r\n            <h1>Perfect Weeknight Pasta Dinners</h1>`;\r\n  menuItems[3].innerHTML = ` <div\r\n              class=\"thumb\"\r\n              style=\"background-image: url(${_attachments_salad_jpg__WEBPACK_IMPORTED_MODULE_4__})\"\r\n            ></div>\r\n            <h1>or go vegeterian and try our salad!</h1>`;\r\n\r\n  menuItems.forEach((item) => {\r\n    menu.appendChild(item);\r\n  });\r\n  menuContainer.appendChild(menu);\r\n\r\n  return menuContainer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _attachments_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attachments/logo.png */ \"./attachments/logo.png\");\n\r\n\r\n\r\nfunction navBar() {\r\n  const header = document.createElement('header');\r\n  const logo = document.createElement('div');\r\n  logo.classList.add('logo');\r\n  const nav = document.createElement('nav');\r\n\r\n  // add logo through webpack\r\n  const logoImg = new Image();\r\n  logoImg.src = _attachments_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  logo.appendChild(logoImg);\r\n\r\n  const Button = function (_class) {\r\n    this.btn = document.createElement('button');\r\n    this.class = this.btn.classList.add(_class);\r\n    this.btn.innerHTML = _class;\r\n  };\r\n\r\n  //buttons display\r\n  Button.prototype.appendToNav = function () {\r\n    nav.appendChild(this.btn);\r\n  };\r\n\r\n  const buttons = [new Button('home'), new Button('menu'), new Button('about')];\r\n\r\n  buttons.forEach((ele) => {\r\n    ele.appendToNav();\r\n  });\r\n  header.appendChild(logo);\r\n  header.appendChild(nav);\r\n  return header;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./attachments/background-img.jpg":
/*!****************************************!*\
  !*** ./attachments/background-img.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac4c1b9b0226bffb1cd5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/background-img.jpg?");

/***/ }),

/***/ "./attachments/chicken.jpg":
/*!*********************************!*\
  !*** ./attachments/chicken.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aefb5a2448d8467b0eae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/chicken.jpg?");

/***/ }),

/***/ "./attachments/home-pic.jpg":
/*!**********************************!*\
  !*** ./attachments/home-pic.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3887db3ba88c132b5b6c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/home-pic.jpg?");

/***/ }),

/***/ "./attachments/logo.png":
/*!******************************!*\
  !*** ./attachments/logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc4c331a27a7fbc1f3e7.png\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/logo.png?");

/***/ }),

/***/ "./attachments/pasta.jpg":
/*!*******************************!*\
  !*** ./attachments/pasta.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4e1bcc72a0ce4f2a4d7.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/pasta.jpg?");

/***/ }),

/***/ "./attachments/pizza.jpg":
/*!*******************************!*\
  !*** ./attachments/pizza.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92e746b4886361a387f8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/pizza.jpg?");

/***/ }),

/***/ "./attachments/salad.jpg":
/*!*******************************!*\
  !*** ./attachments/salad.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a5b03a010ec75594376.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./attachments/salad.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;