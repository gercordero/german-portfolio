import styled from "styled-components"

export const StyledProjects = styled.section`
  min-height: ${props => (props.isMainPage ? "" : "100vh")};
  padding: ${props => (props.isMainPage ? "5rem 0" : "10rem 0")};
  background-color: ${props => props.theme.gray4};
`
