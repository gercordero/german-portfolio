import React from "react"
import { Container, RoundedButton } from "../"
import {
  AboutGrid,
  AboutSection,
  AboutInfo,
  StyledTitle,
  ButtonContainer,
  ResumeButton,
  AboutImage,
} from "./styles/AboutPage.styles"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "about-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
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
            <p>
              I develop websites and web applications using my front and back
              end skills. When dealing with a project I pay attention to the
              smallest details addressing problems with patience. In addition to
              my knowledge base, I actively seek out new technologies and stay
              up-to-date on industry trends and advancements.
            </p>
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
