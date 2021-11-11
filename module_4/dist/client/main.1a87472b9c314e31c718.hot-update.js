webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Dropdown/dropdown.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Dropdown/dropdown.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".dropdown__container--a5Jzh {\\n  width: 100%;\\n  flex: 1 1 0%;\\n}\\n\\n.dropdown__listContainer--YYYB3 {\\n  position: relative;\\n}\\n\\n.dropdown__list--23slg {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Header_1.Header, null),\n        react_1.default.createElement(Content_1.Content, null,\n            react_1.default.createElement(CardList_1.CardList, null),\n            react_1.default.createElement(\"div\", { style: { padding: 20 } },\n                react_1.default.createElement(\"br\", null),\n                react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: false, button: react_1.default.createElement(\"button\", null, \" test \") },\n                    react_1.default.createElement(CardList_1.CardList, null))))));\n}\nexports.App = (0, root_1.hot)(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nwindow.addEventListener('load', function () {\n    ReactDom.hydrate(React.createElement(App_1.App, null), document.getElementById('react__root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nvar iDropdownProps = /** @class */ (function () {\n    function iDropdownProps() {\n    }\n    return iDropdownProps;\n}());\nvar NOOP = function () { };\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    var handleOpen = function () {\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: function () { return handleOpen; } }, button),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./dropdown.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Dropdown/dropdown.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./dropdown.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Dropdown/dropdown.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./dropdown.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Dropdown/dropdown.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
false,

/***/ "./src/shared/GenericList/index.ts":
false,

/***/ "./src/utils/js/assoc.ts":
false,

/***/ "./src/utils/react/generateRandomIndex.ts":
false

})