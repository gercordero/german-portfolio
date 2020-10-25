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

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Methodologies />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      {/* <div style={{ height: "100vh", backgroundColor: "blue" }}></div> */}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      filter: { featured: { eq: true } }
      sort: { fields: strapiId, order: ASC }
    ) {
      nodes {
        strapiId
        title
        description
        github
        url
        stack {
          item
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
