import React from "react"
import Project from "./Project/Project"
import { Title } from "../"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import "./styles/projects.scss"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Container>
        <Title>{title}</Title>
        {projects.map(project => (
          <Project key={project.strapiId} {...project} />
        ))}
        <div className="projects-button-container">
          {showLink && (
            <Link to="/projects/" className="button projects-button">
              all projects
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Projects
