import React, { useState, useEffect } from "react"
import logo from "../../assets/logo.svg"
import { FaBars } from "react-icons/fa"
import NavLinks from "../../constants/links"
import Container from "react-bootstrap/Container"
import "./styles/navbar.scss"

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

  //Add/Remove active style to nav depending on scrollY position
  const navActive = scrolled ? "navbar-active" : ""

  return (
    <nav className={`navbar ${navActive}`}>
      <Container>
        <div className="navbar-header">
          <img src={logo} alt="Portfolio logo" />
        </div>
        <button
          type="button"
          className="toggle-btn"
          // onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <NavLinks styleClass="nav-links" />
      </Container>
    </nav>
  )
}

export default Navbar
