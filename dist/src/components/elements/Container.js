"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n\n  @media (min-width: ", ") {\n    max-width: 540px;\n  }\n\n  @media (min-width: ", ") {\n    max-width: 720px;\n  }\n\n  @media (min-width: ", ") {\n    max-width: 960px;\n  }\n\n  @media (min-width: ", ") {\n    max-width: 1200px;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.screen.xs;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.lg;
}, function (props) {
  return props.fluid && "\n    max-width: 1200px !important;\n  ";
});

var _default = Container;
exports["default"] = _default;

//# sourceMappingURL=Container.jsx.map