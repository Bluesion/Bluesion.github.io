(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["/js/polyfill"], {

		/***/
		"./js/polyfill.js":
			/*!************************!*\
			  !*** ./js/polyfill.js ***!
			  \************************/
			/*! no exports provided */
			/***/
			(function (module, __webpack_exports__, __webpack_require__) {

				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */
				var promise_polyfill_src_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");


				if (!Array.prototype.includes) {
					Object.defineProperty(Array.prototype, 'includes', {
						value: function value(searchElement, fromIndex) {
							if (this == null) {
								throw new TypeError('"this" is null or is not defined');
							}

							var o = Object(this);
							var len = o.length >>> 0;

							if (len === 0) {
								return false;
							}

							var n = fromIndex | 0;
							var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

							function sameValueZero(x, y) {
								return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
							}

							while (k < len) {
								if (sameValueZero(o[k], searchElement)) {
									return true;
								}

								k++;
							}

							return false;
						}
					});
				}

				if (!String.prototype.endsWith) {
					String.prototype.endsWith = function (search, this_len) {
						if (this_len === undefined || this_len > this.length) {
							this_len = this.length;
						}

						return this.substring(this_len - search.length, this_len) === search;
					};
				}

				if (!String.prototype.startsWith) {
					Object.defineProperty(String.prototype, 'startsWith', {
						value: function value(search, pos) {
							pos = !pos || pos < 0 ? 0 : +pos;
							return this.substring(pos, pos + search.length) === search;
						}
					});
				}

				if (typeof Object.assign != 'function') {
					Object.defineProperty(Object, "assign", {
						value: function assign(target, varArgs) {
							'use strict';

							if (target == null) {
								throw new TypeError('Cannot convert undefined or null to object');
							}

							var to = Object(target);

							for (var index = 1; index < arguments.length; index++) {
								var nextSource = arguments[index];

								if (nextSource != null) {
									for (var nextKey in nextSource) {
										if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
											to[nextKey] = nextSource[nextKey];
										}
									}
								}
							}

							return to;
						},
						writable: true,
						configurable: true
					});
				}

				if (window.NodeList && !NodeList.prototype.forEach) {
					NodeList.prototype.forEach = function (callback, thisArg) {
						thisArg = thisArg || window;

						for (var i = 0; i < this.length; i++) {
							callback.call(thisArg, this[i], i, this);
						}
					};
				}

				/***/
			}),

		/***/
		"./sass/app.scss":
			/*!***********************!*\
			  !*** ./sass/app.scss ***!
			  \***********************/
			/*! no static exports found */
			/***/
			(function (module, exports) {

				// removed by extract-text-webpack-plugin

				/***/
			}),

		/***/
		0:
			/*!**********************************************!*\
			  !*** multi ./js/polyfill.js ./sass/app.scss ***!
			  \**********************************************/
			/*! no static exports found */
			/***/
			(function (module, exports, __webpack_require__) {

				__webpack_require__( /*! /Users/Eddie/Documents/Dev/own/liebling/src/js/polyfill.js */ "./js/polyfill.js");
				module.exports = __webpack_require__( /*! /Users/Eddie/Documents/Dev/own/liebling/src/sass/app.scss */ "./sass/app.scss");


				/***/
			})

	},
	[
		[0, "/js/manifest", "/js/vendor"]
	]
]);