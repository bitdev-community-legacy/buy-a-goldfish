import React from "react"

import Layout from "../components/common/Layout"
import SEO from "../components/common/Seo"
import theme from "../components/common/theme"

import Header from "../components/sections/HeaderSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import Footer from "../components/sections/FooterSection"
import GetStartedSection from "../components/sections/GetStartedSection"

const IndexPage = () => (
  <Layout theme={theme}>
    <SEO title="Home" />
    <Header />
    <FeaturesSection />
    <GetStartedSection />
    <Footer />
  </Layout>
)

export default IndexPage