import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExternalImage = ({src}) => {
  return (
    <ImageWrapper>
      <Image src={src} />
    </ImageWrapper>
  )
}

const Image = styled.img`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

ExternalImage.propTypes = {
  /** A theme object */
  theme: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired
}



export default ExternalImage;