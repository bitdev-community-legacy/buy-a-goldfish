"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding-bottom: 1px;\n  margin-left: 8px;\n  text-decoration: none;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormSubtitle = function FormSubtitle(_ref) {
  var text = _ref.text,
      linkURL = _ref.linkURL,
      linkText = _ref.linkText;
  return /*#__PURE__*/_react["default"].createElement(Span, null, text, /*#__PURE__*/_react["default"].createElement(FormLink, {
    to: linkURL
  }, linkText));
};

FormSubtitle.propTypes = {
  text: _propTypes["default"].string.isRequired,
  linkURL: _propTypes["default"].string.isRequired,
  linkText: _propTypes["default"].string.isRequired
};

var Span = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.theme.font_size.xxsmall;
});

var FormLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject2(), function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return props.theme.color.secondary;
});
var _default = FormSubtitle;
exports["default"] = _default;

//# sourceMappingURL=HeaderFormSubtitle.js.map