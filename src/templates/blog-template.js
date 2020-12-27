import React from "react"
import { graphql } from "gatsby"
import { Container, LinkButton, SEO } from "../components"
import { BlogTemplateSection, BlogContent } from "./styles/BlogTemplate.styles"
import MDXCode from "./Highlight/MDXCode"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const ComponentName = ({ data }) => {
  const {
    blog: {
      title,
      desc,
      content: {
        childMdx: { body },
      },
    },
  } = data

  return (
    <MDXCode>
      <SEO title={title} description={desc} />
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
    </MDXCode>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      desc
      content: childStrapiBlogsContent {
        childMdx {
          body
        }
      }
    }
  }
`

export default ComponentName
