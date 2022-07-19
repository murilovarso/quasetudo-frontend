(function() {
var exports = {};
exports.id = "pages/categoria/[slug]";
exports.ids = ["pages/categoria/[slug]"];
exports.modules = {

/***/ "./lib/priceUtils.js":
/*!***************************!*\
  !*** ./lib/priceUtils.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priceFormat": function() { return /* binding */ priceFormat; }
/* harmony export */ });
const priceFormat = price => {
  return 'R$ ' + price.toFixed(2).replace('.', ',');
};



/***/ }),

/***/ "./pages/categoria/[slug].js":
/*!***********************************!*\
  !*** ./pages/categoria/[slug].js ***!
  \***********************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_priceUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/priceUtils */ "./lib/priceUtils.js");

var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\pages\\categoria\\[slug].js";





const GET_ALL_PRODUCTS_BY_CATEGORY = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
  query getAllProductsByCategory($slug: String!) {
    products: getAllProductsByCategory(categorySlug: $slug) {
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

const Categoria = ({
  products,
  categories
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Categoria"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
                  lineNumber: 40,
                  columnNumber: 23
                }, undefined), (!product.images || product.images.length === 0) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "https://dummyimage.com/420x260"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mt-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "text-gray-500 text-xs tracking-widest title-font mb-1",
                  children: "CATEGORY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-gray-900 title-font text-lg font-medium",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: `/product/${product.slug}`,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: product.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "mt-1",
                  children: (0,_lib_priceUtils__WEBPACK_IMPORTED_MODULE_5__.priceFormat)(product.price)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(context) {
  const {
    products
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_2__.fetcher)(GET_ALL_PRODUCTS_BY_CATEGORY, {
    slug: context.query.slug
  });
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
/* harmony default export */ __webpack_exports__["default"] = (Categoria);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_js-lib_graphql_js"], function() { return __webpack_exec__("./pages/categoria/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vbGliL3ByaWNlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2l0ZS8uL3BhZ2VzL2NhdGVnb3JpYS9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbInByaWNlRm9ybWF0IiwicHJpY2UiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIkdFVF9BTExfUFJPRFVDVFNfQllfQ0FURUdPUlkiLCJncWwiLCJHRVRfQUxMX0NBVEVHT1JJRVMiLCJDYXRlZ29yaWEiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJtYXAiLCJwcm9kdWN0IiwiaW1hZ2VzIiwibGVuZ3RoIiwic2x1ZyIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2hlciIsInF1ZXJ5IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHQyxLQUFLLElBQUk7QUFDekIsU0FBTyxRQUFRQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxPQUFqQixDQUF5QixHQUF6QixFQUE4QixHQUE5QixDQUFmO0FBQ0QsQ0FGSDs7Ozs7Ozs7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LCtEQUFlRixTQUFmLEU7Ozs7Ozs7Ozs7O0FDakZBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2NhdGVnb3JpYS9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmljZUZvcm1hdCA9IHByaWNlID0+IHtcclxuICAgIHJldHVybiAnUiQgJyArIHByaWNlLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICcsJylcclxuICB9XHJcbiAgZXhwb3J0IHsgcHJpY2VGb3JtYXQgfSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL2xpYi9ncmFwaHFsJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHByaWNlRm9ybWF0IH0gZnJvbSAnLi4vLi4vbGliL3ByaWNlVXRpbHMnXHJcblxyXG5jb25zdCBHRVRfQUxMX1BST0RVQ1RTX0JZX0NBVEVHT1JZID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFByb2R1Y3RzQnlDYXRlZ29yeSgkc2x1ZzogU3RyaW5nISkge1xyXG4gICAgcHJvZHVjdHM6IGdldEFsbFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeVNsdWc6ICRzbHVnKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgc2x1Z1xyXG4gICAgICBwcmljZVxyXG4gICAgICBpbWFnZXNcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgR0VUX0FMTF9DQVRFR09SSUVTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGNhdGVnb3JpZXM6IGdldEFsbENhdGVnb3JpZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENhdGVnb3JpYSA9ICh7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgPGgxPkNhdGVnb3JpYTwvaDE+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBib2R5LWZvbnQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcHgtNSBweS0yNCBteC1hdXRvJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCAtbS00Jz5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctMS80IG1kOnctMS8yIHAtNCB3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Jsb2NrIHJlbGF0aXZlIGgtNDggcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlcyAmJiBwcm9kdWN0LmltYWdlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdlY29tbWVyY2UgJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J29iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHctZnVsbCBoLWZ1bGwgYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZXNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyghcHJvZHVjdC5pbWFnZXMgfHwgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MjB4MjYwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgdGV4dC14cyB0cmFja2luZy13aWRlc3QgdGl0bGUtZm9udCBtYi0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENBVEVHT1JZXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRpdGxlLWZvbnQgdGV4dC1sZyBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwcm9kdWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC0xJz57cHJpY2VGb3JtYXQocHJvZHVjdC5wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9QUk9EVUNUU19CWV9DQVRFR09SWSwge1xyXG4gICAgc2x1ZzogY29udGV4dC5xdWVyeS5zbHVnXHJcbiAgfSlcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0cyxcclxuICAgICAgY2F0ZWdvcmllc1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=