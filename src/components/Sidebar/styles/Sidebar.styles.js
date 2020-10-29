import styled, { keyframes } from "styled-components"
import NavLinks from "../../../constants/links"

export const StyledSidebar = styled.div`
  background: ${props => props.theme.gray4};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: grid;
  place-items: center;
  transition: var(--transition);
  opacity: ${props => (props.showSidebar ? 1 : 0)};
  transform: translateX(${props => (props.showSidebar ? `0` : `-100%`)});
`

const slideRight = keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const StyledLinks = styled(NavLinks)`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  & li a {
    display: block;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.spacing};
    margin-bottom: 1rem;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    transition: ${props => props.theme.transition};
    border-radius: ${props => props.theme.radius2};

    &:hover {
      background: ${props => props.theme.secondary};
      color: ${props => props.theme.white};
    }
  }

  /* Li animations */
  & li {
    opacity: 0;
    animation-name: ${props => (props.showLinks ? slideRight : "")};
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }

  & li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  & li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  & li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  & li:nth-of-type(4) {
    animation-delay: 1s;
  }
  & li:nth-of-type(5) {
    animation-delay: 1.25s;
  }

  @media screen and (min-width: 576px) {
    margin-top: 0;

    & li a {
      font-size: 2.2rem;
    }
  }
`
