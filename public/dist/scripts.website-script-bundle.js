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

/***/ "./dev/js/chatbot.js":
/*!***************************!*\
  !*** ./dev/js/chatbot.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupChatbotBtn: () => (/* binding */ setupChatbotBtn)\n/* harmony export */ });\n/**\n * Open chatbox through a custom button\n * https://help.tidio.com/\n */\nfunction setupChatbotBtn() {\n  if (window.tidioChatApi) {\n    window.tidioChatApi.on(\"ready\", onTidioChatApiReady);\n  }\n  document.querySelector(\".js-chat-button\").addEventListener(\"click\", function (event) {\n    event.preventDefault(); // Prevent the default behavior\n    if (window.tidioChatApi) {\n      window.tidioChatApi.show();\n      window.tidioChatApi.open();\n    } else {\n      console.info('tidioChatApi is undefined!');\n    }\n  });\n}\nfunction onTidioChatApiReady() {\n  window.tidioChatApi.hide();\n}\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/chatbot.js?");

/***/ }),

/***/ "./dev/js/main.js":
/*!************************!*\
  !*** ./dev/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoBannerAccessibility.js */ \"./dev/js/videoBannerAccessibility.js\");\n/* harmony import */ var _sticky_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sticky-nav.js */ \"./dev/js/sticky-nav.js\");\n/* harmony import */ var _scroll_top_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-top-btn.js */ \"./dev/js/scroll-top-btn.js\");\n/* harmony import */ var _chatbot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbot.js */ \"./dev/js/chatbot.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var mediaQuery = window.matchMedia('(min-width: 992px)');\n\n  /**\n   * Hide/reveal DOM elements to accessible technologies based on media queries\n   */\n  // 1) Initial check\n  (0,_videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__.handleViewportChange)(mediaQuery);\n  // 2) Listen for changes in the viewport width\n  mediaQuery.addListener(_videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__.handleViewportChange);\n\n  // Setting up sticky nav ...\n  (0,_sticky_nav_js__WEBPACK_IMPORTED_MODULE_1__.setElementSticky)('main-nav');\n\n  // Setting up scrolltop button ...\n  (0,_scroll_top_btn_js__WEBPACK_IMPORTED_MODULE_2__.setupScrolltopBtn)('scroll-top-button', 300);\n\n  // Setting chatbot trigger ...\n  (0,_chatbot_js__WEBPACK_IMPORTED_MODULE_3__.setupChatbotBtn)();\n});\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/main.js?");

/***/ }),

/***/ "./dev/js/scroll-top-btn.js":
/*!**********************************!*\
  !*** ./dev/js/scroll-top-btn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupScrolltopBtn: () => (/* binding */ setupScrolltopBtn)\n/* harmony export */ });\n/**\n * Set an element sticky\n * @param {*} navId \n */\nfunction setupScrolltopBtn(btnId, pageYOffset) {\n  var btnDomElt = document.getElementById(btnId);\n\n  // 1st check\n  toggleVisibility(btnDomElt, pageYOffset);\n  window.addEventListener('scroll', function () {\n    toggleVisibility(btnDomElt, pageYOffset);\n  });\n  btnDomElt.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  });\n}\nfunction toggleVisibility(btnElt, pageYOffset) {\n  if (window.pageYOffset > pageYOffset) {\n    // Show the button after scrolling down 300px\n    btnElt.style.display = 'block';\n  } else {\n    btnElt.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/scroll-top-btn.js?");

/***/ }),

/***/ "./dev/js/sticky-nav.js":
/*!******************************!*\
  !*** ./dev/js/sticky-nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setElementSticky: () => (/* binding */ setElementSticky)\n/* harmony export */ });\n/**\n * Set an element sticky\n * @param {*} navId \n */\nfunction setElementSticky(navId) {\n  var stickyDiv = document.getElementById(navId);\n  var offsetTop = stickyDiv.offsetTop;\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset >= offsetTop) {\n      stickyDiv.classList.add('is-fixed');\n    } else {\n      stickyDiv.classList.remove('is-fixed');\n    }\n  });\n}\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/sticky-nav.js?");

/***/ }),

/***/ "./dev/js/videoBannerAccessibility.js":
/*!********************************************!*\
  !*** ./dev/js/videoBannerAccessibility.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleViewportChange: () => (/* binding */ handleViewportChange)\n/* harmony export */ });\n/**\n * 1) Make sure elements that are hidden with CSS are also hidden from the accessible technologies\n * 2) This script is specific to \"section-video-banner\" element\n * @param {*} event \n */\nfunction handleViewportChange(event) {\n  var vidBannerElements = document.querySelectorAll('.section-video-banner');\n  vidBannerElements.forEach(function (vidBannerElement) {\n    var dSmallElements = vidBannerElement.querySelectorAll('.d-small');\n    var dLargeElements = vidBannerElement.querySelectorAll('.d-large');\n    if (event.matches) {\n      // Viewport is at least 992px\n      dSmallElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'true');\n      });\n      dLargeElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'false');\n      });\n    } else {\n      // Viewport is below 992px\n      dSmallElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'false');\n      });\n      dLargeElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'true');\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/videoBannerAccessibility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/js/main.js");
/******/ 	
/******/ })()
;