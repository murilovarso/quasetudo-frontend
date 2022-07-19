self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2F0ZWdvcmllcyIsImNhcnQiLCJ1c2VDYXJ0IiwibWFwIiwiY2F0ZWdvcnkiLCJzbHVnIiwibmFtZSIsImlkIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ2pDLE1BQU1DLElBQUksR0FBR0MseURBQU8sRUFBcEI7QUFDQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyx5QkFBbEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3RUFBZjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMscUVBQWI7QUFBQSxrQ0FDRTtBQUNFLGlCQUFLLEVBQUMsNEJBRFI7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxrQkFBTSxFQUFDLGNBSFQ7QUFJRSx5QkFBYSxFQUFDLE9BSmhCO0FBS0UsMEJBQWMsRUFBQyxPQUxqQjtBQU1FLHVCQUFXLEVBQUMsR0FOZDtBQU9FLHFCQUFTLEVBQUMscURBUFo7QUFRRSxtQkFBTyxFQUFDLFdBUlY7QUFBQSxtQ0FVRTtBQUFNLGVBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBYUU7QUFBTSxxQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWtCRTtBQUFLLGlCQUFTLEVBQUMseUhBQWY7QUFBQSxrQkFDR0YsVUFBVSxDQUFDRyxHQUFYLENBQWUsVUFBQUMsUUFBUSxFQUFJO0FBQzFCLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRSxnQkFBZ0JBLFFBQVEsQ0FBQ0MsSUFBckM7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsc0VBQWI7QUFBQSx3QkFDR0QsUUFBUSxDQUFDRTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFnREYsUUFBUSxDQUFDRyxFQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkYsZUE2QkUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBQyw2SEFBbEI7QUFBQSxrQ0FDWU4sSUFBSSxDQUFDTyxJQUFMLEdBQVksQ0FBWixpQkFBaUI7QUFBQSw0QkFBUVAsSUFBSSxDQUFDTyxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEN0IsZUFFRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLGtCQUFNLEVBQUMsY0FGVDtBQUdFLHlCQUFhLEVBQUMsT0FIaEI7QUFJRSwwQkFBYyxFQUFDLE9BSmpCO0FBS0UsdUJBQVcsRUFBQyxHQUxkO0FBTUUscUJBQVMsRUFBQyxjQU5aO0FBT0UsbUJBQU8sRUFBQyxXQVBWO0FBQUEsbUNBU0U7QUFBTSxlQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQXBERDs7R0FBTVQsTTtVQUNTRyxxRDs7O0tBRFRILE07QUFxRE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTJkNTUzMmY5MzI4YzcwMTU4YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9DYXJ0Q29udGV4dCdcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDYXJ0KClcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgYm9keS1mb250Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIHAtNSBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gaXRlbXMtY2VudGVyIHRleHQtZ3JheS05MDAgbWItNCBtZDptYi0wJz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAgaC0xMCB0ZXh0LXdoaXRlIHAtMiBiZy1pbmRpZ28tNTAwIHJvdW5kZWQtZnVsbCdcclxuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIgMkwyIDdsMTAgNSAxMC01LTEwLTV6TTIgMTdsMTAgNSAxMC01TTIgMTJsMTAgNSAxMC01Jz48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTMgdGV4dC14bCc+UXVhc2VUdWRvPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbWQ6bXItYXV0byBtZDptbC00IG1kOnB5LTEgbWQ6cGwtNCBtZDpib3JkZXItbCBtZDpib3JkZXItZ3JheS00MDBcdGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2UganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NhdGVnb3JpYS8nICsgY2F0ZWdvcnkuc2x1Z30ga2V5PXtjYXRlZ29yeS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2lubGluZS1ibG9jayBtci01IGhvdmVyOnRleHQtZ3JheS05MDAgaG92ZXI6dW5kZXJsaW5lIHRyYW5zaXRpb24tYWxsJz5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8TGluayBocmVmPScvY2FydCc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwIGJvcmRlci0wIHB5LTEgcHgtMyBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZCB0ZXh0LWJhc2UgbXQtNCBtZDptdC0wJz5cclxuICAgICAgICAgICAgQ2FycmluaG8ge2NhcnQuc2l6ZSA+IDAgJiYgPHNwYW4+KHtjYXJ0LnNpemV9KTwvc3Bhbj59XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNCBoLTQgbWwtMSdcclxuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPSdNNSAxMmgxNE0xMiA1bDcgNy03IDcnPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=