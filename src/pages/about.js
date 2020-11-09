import React from "react"
import { Layout, AboutPage, SEO } from "../components"

const About = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="German Cordero's web portfolio about page"
      />
      <AboutPage />
    </Layout>
  )
}

export default About
