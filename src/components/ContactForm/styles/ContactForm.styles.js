import styled from "styled-components"

export const ContactSection = styled.section`
  min-height: 100vh;
  padding-top: 15rem;
`

export const ContactCenter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: ${props => props.theme.radius2};
  box-shadow: ${props => props.theme.lightShadow};
  margin-bottom: 5rem;
`

export const FormContainer = styled.article`
  grid-column: 1/2;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius2};
  padding: 2rem;
  margin: 2rem 1rem;
`

export const ContactInfo = styled.article`
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
`
