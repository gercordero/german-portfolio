import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  Methodologies,
  Jobs,
  Projects,
  Blogs,
} from "../components"

export default () => {
  return (
    <Layout>
      <Hero />
      <Methodologies />
      {/* <div style={{ height: "100vh", backgroundColor: "blue" }}></div> */}
    </Layout>
  )
}

// ...GatsbyImageSharpFluid
