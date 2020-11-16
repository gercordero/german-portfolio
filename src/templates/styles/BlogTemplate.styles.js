import styled from "styled-components"

export const BlogTemplateSection = styled.section`
  min-height: 100vh;
  padding: 10rem 0;
  background-color: ${props => props.theme.white};
`

export const BlogContent = styled.article`
  & h1 {
    font-size: 3rem;
    text-align: center;
  }

  & hr {
    margin-bottom: 5rem;
  }

  & p {
    font-size: 1.1rem;
  }

  & a {
    list-style: disc;
  }
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`

export const Line = styled.div`
  display: table-row;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

export const LineContent = styled.span`
  display: table-cell;
`
