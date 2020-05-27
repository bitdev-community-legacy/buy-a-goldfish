"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsby = require("gatsby");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 500px;\n  @media (max-width: ", ") {\n    width: 400px;\n  }\n  @media (max-width: ", ") {\n    width: 300px;\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  justify-self: end;\n  align-self: center;\n  @media (max-width: ", ") {\n    justify-self: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query {\n      file(sourceInstanceName: { eq: \"product\" }, name: { eq: \"goldfish\" }) {\n        childImageSharp {\n          fluid(maxWidth: 1000) {\n            ...GatsbyImageSharpFluid_tracedSVG\n          }\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InternalStyledImage = function InternalStyledImage() {
  var data = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject()));
  return /*#__PURE__*/_react["default"].createElement(ImageWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledImage, {
    fluid: data.file.childImageSharp.fluid
  }), " }", /*#__PURE__*/_react["default"].createElement("br", null));
};

var _default = InternalStyledImage;
exports["default"] = _default;

var ImageWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.screen.md;
});

var StyledImage = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject3(), function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
});

//# sourceMappingURL=InternalStyledImage.jsx.map