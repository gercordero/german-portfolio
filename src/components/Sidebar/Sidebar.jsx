import React from "react"
import Links from "../../constants/links"
import SocialLinks from "../../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { StyledSidebar, StyledLinks } from "./styles/Sidebar.styles"

const Sidebar = ({ isOpen }) => {
  return (
    <StyledSidebar showSidebar={isOpen}>
      <StyledLinks></StyledLinks>
    </StyledSidebar>
  )
}

export default Sidebar
