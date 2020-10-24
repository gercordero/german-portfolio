import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.svg"
import { FaBars } from "react-icons/fa"
import {
  StyledNav,
  StyledContainer,
  NavbarHeader,
  ToggleBtn,
  StyledNavLinks,
} from "./styles/Navbar.styles"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  //Function to check if page is scrolled
  const onScroll = () => {
    if (window.scrollY >= 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  //Addign and removing event listeners
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <StyledNav active={scrolled}>
      <StyledContainer>
        <NavbarHeader>
          <img src={logo} alt="Portfolio logo" />
        </NavbarHeader>
        <ToggleBtn
          type="button"
          // onClick={toggleSidebar}
        >
          <FaBars />
        </ToggleBtn>
        <StyledNavLinks />
      </StyledContainer>
    </StyledNav>
  )
}

export default Navbar
