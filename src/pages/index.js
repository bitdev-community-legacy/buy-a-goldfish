import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
