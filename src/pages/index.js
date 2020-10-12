import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, Services, Jobs, Projects, Blogs } from "../components"

export default () => {
  return (
    <Layout>
      <Hero />
      <div style={{ height: "100vh", backgroundColor: "blue" }}></div>
    </Layout>
  )
}

// ...GatsbyImageSharpFluid
