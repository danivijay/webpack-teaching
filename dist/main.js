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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./src/js/dom-loader.js\");\n\r\n\r\nvar showSecret = false;\r\n\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].addEventListener('click', toggleSecretState);\r\nupdateSecretParagraph();\r\n\r\nfunction toggleSecretState() {\r\n    showSecret = !showSecret;\r\n    updateSecretParagraph();\r\n    updateSecretButton()\r\n}\r\n\r\nfunction updateSecretButton() {\r\n    if (showSecret) {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = 'Hide the Secret';\r\n    } else {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContent = 'Show the Secret';\r\n    }\r\n}\r\n\r\nfunction updateSecretParagraph() {\r\n    if (showSecret) {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'block';\r\n    } else {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'none';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/dom-loader.js":
/*!******************************!*\
  !*** ./src/js/dom-loader.js ***!
  \******************************/
/*! exports provided: secretButton, secretParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretButton\", function() { return secretButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretParagraph\", function() { return secretParagraph; });\nvar secretButton = document.querySelector('#secret-button');\r\nvar secretParagraph = document.querySelector('#secret-paragraph');\r\n\n\n//# sourceURL=webpack:///./src/js/dom-loader.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/js/app.js dist/bundle.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Dani\\Desktop\\git\\webpack-teaching\\src\\js\\app.js */\"./src/js/app.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"dist/bundle.js\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_dist/bundle.js?");

/***/ })

/******/ });