import React from "react"

import Features from '../blocks/Features'


const FeaturesSection = () => {
  return (
    <Features subtitle="Features" title="Senses & Cognition">
         <Features.Item>
           <Features.Title>Vision</Features.Title>
         <Features.Text>
            Four kinds of cone cells for red, green, blue and ultraviolet.
           </Features.Text>
         </Features.Item>
         <Features.Item>
           <Features.Title>Hearing</Features.Title>
           <Features.Text>
            Two otoliths, permitting the detection of sound particle motion.
           </Features.Text>
         </Features.Item>
         <Features.Item>
           <Features.Title>Smell</Features.Title>
           <Features.Text>
             Two blind pits with smell-sensing receptors inside
           </Features.Text>
         </Features.Item>
         <Features.Item>
           <Features.Title>Social Skills</Features.Title>
           <Features.Text>
             Always happy to meet you - hate other people.
           </Features.Text>
         </Features.Item>
         <Features.Item>
           <Features.Title>Associative Learning</Features.Title>
           <Features.Text>Can learn new tricks.</Features.Text>
         </Features.Item>
         <Features.Item>
           <Features.Title>Taste</Features.Title>
           <Features.Text>
             Aren't snobbish about food.
           </Features.Text>
         </Features.Item>
    </Features>
  )
}


export default FeaturesSection