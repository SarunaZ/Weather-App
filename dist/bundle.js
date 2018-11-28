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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Main js file looked by webpack.\n\n//Imports\n__webpack_require__(/*! ./main.scss */ \"./src/core/main.scss\")\n__webpack_require__(/*! ../js/geoLocation.js */ \"./src/js/geoLocation.js\")\n__webpack_require__(/*! ../js/weather.js */ \"./src/js/weather.js\")\n\n\n\n//# sourceURL=webpack:///./src/core/main.js?");

/***/ }),

/***/ "./src/core/main.scss":
/*!****************************!*\
  !*** ./src/core/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/core/main.scss?");

/***/ }),

/***/ "./src/js/geoLocation.js":
/*!*******************************!*\
  !*** ./src/js/geoLocation.js ***!
  \*******************************/
/*! exports provided: getCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCity\", function() { return getCity; });\nconst myIp = async () => {\n\n  return fetch(\"https://api.ipify.org?format=json\")\n           .then(data =>  data.json())\n           .then(res => res.ip)\n           .catch(error => document.querySelector('.container').textContent = `Your client cannot get your ip`)\n};\n\nconst showIp = async () => {\n  let result = await myIp();\n  \n  return result;\n}\n\nconst getLocationData = async () => { \n\n  let ip = await showIp();\n  let access_key = 'at_pgHjmpUprixp5eH5NCqurwdWuFc3p';\n  const url = `https://geo.ipify.org/api/v1?apiKey=${access_key}&ipAddress=${ip}`;\n  \n  return fetch(url)\n           .then(data => data.json())\n           .then(res => res.location.city)\n           .catch(error => document.querySelector('.container').textContent = `Your client cannot get your location`)\n}\n\nconst getCity = async () => {\n  let data = await getLocationData();\n  return data;\n};\n\n\n//# sourceURL=webpack:///./src/js/geoLocation.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geoLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoLocation */ \"./src/js/geoLocation.js\");\n\n\nwindow.onload = function() {\n  const aeris = new AerisWeather('yLtGPCLmSe6QRaok2PqYC', 'ULdbZ0pXCyb6AH62pSwZ7avqXb64KicPyBbyat6c');\n  let city;\n  const arrayOpt = document.querySelector('select[name=\"cities\"]').onchange=toggleOpt;\n\n  const getData = async () =>{\n    let city = await Object(_geoLocation__WEBPACK_IMPORTED_MODULE_0__[\"getCity\"])();\n\n    return aeris.api().endpoint('observations')\n      .place(`${city}, lt`)\n      .get().then((result) => {\n      let data = result.data.ob;\n      document.querySelector('.container').textContent = `The current weather in ${city} is ${data.weatherPrimary.toLowerCase()} and ${data.tempC} degrees.`;\n    });\n  } \n\n  function toggleOpt(event) {\n    city = event.target.value; \n    const getDatas = aeris.api().endpoint('observations')\n      .place(`${city}, lt`)\n      .get().then((result) => {\n        let data = result.data.ob;\n        document.querySelector('.container').textContent = `The current weather in ${city} ${data.weatherPrimary.toLowerCase()} and ${data.tempC} degrees.`;\n    });\n  }\n  getData();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/weather.js?");

/***/ })

/******/ });