import React from "react"
import styled from "styled-components"

import HeaderImage from '../blocks/HeaderImage'
import HeaderFormSubtitle from '../blocks/HeaderFormSubtitle'
import HeaderSection from '../blocks/HeaderSection'
import HeaderForm from '../blocks/HeaderForm'
import HeaderTextGroup from '../blocks/HeaderTextGroup'


const HeaderText = () => {
  return (
    <>
      <h1>
      Goldfish,
        <br />
      your introvert friend
      </h1>
      <h2>
        Did you know goldfish have strong associative learning abilities? Order one today.
      </h2>
    </>
  )
}


const Header = () => {
  return (
    <HeaderSection>
          <HeaderTextGroup kicker="WET PETS">
            <HeaderText />
            <HeaderForm 
                inputPlaceholder="Write your email and we'll get back to you!" 
                buttonLabel="contact me" 
              />
            <HeaderFormSubtitle
                text="Looking for goldfish enthusiasts like yourself?"
                link="/" 
                linkText="Join our community"
              />
          </HeaderTextGroup>
          <ImageWrapper>
            <HeaderImage />
            <br />
          </ImageWrapper>
    </HeaderSection>
  )
}

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

export default Header