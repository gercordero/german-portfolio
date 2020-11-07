import styled from "styled-components"
import SocialLinks from "../../../constants/socialLinks"

export const StyledFooter = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;

  & h4 {
    margin-top: 0.8rem;
    color: ${props => props.theme.white};
    font-weight: normal;
    text-transform: uppercase;
  }

  & span {
    color: ${props => props.theme.secondary};
  }

  @media screen and (min-width: 388px) {
    height: 10vh;
  }
`

export const FooterLinks = styled(SocialLinks)`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;

  & .social-link {
    color: ${props => props.theme.white};
    margin: 0 1rem;
    margin-top: 2rem;
  }

  & .social-link:hover {
    color: ${props => props.theme.secondary};
  }
`
