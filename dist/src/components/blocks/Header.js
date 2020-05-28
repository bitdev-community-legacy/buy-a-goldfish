"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../elements/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-content: space-between;\n  align-content: center;\n  grid-template-columns: 1fr 1fr;\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n    grid-gap: 64px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff8f8;\n  padding: 110px 0 80px 0;\n  position: relative;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));\n  @media (max-width: ", ") {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderSection = function HeaderSection(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(HeaderWrapper, null, /*#__PURE__*/_react["default"].createElement(_Container["default"], null, /*#__PURE__*/_react["default"].createElement(Flex, null, children)));
};

HeaderSection.propTypes = {
  children: _propTypes["default"].node.isRequired
};

var HeaderWrapper = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.theme.screen.md;
});

var Flex = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.screen.md;
});

var _default = HeaderSection;
exports["default"] = _default;

//# sourceMappingURL=Header.js.map