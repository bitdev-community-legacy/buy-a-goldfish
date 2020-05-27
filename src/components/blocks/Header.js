import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../elements/Container';

const HeaderSection = ({children}) => {
    return(
        <HeaderWrapper>
          <Container>
            <Flex>
              {children}
            </Flex>
          </Container>        
        </HeaderWrapper>
    )
}


HeaderSection.propTypes = {
  children: PropTypes.node.isRequired
}



const HeaderWrapper = styled.header`
  background-color: #fff8f8;
  padding: 110px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

export default HeaderSection;