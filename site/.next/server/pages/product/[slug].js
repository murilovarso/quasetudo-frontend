(function() {
var exports = {};
exports.id = "pages/product/[slug]";
exports.ids = ["pages/product/[slug]"];
exports.modules = {

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/CartContext */ "./lib/CartContext.js");

var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\pages\\product\\[slug].js";





const GET_PRODUCT_BY_SLUG = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
  query getProductBySlug($slug: String!) {
    product: getProductBySlug(slug: $slug) {
      id
      name
      slug
      price
      images
      description
      optionNames
      variations {
        optionName1
        optionName2
        sku
        price
        weight
        stock
      }
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
  product,
  categories
}) => {
  const cart = (0,_lib_CartContext__WEBPACK_IMPORTED_MODULE_5__.useCart)();
  const {
    0: currentImage,
    1: setCurrentImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const {
    0: variation1,
    1: setVariation1
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: variation2,
    1: setVariation2
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  const setImage = index => () => {
    setCurrentImage(index);
  };

  const possibleValues1 = [...new Set(product.variations.map(pv => pv.optionName1))];
  const possibleValues2 = [...new Set(product.variations.map(pv => pv.optionName2))];

  const onChangeVariation1 = evt => {
    setVariation1(evt.target.value);
  };

  const onChangeVariation2 = evt => {
    setVariation2(evt.target.value);
  };

  const validVariations1 = product.variations.filter(item => item.optionName2 === variation2).map(pv => pv.optionName1);
  const validVariations2 = product.variations.filter(item => item.optionName1 === variation1).map(pv => pv.optionName2);

  const isVariation1Disable = value => {
    return !(variation2 === '' || validVariations1.indexOf(value) >= 0);
  };

  const isVariation2Disable = value => {
    return !(variation1 === '' || validVariations2.indexOf(value) >= 0);
  };

  const selectedVariation = product.variations.filter(item => item.optionName1 === variation1).filter(item => item.optionName2 === variation2);
  const selectedPrice = selectedVariation && selectedVariation[0] && selectedVariation[0].price ? selectedVariation[0].price : product.price;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    categories: categories,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "text-gray-600 body-font overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container px-5 py-24 mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:w-4/5 mx-auto flex flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [product.images && product.images.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                alt: "ecommerce ",
                className: "w-full lg:h-auto h-64 object-cover object-center rounded",
                src: product.images[currentImage]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, undefined), (!product.images || product.images.length === 0) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "w-full lg:h-auto h-64 object-cover object-center rounded",
                src: "https://dummyimage.com/420x260"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined), product.images && product.images.length > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: product.images.map((img, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                onClick: setImage(index),
                src: img,
                className: `transition-all cursor-pointer inline-block w-32 m-1 ${index === currentImage ? 'border-gray-600 border-2 p-2' : 'p-4'}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "text-sm title-font text-gray-500 tracking-widest",
              children: "BRAND NAME"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "text-gray-900 text-3xl title-font font-medium mb-1",
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 text-indigo-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 text-indigo-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 text-indigo-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 text-indigo-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-4 h-4 text-indigo-500",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-gray-600 ml-3",
                  children: "4 Reviews"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "text-gray-500",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    fill: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "stroke-width": "2",
                    className: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "text-gray-500",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    fill: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "stroke-width": "2",
                    className: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "text-gray-500",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    fill: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "stroke-width": "2",
                    className: "w-5 h-5",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "leading-relaxed",
              children: [product.description, ' ']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "mr-3",
                  children: product.optionNames[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "relative",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                    onChange: onChangeVariation1,
                    className: "rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "",
                      children: [product.optionNames[0], " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 23
                    }, undefined), possibleValues1.map(pv => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      disabled: isVariation1Disable(pv),
                      children: [pv, " ", isVariation1Disable(pv) && ' (indisponível)']
                    }, pv, true, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "stroke-width": "2",
                      className: "w-4 h-4",
                      viewBox: "0 0 24 24",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "M6 9l6 6 6-6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 255,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex ml-6 items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "mr-3",
                  children: product.optionNames[1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "relative",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                    onChange: onChangeVariation2,
                    className: "rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      value: "",
                      children: [product.optionNames[1], " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 23
                    }, undefined), possibleValues2.map(pv => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                      disabled: isVariation2Disable(pv),
                      children: [pv, " ", isVariation2Disable(pv) && ' (indisponível)']
                    }, pv, true, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 25
                    }, undefined))]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "stroke-width": "2",
                      className: "w-4 h-4",
                      viewBox: "0 0 24 24",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "M6 9l6 6 6-6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "title-font font-medium text-2xl text-gray-900",
                children: ["R$ ", selectedPrice.toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: () => cart.addToCart(product, selectedVariation),
                className: "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                children: "Adicionar no carrinho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  fill: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "stroke-width": "2",
                  className: "w-5 h-5",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps(context) {
  const {
    product
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_2__.fetcher)(GET_PRODUCT_BY_SLUG, {
    slug: context.query.slug
  });
  const {
    categories
  } = await (0,_lib_graphql__WEBPACK_IMPORTED_MODULE_2__.fetcher)(GET_ALL_CATEGORIES);
  return {
    props: {
      product,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","lib_CartContext_js","components_Layout_js-lib_graphql_js"], function() { return __webpack_exec__("./pages/product/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL3NpdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2l0ZS9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUX0JZX1NMVUciLCJncWwiLCJHRVRfQUxMX0NBVEVHT1JJRVMiLCJCcmFuZCIsInByb2R1Y3QiLCJjYXRlZ29yaWVzIiwiY2FydCIsInVzZUNhcnQiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJ1c2VTdGF0ZSIsInZhcmlhdGlvbjEiLCJzZXRWYXJpYXRpb24xIiwidmFyaWF0aW9uMiIsInNldFZhcmlhdGlvbjIiLCJzZXRJbWFnZSIsImluZGV4IiwicG9zc2libGVWYWx1ZXMxIiwiU2V0IiwidmFyaWF0aW9ucyIsIm1hcCIsInB2Iiwib3B0aW9uTmFtZTEiLCJwb3NzaWJsZVZhbHVlczIiLCJvcHRpb25OYW1lMiIsIm9uQ2hhbmdlVmFyaWF0aW9uMSIsImV2dCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VWYXJpYXRpb24yIiwidmFsaWRWYXJpYXRpb25zMSIsImZpbHRlciIsIml0ZW0iLCJ2YWxpZFZhcmlhdGlvbnMyIiwiaXNWYXJpYXRpb24xRGlzYWJsZSIsImluZGV4T2YiLCJpc1ZhcmlhdGlvbjJEaXNhYmxlIiwic2VsZWN0ZWRWYXJpYXRpb24iLCJzZWxlY3RlZFByaWNlIiwicHJpY2UiLCJpbWFnZXMiLCJsZW5ndGgiLCJpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJvcHRpb25OYW1lcyIsInRvRml4ZWQiLCJhZGRUb0NhcnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2hlciIsInNsdWciLCJxdWVyeSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG1CQUFtQixHQUFHQyxnREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcEJBO0FBcUJBLE1BQU1DLGtCQUFrQixHQUFHRCxnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7O0FBVUEsTUFBTUUsS0FBSyxHQUFHLENBQUM7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQUQsS0FBNkI7QUFDekMsUUFBTUMsSUFBSSxHQUFHQyx5REFBTyxFQUFwQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0MsK0NBQVEsQ0FBQyxDQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJKLCtDQUFRLENBQUMsRUFBRCxDQUE1Qzs7QUFDQSxRQUFNSyxRQUFRLEdBQUdDLEtBQUssSUFBSSxNQUFNO0FBQzlCUCxtQkFBZSxDQUFDTyxLQUFELENBQWY7QUFDRCxHQUZEOztBQUdB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QTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRPRCxDQXpSRDs7QUEwUk8sZUFBZVcsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRTdDO0FBQUYsTUFBYyxNQUFNOEMscURBQU8sQ0FBQ2xELG1CQUFELEVBQXNCO0FBQ3JEbUQsUUFBSSxFQUFFRixPQUFPLENBQUNHLEtBQVIsQ0FBY0Q7QUFEaUMsR0FBdEIsQ0FBakM7QUFHQSxRQUFNO0FBQUU5QztBQUFGLE1BQWlCLE1BQU02QyxxREFBTyxDQUFDaEQsa0JBQUQsQ0FBcEM7QUFDQSxTQUFPO0FBQ0xtRCxTQUFLLEVBQUU7QUFDTGpELGFBREs7QUFFTEM7QUFGSztBQURGLEdBQVA7QUFNRDtBQUNELCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7O0FDM1VBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vbGliL2dyYXBocWwnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi8uLi9saWIvQ2FydENvbnRleHQnXHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVF9CWV9TTFVHID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RCeVNsdWcoJHNsdWc6IFN0cmluZyEpIHtcclxuICAgIHByb2R1Y3Q6IGdldFByb2R1Y3RCeVNsdWcoc2x1ZzogJHNsdWcpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGltYWdlc1xyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBvcHRpb25OYW1lc1xyXG4gICAgICB2YXJpYXRpb25zIHtcclxuICAgICAgICBvcHRpb25OYW1lMVxyXG4gICAgICAgIG9wdGlvbk5hbWUyXHJcbiAgICAgICAgc2t1XHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICB3ZWlnaHRcclxuICAgICAgICBzdG9ja1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBjYXRlZ29yaWVzOiBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBCcmFuZCA9ICh7IHByb2R1Y3QsIGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VDYXJ0KClcclxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdmFyaWF0aW9uMSwgc2V0VmFyaWF0aW9uMV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdmFyaWF0aW9uMiwgc2V0VmFyaWF0aW9uMl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBzZXRJbWFnZSA9IGluZGV4ID0+ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbWFnZShpbmRleClcclxuICB9XHJcbiAgY29uc3QgcG9zc2libGVWYWx1ZXMxID0gW1xyXG4gICAgLi4ubmV3IFNldChwcm9kdWN0LnZhcmlhdGlvbnMubWFwKHB2ID0+IHB2Lm9wdGlvbk5hbWUxKSlcclxuICBdXHJcbiAgY29uc3QgcG9zc2libGVWYWx1ZXMyID0gW1xyXG4gICAgLi4ubmV3IFNldChwcm9kdWN0LnZhcmlhdGlvbnMubWFwKHB2ID0+IHB2Lm9wdGlvbk5hbWUyKSlcclxuICBdXHJcbiAgY29uc3Qgb25DaGFuZ2VWYXJpYXRpb24xID0gZXZ0ID0+IHtcclxuICAgIHNldFZhcmlhdGlvbjEoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2VWYXJpYXRpb24yID0gZXZ0ID0+IHtcclxuICAgIHNldFZhcmlhdGlvbjIoZXZ0LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbGlkVmFyaWF0aW9uczEgPSBwcm9kdWN0LnZhcmlhdGlvbnNcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUyID09PSB2YXJpYXRpb24yKVxyXG4gICAgLm1hcChwdiA9PiBwdi5vcHRpb25OYW1lMSlcclxuXHJcbiAgY29uc3QgdmFsaWRWYXJpYXRpb25zMiA9IHByb2R1Y3QudmFyaWF0aW9uc1xyXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTEgPT09IHZhcmlhdGlvbjEpXHJcbiAgICAubWFwKHB2ID0+IHB2Lm9wdGlvbk5hbWUyKVxyXG5cclxuICBjb25zdCBpc1ZhcmlhdGlvbjFEaXNhYmxlID0gdmFsdWUgPT4ge1xyXG4gICAgcmV0dXJuICEodmFyaWF0aW9uMiA9PT0gJycgfHwgdmFsaWRWYXJpYXRpb25zMS5pbmRleE9mKHZhbHVlKSA+PSAwKVxyXG4gIH1cclxuICBjb25zdCBpc1ZhcmlhdGlvbjJEaXNhYmxlID0gdmFsdWUgPT4ge1xyXG4gICAgcmV0dXJuICEodmFyaWF0aW9uMSA9PT0gJycgfHwgdmFsaWRWYXJpYXRpb25zMi5pbmRleE9mKHZhbHVlKSA+PSAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRWYXJpYXRpb24gPSBwcm9kdWN0LnZhcmlhdGlvbnNcclxuICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wdGlvbk5hbWUxID09PSB2YXJpYXRpb24xKVxyXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ub3B0aW9uTmFtZTIgPT09IHZhcmlhdGlvbjIpXHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJpY2UgPVxyXG4gICAgc2VsZWN0ZWRWYXJpYXRpb24gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0gJiYgc2VsZWN0ZWRWYXJpYXRpb25bMF0ucHJpY2VcclxuICAgICAgPyBzZWxlY3RlZFZhcmlhdGlvblswXS5wcmljZVxyXG4gICAgICA6IHByb2R1Y3QucHJpY2VcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgIFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgYm9keS1mb250IG92ZXJmbG93LWhpZGRlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG8nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LXdyYXAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6dy0xLzIgdy1mdWxsIGxnOmgtYXV0byBoLTY0IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQnPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMgJiYgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2Vjb21tZXJjZSAnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbGc6aC1hdXRvIGgtNjQgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgcm91bmRlZCdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VzW2N1cnJlbnRJbWFnZV19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyghcHJvZHVjdC5pbWFnZXMgfHwgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBsZzpoLWF1dG8gaC02NCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciByb3VuZGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9kdW1teWltYWdlLmNvbS80MjB4MjYwJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QuaW1hZ2VzICYmIHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEltYWdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgaW5saW5lLWJsb2NrIHctMzIgbS0xICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItZ3JheS02MDAgYm9yZGVyLTIgcC0yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3AtNCdcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzp3LTEvMiB3LWZ1bGwgbGc6cGwtMTAgbGc6cHktNiBtdC02IGxnOm10LTAnPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtc20gdGl0bGUtZm9udCB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdCc+XHJcbiAgICAgICAgICAgICAgICBCUkFORCBOQU1FXHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktOTAwIHRleHQtM3hsIHRpdGxlLWZvbnQgZm9udC1tZWRpdW0gbWItMSc+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWItNCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCB0ZXh0LWluZGlnby01MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyIDJsMy4wOSA2LjI2TDIyIDkuMjdsLTUgNC44NyAxLjE4IDYuODhMMTIgMTcuNzdsLTYuMTggMy4yNUw3IDE0LjE0IDIgOS4yN2w2LjkxLTEuMDFMMTIgMnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMidcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNCBoLTQgdGV4dC1pbmRpZ28tNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMiAybDMuMDkgNi4yNkwyMiA5LjI3bC01IDQuODcgMS4xOCA2Ljg4TDEyIDE3Ljc3bC02LjE4IDMuMjVMNyAxNC4xNCAyIDkuMjdsNi45MS0xLjAxTDEyIDJ6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQgaC00IHRleHQtaW5kaWdvLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyeic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCB0ZXh0LWluZGlnby01MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyIDJsMy4wOSA2LjI2TDIyIDkuMjdsLTUgNC44NyAxLjE4IDYuODhMMTIgMTcuNzdsLTYuMTggMy4yNUw3IDE0LjE0IDIgOS4yN2w2LjkxLTEuMDFMMTIgMnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQgaC00IHRleHQtaW5kaWdvLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIgMmwzLjA5IDYuMjZMMjIgOS4yN2wtNSA0Ljg3IDEuMTggNi44OEwxMiAxNy43N2wtNi4xOCAzLjI1TDcgMTQuMTQgMiA5LjI3bDYuOTEtMS4wMUwxMiAyeic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIG1sLTMnPjQgUmV2aWV3czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmxleCBtbC0zIHBsLTMgcHktMiBib3JkZXItbC0yIGJvcmRlci1ncmF5LTIwMCBzcGFjZS14LTJzJz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMidcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01IGgtNSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTggMmgtM2E1IDUgMCAwMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwMTEtMWgzeic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIzIDNhMTAuOSAxMC45IDAgMDEtMy4xNCAxLjUzIDQuNDggNC40OCAwIDAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMDEzIDRzLTQgOSA1IDEzYTExLjY0IDExLjY0IDAgMDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAwLS4wOC0uODNBNy43MiA3LjcyIDAgMDAyMyAzeic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIxIDExLjVhOC4zOCA4LjM4IDAgMDEtLjkgMy44IDguNSA4LjUgMCAwMS03LjYgNC43IDguMzggOC4zOCAwIDAxLTMuOC0uOUwzIDIxbDEuOS01LjdhOC4zOCA4LjM4IDAgMDEtLjktMy44IDguNSA4LjUgMCAwMTQuNy03LjYgOC4zOCA4LjM4IDAgMDEzLjgtLjloLjVhOC40OCA4LjQ4IDAgMDE4IDh2LjV6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xlYWRpbmctcmVsYXhlZCc+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn17JyAnfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC02IGl0ZW1zLWNlbnRlciBwYi01IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMTAwIG1iLTUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtci0zJz57cHJvZHVjdC5vcHRpb25OYW1lc1swXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVmFyaWF0aW9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCBib3JkZXIgYXBwZWFyYW5jZS1ub25lIGJvcmRlci1ncmF5LTMwMCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMjAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHRleHQtYmFzZSBwbC0zIHByLTEwJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+e3Byb2R1Y3Qub3B0aW9uTmFtZXNbMF19IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3NpYmxlVmFsdWVzMS5tYXAocHYgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHZ9IGRpc2FibGVkPXtpc1ZhcmlhdGlvbjFEaXNhYmxlKHB2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3B2fSB7aXNWYXJpYXRpb24xRGlzYWJsZShwdikgJiYgJyAoaW5kaXNwb27DrXZlbCknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBoLWZ1bGwgdy0xMCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNCBoLTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTYgOWw2IDYgNi02Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC02IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXItMyc+e3Byb2R1Y3Qub3B0aW9uTmFtZXNbMV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVZhcmlhdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQgYm9yZGVyIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItZ3JheS0zMDAgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCB0ZXh0LWJhc2UgcGwtMyBwci0xMCdcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPntwcm9kdWN0Lm9wdGlvbk5hbWVzWzFdfSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3NzaWJsZVZhbHVlczIubWFwKHB2ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3B2fSBkaXNhYmxlZD17aXNWYXJpYXRpb24yRGlzYWJsZShwdil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwdn0ge2lzVmFyaWF0aW9uMkRpc2FibGUocHYpICYmICcgKGluZGlzcG9uw612ZWwpJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTAgdG9wLTAgaC1mdWxsIHctMTAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCBwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTQgaC00J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J002IDlsNiA2IDYtNic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUtZm9udCBmb250LW1lZGl1bSB0ZXh0LTJ4bCB0ZXh0LWdyYXktOTAwJz5cclxuICAgICAgICAgICAgICAgICAgUiQge3NlbGVjdGVkUHJpY2UudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FydC5hZGRUb0NhcnQocHJvZHVjdCwgc2VsZWN0ZWRWYXJpYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggbWwtYXV0byB0ZXh0LXdoaXRlIGJnLWluZGlnby01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1pbmRpZ28tNjAwIHJvdW5kZWQnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkaWNpb25hciBubyBjYXJyaW5ob1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIHctMTAgaC0xMCBiZy1ncmF5LTIwMCBwLTAgYm9yZGVyLTAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDAgbWwtNCc+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMidcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIwLjg0IDQuNjFhNS41IDUuNSAwIDAwLTcuNzggMEwxMiA1LjY3bC0xLjA2LTEuMDZhNS41IDUuNSAwIDAwLTcuNzggNy43OGwxLjA2IDEuMDZMMTIgMjEuMjNsNy43OC03Ljc4IDEuMDYtMS4wNmE1LjUgNS41IDAgMDAwLTcuNzh6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGF3YWl0IGZldGNoZXIoR0VUX1BST0RVQ1RfQllfU0xVRywge1xyXG4gICAgc2x1ZzogY29udGV4dC5xdWVyeS5zbHVnXHJcbiAgfSlcclxuICBjb25zdCB7IGNhdGVnb3JpZXMgfSA9IGF3YWl0IGZldGNoZXIoR0VUX0FMTF9DQVRFR09SSUVTKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0LFxyXG4gICAgICBjYXRlZ29yaWVzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJyYW5kIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9