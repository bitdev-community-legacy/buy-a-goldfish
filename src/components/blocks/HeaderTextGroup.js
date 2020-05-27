import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderTextGroup = ({kicker, children}) => {
    return(
        <TextGroup>
            {kicker && <Kicker>{kicker}</Kicker>}
            {children}
        </TextGroup>
    )
}

HeaderTextGroup.propTypes = {
    kicker: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

const TextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Kicker = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

export default HeaderTextGroup;