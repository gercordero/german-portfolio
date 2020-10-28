import styled from "styled-components"
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

export const StyledLinks = styled(NavLinks)`
  display: flex;
  flex-direction: column;

  & li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.spacing};
    margin-bottom: 1rem;
    font-size: 2.2rem;
    padding: 1rem 2rem;
    transition: ${props => props.theme.transition};
    border-radius: ${props => props.theme.radius2};

    &:hover {
      background: ${props => props.theme.secondary};
      color: ${props => props.theme.white};
    }
  }
`
