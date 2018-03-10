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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 1.常量
// ES5
{
	Object.defineProperty(window, "PI2", {
		value: 3.1415926,
		writable: false
	});
	console.log(PI2);
}
// ES6
{
	var PI = 3.1415926;
	console.log(PI);
}

// 2.作用域
// es5
{
	var callbacks = [];
	for (var i = 0; i <= 2; i++) {
		callbacks[i] = function () {
			return i * 2;
		};
	}

	console.table([callbacks[0](), callbacks[1](), callbacks[2]()]);
}

// es6
{
	var callbacks2 = [];

	var _loop = function _loop(_i) {
		callbacks2[_i] = function () {
			return _i * 2;
		};
	};

	for (var _i = 0; _i <= 2; _i++) {
		_loop(_i);
	}

	console.table([callbacks2[0](), callbacks2[1](), callbacks2[2]()]);
}

// 3.箭头函数
// es5
{
	var events = [1, 2, 3, 4, 5];
	var odds = events.map(function (v) {
		return v + 1;
	});

	console.log(events, odds);
}
// es6
{
	var _events = [1, 2, 3, 4, 5];
	var _odds = _events.map(function (v) {
		return v + 1;
	});

	console.log(_events, _odds);
}

// es5
{
	var factory = function factory() {
		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: function b() {
				return this.a; // a+
			}
		};
	};

	console.log(new factory().c.b());
}

// es6 
{
	var _factory = function _factory() {
		var _this = this;

		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: function b() {
				return _this.a;
			}
		};
	};

	console.log(new _factory().c.b());
}

// 4.默认参数
{
	var f = function f(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
		var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

		return x + y + z;
	};

	console.log(f(1));
}

/***/ })
/******/ ]);