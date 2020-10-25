import React from "react"
import { Layout, Projects } from "../components"
import { graphql } from "gatsby"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes },
  } = data

  return (
    <Layout>
      <Projects projects={nodes} title="all projects" />
    </Layout>
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
