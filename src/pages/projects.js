import React from "react"
import { Projects, SEO } from "../components"
import { graphql } from "gatsby"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes },
  } = data

  return (
    <>
      <SEO
        title="Projects"
        description="German Cordero's web portfolio projects page"
      />
      <Projects projects={nodes} title="all projects" />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        description
        github
        url
        title
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

export default ProjectsPage
