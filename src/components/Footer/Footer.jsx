import React from "react"
import {
  StyledFooter,
  StyledContainer,
  FooterLinks,
} from "./styles/Footer.styles"

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <FooterLinks />
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> German Cordero </span> all rights reserved
        </h4>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
