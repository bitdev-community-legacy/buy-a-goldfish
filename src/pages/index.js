import React from "react"

import Layout from "../components/common/Layout"
import SEO from "../components/common/Seo"
import theme from "../components/common/theme"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout theme={theme}>
    <SEO title="Home" />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage