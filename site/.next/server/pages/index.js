(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/graphql */ "./lib/graphql.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Home_Brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/Brands */ "./components/Home/Brands.js");
/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/CartContext */ "./lib/CartContext.js");


var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\pages\\index.js";






const GET_ALL_BRANDS = graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
  query {
    brands: getAllBrands {
      id
      name
      slug
      logo
    }
  }
`;
const GET_ALL_CATEGORIES = graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`;

const Index = ({
  brands,
  categories
}) => {
  const cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_6__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      categories: categories,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => cart.removeFromCart({
          id: '2bcd0543-5e00-4c04-987a-f4737221a188'
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Brands__WEBPACK_IMPORTED_MODULE_5__.default, {
        brands: brands
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

async function getServerSideProps(context) {
  const {
    brands
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_3__.fetcher)(GET_ALL_BRANDS);
  const {
    categories
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_3__.fetcher)(GET_ALL_CATEGORIES);
  return {
    props: {
      brands,
      categories
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-request");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","lib_CartContext_js","components_Layout_js-lib_graphql_js","components_Home_Brands_js-components_Seo_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJHRVRfQUxMX0JSQU5EUyIsImdxbCIsIkdFVF9BTExfQ0FURUdPUklFUyIsIkluZGV4IiwiYnJhbmRzIiwiY2F0ZWdvcmllcyIsImNhcnQiLCJ1c2VDYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJmZXRjaGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxnREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FUQTtBQVVBLE1BQU1DLGtCQUFrQixHQUFHRCxnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7O0FBVUEsTUFBTUUsS0FBSyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQztBQUFWLENBQUQsS0FBNEI7QUFDeEMsUUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBUSxnQkFBVSxFQUFFRixVQUFwQjtBQUFBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGVBQU8sRUFBRSxNQUNQQyxJQUFJLENBQUNFLGNBQUwsQ0FBb0I7QUFBRUMsWUFBRSxFQUFFO0FBQU4sU0FBcEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBU0UsOERBQUMsNERBQUQ7QUFBUSxjQUFNLEVBQUVMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFlRCxDQWpCRDs7QUFrQk8sZUFBZU0sa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRVA7QUFBRixNQUFhLE1BQU1RLHFEQUFPLENBQUNaLGNBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUVLO0FBQUYsTUFBaUIsTUFBTU8scURBQU8sQ0FBQ1Ysa0JBQUQsQ0FBcEM7QUFDQSxTQUFPO0FBQ0xXLFNBQUssRUFBRTtBQUNMVCxZQURLO0FBRUxDO0FBRks7QUFERixHQUFQO0FBTUQ7QUFDRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7OztBQ3ZEQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW8gZnJvbSAnLi4vY29tcG9uZW50cy9TZW8nXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IGZldGNoZXIsIHVzZVF1ZXJ5IH0gZnJvbSAnLi4vbGliL2dyYXBocWwnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IEJyYW5kcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvQnJhbmRzJ1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL0NhcnRDb250ZXh0J1xyXG5cclxuY29uc3QgR0VUX0FMTF9CUkFORFMgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYnJhbmRzOiBnZXRBbGxCcmFuZHMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgICAgbG9nb1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBHRVRfQUxMX0NBVEVHT1JJRVMgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgY2F0ZWdvcmllczogZ2V0QWxsQ2F0ZWdvcmllcyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgSW5kZXggPSAoeyBicmFuZHMsIGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDYXJ0KClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgICA8U2VvIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgY2FydC5yZW1vdmVGcm9tQ2FydCh7IGlkOiAnMmJjZDA1NDMtNWUwMC00YzA0LTk4N2EtZjQ3MzcyMjFhMTg4JyB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPEJyYW5kcyBicmFuZHM9e2JyYW5kc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBicmFuZHMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9CUkFORFMpXHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9BTExfQ0FURUdPUklFUylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYnJhbmRzLFxyXG4gICAgICBjYXRlZ29yaWVzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=