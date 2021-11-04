webpackHotUpdate("main",{

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\nfunction CardList() {\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardList },\n        react_1.default.createElement(Card_1.Card, { textContent: {\n                text: 'Противоположная точка зрения на данную проблему',\n                postUrl: 'post_url',\n                user: {\n                    name: 'Лаврентьев Дмитрий',\n                    avatarUrl: 'https://www.pinclipart.com/picdir/big/38-388919_computer-icons-user-profile-clip-art-avatar-user.png',\n                    userUrl: 'user_url',\n                    postDate: '05.01.2020',\n                }\n            }, img: {\n                src: 'https://cdn.dribbble.com/users/2367860/screenshots/15697262/media/867d8a5d92ef767912b0d5afc5f48251.png?compress=1&resize=1000x750',\n                alt: 'Картинка поста'\n            } })));\n}\nexports.CardList = CardList;\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ })

})