import styled from "styled-components"

export const JobsSection = styled.section`
  padding: 5rem 0;
`

export const JobsGrid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 2rem;
  }
`

export const JobsButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;

  & > h3 {
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px dotted ${props => props.theme.primary};
    height: 100%;

    & > h3 {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
  }
`

export const JobButton = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1.4rem;
  letter-spacing: ${props => props.theme.spacing};
  margin: 0 0.8rem;
  transition: ${props => props.theme.transition};
  padding: 0.4rem 0;
  line-height: 1;
  font-weight: 300;
  color: ${props => (props.active ? props.theme.primary : props.theme.gray)};
  box-shadow: ${props => (props.active ? `0 2px ${props.theme.primary}` : "")};

  &:hover {
    color: ${props => props.theme.primary};
    box-shadow: 0 2px ${props => props.theme.primary};
  }

  &:focus {
    outline-color: ${props => props.theme.secondary};
  }

  @media screen and (min-width: 768px) {
    box-shadow: ${props =>
      props.active ? `-4px 0 ${props.theme.primary}` : ""};

    &:hover {
      box-shadow: -4px 0 ${props => props.theme.primary};
    }
  }
`
export const JobInfo = styled.div`
  & > div > svg {
    color: ${props => props.theme.primary};
  }

  /* @media screen and (min-width: 992px) {
    border-right: 1px dotted var(--primary);
  } */
`

export const JobDate = styled.p`
  font-size: 1.1rem;
  letter-spacing: ${props => props.theme.spacing};
`

export const JobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.2rem;
  align-items: center;
  margin-bottom: 2rem;

  p {
    margin-bottom: 0;
  }
`
