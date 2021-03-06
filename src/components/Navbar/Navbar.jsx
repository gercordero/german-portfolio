import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.svg"
import { Link } from "gatsby"
import {
  StyledNav,
  StyledContainer,
  NavbarHeader,
  ToggleBtn,
  ToggleBtnBurger,
  StyledNavLinks,
} from "./styles/Navbar.styles"

const Navbar = ({ toggleSidebar, isOpen }) => {
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
    <StyledNav active={scrolled} sideBarOpen={isOpen}>
      <StyledContainer>
        <NavbarHeader>
          <Link to="/">
            <img src={logo} alt="Portfolio logo" />
          </Link>
        </NavbarHeader>
        <ToggleBtn type="button" onClick={toggleSidebar}>
          <ToggleBtnBurger sideBarOpen={isOpen} />
        </ToggleBtn>
        <StyledNavLinks />
      </StyledContainer>
    </StyledNav>
  )
}

export default Navbar
