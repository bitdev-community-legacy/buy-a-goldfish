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
  var data = _taggedTemplateLiteral(["\n  justify-self: end;\n  align-self: center;\n  @media (max-width: ", ") {\n    justify-self: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 500px;\n  @media (max-width: ", ") {\n    width: 400px;\n  }\n  @media (max-width: ", ") {\n    width: 300px;\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExternalImage = function ExternalImage(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/_react["default"].createElement(ImageWrapper, null, /*#__PURE__*/_react["default"].createElement(Image, {
    src: src
  }));
};

var Image = _styledComponents["default"].img(_templateObject(), function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
});

var ImageWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.screen.md;
});

ExternalImage.propTypes = {
  /** A theme object */
  theme: _propTypes["default"].object.isRequired,
  src: _propTypes["default"].string.isRequired
};
var _default = ExternalImage;
exports["default"] = _default;

//# sourceMappingURL=ExternalImage.js.map