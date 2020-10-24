import styled from "styled-components"

export const StyledTitle = styled.div`
  text-align: center;

  h2 {
    color: ${props => props.theme.gray};
    text-transform: capitalize;
  }

  .title-underline {
    width: 8rem;
    height: 0.4rem;
    margin-bottom: 4rem;
    background: ${props => props.theme.primary};
    margin-left: auto;
    margin-right: auto;
  }
`
