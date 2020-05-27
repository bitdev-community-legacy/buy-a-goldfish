"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  line-height: 42px;\n  width: 100%;\n  text-align: left;\n  height: 60px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  border-image: initial;\n  border-radius: 4px;\n  padding: 8px 16px;\n  outline: 0px;\n  &:focus {\n    box-shadow: inset ", " 0px 0px 0px 2px;\n  }\n  @media (max-width: ", ") {\n    margin-bottom: 8px;\n  }\n  @media (max-width: ", ") {\n    display: block;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextInput = _styledComponents["default"].input(_templateObject(), function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
});

TextInput.propTypes = {
  /** A theme object */
  theme: _propTypes["default"].object
};
var _default = TextInput;
exports["default"] = _default;

//# sourceMappingURL=TextInput.jsx.map