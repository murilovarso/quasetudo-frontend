self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/graphql */ "./lib/graphql.js");
/* harmony import */ var _components_Home_Brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/Brands */ "./components/Home/Brands.js");
/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/CartContext */ "./lib/CartContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Index = function Index(_ref) {
  _s();

  var brands = _ref.brands,
      categories = _ref.categories;
  var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_5__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      categories: categories,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "QuaseTudo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: JSON.stringify(cart, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return cart.removeFromCart({
            id: '2bcd0543-5e00-4c04-987a-f4737221a188'
          });
        },
        children: "Count!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Brands__WEBPACK_IMPORTED_MODULE_4__.default, {
        brands: brands
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "kj6vYOuuZe117C9BX73N0wcQ3Yk=", false, function () {
  return [_lib_CartContext__WEBPACK_IMPORTED_MODULE_5__.useCart];
});

_c = Index;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJicmFuZHMiLCJjYXRlZ29yaWVzIiwiY2FydCIsInVzZUNhcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlRnJvbUNhcnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBc0JBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDeEMsTUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBUSxnQkFBVSxFQUFFRixVQUFwQjtBQUFBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLGtCQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQ1BBLElBQUksQ0FBQ0ksY0FBTCxDQUFvQjtBQUFFQyxjQUFFLEVBQUU7QUFBTixXQUFwQixDQURPO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBV0UsOERBQUMsNERBQUQ7QUFBUSxjQUFNLEVBQUVQO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlCRCxDQW5CRDs7R0FBTUQsSztVQUNTSSxxRDs7O0tBRFRKLEs7O0FBOEJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzYTJhMjM3NTIwYTkwOTQzZDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VvIGZyb20gJy4uL2NvbXBvbmVudHMvU2VvJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyBmZXRjaGVyLCB1c2VRdWVyeSB9IGZyb20gJy4uL2xpYi9ncmFwaHFsJ1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcbmltcG9ydCBCcmFuZHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL0JyYW5kcydcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9DYXJ0Q29udGV4dCdcclxuXHJcbmNvbnN0IEdFVF9BTExfQlJBTkRTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGJyYW5kczogZ2V0QWxsQnJhbmRzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICAgIGxvZ29cclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgR0VUX0FMTF9DQVRFR09SSUVTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNhdGVnb3JpZXM6IGdldEFsbENhdGVnb3JpZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgYnJhbmRzLCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgICAgICAgPFNlbyAvPlxyXG4gICAgICAgIDxoMT5RdWFzZVR1ZG88L2gxPlxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNhcnQsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGNhcnQucmVtb3ZlRnJvbUNhcnQoeyBpZDogJzJiY2QwNTQzLTVlMDAtNGMwNC05ODdhLWY0NzM3MjIxYTE4OCcgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDb3VudCFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8QnJhbmRzIGJyYW5kcz17YnJhbmRzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGJyYW5kcyB9ID0gYXdhaXQgZmV0Y2hlcihHRVRfQUxMX0JSQU5EUylcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBicmFuZHMsXHJcbiAgICAgIGNhdGVnb3JpZXNcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9