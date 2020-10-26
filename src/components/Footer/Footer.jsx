import React from "react"
import { Container } from "../"
import { StyledFooter, FooterLinks } from "./styles/Footer.styles"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterLinks />
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> German Cordero </span> all rights reserved
        </h4>
      </Container>
    </StyledFooter>
  )
}

export default Footer
