webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./reducers/index.js");
/* harmony import */ var redux_axios_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-axios-middleware */ "./node_modules/redux-axios-middleware/dist/bundle.js");
/* harmony import */ var redux_axios_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_axios_middleware__WEBPACK_IMPORTED_MODULE_2__);



var client = axios.create({
  baseURL: 'https://newsapi.org/v2',
  responseType: 'json'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_axios_middleware__WEBPACK_IMPORTED_MODULE_2___default()(client))));

/***/ })

})
//# sourceMappingURL=index.js.428789882639e38adc1e.hot-update.js.map