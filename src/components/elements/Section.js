import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`

Section.propTypes = {
  /** A theme object */
  theme: PropTypes.object.isRequired
}

export default Section;