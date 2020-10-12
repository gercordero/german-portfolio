import React from "react"
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.twitter.com",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
