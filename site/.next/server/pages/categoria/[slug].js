(function() {
var exports = {};
exports.id = "pages/categoria/[slug]";
exports.ids = ["pages/categoria/[slug]"];
exports.modules = {

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","lib_CartContext_js","components_Layout_js-lib_graphql_js-lib_priceUtils_js"], function() { return __webpack_exec__("./pages/categoria/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvY2F0ZWdvcmlhL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwiZ3JhcGhxbC1yZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiR0VUX0FMTF9QUk9EVUNUU19CWV9DQVRFR09SWSIsImdxbCIsIkdFVF9BTExfQ0FURUdPUklFUyIsIkNhdGVnb3JpYSIsInByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsIm1hcCIsInByb2R1Y3QiLCJpbWFnZXMiLCJsZW5ndGgiLCJzbHVnIiwibmFtZSIsInByaWNlRm9ybWF0IiwicHJpY2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2hlciIsInF1ZXJ5IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsNEJBQTRCLEdBQUdDLGdEQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7QUFXQSxNQUFNQyxrQkFBa0IsR0FBR0QsZ0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcmljZUZvcm1hdCB9IGZyb20gJy4uLy4uL2xpYi9wcmljZVV0aWxzJ1xyXG5cclxuY29uc3QgR0VUX0FMTF9QUk9EVUNUU19CWV9DQVRFR09SWSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxQcm9kdWN0c0J5Q2F0ZWdvcnkoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgIHByb2R1Y3RzOiBnZXRBbGxQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlTbHVnOiAkc2x1Zykge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNsdWdcclxuICAgICAgcHJpY2VcclxuICAgICAgaW1hZ2VzXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjYXRlZ29yaWVzOiBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBDYXRlZ29yaWEgPSAoeyBwcm9kdWN0cywgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgICAgIDxoMT5DYXRlZ29yaWE8L2gxPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgYm9keS1mb250Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0byc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgLW0tNCc+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTEvNCBtZDp3LTEvMiBwLTQgdy1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdibG9jayByZWxhdGl2ZSBoLTQ4IHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMgJiYgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nZWNvbW1lcmNlICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoIXByb2R1Y3QuaW1hZ2VzIHx8IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCA9PT0gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZHVtbXlpbWFnZS5jb20vNDIweDI2MCcgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHRpdGxlLWZvbnQgbWItMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDQVRFR09SWVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTkwMCB0aXRsZS1mb250IHRleHQtbGcgZm9udC1tZWRpdW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57cHJvZHVjdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSc+e3ByaWNlRm9ybWF0KHByb2R1Y3QucHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9BTExfUFJPRFVDVFNfQllfQ0FURUdPUlksIHtcclxuICAgIHNsdWc6IGNvbnRleHQucXVlcnkuc2x1Z1xyXG4gIH0pXHJcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBhd2FpdCBmZXRjaGVyKEdFVF9BTExfQ0FURUdPUklFUylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIGNhdGVnb3JpZXNcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9