import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import {
  StyledProject,
  ProjectImage,
  ProjectInfo,
  ProjectNumber,
  ProjectDescription,
  ProjectStack,
  ProjectLinks,
} from "./styles/Project.styles"
import styles from "./styles/project.module.css"

const Project = ({ index, title, description, image, github, url, stack }) => {
  return (
    <StyledProject>
      {image && <ProjectImage fluid={image.childImageSharp.fluid} />}
      <ProjectInfo>
        <ProjectNumber>0{index}.</ProjectNumber>
        <h3>{title || "default title"}</h3>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {stack.map(element => (
            <span key={element.id} className="btn-gray">
              {element.item}
            </span>
          ))}
        </ProjectStack>
        <ProjectLinks>
          <a
            href={github}
            title="Github Repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className={styles.projectIcon} />
          </a>
          <a
            href={url}
            title="Go to project page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShareSquare className={styles.projectIcon} />
          </a>
        </ProjectLinks>
      </ProjectInfo>
    </StyledProject>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
