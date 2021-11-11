webpackHotUpdate("main",{

/***/ "../module_5/src/shared/Layout/layout.css":
/*!************************************************!*\
  !*** ../module_5/src/shared/Layout/layout.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../module_4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../module_4/node_modules/css-loader/dist/cjs.js??ref--5-1!./layout.css */ \"./node_modules/css-loader/dist/cjs.js?!../module_5/src/shared/Layout/layout.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../module_4/node_modules/css-loader/dist/cjs.js??ref--5-1!./layout.css */ \"./node_modules/css-loader/dist/cjs.js?!../module_5/src/shared/Layout/layout.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../../module_4/node_modules/css-loader/dist/cjs.js??ref--5-1!./layout.css */ \"./node_modules/css-loader/dist/cjs.js?!../module_5/src/shared/Layout/layout.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///../module_5/src/shared/Layout/layout.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!../module_5/src/shared/Layout/layout.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!../module_5/src/shared/Layout/layout.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../module_4/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".layout__layout--2UBLu {\\n    max-width: 1400px;\\n    margin: 0 auto;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"layout\": \"layout__layout--2UBLu\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///../module_5/src/shared/Layout/layout.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/layout.css":
false,

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ../../../../module_5/src/shared/Layout/layout.css */ \"../module_5/src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
false

})