import styled from "styled-components"
import { Container } from "../../"
import SocialLinks from "../../../constants/socialLinks"

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.gray};
  display: grid;
  place-items: center;
  margin-top: 5rem;

  @media screen and (min-width: 333px) {
    height: 9rem;
  }
`

export const StyledContainer = styled(Container)`
  display: grid;
  row-gap: 1rem;
  place-items: center;
  text-align: center;
  margin-bottom: 1rem;

  & h4 {
    color: ${props => props.theme.white};
    margin-bottom: 0;
  }

  & span {
    color: ${props => props.theme.secondary};
  }
`

export const FooterLinks = styled(SocialLinks)`
  display: flex;
  margin-top: 1rem;

  & > li > a {
    color: ${props => props.theme.white};
    font-size: 2rem;
    margin: 0 1rem;

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`
