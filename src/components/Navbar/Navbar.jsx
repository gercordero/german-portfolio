import React from "react"
import logo from "../../assets/logo.svg"
import { FaBars } from "react-icons/fa"
import NavLinks from "../../constants/links"
import { Container } from "react-bootstrap"
import "./styles/navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
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
