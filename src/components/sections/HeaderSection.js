import React from "react"

import HeaderImage from '../blocks/HeaderImage'
import HeaderFormSubtitle from '../blocks/HeaderFormSubtitle'
import Header from '../blocks/Header'
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


const HeaderSection = () => {
  return (
    <Header>
          <HeaderTextGroup kicker="WET PETS">
            <HeaderText />
            <HeaderForm 
                inputPlaceholder="Write your email and we'll get back to you!" 
                buttonLabel="contact me" 
              />
            <HeaderFormSubtitle
                text="Looking for goldfish enthusiasts like yourself?"
                linkURL="/" 
                linkText="Join our community"
              />
          </HeaderTextGroup>
          <HeaderImage />
    </Header>
  )
}



export default HeaderSection