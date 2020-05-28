"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Container = _interopRequireDefault(require("../elements/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  span {\n    font-size: 16px;\n    font-family: ", ";\n    color: ", ";\n  }\n  ul {\n    list-style: none;\n    margin: 16px 0;\n    padding: 0;\n    color: ", ";\n    li {\n      margin-bottom: 12px;\n      font-family: ", ";\n      font-size: 15px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 32px;\n  justify-content: start;\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 32px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 48px;\n  display: flex;\n  align-items: flex-end;\n\n  @media (max-width: ", ") {\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  ", ";\n  color: ", ";\n  text-decoration: none;\n  letter-spacing: 1px;\n  margin: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 9;\n  text-decoration: none;\n  outline: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  margin: 80px 0 0;\n  padding: 0 0 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(FooterWrapper, null, /*#__PURE__*/_react["default"].createElement(FooterColumnContainer, null, this.props.children, /*#__PURE__*/_react["default"].createElement(BrandContainer, null, /*#__PURE__*/_react["default"].createElement(Logo, null, this.props.logo))));
    }
  }]);

  return Footer;
}(_react.Component);

_defineProperty(Footer, "Column", function (_ref) {
  var title = _ref.title,
      items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement(FooterColumn, null, /*#__PURE__*/_react["default"].createElement("span", null, title), /*#__PURE__*/_react["default"].createElement("ul", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", null, item);
  })));
});

var FooterWrapper = _styledComponents["default"].footer(_templateObject());

var Logo = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.font.extrabold;
}, function (props) {
  return props.theme.font_size.regular;
}, function (props) {
  return props.theme.color.black.regular;
});

var BrandContainer = (0, _styledComponents["default"])(_Container["default"])(_templateObject3(), function (props) {
  return props.theme.screen.sm;
});
var FooterColumnContainer = (0, _styledComponents["default"])(_Container["default"])(_templateObject4(), function (props) {
  return props.theme.screen.sm;
});

var FooterColumn = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.font.bold;
}, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.color.black.regular;
}, function (props) {
  return props.theme.font.normal;
});

var _default = Footer;
exports["default"] = _default;

//# sourceMappingURL=Footer.js.map