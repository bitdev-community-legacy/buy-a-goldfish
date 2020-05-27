import styled from 'styled-components';
import PropTypes from 'prop-types';


const ExternalImage = styled.img`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

Section.propTypes = {
  /** A theme object */
  theme: PropTypes.object.isRequired
}

export default ExternalImage;