import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components"
import defaultTheme from "./theme"

import "../../static/fonts/fonts.css"

const Layout = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

Layout.defaultProps = {
  theme: defaultTheme
}

Layout.propTypes = {
  /** The content of the web site */
  children: PropTypes.node.isRequired,
  /** The theme for all components in this collection */
  theme: PropTypes.shape({
    font: PropTypes.shape({
      /** example: 'HK Grotesk Normal' */
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      light: PropTypes.string.isRequired,
      normal: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      semibold: PropTypes.string.isRequired,
      bold: PropTypes.string.isRequired,
      extrabold: PropTypes.string.isRequired,
    }),
    font_size: PropTypes.shape({
      /** example:  'font-size: 12px;' */
      xxxsmall: PropTypes.string.isRequired,
      xxsmall: PropTypes.string.isRequired,
      xsmall: PropTypes.string.isRequired,
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
      larger: PropTypes.string.isRequired,
      xlarge: PropTypes.string.isRequired,
    }),
    color: PropTypes.shape({
      /** example: '#b35656' */
      primary: PropTypes.string.isRequired, 
      secondary: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
      background: PropTypes.shape({
        /** example: '#b35656' */
        white: PropTypes.string.isRequired,
        light: PropTypes.string.isRequired,
      }),
      white: PropTypes.shape({
        /** example: '#b35656' */
        regular: PropTypes.string.isRequired,
        lessdark: PropTypes.string.isRequired,
        dark: PropTypes.string.isRequired,
        darker: PropTypes.string.isRequired,
      }),
      black: PropTypes.shape({
        /** example: '#b35656' */
        lightest: PropTypes.string.isRequired,
        light: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }),
    }),
    screen: PropTypes.shape({
      /** example: '575px' */
      xs: PropTypes.string.isRequired,
      sm: PropTypes.string.isRequired,
      md: PropTypes.string.isRequired,
      lg: PropTypes.string.isRequired,
    }),
  })
  

  }




// ***Global Styles***
const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

const GlobalStyles = createGlobalStyle`
  ${normalize};

  html {
    font-weight: unset;
    color: ${props => props.theme.color.primary};

  }
  
  body {
    font-family: ${props => props.theme.font.primary};
  }

  
  h1 {
    ${props => props.theme.font_size.xlarge};
    font-family: ${props => props.theme.font.medium};
  }

  h2 {
    ${props => props.theme.font_size.larger};
  }

  h3 {
    ${props => props.theme.font_size.larger};
    font-family: ${props => props.theme.font.medium};
  }

  h4 {
    ${props => props.theme.font_size.large};
    font-family: ${props => props.theme.font.medium};
  }

  h5 {
    ${props => props.theme.font_size.xsmall};
    font-family: ${props => props.theme.font.normal};
  }

  p {
    ${props => props.theme.font_size.small};
    line-height: 22px;

  }

  input {
    font-family: ${props => props.theme.font.normal};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }

    h2 {
      ${props => props.theme.font_size.large};
    }

    h3 {
      ${props => props.theme.font_size.regular};
    }

    p {
      ${props => props.theme.font_size.small};
    }
  }

  @media (max-width: ${props => props.theme.screen.xs}) {

    h1 {

    }

    h2 {

    }

    h3 {
      font-size: 32px;
      line-height: 36px;
    }

    h4 {
      font-size: 22px;
      line-height: 24px;
    }
    p {

    }

  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

`

export default Layout
