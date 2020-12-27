import React from "react"
import { Blogs, SEO } from "../components"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <>
      <SEO
        title="Blog"
        description="German Cordero's web portfolio blog page"
      />
      <Blogs blogs={blogs} title="blog" />
    </>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
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

export default Blog
