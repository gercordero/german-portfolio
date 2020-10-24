import React from "react"
import Project from "./Project/Project"
import { Title, Container } from "../"
import {
  StyledProjects,
  ProjectsButtonContainer,
  ProjectsButton,
} from "./styles/Projects.styles"

const Projects = ({ projects, title, showLink }) => {
  return (
    <StyledProjects>
      <Container>
        <Title>{title}</Title>
        {projects.map(project => (
          <Project key={project.strapiId} {...project} />
        ))}
        <ProjectsButtonContainer className="button">
          {showLink && (
            <ProjectsButton to="/projects/">all projects</ProjectsButton>
          )}
        </ProjectsButtonContainer>
      </Container>
    </StyledProjects>
  )
}

export default Projects
