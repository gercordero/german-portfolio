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
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme.styles"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
        <Methodologies />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
        {/* <div style={{ height: "100vh", backgroundColor: "blue" }}></div> */}
      </Layout>
    </ThemeProvider>
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
