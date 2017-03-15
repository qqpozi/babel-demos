(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/array/from", "babel-polyfill"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/array/from"), require("babel-polyfill"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.from, global.babelPolyfill);
    global.index = mod.exports;
  }
})(this, function (_from) {
  "use strict";

  var _from2 = _interopRequireDefault(_from);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log((0, _from2.default)("aaa"));

  var sum = function sum(a, b) {
    return a + b;
  };
  var v = sum(1, 2);
  console.log(x);
});