import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

import Section from '../elements/Section';
import Container from '../elements/Container';

export default class Features extends Component {
    
  static Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

  static Title = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

  static Text = styled.p`
  text-align: center;
`


    render(){

        return (
            <Section>
            <StyledContainer>
              <Subtitle>{this.props.subtitle}</Subtitle>
              <SectionTitle>{this.props.title}</SectionTitle>
              <FeaturesGrid>
                  {this.props.children}
              </FeaturesGrid>
            </StyledContainer>
          </Section>
        )
    }

} 

Features.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}


const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

