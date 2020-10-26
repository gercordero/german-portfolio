import React from "react"
import PropTypes from "prop-types"
import {
  StyledLink,
  BlogArticle,
  StyledImage,
  BlogCard,
  BlogFooter,
} from "./styles/Blog.styles"

const Blog = ({ title, desc, date, slug, category, image }) => {
  return (
    <StyledLink to={`/blogs/${slug}`}>
      <BlogArticle>
        {image && <StyledImage fluid={image.childImageSharp.fluid} />}
        <BlogCard>
          <h4>{title}</h4>
          <p>{desc}</p>
          <BlogFooter>
            <p className="btn-gray">{category}</p>
            <p>{date}</p>
          </BlogFooter>
        </BlogCard>
      </BlogArticle>
    </StyledLink>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
