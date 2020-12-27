import React from "react"
import { StyledSidebar, StyledLinks } from "./styles/Sidebar.styles"

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <StyledSidebar showSidebar={isOpen}>
      <StyledLinks toggleSidebar={toggleSidebar} showLinks={isOpen} />
    </StyledSidebar>
  )
}

export default Sidebar
