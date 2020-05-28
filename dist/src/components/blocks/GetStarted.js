"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../elements/Button"));

var _Container = _interopRequireDefault(require("../elements/Container"));

var _Section = _interopRequireDefault(require("../elements/Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    padding-top: 16px;\n    font-size: 14px;\n    color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto 32px;\n    text-align: center;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 80px 0 40px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GetStarted = function GetStarted(_ref) {
  var title = _ref.title,
      ctaButton = _ref.ctaButton,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/_react["default"].createElement(StyledSection, null, /*#__PURE__*/_react["default"].createElement(GetStartedContainer, null, /*#__PURE__*/_react["default"].createElement(GetStartedTitle, null, title), /*#__PURE__*/_react["default"].createElement(_Button["default"], null, ctaButton), /*#__PURE__*/_react["default"].createElement(Subtitle, null, subtitle)));
};

GetStarted.propTypes = {
  title: _propTypes["default"].string.isRequired,
  ctaButton: _propTypes["default"].string.isRequired,
  subtile: _propTypes["default"].string.isRequired
};
var StyledSection = (0, _styledComponents["default"])(_Section["default"])(_templateObject(), function (props) {
  return props.theme.color.background.light;
});
var GetStartedContainer = (0, _styledComponents["default"])(_Container["default"])(_templateObject2());

var GetStartedTitle = _styledComponents["default"].h3(_templateObject3());

var Subtitle = _styledComponents["default"].span(_templateObject4(), function (props) {
  return props.theme.font_size.xxsmall;
}, function (props) {
  return props.theme.color.primary;
});

var _default = GetStarted;
exports["default"] = _default;

//# sourceMappingURL=GetStarted.js.map