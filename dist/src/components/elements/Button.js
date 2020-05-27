"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 1px;\n  height: 60px;\n  display: block;\n  margin-left: 8px;\n  text-transform: uppercase;\n  cursor: pointer;\n  white-space: nowrap;\n  background: ", ";\n  border-radius: 4px;\n  padding: 0px 40px;\n  border-width: 0px;\n  border-style: initial;\n  border-color: initial;\n  border-image: initial;\n  outline: 0px;\n  &:hover {\n    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;\n  }\n  @media (max-width: ", ") {\n  }\n  @media (max-width: ", ") {\n    margin-left: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
});

Button.propTypes = {
  /** A theme object */
  theme: _propTypes["default"].object,

  /** A button label */
  children: _propTypes["default"].node.isRequired
};
var _default = Button;
exports["default"] = _default;

//# sourceMappingURL=Button.jsx.map