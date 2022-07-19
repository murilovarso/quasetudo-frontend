(function() {
var exports = {};
exports.id = "pages/marca/[slug]";
exports.ids = ["pages/marca/[slug]"];
exports.modules = {

/***/ "./pages/marca/[slug].js":
/*!*******************************!*\
  !*** ./pages/marca/[slug].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/graphql */ "./lib/graphql.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\pages\\marca\\[slug].js";



const GET_ALL_PRODUCTS_BY_BRAND = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
  query getAllProductsByBrand($slug: String!) {
    products: getAllProductsByBrand(brandSlug: $slug) {
      id
      name
      slug
      price
      images
    }
  }
`;
const GET_ALL_CATEGORIES = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
  query {
    categories: getAllCategories {
      id
      name
      slug
    }
  }
`;

const Brand = ({
  products,
  categories
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Brand"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "text-gray-600 body-font",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container px-5 py-24 mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-wrap -m-4",
          children: products.map(product => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "lg:w-1/4 md:w-1/2 p-4 w-full",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "block relative h-48 rounded overflow-hidden",
                children: [product.images && product.images.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  alt: "ecommerce ",
                  className: "object-cover object-center w-full h-full block",
                  src: product.images[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 23
                }, undefined), (!product.images || product.images.length === 0) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "https://dummyimage.com/420x260"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mt-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "text-gray-500 text-xs tracking-widest title-font mb-1",
                  children: "CATEGORY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-gray-900 title-font text-lg font-medium",
                  children: product.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "mt-1",
                  children: ["R$ ", product.price.toFixed(2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(context) {
  const {
    products
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_2__.fetcher)(GET_ALL_PRODUCTS_BY_BRAND, {
    slug: context.query.slug
  });
  console.log(products);
  const {
    categories
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_2__.fetcher)(GET_ALL_CATEGORIES);
  return {
    props: {
      products,
      categories
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Brand);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","lib_CartContext_js","components_Layout_js-lib_graphql_js"], function() { return __webpack_exec__("./pages/marca/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvbWFyY2EvW3NsdWddLmpzIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJHRVRfQUxMX1BST0RVQ1RTX0JZX0JSQU5EIiwiZ3FsIiwiR0VUX0FMTF9DQVRFR09SSUVTIiwiQnJhbmQiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJtYXAiLCJwcm9kdWN0IiwiaW1hZ2VzIiwibGVuZ3RoIiwibmFtZSIsInByaWNlIiwidG9GaXhlZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJmZXRjaGVyIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEseUJBQXlCLEdBQUdDLGdEQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7QUFXQSxNQUFNQyxrQkFBa0IsR0FBR0QsZ0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBOztBQVVBLE1BQU1FLEtBQUssR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQThCO0FBQzFDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFQSxVQUFwQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUyxlQUFTLEVBQUMseUJBQW5CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsb0JBQ0dELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxPQUFPLElBQUk7QUFDdkIsZ0NBQ0U7QUFBSyx1QkFBUyxFQUFDLDhCQUFmO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLDZDQUFiO0FBQUEsMkJBQ0dBLE9BQU8sQ0FBQ0MsTUFBUixJQUFrQkQsT0FBTyxDQUFDQyxNQUFSLENBQWVDLE1BQWYsR0FBd0IsQ0FBMUMsaUJBQ0M7QUFDRSxxQkFBRyxFQUFDLFlBRE47QUFFRSwyQkFBUyxFQUFDLGdEQUZaO0FBR0UscUJBQUcsRUFBRUYsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBZjtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkosRUFRRyxDQUFDLENBQUNELE9BQU8sQ0FBQ0MsTUFBVCxJQUFtQkQsT0FBTyxDQUFDQyxNQUFSLENBQWVDLE1BQWYsS0FBMEIsQ0FBOUMsa0JBQ0M7QUFBSyxxQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFhRTtBQUFLLHlCQUFTLEVBQUMsTUFBZjtBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBQyx1REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFO0FBQUksMkJBQVMsRUFBQyw4Q0FBZDtBQUFBLDRCQUNHRixPQUFPLENBQUNHO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRixlQU9FO0FBQUcsMkJBQVMsRUFBQyxNQUFiO0FBQUEsb0NBQXdCSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQixDQUF0QixDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQXlCRCxXQTFCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNDRCxDQXZDRDs7QUF3Q08sZUFBZUMsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRVY7QUFBRixNQUFlLE1BQU1XLHFEQUFPLENBQUNmLHlCQUFELEVBQTRCO0FBQzVEZ0IsUUFBSSxFQUFFRixPQUFPLENBQUNHLEtBQVIsQ0FBY0Q7QUFEd0MsR0FBNUIsQ0FBbEM7QUFHQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlmLFFBQVo7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBaUIsTUFBTVUscURBQU8sQ0FBQ2Isa0JBQUQsQ0FBcEM7QUFDQSxTQUFPO0FBQ0xrQixTQUFLLEVBQUU7QUFDTGhCLGNBREs7QUFFTEM7QUFGSztBQURGLEdBQVA7QUFNRDtBQUNELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7O0FDOUVBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL21hcmNhL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL2xpYi9ncmFwaHFsJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuY29uc3QgR0VUX0FMTF9QUk9EVUNUU19CWV9CUkFORCA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxQcm9kdWN0c0J5QnJhbmQoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgIHByb2R1Y3RzOiBnZXRBbGxQcm9kdWN0c0J5QnJhbmQoYnJhbmRTbHVnOiAkc2x1Zykge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgICAgcHJpY2VcclxuICAgICAgaW1hZ2VzXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjYXRlZ29yaWVzOiBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBCcmFuZCA9ICh7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgPGgxPkJyYW5kPC9oMT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGJvZHktZm9udCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIC1tLTQnPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6dy0xLzQgbWQ6dy0xLzIgcC00IHctZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2sgcmVsYXRpdmUgaC00OCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbic+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaW1hZ2VzICYmIHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2Vjb21tZXJjZSAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1mdWxsIGgtZnVsbCBibG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlc1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7KCFwcm9kdWN0LmltYWdlcyB8fCBwcm9kdWN0LmltYWdlcy5sZW5ndGggPT09IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2R1bW15aW1hZ2UuY29tLzQyMHgyNjAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCB0aXRsZS1mb250IG1iLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ0FURUdPUllcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtZ3JheS05MDAgdGl0bGUtZm9udCB0ZXh0LWxnIGZvbnQtbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTEnPlIkIHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9QUk9EVUNUU19CWV9CUkFORCwge1xyXG4gICAgc2x1ZzogY29udGV4dC5xdWVyeS5zbHVnXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0cylcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgICAgY2F0ZWdvcmllc1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==