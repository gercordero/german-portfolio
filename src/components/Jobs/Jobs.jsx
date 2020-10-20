import React, { useState } from "react"
import { Title } from "../"
import { FaAngleDoubleRight } from "react-icons/fa"
import Container from "react-bootstrap/Container"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "./styles/jobs.scss"

const jobsQuery = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        position
        date
        company
        desc {
          id
          item
        }
      }
    }
  }
`

const Jobs = () => {
  //Get jobs from strapi with graphql
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(jobsQuery)

  //Set an state for jobs selection
  const [selectedJob, setSelectedJob] = useState(0)
  const { position, company, date, desc } = jobs[selectedJob]

  return (
    <section className="section">
      <Title>experience</Title>
      <Container>
        <div className="jobs-grid">
          <div className="jobs-btns">
            {jobs.map((job, index) => (
              <button
                key={job.strapiId}
                onClick={() => {
                  setSelectedJob(index)
                }}
                className={`button job-button ${
                  index === selectedJob && "job-active-button"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="job-info">
            <h2>{position}</h2>
            <h5 className="btn-gray">{company}</h5>
            <p className="job-date">{date}</p>
            {desc.map(item => (
              <div key={item.id} className="job-description">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Jobs
