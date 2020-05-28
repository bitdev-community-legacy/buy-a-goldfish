import React from "react"

import Footer from "../blocks/footer"

const FooterSection = () => {
  return (
    <Footer logo="Goldfish inc.">
      <Footer.Column title="Features" items={["Hearing", "Vision"]} />
      <Footer.Column title="Resources" items={["Compare", "Blog"]} />
      <Footer.Column title="Social" items={["LinkedIn", "Instagram"]} />
      <Footer.Column title="Company" items={["About Us", "Careers"]} />
    </Footer>
  )
}


export default FooterSection
