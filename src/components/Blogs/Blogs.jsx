import React from "react"
import Blog from "./Blog/Blog"
import { LinkButton, Container } from "../"
import {
  StyledTitle,
  BlogsSection,
  BlogsContainer,
} from "./styles/Blogs.styles"

export const Blogs = ({ blogs, title, isMainPage }) => {
  return (
    <BlogsSection isMainPage={isMainPage}>
      <Container>
        <StyledTitle isMainPage={isMainPage}>{title}</StyledTitle>
        <BlogsContainer>
          {blogs.map(blog => (
            <Blog key={blog.strapiId} {...blog} />
          ))}
        </BlogsContainer>
        {isMainPage && <LinkButton to="/blog/">All Blogs</LinkButton>}
      </Container>
    </BlogsSection>
  )
}

export default Blogs
