import React from "react"
import { StyledLinkButton, ButtonContainer } from "./styles/LinkButton.styles"

const LinkButton = ({ children, to }) => {
  return (
    <ButtonContainer>
      <StyledLinkButton to={to} className="button">
        {children}
      </StyledLinkButton>
    </ButtonContainer>
  )
}

export default LinkButton
