import React from "react"
import { Link } from "gatsby"
// Links data
import links from "../../../constants/links"
// Framer motion
import { motion } from "framer-motion"

// Animations for sidebar links
const variants = {
  initial: { x: -100, opacity: 0 },
  popUp: custom => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: custom / 5,
      },
    }
  },
}

const SidebarLinks = ({ className, toggleSidebar }) => {
  return (
    <ul className={className}>
      {links.map(link => (
        <motion.li
          custom={link.id}
          key={link.id}
          initial="initial"
          animate={"popUp"}
          variants={variants}
        >
          <Link to={link.url} onClick={toggleSidebar} onKeyDown={toggleSidebar}>
            {link.text}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

export default SidebarLinks
