import React from "react"
import Image from "gatsby-image"
import heroSvg from "../../assets/hero-svg.svg"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../../constants/socialLinks"
import { Container, Col, Row } from "react-bootstrap"
import "./styles/hero.scss"

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
    <header className="hero">
      <div className="hero-grid">
        <Container className="hero-center">
          <Row>
            <Col className="hero-info">
              <h1 className="display-4">I’m Germán</h1>
              <h4>Front-end Web Developer & Designer</h4>
              <button className="hero-btn">Contact me</button>
              <SocialLinks />
            </Col>
            <Col className="hero-image">
              <Image fluid={fluid} alt="Hero image" />
            </Col>
          </Row>
        </Container>
        <div className="hero-image-footer">
          <img src={heroSvg} alt="Hero Desktop Svg" />
        </div>
        <div className="hero-footer" />
      </div>
    </header>
  )
}

export default Hero
