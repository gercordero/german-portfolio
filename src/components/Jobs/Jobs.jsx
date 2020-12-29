import React, { useState } from "react"
import { Title, Container } from "../"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import {
  JobsSection,
  JobsGrid,
  JobsButtons,
  JobButton,
  JobInfo,
  JobDate,
  JobDescription,
} from "./styles/Jobs.styles"

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
    <JobsSection>
      <Title>experience</Title>
      <Container>
        <JobsGrid>
          <JobsButtons>
            <h3>Companies</h3>
            {jobs.map((job, index) => (
              <JobButton
                key={job.strapiId}
                onClick={() => {
                  setSelectedJob(index)
                }}
                active={index === selectedJob}
              >
                {job.company}
              </JobButton>
            ))}
          </JobsButtons>
          <JobInfo>
            <h2>{position}</h2>
            <h5 className="btn-gray" style={{ marginBottom: "0.4rem" }}>
              {company}
            </h5>
            <JobDate>{date}</JobDate>
            {desc.map(item => (
              <JobDescription key={item.id}>
                <FaAngleDoubleRight />
                <p>{item.item}</p>
              </JobDescription>
            ))}
          </JobInfo>
        </JobsGrid>
      </Container>
    </JobsSection>
  )
}

export default Jobs
