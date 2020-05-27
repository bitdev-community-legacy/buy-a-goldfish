import React from "react"
import styled from "styled-components"

import Section from '../elements/Section';
import Container from '../elements/Container';

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Senses & Cognition</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Vision</FeatureTitle>
          <FeatureText>
           Four kinds of cone cells for red, green, blue and ultraviolet.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Hearing</FeatureTitle>
          <FeatureText>
           Two otoliths, permitting the detection of sound particle motion.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Smell</FeatureTitle>
          <FeatureText>
            Two blind pits with smell-sensing receptors inside
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Social Skills</FeatureTitle>
          <FeatureText>
            Always happy to meet you - hate other people.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Associative Learning</FeatureTitle>
          <FeatureText>Can learn new tricks.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Taste</FeatureTitle>
          <FeatureText>
            Aren't snobbish about food.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

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

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
