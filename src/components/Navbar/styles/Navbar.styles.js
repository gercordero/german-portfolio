import styled from "styled-components"
import { Container } from "../../"
import NavLinks from "../../../constants/links"

export const StyledNav = styled.nav`
  width: 100vw;
  padding: 1rem 0;
  position: fixed;
  z-index: 100;

  //Active on scroll
  background-color: ${props =>
    props.active && !props.sideBarOpen ? props.theme.white : ""};
  box-shadow: ${props =>
    props.active && !props.sideBarOpen ? "0px 2px rgba(0, 0, 0, 0.1)" : ""};
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

export const ToggleBtn = styled.div`
  margin-top: 0.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const ToggleBtnBurger = styled.div`
  width: 50px;
  height: 6px;
  border-radius: 5px;
  background: ${props =>
    props.sideBarOpen ? "transparent" : props.theme.primary};
  transition: all 0.5s ease-in-out;
  transform: ${props => (props.sideBarOpen ? "translateX(-50px)" : "")};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    border-radius: 5px;
    background: ${props => props.theme.primary};
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: ${props =>
      props.sideBarOpen
        ? "rotate(45deg) translate(35px, -35px)"
        : "translateY(-16px)"};
  }

  &::after {
    transform: ${props =>
      props.sideBarOpen
        ? "rotate(-45deg) translate(35px, 35px)"
        : "translateY(16px)"};
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
