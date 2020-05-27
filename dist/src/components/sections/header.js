"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Container = _interopRequireDefault(require("../elements/Container"));

var _Button = _interopRequireDefault(require("../elements/Button"));

var _TextInput = _interopRequireDefault(require("../elements/TextInput"));

var _InternalStyledImage = _interopRequireDefault(require("../elements/InternalStyledImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 500px;\n  @media (max-width: ", ") {\n    width: 400px;\n  }\n  @media (max-width: ", ") {\n    width: 300px;\n    display: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  justify-self: end;\n  align-self: center;\n  @media (max-width: ", ") {\n    justify-self: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding-bottom: 1px;\n  margin-left: 8px;\n  text-decoration: none;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 16px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-content: space-between;\n  align-content: center;\n  grid-template-columns: 1fr 1fr;\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr;\n    grid-gap: 64px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n\n  > div {\n    width: 120%;\n    margin-bottom: -4.5%;\n\n    @media (max-width: ", ") {\n      margin: 0 16px;\n    }\n  }\n\n  h1 {\n    margin: 0 0 24px;\n    color: ", ";\n  }\n\n  h2 {\n    margin-bottom: 24px;\n    ", "\n  }\n\n  p {\n    margin-bottom: 48px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  letter-spacing: 0px;\n  margin-bottom: 16px;\n"]);

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

var Header = function Header(_ref) {
  var externalImage = _ref.externalImage;

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
  };

  return /*#__PURE__*/_react["default"].createElement(HeaderWrapper, {
    id: "top"
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], null, /*#__PURE__*/_react["default"].createElement(Flex, null, /*#__PURE__*/_react["default"].createElement(HeaderTextGroup, null, /*#__PURE__*/_react["default"].createElement(Subtitle, null, "WET PETS"), /*#__PURE__*/_react["default"].createElement("h1", null, "Goldfish,", /*#__PURE__*/_react["default"].createElement("br", null), "your introvert friend"), /*#__PURE__*/_react["default"].createElement("h2", null, "Did you know goldfish have strong associative learning abilities? Order one today."), /*#__PURE__*/_react["default"].createElement(HeaderForm, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    placeholder: "Write your email and we'll get back to you!"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "contact me")), /*#__PURE__*/_react["default"].createElement(FormSubtitle, null, "Looking for goldfish enthusiasts like yourself?", " ", /*#__PURE__*/_react["default"].createElement(FormSubtitleLink, {
    to: "/"
  }, "Join our community"))), /*#__PURE__*/_react["default"].createElement(ImageWrapper, null, externalImage && /*#__PURE__*/_react["default"].createElement(ExternalStyledImage, {
    src: externalImage,
    alt: "image"
  }), !externalImage && /*#__PURE__*/_react["default"].createElement(_InternalStyledImage["default"], null), /*#__PURE__*/_react["default"].createElement("br", null)))));
};

var _default = Header;
exports["default"] = _default;

var HeaderWrapper = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.theme.screen.md;
});

var Subtitle = _styledComponents["default"].h5(_templateObject2(), function (props) {
  return props.theme.color.accent;
});

var HeaderTextGroup = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.font_size.regular;
});

var Flex = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.screen.md;
});

var HeaderForm = _styledComponents["default"].form(_templateObject5(), function (props) {
  return props.theme.screen.sm;
});

var FormSubtitle = _styledComponents["default"].span(_templateObject6(), function (props) {
  return props.theme.font_size.xxsmall;
});

var FormSubtitleLink = (0, _styledComponents["default"])(Link)(_templateObject7(), function (props) {
  return props.theme.color.secondary;
}, function (props) {
  return props.theme.color.secondary;
});

var ImageWrapper = _styledComponents["default"].div(_templateObject8(), function (props) {
  return props.theme.screen.md;
});

var ExternalStyledImage = _styledComponents["default"].img(_templateObject9(), function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
});

//# sourceMappingURL=header.js.map