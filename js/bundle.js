/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dpk.js/js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dpk.js/js/src/Module/Helper.js":
/*!****************************************!*\
  !*** ./dpk.js/js/src/Module/Helper.js ***!
  \****************************************/
/*! exports provided: isMobile, map, lerp, clamp, MathUtils, getMousePos, getRandomFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MathUtils\", function() { return MathUtils; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMousePos\", function() { return getMousePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomFloat\", function() { return getRandomFloat; });\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n               Check Mobile Device\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\n\r\n\r\n\r\nconst isMobile = () => {\r\n  return !!(\r\n    navigator.userAgent.match(/Android/i) ||\r\n    navigator.userAgent.match(/webOS/i) ||\r\n    navigator.userAgent.match(/iPhone/i) ||\r\n    navigator.userAgent.match(/iPad/i) ||\r\n    navigator.userAgent.match(/iPod/i) ||\r\n    navigator.userAgent.match(/BlackBerry/i) ||\r\n    navigator.userAgent.match(/Windows Phone/i)\r\n  );\r\n};\r\n\r\n\r\n\r\n\r\n\r\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n    Map number x from range [a, b] to [c, d]\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\n\r\nconst map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;\r\n\r\n\r\n\r\n\r\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n            Linear interpolation\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\n\r\n\r\nconst lerp = (a, b, n) => (1 - n) * a + n * b;\r\nconst clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;\r\n\r\nconst MathUtils = {\r\n  lerp: (a, b, n) => (1 - n) * a + n * b,\r\n  distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),\r\n};\r\n\r\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n            Gets the mouse position\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\n\r\n\r\nconst getMousePos = (e) => {\r\n    let posx = 0;\r\n    let posy = 0;\r\n    if (!e) e = window.event;\r\n    if (e.pageX || e.pageY) {\r\n        posx = e.pageX;\r\n        posy = e.pageY;\r\n    }\r\n    else if (e.clientX || e.clientY)    {\r\n        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;\r\n        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;\r\n    }\r\n    \r\n    return { x : posx, y : posy }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n           Generate Random Float\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\nconst getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);\r\n\r\n\r\n\r\n\r\n\r\n/*\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n           Generate Random Float\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n*/\r\n\r\n\n\n//# sourceURL=webpack:///./dpk.js/js/src/Module/Helper.js?");

/***/ }),

/***/ "./dpk.js/js/src/Module/dpkCursor.js":
/*!*******************************************!*\
  !*** ./dpk.js/js/src/Module/dpkCursor.js ***!
  \*******************************************/
/*! exports provided: initCursor, resetCursor, cursorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCursor\", function() { return initCursor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetCursor\", function() { return resetCursor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cursorEffects\", function() { return cursorEffects; });\n/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helper */ \"./dpk.js/js/src/Module/Helper.js\");\n\r\n\r\nconst dpkCursor = document.querySelector(\".dpkCursor\");\r\n\r\nfunction initCursor() {\r\n   \r\n  \r\n    if (dpkCursor) {\r\n      gsap.set(dpkCursor, { xPercent: -50, yPercent: -50 });\r\n      let dpkCursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };\r\n      let dpkCursorMouse = { x: dpkCursorPos.x, y: dpkCursorPos.y };\r\n  \r\n      window.addEventListener(\"mousemove\", (e) => {\r\n        gsap.to(dpkCursorMouse, {\r\n          duration: 0.13,\r\n          x: e.x,\r\n          y: e.y,\r\n          ease: \"sine.out\",\r\n          overwrite: true,\r\n        });\r\n      });\r\n  \r\n      let dpkCursorXSet = gsap.quickSetter(dpkCursor, \"x\", \"px\");\r\n      let dpkCursorySet = gsap.quickSetter(dpkCursor, \"y\", \"px\");\r\n  \r\n      gsap.ticker.add(() => {\r\n        dpkCursorPos.x += dpkCursorMouse.x - dpkCursorPos.x;\r\n        dpkCursorPos.y += dpkCursorMouse.y - dpkCursorPos.y;\r\n        dpkCursorXSet(dpkCursorPos.x);\r\n        dpkCursorySet(dpkCursorPos.y);\r\n      });\r\n    }\r\n  }\r\n  \r\n  function resetCursor() {\r\n    dpkCursor.querySelector(\".hover-circle\").innerHTML = \"\";\r\n    dpkCursor.classList.remove(\"hover-active\");\r\n    gsap.set(dpkCursor, {\r\n      background: \"\",\r\n      borderColor: \"white\",\r\n      borderWidth: 2,\r\n      mixBlendMode: \"difference\",\r\n    });\r\n  }\r\n  \r\n  function cursorEffects() {\r\n    const dataHover = document.querySelectorAll(\".dpk-hover\");\r\n  \r\n    if (!Object(_Helper__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])() && dataHover) {\r\n      dataHover.forEach(function (target) {\r\n        target.addEventListener(\"mouseenter\", function () {\r\n          let dataHoverText = target.getAttribute(\"data-hoverMsg\");\r\n          let emogy = target.getAttribute(\"data-emogy\");\r\n          let datafillbg = target.getAttribute(\"data-fillBg\");\r\n  \r\n          dpkCursor.classList.add(\"hover-active\");\r\n  \r\n          if (dataHoverText) {\r\n            dpkCursor.querySelector(\".hover-circle\").innerHTML = dataHoverText;\r\n          }\r\n  \r\n          if (emogy) {\r\n            dpkCursor.querySelector(\".hover-circle\").innerHTML = emogy;\r\n            gsap.set(dpkCursor, { mixBlendMode: \"normal\", borderColor: \"gray\" });\r\n          }\r\n  \r\n          if (datafillbg) {\r\n            const mixBlendMode =\r\n              datafillbg === \"mixBlend\" ? \"difference\" : \"normal\";\r\n            const fillColor = datafillbg === \"mixBlend\" ? \"white\" : datafillbg;\r\n            gsap.set(dpkCursor, {\r\n              background: fillColor,\r\n              borderWidth: 0,\r\n              mixBlendMode: mixBlendMode,\r\n            });\r\n          }\r\n        });\r\n  \r\n        target.addEventListener(\"mouseleave\", function () {\r\n          resetCursor();\r\n        });\r\n  \r\n        target.addEventListener(\"click\", function () {\r\n          resetCursor();\r\n        });\r\n      });\r\n    }\r\n  }\r\n  \r\n\r\n\r\n  \n\n//# sourceURL=webpack:///./dpk.js/js/src/Module/dpkCursor.js?");

/***/ }),

/***/ "./dpk.js/js/src/index.js":
/*!********************************!*\
  !*** ./dpk.js/js/src/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Module_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module/Helper */ \"./dpk.js/js/src/Module/Helper.js\");\n/* harmony import */ var _Module_dpkCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module/dpkCursor */ \"./dpk.js/js/src/Module/dpkCursor.js\");\n\r\n\r\n\r\n\r\nObject(_Module_dpkCursor__WEBPACK_IMPORTED_MODULE_1__[\"initCursor\"])();\r\nObject(_Module_dpkCursor__WEBPACK_IMPORTED_MODULE_1__[\"cursorEffects\"])();\n\n//# sourceURL=webpack:///./dpk.js/js/src/index.js?");

/***/ })

/******/ });