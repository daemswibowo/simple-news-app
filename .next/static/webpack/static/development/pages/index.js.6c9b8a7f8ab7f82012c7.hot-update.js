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
  //all axios can be used, shown in axios documentation
  baseURL: 'https://newsapi.org/v2',
  responseType: 'json',
  interceptors: {
    request: [function (_ref, req) {
      var getState = _ref.getState,
          dispatch = _ref.dispatch,
          getSourceAction = _ref.getSourceAction;
      console.log(req); //contains information about request object

      return req;
    }, function (_ref2, req) {//...

      var getState = _ref2.getState,
          dispatch = _ref2.dispatch,
          getSourceAction = _ref2.getSourceAction;
    }]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_axios_middleware__WEBPACK_IMPORTED_MODULE_2___default()(client))));

/***/ })

})
//# sourceMappingURL=index.js.6c9b8a7f8ab7f82012c7.hot-update.js.map