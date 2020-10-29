import React from "react"
import styled from "styled-components"
import { Layout, SEO, Container, LinkButton } from "../components"

const StyledContainer = styled(Container)`
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
    <Layout>
      <StyledContainer>
        <div className="info">
          <h1>Grats. You broke it.</h1>
          <Paragraph>
            This page doesn't exist or some other horrible error has ocurred.
          </Paragraph>
          <LinkButton to="/">back to homepage</LinkButton>
        </div>
      </StyledContainer>
    </Layout>
  )
}

export default Error
