webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardList/Card/TextContent/textcontent.css\"));\nfunction TextContent(_a) {\n    var Content = _a.Content;\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: textcontent_css_1.default.avatar, src: Content.user.avatarUrl, alt: \"avatar\" }),\n                react_1.default.createElement(\"a\", { href: Content.user.userUrl, className: textcontent_css_1.default.username },\n                    \" \",\n                    Content.user.name)),\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishLabel }, \" \\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n                Content.user.postDate)),\n        react_1.default.createElement(\"h2\", { className: textcontent_css_1.default.title },\n            react_1.default.createElement(\"a\", { href: Content.postUrl, className: textcontent_css_1.default.postLink }, Content.text))));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ })

})