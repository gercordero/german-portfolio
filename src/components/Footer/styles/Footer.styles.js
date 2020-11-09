import styled from "styled-components"
import { Container } from "../../"
import SocialLinks from "../../../constants/socialLinks"

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.gray};
  margin-top: 4rem;
`

export const StyledContainer = styled(Container)`
  display: grid;
  place-items: center;
  padding: 1.3rem;

  & > h4 {
    margin-top: 1rem;
    text-align: center;
    color: ${props => props.theme.white};
  }

  & span {
    color: ${props => props.theme.secondary};
  }
`

export const FooterLinks = styled(SocialLinks)`
  display: flex;

  & > li > a {
    font-size: 2rem;
    color: ${props => props.theme.white};
    margin: 0 1rem;

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`
