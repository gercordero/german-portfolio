import React from "react"
import { StyledTitle } from "./styles/Title.styles"

const Title = ({ className, children }) => {
  return (
    <StyledTitle className={className}>
      <h2>{children}</h2>
      <div className="title-underline"></div>
    </StyledTitle>
  )
}

export default Title
