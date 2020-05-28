"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  letter-spacing: 0px;\n  margin-bottom: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n\n  > div {\n    width: 120%;\n    margin-bottom: -4.5%;\n\n    @media (max-width: ", ") {\n      margin: 0 16px;\n    }\n  }\n\n  h1 {\n    margin: 0 0 24px;\n    color: ", ";\n  }\n\n  h2 {\n    margin-bottom: 24px;\n    ", "\n  }\n\n  p {\n    margin-bottom: 48px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderTextGroup = function HeaderTextGroup(_ref) {
  var kicker = _ref.kicker,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(TextGroup, null, kicker && /*#__PURE__*/_react["default"].createElement(Kicker, null, kicker), children);
};

HeaderTextGroup.propTypes = {
  kicker: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].string.isRequired
};

var TextGroup = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.font_size.regular;
});

var Kicker = _styledComponents["default"].h5(_templateObject2(), function (props) {
  return props.theme.color.accent;
});

var _default = HeaderTextGroup;
exports["default"] = _default;

//# sourceMappingURL=HeaderTextGroup.js.map