import styled from "styled-components"

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 3rem 3rem 10rem 3rem;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 1rem;
  font-size: 2rem;

  /* @media screen and (min-width: 768px) {
    grid-template-rows: 3rem 20rem 3rem;
    grid-gap: 2rem;
  } */
`

//************** Field Styles *****************
export const NameField = styled.div`
  grid-row: 1/2;
  grid-column: 1 / -1;

  /* @media screen and (min-width: 768px) {
    grid-column: 1 / 6;
  } */
`

export const EmailField = styled.div`
  grid-row: 2/3;
  grid-column: 1 / -1;

  /* @media screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 6 / -1;
  } */
`

export const MessageField = styled.div`
  grid-row: 3/4;
  grid-column: 1/-1;

  /* @media screen and (min-width: 768px) {
    grid-row: 2/3;
  } */
`

export const StatusField = styled.div``

export const SubmitInput = styled.input`
  grid-row: 4/5;
  grid-column: 5/8;
  text-transform: capitalize;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius2};
  background-color: ${props => props.theme.primary};

  /* @media screen and (min-width: 768px) {
    grid-row: 3/4;
    grid-column: 1/4;
  } */
`
