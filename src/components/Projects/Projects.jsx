import React from "react"
import Project from "./Project/Project"
import { Title, Container, LinkButton } from "../"
import { StyledProjects } from "./styles/Projects.styles"

const Projects = ({ projects, title, isMainPage }) => {
  return (
    <StyledProjects isMainPage={isMainPage}>
      <Container>
        <Title>{title}</Title>
        {projects.map(project => (
          <Project key={project.strapiId} {...project} />
        ))}
        {isMainPage && <LinkButton to="/projects/">all projects</LinkButton>}
      </Container>
    </StyledProjects>
  )
}

export default Projects
