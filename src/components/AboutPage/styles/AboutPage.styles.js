import React from "react"
import styled from "styled-components"
import { Title } from "../../"

export const AboutSection = styled.div`
  min-height: calc(100vh - 14rem);
  padding: ${props => (props.isMainPage ? "5rem 0" : "10rem 0")};

  @media screen and (min-width: 1200px) {
    padding: ${props => (props.isMainPage ? "5rem 0" : "15rem 0")};
  }
`

export const AboutGrid = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 5rem;
    place-items: center;
  }
`

export const AboutImage = styled.div`
  width: 15rem;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 20rem;
  }

  @media screen and (min-width: 576px) {
    width: 25rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1/6;
    place-items: center;
    margin: unset;
  }
`

export const AboutInfo = styled.div`
  text-align: center;

  & > p {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 6/-1;
    text-align: left;
    margin: auto;
  }
`

export const AboutStack = styled.div`
  margin-bottom: 1.6rem;

  span {
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    margin-left: 0;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;

  @media screen and (min-width: 992px) {
    text-align: left;
  }
`

export const ResumeButton = styled.a`
  background: ${props => props.theme.white};
  color: ${props => props.theme.primary};
  margin-right: 1rem;
  padding: 0.6rem 0.6rem;
  display: inline-block;
  font-weight: 700;
  font-size: 1.3rem;
  border: 3px solid ${props => props.theme.primary};
  border-radius: ${props => props.theme.radius};

  &:hover {
    color: ${props => props.theme.secondary};
    border-color: ${props => props.theme.secondary};
  }
`

export const StyledTitle = styled(props => <Title {...props} />)`
  margin-top: 2rem;

  & .title-underline {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    text-align: left;

    & .title-underline {
      margin-left: unset;
    }
  }
`
