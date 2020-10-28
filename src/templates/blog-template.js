import React from "react"
import { graphql } from "gatsby"
import { Layout, Container, LinkButton } from "../components"
import { BlogTemplateSection, BlogContent } from "./styles/BlogTemplate.styles"
import MDXCode from "./Highlight/MDXCode"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const ComponentName = ({ data }) => {
  const {
    blog: {
      content: {
        childMdx: { body },
      },
    },
  } = data

  return (
    <MDXCode>
      <Layout>
        <BlogTemplateSection>
          <Container>
            <BlogContent>
              <MDXRenderer>{body}</MDXRenderer>
              <LinkButton to="/blog/" style={{ marginTop: "8rem" }}>
                back to blogs
              </LinkButton>
            </BlogContent>
          </Container>
        </BlogTemplateSection>
      </Layout>
    </MDXCode>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content: childStrapiBlogsContent {
        childMdx {
          body
        }
      }
    }
  }
`

export default ComponentName
