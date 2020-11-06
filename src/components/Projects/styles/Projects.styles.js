import styled from "styled-components"

export const StyledProjects = styled.section`
  min-height: ${props => (props.isMainPage ? "" : "100vh")};
  padding: ${props => (props.isMainPage ? "5rem 0" : "10rem 0")};
  background-color: ${props =>
    props.isMainPage ? props.theme.gray4 : props.theme.white};

  @media screen and (min-width: 1200px) {
    padding: ${props => (props.isMainPage ? "5rem 0" : "15rem 0")};
  }
`
