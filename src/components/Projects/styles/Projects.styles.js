import styled from "styled-components"

export const StyledProjects = styled.section`
  padding: ${props => (props.paddign ? "5rem 0" : "10rem 0")};
  background-color: ${props => props.theme.gray4};
`
