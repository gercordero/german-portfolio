import styled from "styled-components"
import { Link } from "gatsby"

export const StyledProjects = styled.section`
  padding: ${props => (props.paddign ? "5rem 0" : "10rem 0")};
  background-color: ${props => props.theme.gray4};
`

export const ProjectsButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const ProjectsButton = styled(Link)`
  padding: 1rem 3rem;
  background-color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.radius2};
  color: ${props => props.theme.white};
  font-size: 1.25rem;
  font-weight: 700;

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.gray};
  }
`
