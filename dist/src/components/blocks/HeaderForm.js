"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../elements/Button"));

var _TextInput = _interopRequireDefault(require("../elements/TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 16px;\n\n  @media (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderForm = function HeaderForm(_ref) {
  var inputPlaceholder = _ref.inputPlaceholder,
      buttonLabel = _ref.buttonLabel;
  return /*#__PURE__*/_react["default"].createElement(Form, null, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    placeholder: inputPlaceholder
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], null, buttonLabel));
};

HeaderForm.propTypes = {
  inputPlaceholder: _propTypes["default"].string.isRequired,
  buttonLabel: _propTypes["default"].string.isRequired
};

var Form = _styledComponents["default"].form(_templateObject(), function (props) {
  return props.theme.screen.sm;
});

var _default = HeaderForm;
exports["default"] = _default;

//# sourceMappingURL=HeaderForm.js.map