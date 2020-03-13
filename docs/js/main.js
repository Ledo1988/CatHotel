/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/header/__nav/header__nav.js":
/*!***********************************************************!*\
  !*** ./src/blocks/components/header/__nav/header__nav.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.burger-menu', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.header').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('overflow-hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('overflow-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/catalog/__filter/catalog__filter.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/catalog/__filter/catalog__filter.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.catalog__mobile-btn', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter ').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('overflow-hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('overflow-hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.catalog__filter-close-link', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter ').toggleClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('overflow-hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('overflow-hidden');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form').on('change input', 'input', function () {
    catalogFormValidation(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form'));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form').on('click', '.catalog__filter-btn[type="reset"]', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form').toggleClass('not-empty');
  });

  function catalogFormValidation($this) {
    var isEmpty = true;
    $this.find("input").each(function () {
      var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

      if (!element.val().length == 0 || element.prop("checked") == true) {
        isEmpty = false;
      }
    });

    if (!isEmpty) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form').addClass('not-empty');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body .catalog__filter-form').removeClass('not-empty');
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/catalog/__header/catalog__header.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/catalog/__header/catalog__header.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  (function ($) {
    "use strict";

    $.fn.numericFlexboxSorting = function (options) {
      var _this = this;

      var settings = $.extend({
        elToSort: ".catalog__items .catalog__item"
      }, options);
      var $select = this;

      var ascOrder = function ascOrder(a, b) {
        return a - b;
      };

      var descOrder = function descOrder(a, b) {
        return b - a;
      };

      $select.find('.header-sort__btn').on("click", function () {
        if (!$(_this).parents('.header-sort__list-item').hasClass('active') && $(_this).parents('.header-sort').hasClass('active')) {
          var selectedOption = $select.find(".header-sort__list-item.active .header-sort__btn").attr("data-sort");
          sortColumns(settings.elToSort, selectedOption);
        }
      });

      function sortColumns(el, opt) {
        var attr = "data-" + opt.split(":")[0];
        var sortMethod = opt.indexOf("asc") > 0 ? ascOrder : descOrder;
        var sign = opt.indexOf("asc") > 0 ? "" : "-";
        var sortArray = $(el).map(function (i, el) {
          return parseFloat($(el).attr(attr).replace(/,/g, '.'));
        }).sort(sortMethod);

        for (var i = 0; i < sortArray.length; i++) {
          if (parseInt(sortArray[i]) != sortArray[i]) {
            sortArray[i] = sortArray[i].toFixed(2).toString().replace(".", ",");
            $(el).filter("[".concat(attr, "=\"").concat(sortArray[i], "\"]")).css("order", sign + parseInt(sortArray[i].replace(",", "")), "-ms-flex-order", sign + parseInt(sortArray[i].replace(",", "")));
          } else {
            $(el).filter("[".concat(attr, "=\"").concat(sortArray[i], "\"]")).css("order", sign + sortArray[i], "-ms-flex-order", sign + sortArray[i]);
          }
        }
      }

      return $select;
    };
  })(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header-sort__list").numericFlexboxSorting();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.header-sort__btn', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.header-sort').find('.header-sort__list-item').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.header-sort__list-item').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.header-sort').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (event) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.header-sort,.header-sort__btn').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-sort').hasClass('active')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header-sort').removeClass('active');
      }
    }
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_nav_header_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/header/__nav/header__nav */ "./src/blocks/components/header/__nav/header__nav.js");


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_catalog_header_catalog_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/catalog/__header/catalog__header */ "./src/blocks/modules/catalog/__header/catalog__header.js");
/* harmony import */ var _modules_catalog_filter_catalog_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/catalog/__filter/catalog__filter */ "./src/blocks/modules/catalog/__filter/catalog__filter.js");



/***/ }),

/***/ "./src/js/import/svgxuse.min.js":
/*!**************************************!*\
  !*** ./src/js/import/svgxuse.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_svgxuse_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/svgxuse.min */ "./src/js/import/svgxuse.min.js");
/* harmony import */ var _import_svgxuse_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_svgxuse_min__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=main.js.map