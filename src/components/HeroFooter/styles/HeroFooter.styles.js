import styled from "styled-components"

export const HeroFooterSection = styled.div`
  min-height: 30vh;
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 80% 20%;
`

export const HeroFooterImage = styled.div`
  grid-row: 1/2;
  text-align: center;
  align-self: flex-end;

  & img {
    width: 12rem;
    margin-bottom: -6px;

    @media screen and (min-width: 344px) {
      width: 20rem;
    }

    @media screen and (min-width: 576px) {
      width: 27rem;
    }
  }
`

export const HeroFooterBottom = styled.div`
  grid-row: 2/3;
  background-color: ${props => props.theme.primary};
`
