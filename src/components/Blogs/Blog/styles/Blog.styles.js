import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 3.2rem;
  background: ${props => props.theme.gray4};
  border-radius: ${props => props.theme.radius2};
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
    transform: scale(1.02);
  }
`

export const BlogArticle = styled.article`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`

export const StyledImage = styled(Image)`
  border-top-left-radius: ${props => props.theme.radius2};
  border-top-right-radius: ${props => props.theme.radius2};
  height: 15rem;

  @media screen and (min-width: 576px) {
    height: 17.5rem;
  }

  @media screen and (min-width: 850px) {
    height: 13.75rem;
  }
`

export const BlogCard = styled.div`
  display: grid;
  padding: 2.4rem 1.6rem;
  grid-template-rows: auto 1fr auto;

  h4 {
    letter-spacing: unset;
    margin-bottom: 1rem;
  }
`

export const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-bottom: 0;
    font-weight: bold;
  }
`
