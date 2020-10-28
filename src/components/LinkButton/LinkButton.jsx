import React from "react"
import { StyledLinkButton, ButtonContainer } from "./styles/LinkButton.styles"

const LinkButton = ({ children, to, style }) => {
  return (
    <ButtonContainer style={style}>
      <StyledLinkButton to={to} className="button">
        {children}
      </StyledLinkButton>
    </ButtonContainer>
  )
}

export default LinkButton
