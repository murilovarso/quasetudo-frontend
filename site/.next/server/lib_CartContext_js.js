exports.id = "lib_CartContext_js";
exports.ids = ["lib_CartContext_js"];
exports.modules = {

/***/ "./lib/CartContext.js":
/*!****************************!*\
  !*** ./lib/CartContext.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartContext": function() { return /* binding */ CartContext; },
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\muril\\OneDrive\\\xC1rea de Trabalho\\QuaseTudo\\quasetudo-frontend\\site\\lib\\CartContext.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const CartProvider = ({
  children
}) => {
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadedCart = localStorage.getItem('cart');

    if (loadedCart) {
      setItems(JSON.parse(loadedCart));
    }
  }, []);

  const cartTotal = () => {
    return Object.keys(items).reduce((prev, productId) => {
      const productPrice = items[productId].product.price;
      const qtd = items[productId].qtd;
      const subTotal = Object.keys(qtd).reduce((prevSubTotal, variation) => {
        const price = qtd[variation].variation.price ? qtd[variation].variation.price : productPrice;
        return prevSubTotal + qtd[variation].qtd * price;
      }, 0);
      return prev + subTotal;
    }, 0);
  };

  const addToCart = (product, selectedVariation) => {
    const variation = selectedVariation[0];
    const variationId = variation.optionName1 + variation.optionName2;
    setItems(current => {
      const newCart = _objectSpread({}, current);

      if (current[product.id]) {
        if (current[product.id].qtd[variationId]) {
          current[product.id].qtd[variationId].qtd++;
        } else {
          current[product.id].qtd = _objectSpread(_objectSpread({}, current[product.id].qtd), {}, {
            [variationId]: {
              variation,
              qtd: 1
            }
          });
        }
      } else {
        newCart[product.id] = {
          product,
          qtd: {
            [variationId]: {
              variation,
              qtd: 1
            }
          }
        };
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = product => {
    const id = product.id;
    setItems(current => {
      const {
        [id]: etc
      } = current,
            newCart = _objectWithoutProperties(current, [id].map(_toPropertyKey));

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeVariationFromCart = (product, productVariation) => {
    setItems(current => {
      let newCart = _objectSpread({}, current);

      if (Object.keys(newCart[product].qtd).length === 1) {
        // caso 1 variacao, remove produto
        const {
          [product]: etc
        } = current,
              newCartWithoutProduct = _objectWithoutProperties(current, [product].map(_toPropertyKey));

        newCart = newCartWithoutProduct;
      } else {
        const _newCart$product$qtd = newCart[product].qtd,
              {
          [productVariation]: etc
        } = _newCart$product$qtd,
              newQtd = _objectWithoutProperties(_newCart$product$qtd, [productVariation].map(_toPropertyKey));

        newCart[product].qtd = newQtd;
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const changeQtd = (product, productVariation, increment) => {
    setItems(current => {
      const newCart = _objectSpread({}, current);

      const newQtd = newCart[product].qtd[productVariation].qtd + increment;
      newCart[product] = _objectSpread(_objectSpread({}, newCart[product]), {}, {
        qtd: _objectSpread(_objectSpread({}, newCart[product].qtd), {}, {
          [productVariation]: _objectSpread(_objectSpread({}, newCart[product].qtd[productVariation]), {}, {
            qtd: newQtd
          })
        })
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const size = Object.keys(items).length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {
    value: {
      items,
      addToCart,
      removeFromCart,
      removeVariationFromCart,
      changeQtd,
      size,
      cartTotal: cartTotal()
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, undefined);
};
const useCart = () => {
  const cart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
  return cart;
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vbGliL0NhcnRDb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9hZGVkQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjYXJ0VG90YWwiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJldiIsInByb2R1Y3RJZCIsInByb2R1Y3RQcmljZSIsInByb2R1Y3QiLCJwcmljZSIsInF0ZCIsInN1YlRvdGFsIiwicHJldlN1YlRvdGFsIiwidmFyaWF0aW9uIiwiYWRkVG9DYXJ0Iiwic2VsZWN0ZWRWYXJpYXRpb24iLCJ2YXJpYXRpb25JZCIsIm9wdGlvbk5hbWUxIiwib3B0aW9uTmFtZTIiLCJjdXJyZW50IiwibmV3Q2FydCIsImlkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbW92ZUZyb21DYXJ0IiwiZXRjIiwicmVtb3ZlVmFyaWF0aW9uRnJvbUNhcnQiLCJwcm9kdWN0VmFyaWF0aW9uIiwibGVuZ3RoIiwibmV3Q2FydFdpdGhvdXRQcm9kdWN0IiwibmV3UXRkIiwiY2hhbmdlUXRkIiwiaW5jcmVtZW50Iiwic2l6ZSIsInVzZUNhcnQiLCJjYXJ0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFqQztBQUdBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFuQjs7QUFDQSxRQUFJRixVQUFKLEVBQWdCO0FBQ2RILGNBQVEsQ0FBQ00sSUFBSSxDQUFDQyxLQUFMLENBQVdKLFVBQVgsQ0FBRCxDQUFSO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUOztBQU1BLFFBQU1LLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWCxLQUFaLEVBQW1CWSxNQUFuQixDQUEwQixDQUFDQyxJQUFELEVBQU9DLFNBQVAsS0FBcUI7QUFDcEQsWUFBTUMsWUFBWSxHQUFHZixLQUFLLENBQUNjLFNBQUQsQ0FBTCxDQUFpQkUsT0FBakIsQ0FBeUJDLEtBQTlDO0FBQ0EsWUFBTUMsR0FBRyxHQUFHbEIsS0FBSyxDQUFDYyxTQUFELENBQUwsQ0FBaUJJLEdBQTdCO0FBRUEsWUFBTUMsUUFBUSxHQUFHVCxNQUFNLENBQUNDLElBQVAsQ0FBWU8sR0FBWixFQUFpQk4sTUFBakIsQ0FBd0IsQ0FBQ1EsWUFBRCxFQUFlQyxTQUFmLEtBQTZCO0FBQ3BFLGNBQU1KLEtBQUssR0FBR0MsR0FBRyxDQUFDRyxTQUFELENBQUgsQ0FBZUEsU0FBZixDQUF5QkosS0FBekIsR0FDVkMsR0FBRyxDQUFDRyxTQUFELENBQUgsQ0FBZUEsU0FBZixDQUF5QkosS0FEZixHQUVWRixZQUZKO0FBR0EsZUFBT0ssWUFBWSxHQUFHRixHQUFHLENBQUNHLFNBQUQsQ0FBSCxDQUFlSCxHQUFmLEdBQXFCRCxLQUEzQztBQUNELE9BTGdCLEVBS2QsQ0FMYyxDQUFqQjtBQU1BLGFBQU9KLElBQUksR0FBR00sUUFBZDtBQUNELEtBWE0sRUFXSixDQVhJLENBQVA7QUFZRCxHQWJEOztBQWNBLFFBQU1HLFNBQVMsR0FBRyxDQUFDTixPQUFELEVBQVVPLGlCQUFWLEtBQWdDO0FBQ2hELFVBQU1GLFNBQVMsR0FBR0UsaUJBQWlCLENBQUMsQ0FBRCxDQUFuQztBQUNBLFVBQU1DLFdBQVcsR0FBR0gsU0FBUyxDQUFDSSxXQUFWLEdBQXdCSixTQUFTLENBQUNLLFdBQXREO0FBRUF6QixZQUFRLENBQUMwQixPQUFPLElBQUk7QUFDbEIsWUFBTUMsT0FBTyxxQkFBUUQsT0FBUixDQUFiOztBQUNBLFVBQUlBLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDYSxFQUFULENBQVgsRUFBeUI7QUFDdkIsWUFBSUYsT0FBTyxDQUFDWCxPQUFPLENBQUNhLEVBQVQsQ0FBUCxDQUFvQlgsR0FBcEIsQ0FBd0JNLFdBQXhCLENBQUosRUFBMEM7QUFFeENHLGlCQUFPLENBQUNYLE9BQU8sQ0FBQ2EsRUFBVCxDQUFQLENBQW9CWCxHQUFwQixDQUF3Qk0sV0FBeEIsRUFBcUNOLEdBQXJDO0FBQ0QsU0FIRCxNQUdPO0FBRUxTLGlCQUFPLENBQUNYLE9BQU8sQ0FBQ2EsRUFBVCxDQUFQLENBQW9CWCxHQUFwQixtQ0FDS1MsT0FBTyxDQUFDWCxPQUFPLENBQUNhLEVBQVQsQ0FBUCxDQUFvQlgsR0FEekI7QUFFRSxhQUFDTSxXQUFELEdBQWU7QUFDYkgsdUJBRGE7QUFFYkgsaUJBQUcsRUFBRTtBQUZRO0FBRmpCO0FBT0Q7QUFDRixPQWRELE1BY087QUFDTFUsZUFBTyxDQUFDWixPQUFPLENBQUNhLEVBQVQsQ0FBUCxHQUFzQjtBQUNwQmIsaUJBRG9CO0FBRXBCRSxhQUFHLEVBQUU7QUFDSCxhQUFDTSxXQUFELEdBQWU7QUFDYkgsdUJBRGE7QUFFYkgsaUJBQUcsRUFBRTtBQUZRO0FBRFo7QUFGZSxTQUF0QjtBQVNEOztBQUVEYixrQkFBWSxDQUFDeUIsT0FBYixDQUFxQixNQUFyQixFQUE2QnZCLElBQUksQ0FBQ3dCLFNBQUwsQ0FBZUgsT0FBZixDQUE3QjtBQUNBLGFBQU9BLE9BQVA7QUFDRCxLQTlCTyxDQUFSO0FBK0JELEdBbkNEOztBQW9DQSxRQUFNSSxjQUFjLEdBQUdoQixPQUFPLElBQUk7QUFDaEMsVUFBTWEsRUFBRSxHQUFHYixPQUFPLENBQUNhLEVBQW5CO0FBQ0E1QixZQUFRLENBQUMwQixPQUFPLElBQUk7QUFDbEIsWUFBTTtBQUFFLFNBQUNFLEVBQUQsR0FBTUk7QUFBUixVQUE0Qk4sT0FBbEM7QUFBQSxZQUFzQkMsT0FBdEIsNEJBQWtDRCxPQUFsQyxHQUFTRSxFQUFUOztBQUNBeEIsa0JBQVksQ0FBQ3lCLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJ2QixJQUFJLENBQUN3QixTQUFMLENBQWVILE9BQWYsQ0FBN0I7QUFDQSxhQUFPQSxPQUFQO0FBQ0QsS0FKTyxDQUFSO0FBS0QsR0FQRDs7QUFRQSxRQUFNTSx1QkFBdUIsR0FBRyxDQUFDbEIsT0FBRCxFQUFVbUIsZ0JBQVYsS0FBK0I7QUFDN0RsQyxZQUFRLENBQUMwQixPQUFPLElBQUk7QUFDbEIsVUFBSUMsT0FBTyxxQkFBUUQsT0FBUixDQUFYOztBQUNBLFVBQUlqQixNQUFNLENBQUNDLElBQVAsQ0FBWWlCLE9BQU8sQ0FBQ1osT0FBRCxDQUFQLENBQWlCRSxHQUE3QixFQUFrQ2tCLE1BQWxDLEtBQTZDLENBQWpELEVBQW9EO0FBQ2xEO0FBQ0EsY0FBTTtBQUFFLFdBQUNwQixPQUFELEdBQVdpQjtBQUFiLFlBQStDTixPQUFyRDtBQUFBLGNBQTJCVSxxQkFBM0IsNEJBQXFEVixPQUFyRCxHQUFTWCxPQUFUOztBQUNBWSxlQUFPLEdBQUdTLHFCQUFWO0FBQ0QsT0FKRCxNQUlPO0FBQ0wscUNBQStDVCxPQUFPLENBQUNaLE9BQUQsQ0FBUCxDQUFpQkUsR0FBaEU7QUFBQSxjQUFNO0FBQUUsV0FBQ2lCLGdCQUFELEdBQW9CRjtBQUF0QixTQUFOO0FBQUEsY0FBb0NLLE1BQXBDLG1EQUFTSCxnQkFBVDs7QUFDQVAsZUFBTyxDQUFDWixPQUFELENBQVAsQ0FBaUJFLEdBQWpCLEdBQXVCb0IsTUFBdkI7QUFDRDs7QUFDRGpDLGtCQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCdkIsSUFBSSxDQUFDd0IsU0FBTCxDQUFlSCxPQUFmLENBQTdCO0FBQ0EsYUFBT0EsT0FBUDtBQUNELEtBWk8sQ0FBUjtBQWFELEdBZEQ7O0FBZUEsUUFBTVcsU0FBUyxHQUFHLENBQUN2QixPQUFELEVBQVVtQixnQkFBVixFQUE0QkssU0FBNUIsS0FBMEM7QUFDMUR2QyxZQUFRLENBQUMwQixPQUFPLElBQUk7QUFDbEIsWUFBTUMsT0FBTyxxQkFBUUQsT0FBUixDQUFiOztBQUNBLFlBQU1XLE1BQU0sR0FBR1YsT0FBTyxDQUFDWixPQUFELENBQVAsQ0FBaUJFLEdBQWpCLENBQXFCaUIsZ0JBQXJCLEVBQXVDakIsR0FBdkMsR0FBNkNzQixTQUE1RDtBQUVBWixhQUFPLENBQUNaLE9BQUQsQ0FBUCxtQ0FDS1ksT0FBTyxDQUFDWixPQUFELENBRFo7QUFFRUUsV0FBRyxrQ0FDRVUsT0FBTyxDQUFDWixPQUFELENBQVAsQ0FBaUJFLEdBRG5CO0FBRUQsV0FBQ2lCLGdCQUFELG1DQUNLUCxPQUFPLENBQUNaLE9BQUQsQ0FBUCxDQUFpQkUsR0FBakIsQ0FBcUJpQixnQkFBckIsQ0FETDtBQUVFakIsZUFBRyxFQUFFb0I7QUFGUDtBQUZDO0FBRkw7QUFXQWpDLGtCQUFZLENBQUN5QixPQUFiLENBQXFCLE1BQXJCLEVBQTZCdkIsSUFBSSxDQUFDd0IsU0FBTCxDQUFlSCxPQUFmLENBQTdCO0FBQ0EsYUFBT0EsT0FBUDtBQUNELEtBakJPLENBQVI7QUFrQkQsR0FuQkQ7O0FBb0JBLFFBQU1hLElBQUksR0FBRy9CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWCxLQUFaLEVBQW1Cb0MsTUFBaEM7QUFDQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMcEMsV0FESztBQUVMc0IsZUFGSztBQUdMVSxvQkFISztBQUlMRSw2QkFKSztBQUtMSyxlQUxLO0FBTUxFLFVBTks7QUFPTGhDLGVBQVMsRUFBRUEsU0FBUztBQVBmLEtBRFQ7QUFBQSxjQVdHVjtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBckhNO0FBdUhBLE1BQU0yQyxPQUFPLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxJQUFJLEdBQUdDLGlEQUFVLENBQUNoRCxXQUFELENBQXZCO0FBQ0EsU0FBTytDLElBQVA7QUFDRCxDQUhNLEMiLCJmaWxlIjoibGliX0NhcnRDb250ZXh0X2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoe30pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlZENhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpXHJcbiAgICBpZiAobG9hZGVkQ2FydCkge1xyXG4gICAgICBzZXRJdGVtcyhKU09OLnBhcnNlKGxvYWRlZENhcnQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGNhcnRUb3RhbCA9ICgpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtcykucmVkdWNlKChwcmV2LCBwcm9kdWN0SWQpID0+IHtcclxuICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gaXRlbXNbcHJvZHVjdElkXS5wcm9kdWN0LnByaWNlXHJcbiAgICAgIGNvbnN0IHF0ZCA9IGl0ZW1zW3Byb2R1Y3RJZF0ucXRkXHJcblxyXG4gICAgICBjb25zdCBzdWJUb3RhbCA9IE9iamVjdC5rZXlzKHF0ZCkucmVkdWNlKChwcmV2U3ViVG90YWwsIHZhcmlhdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcXRkW3ZhcmlhdGlvbl0udmFyaWF0aW9uLnByaWNlXHJcbiAgICAgICAgICA/IHF0ZFt2YXJpYXRpb25dLnZhcmlhdGlvbi5wcmljZVxyXG4gICAgICAgICAgOiBwcm9kdWN0UHJpY2VcclxuICAgICAgICByZXR1cm4gcHJldlN1YlRvdGFsICsgcXRkW3ZhcmlhdGlvbl0ucXRkICogcHJpY2VcclxuICAgICAgfSwgMClcclxuICAgICAgcmV0dXJuIHByZXYgKyBzdWJUb3RhbFxyXG4gICAgfSwgMClcclxuICB9XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHNlbGVjdGVkVmFyaWF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB2YXJpYXRpb24gPSBzZWxlY3RlZFZhcmlhdGlvblswXVxyXG4gICAgY29uc3QgdmFyaWF0aW9uSWQgPSB2YXJpYXRpb24ub3B0aW9uTmFtZTEgKyB2YXJpYXRpb24ub3B0aW9uTmFtZTJcclxuXHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IHsgLi4uY3VycmVudCB9XHJcbiAgICAgIGlmIChjdXJyZW50W3Byb2R1Y3QuaWRdKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRbcHJvZHVjdC5pZF0ucXRkW3ZhcmlhdGlvbklkXSkge1xyXG4gICAgICBcclxuICAgICAgICAgIGN1cnJlbnRbcHJvZHVjdC5pZF0ucXRkW3ZhcmlhdGlvbklkXS5xdGQrK1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgICAgICAgIGN1cnJlbnRbcHJvZHVjdC5pZF0ucXRkID0ge1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50W3Byb2R1Y3QuaWRdLnF0ZCxcclxuICAgICAgICAgICAgW3ZhcmlhdGlvbklkXToge1xyXG4gICAgICAgICAgICAgIHZhcmlhdGlvbixcclxuICAgICAgICAgICAgICBxdGQ6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdDYXJ0W3Byb2R1Y3QuaWRdID0ge1xyXG4gICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgIHF0ZDoge1xyXG4gICAgICAgICAgICBbdmFyaWF0aW9uSWRdOiB7XHJcbiAgICAgICAgICAgICAgdmFyaWF0aW9uLFxyXG4gICAgICAgICAgICAgIHF0ZDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICByZXR1cm4gbmV3Q2FydFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBwcm9kdWN0ID0+IHtcclxuICAgIGNvbnN0IGlkID0gcHJvZHVjdC5pZFxyXG4gICAgc2V0SXRlbXMoY3VycmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IHsgW2lkXTogZXRjLCAuLi5uZXdDYXJ0IH0gPSBjdXJyZW50XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCByZW1vdmVWYXJpYXRpb25Gcm9tQ2FydCA9IChwcm9kdWN0LCBwcm9kdWN0VmFyaWF0aW9uKSA9PiB7XHJcbiAgICBzZXRJdGVtcyhjdXJyZW50ID0+IHtcclxuICAgICAgbGV0IG5ld0NhcnQgPSB7IC4uLmN1cnJlbnQgfVxyXG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3Q2FydFtwcm9kdWN0XS5xdGQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIC8vIGNhc28gMSB2YXJpYWNhbywgcmVtb3ZlIHByb2R1dG9cclxuICAgICAgICBjb25zdCB7IFtwcm9kdWN0XTogZXRjLCAuLi5uZXdDYXJ0V2l0aG91dFByb2R1Y3QgfSA9IGN1cnJlbnRcclxuICAgICAgICBuZXdDYXJ0ID0gbmV3Q2FydFdpdGhvdXRQcm9kdWN0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBbcHJvZHVjdFZhcmlhdGlvbl06IGV0YywgLi4ubmV3UXRkIH0gPSBuZXdDYXJ0W3Byb2R1Y3RdLnF0ZFxyXG4gICAgICAgIG5ld0NhcnRbcHJvZHVjdF0ucXRkID0gbmV3UXRkXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgcmV0dXJuIG5ld0NhcnRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZVF0ZCA9IChwcm9kdWN0LCBwcm9kdWN0VmFyaWF0aW9uLCBpbmNyZW1lbnQpID0+IHtcclxuICAgIHNldEl0ZW1zKGN1cnJlbnQgPT4ge1xyXG4gICAgICBjb25zdCBuZXdDYXJ0ID0geyAuLi5jdXJyZW50IH1cclxuICAgICAgY29uc3QgbmV3UXRkID0gbmV3Q2FydFtwcm9kdWN0XS5xdGRbcHJvZHVjdFZhcmlhdGlvbl0ucXRkICsgaW5jcmVtZW50XHJcblxyXG4gICAgICBuZXdDYXJ0W3Byb2R1Y3RdID0ge1xyXG4gICAgICAgIC4uLm5ld0NhcnRbcHJvZHVjdF0sXHJcbiAgICAgICAgcXRkOiB7XHJcbiAgICAgICAgICAuLi5uZXdDYXJ0W3Byb2R1Y3RdLnF0ZCxcclxuICAgICAgICAgIFtwcm9kdWN0VmFyaWF0aW9uXToge1xyXG4gICAgICAgICAgICAuLi5uZXdDYXJ0W3Byb2R1Y3RdLnF0ZFtwcm9kdWN0VmFyaWF0aW9uXSxcclxuICAgICAgICAgICAgcXRkOiBuZXdRdGRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkobmV3Q2FydCkpXHJcbiAgICAgIHJldHVybiBuZXdDYXJ0XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBzaXplID0gT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBhZGRUb0NhcnQsXHJcbiAgICAgICAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgICAgcmVtb3ZlVmFyaWF0aW9uRnJvbUNhcnQsXHJcbiAgICAgICAgY2hhbmdlUXRkLFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgY2FydFRvdGFsOiBjYXJ0VG90YWwoKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXHJcbiAgcmV0dXJuIGNhcnRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=