(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getPrototypeOf, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.inherits, global.react);
    global.jsx = mod.exports;
  }
})(this, function (_getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react) {
  'use strict';

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DemoComponent = function (_Component) {
    (0, _inherits3.default)(DemoComponent, _Component);

    function DemoComponent() {
      (0, _classCallCheck3.default)(this, DemoComponent);
      return (0, _possibleConstructorReturn3.default)(this, (DemoComponent.__proto__ || (0, _getPrototypeOf2.default)(DemoComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(DemoComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'h1',
          null,
          'Hello World'
        );
      }
    }]);
    return DemoComponent;
  }(_react.Component);
});