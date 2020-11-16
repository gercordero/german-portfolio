import React from "react"
import { StyledContainer } from "./styles/Container.styles"

const Container = ({ className, children, ...rest }) => {
  return (
    <StyledContainer {...rest} className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container
