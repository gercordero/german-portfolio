import React from "react"
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/ger.cordero/",
  },
  {
    id: 2,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com/ger.cordero/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/german-cordero/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/gercordero",
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

export default ({ className }) => {
  return <ul className={className}>{links}</ul>
}
