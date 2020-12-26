import styled from "styled-components"
import Image from "gatsby-image"

export const StyledProject = styled.article`
  display: grid;
  margin-bottom: 6.4rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
`

export const ProjectImage = styled(Image)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  height: 30.4rem;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.primary},
      #222
    );
    opacity: 0.85;
    transition: ${props => props.theme.transition};
  }

  ${StyledProject}:hover &::after {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    height: 35.2rem;
  }

  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
    border-radius: ${props => props.theme.radius};

    ${StyledProject}:nth-of-type(even) & {
      grid-column: 5 / span 12;
    }
  }
`

export const ProjectInfo = styled.div`
  background: ${props => props.theme.white};
  padding: 1.6rem 3.2rem;
  border-bottom-left-radius: ${props => props.theme.radius};
  border-bottom-right-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.darkShadow};

  h3 {
    font-weight: 500;
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
  }

  @media screen and (min-width: 992px) {
    z-index: 1;
    grid-row: 1/1;
    grid-column: 5 / span 12;
    border-radius: ${props => props.theme.radius};

    ${StyledProject}:nth-of-type(even) & {
      grid-column: 1 / span 8;
    }
  }
`

export const ProjectNumber = styled.span`
  display: inline-block;
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.2rem;
`

export const ProjectDescription = styled.p`
  word-spacing: 3px;
  color: ${props => props.theme.gray};
`

export const ProjectStack = styled.div`
  margin-bottom: 1.6rem;

  span {
    margin: 0.6rem;
    margin-left: 0;
  }
`

export const ProjectLinks = styled.div`
  a > svg:hover {
    color: ${props => props.theme.secondary};
  }
`
