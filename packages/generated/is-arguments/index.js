"use strict";const t=t=>(!t||"object"!=typeof t||!(Symbol.toStringTag in t))&&"[object Arguments]"===Object.prototype.toString.call(t);// isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
// eslint-disable-next-line prefer-rest-params -- detect arguments object
module.exports=!function(){return t(arguments)}()?e=>!!t(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==Object.prototype.toString.call(e)&&"[object Function]"===Object.prototype.toString.call(e.callee):t;
((typeof exports.default === 'object' && exports.default !== null) || typeof exports.default === 'function') && Object.assign(exports.default,exports); module.exports = exports.default;
