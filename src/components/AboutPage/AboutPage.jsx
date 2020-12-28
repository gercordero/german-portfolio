import React from "react"
// Gatsby plugins and helpers
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// Components
import { Container } from "../"
// Styled components
import {
  AboutGrid,
  AboutSection,
  AboutInfo,
  AboutStack,
  StyledTitle,
  ButtonContainer,
  ResumeButton,
  AboutImage,
} from "./styles/AboutPage.styles"

const query = graphql`
  {
    file(relativePath: { eq: "about-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    strapiAbout {
      description
      stack {
        item
        id
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    strapiAbout: { description, stack },
  } = useStaticQuery(query)

  return (
    <AboutSection>
      <Container>
        <AboutGrid>
          <AboutImage>
            <Image fluid={fluid} alt="About image" />
          </AboutImage>
          <AboutInfo>
            <StyledTitle>About me</StyledTitle>
            <p>{description}</p>
            <AboutStack>
              {stack.map(element => (
                <span key={element.id} className="btn-gray">
                  {element.item}
                </span>
              ))}
            </AboutStack>
            <ButtonContainer>
              <ResumeButton href={""} download className="button">
                download resume
              </ResumeButton>
            </ButtonContainer>
          </AboutInfo>
        </AboutGrid>
      </Container>
    </AboutSection>
  )
}

export default About
