self["webpackHotUpdate_N_E"]("pages/categoria/[slug]",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/CartContext */ "./lib/CartContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\components\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();




var Header = function Header(_ref) {
  _s();

  var categories = _ref.categories;
  var cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "text-gray-600 body-font",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "ml-3 text-xl",
            children: "QuaseTudo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",
        children: categories.map(function (category) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: '/categoria/' + category.slug,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "inline-block mr-5 hover:text-gray-900 hover:underline transition-all",
              children: category.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, _this)
          }, category.id, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/cart",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0",
          children: ["Carrinho ", cart.size > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: ["(", cart.size, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 40
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            className: "w-4 h-4 ml-1",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M5 12h14M12 5l7 7-7 7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_s(Header, "kj6vYOuuZe117C9BX73N0wcQ3Yk=", false, function () {
  return [_lib_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2F0ZWdvcmllcyIsImNhcnQiLCJ1c2VDYXJ0IiwibWFwIiwiY2F0ZWdvcnkiLCJzbHVnIiwibmFtZSIsImlkIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ2pDLE1BQU1DLElBQUksR0FBR0MseURBQU8sRUFBcEI7QUFDQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyx5QkFBbEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3RUFBZjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMscUVBQWI7QUFBQSxrQ0FDRTtBQUNFLGlCQUFLLEVBQUMsNEJBRFI7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxrQkFBTSxFQUFDLGNBSFQ7QUFJRSx5QkFBYSxFQUFDLE9BSmhCO0FBS0UsMEJBQWMsRUFBQyxPQUxqQjtBQU1FLHVCQUFXLEVBQUMsR0FOZDtBQU9FLHFCQUFTLEVBQUMscURBUFo7QUFRRSxtQkFBTyxFQUFDLFdBUlY7QUFBQSxtQ0FVRTtBQUFNLGVBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBYUU7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWtCRTtBQUFLLGlCQUFTLEVBQUMseUhBQWY7QUFBQSxrQkFDR0YsVUFBVSxDQUFDRyxHQUFYLENBQWUsVUFBQUMsUUFBUSxFQUFJO0FBQzFCLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRSxnQkFBZ0JBLFFBQVEsQ0FBQ0MsSUFBckM7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsc0VBQWI7QUFBQSx3QkFDR0QsUUFBUSxDQUFDRTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFnREYsUUFBUSxDQUFDRyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkYsZUE2QkUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBQyw2SEFBbEI7QUFBQSxrQ0FDWU4sSUFBSSxDQUFDTyxJQUFMLEdBQVksQ0FBWixpQkFBaUI7QUFBQSw0QkFBUVAsSUFBSSxDQUFDTyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEN0IsZUFFRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLGtCQUFNLEVBQUMsY0FGVDtBQUdFLHlCQUFhLEVBQUMsT0FIaEI7QUFJRSwwQkFBYyxFQUFDLE9BSmpCO0FBS0UsdUJBQVcsRUFBQyxHQUxkO0FBTUUscUJBQVMsRUFBQyxjQU5aO0FBT0UsbUJBQU8sRUFBQyxXQVBWO0FBQUEsbUNBU0U7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQXBERDs7R0FBTVQsTTtVQUNTRyxxRDs7O0tBRFRILE07QUFxRE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmlhL1tzbHVnXS5lMmQ1NTMyZjkzMjhjNzAxNThhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL0NhcnRDb250ZXh0J1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBib2R5LWZvbnQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAgcC01IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggdGl0bGUtZm9udCBmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTkwMCBtYi00IG1kOm1iLTAnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMCBoLTEwIHRleHQtd2hpdGUgcC0yIGJnLWluZGlnby01MDAgcm91bmRlZC1mdWxsJ1xyXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9J00xMiAyTDIgN2wxMCA1IDEwLTUtMTAtNXpNMiAxN2wxMCA1IDEwLTVNMiAxMmwxMCA1IDEwLTUnPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtMyB0ZXh0LXhsJz5RdWFzZVR1ZG88L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtZDptci1hdXRvIG1kOm1sLTQgbWQ6cHktMSBtZDpwbC00IG1kOmJvcmRlci1sIG1kOmJvcmRlci1ncmF5LTQwMFx0ZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHRleHQtYmFzZSBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2F0ZWdvcmlhLycgKyBjYXRlZ29yeS5zbHVnfSBrZXk9e2NhdGVnb3J5LmlkfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIG1yLTUgaG92ZXI6dGV4dC1ncmF5LTkwMCBob3Zlcjp1bmRlcmxpbmUgdHJhbnNpdGlvbi1hbGwnPlxyXG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9jYXJ0Jz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS0xMDAgYm9yZGVyLTAgcHktMSBweC0zIGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkIHRleHQtYmFzZSBtdC00IG1kOm10LTAnPlxyXG4gICAgICAgICAgICBDYXJyaW5obyB7Y2FydC5zaXplID4gMCAmJiA8c3Bhbj4oe2NhcnQuc2l6ZX0pPC9zcGFuPn1cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCBtbC0xJ1xyXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9J001IDEyaDE0TTEyIDVsNyA3LTcgNyc+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==