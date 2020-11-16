import React from "react"
import Image from "gatsby-image"
import { Container } from "../"
import { graphql, useStaticQuery } from "gatsby"
import {
  StyledHero,
  HeroCenter,
  HeroInfo,
  HeroImage,
  HeroButton,
  StyledSocialLinks,
} from "./styles/Hero.styles"

const heroImageQuery = graphql`
  {
    file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(heroImageQuery)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <StyledHero>
      <Container>
        <HeroCenter>
          <HeroInfo>
            <h1 className="display-4">I’m Germán</h1>
            <h2>Front-end Web Developer & Designer</h2>
            <HeroButton to="/contact/" className="button">
              contact me
            </HeroButton>
            <StyledSocialLinks />
          </HeroInfo>
          <HeroImage>
            <Image fluid={fluid} alt="Hero image" />
          </HeroImage>
        </HeroCenter>
      </Container>
    </StyledHero>
  )
}

export default Hero
