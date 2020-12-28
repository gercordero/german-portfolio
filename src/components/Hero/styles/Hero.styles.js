import styled from "styled-components"
import SocialLinks from "../../../constants/socialLinks"

export const StyledHero = styled.header`
  min-height: 70vh;
  padding-top: 7.1rem;
  display: grid;
  place-items: center;
`

export const HeroCenter = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 1rem;
`

export const HeroInfo = styled.article`
  grid-column: 1/-1;
  text-align: center;

  & h2 {
    font-weight: 300;
    margin-top: 2rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1 / span 6;
    text-align: left;
    margin: auto 0;
  }
`

export const HeroImage = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    grid-column: 7 / span 12;
  }
`

/* Social Links */
export const StyledSocialLinks = styled(SocialLinks)`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;

  .social-link {
    font-size: 2.2rem;
    color: ${props => props.theme.gray};
    transition: ${props => props.theme.transition};

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }

  @media screen and (min-width: 992px) {
    justify-content: space-between;
    width: 20rem;
  }
`
