/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/main.js":
/*!************************!*\
  !*** ./dev/js/main.js ***!
  \************************/
/***/ (() => {

eval("\n\nalert('>>>>>>');\n\n// import './theme-switch.js';\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var mediaQuery = window.matchMedia('(min-width: 992px)');\n  function handleViewportChange(event) {\n    var xxxElements = document.querySelectorAll('.xxx');\n    xxxElements.forEach(function (xxxElement) {\n      var dSmallElements = xxxElement.querySelectorAll('.d-small');\n      var dLargeElements = xxxElement.querySelectorAll('.d-large');\n      if (event.matches) {\n        // Viewport is at least 992px\n        dSmallElements.forEach(function (el) {\n          return el.setAttribute('aria-hidden', 'true');\n        });\n        dLargeElements.forEach(function (el) {\n          return el.setAttribute('aria-hidden', 'false');\n        });\n      } else {\n        // Viewport is below 992px\n        dSmallElements.forEach(function (el) {\n          return el.setAttribute('aria-hidden', 'false');\n        });\n        dLargeElements.forEach(function (el) {\n          return el.setAttribute('aria-hidden', 'true');\n        });\n      }\n    });\n  }\n\n  // Initial check\n  handleViewportChange(mediaQuery);\n\n  // Listen for changes in the viewport width\n  mediaQuery.addListener(handleViewportChange);\n});\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dev/js/main.js"]();
/******/ 	
/******/ })()
;