import React from "react"
import { StyledSidebar, StyledLinks } from "./styles/Sidebar.styles"

const Sidebar = ({ isOpen }) => {
  return (
    <StyledSidebar showSidebar={isOpen}>
      <StyledLinks showLinks={isOpen}></StyledLinks>
    </StyledSidebar>
  )
}

export default Sidebar
