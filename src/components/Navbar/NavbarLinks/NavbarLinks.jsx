import React from "react"
import { Link } from "gatsby"
// Links data
import links from "../../../constants/links"

const NavbarLinks = ({ className }) => {
  return (
    <ul className={className}>
      {links.map(link => (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
