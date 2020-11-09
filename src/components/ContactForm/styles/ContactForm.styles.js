import styled from "styled-components"

export const ContactSection = styled.section`
  min-height: 90vh;
  padding-top: 10rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1200px) {
    padding-top: 15rem;
  }
`

export const ContactCenter = styled.div`
  border-radius: ${props => props.theme.radius2};
  box-shadow: ${props => props.theme.lightShadow};
  margin-bottom: 5rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

export const FormContainer = styled.article`
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius2};
  padding: 2rem;
  margin: 2rem 1rem;
  @media screen and (min-width: 1200px) {
    grid-column: 1/2;
  }
`

export const ContactInfo = styled.article`
  display: none;
  @media screen and (min-width: 1200px) {
    grid-column: 2/3;
    background-color: ${props => props.theme.secondary};
    border-radius: ${props => props.theme.radius2};
    margin: 1rem;
    display: grid;
    place-items: center;

    & > img {
      height: 5rem;
      width: 5rem;
    }
  }
`
