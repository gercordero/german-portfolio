import styled from "styled-components"
import SidebarLinks from "../SidebarLinks/SidebarLinks"
import { motion } from "framer-motion"

export const StyledSidebar = styled(motion.div)`
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
`

export const StyledLinks = styled(SidebarLinks)`
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
    border-radius: ${props => props.theme.radius2};

    &:hover {
      background: ${props => props.theme.secondary};
      color: ${props => props.theme.white};
    }
  }

  @media screen and (min-width: 576px) {
    margin-top: 0;

    & li a {
      font-size: 2.2rem;
    }
  }
`
