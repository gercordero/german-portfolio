import styled from "styled-components"
import { Container } from "../../"
import NavLinks from "../../../constants/links"

export const StyledNav = styled.nav`
  width: 100vw;
  padding: 1rem 0;
  position: fixed;
  z-index: 100;

  //Active on scroll
  background-color: ${props => (props.active ? props.theme.white : "")};
  box-shadow: ${props => (props.active ? "0px 2px rgba(0, 0, 0, 0.1)" : "")};
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const NavbarHeader = styled.div`
  img {
    width: 10rem;
  }

  @media screen and (min-width: 992px) {
    flex: 1 1 1rem;
    width: 12rem;
  }
`

export const ToggleBtn = styled.button`
  margin-top: 1rem;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  outline-color: ${props => props.theme.secondary};

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const StyledNavLinks = styled(NavLinks)`
  display: none;

  li {
    margin: 0.5rem 0;
  }

  a {
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media screen and (min-width: 992px) {
    margin-top: 2rem;
    flex: 1 1 1rem;
    display: flex;
    justify-content: center;

    a {
      margin: 2rem;
      font-size: 1.25rem;
      transition: ${props => props.theme.transition};

      &:hover {
        color: ${props => props.theme.primary};
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.primary};
      }
    }
  }
`
