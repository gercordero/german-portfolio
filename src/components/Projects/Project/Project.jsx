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
} from "./styles/Project.styles"
import styles from "./styles/project.module.css"

const Project = ({
  strapiId,
  title,
  description,
  image,
  github,
  url,
  stack,
}) => {
  return (
    <StyledProject>
      {image && <ProjectImage fluid={image.childImageSharp.fluid} />}
      <ProjectInfo>
        <ProjectNumber>0{strapiId}.</ProjectNumber>
        <h3>{title || "default title"}</h3>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {stack.map(element => (
            <span key={element.id} className="btn-gray">
              {element.item}
            </span>
          ))}
        </ProjectStack>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className={styles.projectIcon} />
          </a>
          <a href={url}>
            <FaShareSquare className={styles.projectIcon} />
          </a>
        </div>
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
}

export default Project
