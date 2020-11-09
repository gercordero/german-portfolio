import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  Methodologies,
  Jobs,
  Projects,
  Blogs,
  SEO,
} from "../components"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="German Cordero's web portfolio homepage" />
      <Hero />
      <Methodologies />
      <Jobs />
      <Projects projects={projects} title="featured projects" isMainPage />
      <Blogs blogs={blogs} title="latest articles" isMainPage />
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        strapiId
        title
        desc
        date(formatString: "MMMM Do, YYYY")
        slug
        category
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
