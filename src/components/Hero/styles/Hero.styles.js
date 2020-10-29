import styled from "styled-components"
import { Link } from "gatsby"
import SocialLinks from "../../../constants/socialLinks"

export const StyledHero = styled.header`
  min-height: 100vh;
`

export const HeroGrid = styled.div`
  padding-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 100%;
  min-height: 100vh;

  @media screen and (min-height: 770px) {
    min-height: unset;
    height: 100vh;
    padding-top: 8rem;
    grid-template-rows: 95% 5%;
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: auto 540px auto;
  }

  @media screen and (min-width: 768px) and (min-height: 875px) {
    grid-template-columns: auto 720px auto;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: auto 960px auto;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto 1140px auto;
  }
`

export const HeroCenter = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 70% 30%;

  @media screen and (min-width: 576px) {
    grid-template-rows: 80% 20%;
  }
`

export const HeroInfo = styled.article`
  grid-column: 1 / -1;
  text-align: center;
  align-self: center;
  margin-top: 5rem;

  & h2 {
    font-weight: 300;
  }

  @media screen and (min-width: 768px) and (min-height: 875px) {
    grid-column: 1 / span 6;
    align-self: center;
    text-align: left;
  }
`

export const HeroImage = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (min-height: 875px) {
    display: block;
    grid-row: 1/2;
    grid-column: 7 / span 12;
    align-self: center;
  }
`

export const HeroImageFooter = styled.div`
  text-align: center;
  grid-row: 2/3;
  grid-column: 1 / span 12;
  margin-bottom: -6px;
  align-self: end;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 576px) {
    align-self: unset;
    margin-bottom: -1px;
  }
`

export const HeroFooter = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  background-color: ${props => props.theme.primary};
`

export const HeroButton = styled(Link)`
  background: ${props => props.theme.white};
  color: ${props => props.theme.primary};
  padding: 0.6rem 0.6rem;
  display: inline-block;
  font-weight: 700;
  font-size: 1.3rem;
  border: 4px solid ${props => props.theme.primary};
  border-radius: ${props => props.theme.radius};
  margin-top: 4rem;

  &:hover {
    color: ${props => props.theme.secondary};
    border-color: ${props => props.theme.secondary};
  }
`

/* Social Links */
export const StyledSocialLinks = styled(SocialLinks)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;

  .social-link {
    font-size: 2.2rem;
    color: ${props => props.theme.gray};
    transition: ${props => props.theme.transition};

    &:hover {
      color: ${props => props.theme.secondary};
    }
  }

  @media screen and (min-width: 768px) and (min-height: 875px) {
    margin-top: 3.2rem;
    width: 20rem;
    justify-content: space-between;
  }
`
