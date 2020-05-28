"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n\n  html {\n    font-weight: unset;\n    color: ", ";\n\n  }\n  \n  body {\n    font-family: ", ";\n  }\n\n  \n  h1 {\n    ", ";\n    font-family: ", ";\n  }\n\n  h2 {\n    ", ";\n  }\n\n  h3 {\n    ", ";\n    font-family: ", ";\n  }\n\n  h4 {\n    ", ";\n    font-family: ", ";\n  }\n\n  h5 {\n    ", ";\n    font-family: ", ";\n  }\n\n  p {\n    ", ";\n    line-height: 22px;\n\n  }\n\n  input {\n    font-family: ", ";\n  }\n\n  @media (max-width: ", ") {\n    h1 {\n      ", ";\n    }\n\n    h2 {\n      ", ";\n    }\n\n    h3 {\n      ", ";\n    }\n\n    p {\n      ", ";\n    }\n  }\n\n  @media (max-width: ", ") {\n\n    h1 {\n\n    }\n\n    h2 {\n\n    }\n\n    h3 {\n      font-size: 32px;\n      line-height: 36px;\n    }\n\n    h4 {\n      font-size: 22px;\n      line-height: 24px;\n    }\n    p {\n\n    }\n\n  }\n\n  button {\n    border: none;\n    background: none;\n    outline: none;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  a {\n    cursor: pointer;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import "../../static/fonts/fonts.css"
var Layout = function Layout(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(GlobalStyles, null), children));
};

Layout.defaultProps = {
  theme: _theme["default"]
};
Layout.propTypes = {
  /** The content of the web site */
  children: _propTypes["default"].node.isRequired,

  /** The theme for all components in this collection */
  theme: _propTypes["default"].shape({
    font: _propTypes["default"].shape({
      /** example: 'HK Grotesk Normal' */
      primary: _propTypes["default"].string.isRequired,
      secondary: _propTypes["default"].string.isRequired,
      light: _propTypes["default"].string.isRequired,
      normal: _propTypes["default"].string.isRequired,
      medium: _propTypes["default"].string.isRequired,
      semibold: _propTypes["default"].string.isRequired,
      bold: _propTypes["default"].string.isRequired,
      extrabold: _propTypes["default"].string.isRequired
    }),
    font_size: _propTypes["default"].shape({
      /** example:  'font-size: 12px;' */
      xxxsmall: _propTypes["default"].string.isRequired,
      xxsmall: _propTypes["default"].string.isRequired,
      xsmall: _propTypes["default"].string.isRequired,
      small: _propTypes["default"].string.isRequired,
      regular: _propTypes["default"].string.isRequired,
      large: _propTypes["default"].string.isRequired,
      larger: _propTypes["default"].string.isRequired,
      xlarge: _propTypes["default"].string.isRequired
    }),
    color: _propTypes["default"].shape({
      /** example: '#b35656' */
      primary: _propTypes["default"].string.isRequired,
      secondary: _propTypes["default"].string.isRequired,
      accent: _propTypes["default"].string.isRequired,
      background: _propTypes["default"].shape({
        /** example: '#b35656' */
        white: _propTypes["default"].string.isRequired,
        light: _propTypes["default"].string.isRequired
      }),
      white: _propTypes["default"].shape({
        /** example: '#b35656' */
        regular: _propTypes["default"].string.isRequired,
        lessdark: _propTypes["default"].string.isRequired,
        dark: _propTypes["default"].string.isRequired,
        darker: _propTypes["default"].string.isRequired
      }),
      black: _propTypes["default"].shape({
        /** example: '#b35656' */
        lightest: _propTypes["default"].string.isRequired,
        light: _propTypes["default"].string.isRequired,
        regular: _propTypes["default"].string.isRequired
      })
    }),
    screen: _propTypes["default"].shape({
      /** example: '575px' */
      xs: _propTypes["default"].string.isRequired,
      sm: _propTypes["default"].string.isRequired,
      md: _propTypes["default"].string.isRequired,
      lg: _propTypes["default"].string.isRequired
    })
  })
}; // ***Global Styles***

var normalize = "\n  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}\n";
var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), normalize, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.font.primary;
}, function (props) {
  return props.theme.font_size.xlarge;
}, function (props) {
  return props.theme.font.medium;
}, function (props) {
  return props.theme.font_size.larger;
}, function (props) {
  return props.theme.font_size.larger;
}, function (props) {
  return props.theme.font.medium;
}, function (props) {
  return props.theme.font_size.large;
}, function (props) {
  return props.theme.font.medium;
}, function (props) {
  return props.theme.font_size.xsmall;
}, function (props) {
  return props.theme.font.normal;
}, function (props) {
  return props.theme.font_size.small;
}, function (props) {
  return props.theme.font.normal;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.font_size.larger;
}, function (props) {
  return props.theme.font_size.large;
}, function (props) {
  return props.theme.font_size.regular;
}, function (props) {
  return props.theme.font_size.small;
}, function (props) {
  return props.theme.screen.xs;
});
var _default = Layout;
exports["default"] = _default;

//# sourceMappingURL=Layout.js.map