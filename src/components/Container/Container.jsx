import React from "react"
import { StyledContainer } from "./styles/Container.styles"

const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

export default Container
