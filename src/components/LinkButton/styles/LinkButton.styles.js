import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const StyledLinkButton = styled(Link)`
  padding: 1rem 3rem;
  background-color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.radius2};
  color: ${props => props.theme.white};
  font-weight: 700;

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.gray};
  }

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }
`
