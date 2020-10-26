import styled from "styled-components"
import { Title } from "../../"

export const BlogsSection = styled.section`
  min-height: ${props => (props.isMainPage ? "" : "100vh")};
  padding: ${props => (props.isMainPage ? "5rem 0" : "10rem 0")};
  background-color: ${props => props.theme.white};
`

export const StyledTitle = styled(props => <Title {...props} />)`
  & .title-underline {
    width: ${props => (props.isMainPage ? "" : "4rem !important")};
  }
`

export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(348px, 1fr));
  column-gap: 2rem;
  margin-bottom: 2rem;
`
