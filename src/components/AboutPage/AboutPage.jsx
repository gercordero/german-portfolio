import React from "react"
// Gatsby plugins and helpers
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// CV file
import german_cv from "../../assets/german-cv.pdf"
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
    <div>
      <AboutSection>
        <Container>
          <AboutGrid>
            <AboutImage>
              <Image fluid={fluid} alt="About image" />
            </AboutImage>
            <AboutInfo>
              <StyledTitle>About me</StyledTitle>
              <p>{description}</p>
              <p>Some of the technologies that I work with: </p>
              <AboutStack>
                {stack.map(element => (
                  <span key={element.id} className="btn-gray">
                    {element.item}
                  </span>
                ))}
              </AboutStack>
              <ButtonContainer>
                <a
                  href={german_cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button btn-rounded"
                >
                  download resume
                </a>
              </ButtonContainer>
            </AboutInfo>
          </AboutGrid>
        </Container>
      </AboutSection>
    </div>
  )
}

export default About
