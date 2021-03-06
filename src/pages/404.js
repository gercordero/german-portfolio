import React from "react"
import styled from "styled-components"
import { SEO, Container, LinkButton } from "../components"

const ErrorSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
`

const Paragraph = styled.p`
  margin-bottom: 5rem;

  @media screen and (min-width: 576px) {
    margin-bottom: 10rem;
  }
`

const Error = () => {
  return (
    <>
      <SEO
        title="Error"
        description="German Cordero's web portfolio 404 error page"
      />
      <ErrorSection>
        <Container>
          <div className="info">
            <h1>Grats. You broke it.</h1>
            <Paragraph>
              This page doesn't exist or some other horrible error has ocurred.
            </Paragraph>
            <LinkButton to="/">back to homepage</LinkButton>
          </div>
        </Container>
      </ErrorSection>
    </>
  )
}

export default Error
