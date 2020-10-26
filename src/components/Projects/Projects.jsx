import React from "react"
import Project from "./Project/Project"
import { Title, Container, LinkButton } from "../"
import { StyledProjects } from "./styles/Projects.styles"

const Projects = ({ projects, title, showLink }) => {
  return (
    <StyledProjects paddign={showLink}>
      <Container>
        <Title>{title}</Title>
        {projects.map(project => (
          <Project key={project.strapiId} {...project} />
        ))}
        {showLink && <LinkButton to="/projects/">all projects</LinkButton>}
      </Container>
    </StyledProjects>
  )
}

export default Projects
