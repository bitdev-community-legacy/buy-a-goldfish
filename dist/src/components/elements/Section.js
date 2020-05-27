"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 80px 0;\n  overflow: hidden;\n  background-color: ", ";\n\n  @media (max-width: ", ") {\n    padding: 80px 0;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents["default"].section(_templateObject(), function (props) {
  switch (props.accent) {
    case "secondary":
      return props.theme.color.white.dark;

    case "main":
      return props.theme.color.primary;

    default:
      return "white";
  }
}, function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.accent && "background-color: ".concat(props.accent === "secondary" ? props.theme.color.white.dark : props.theme.color.primary);
});

var _default = Section;
exports["default"] = _default;

//# sourceMappingURL=Section.jsx.map