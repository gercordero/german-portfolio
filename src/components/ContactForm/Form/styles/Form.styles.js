import styled from "styled-components"

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 3rem 3rem 10rem 3rem 3rem;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 1rem;
  font-size: 2rem;

  @media screen and (min-width: 1200px) {
    grid-template-rows: 3rem 3rem 10rem 3rem;
  }
`

//************** Field Styles *****************
export const NameField = styled.div`
  grid-row: 1/2;
  grid-column: 1 / -1;
`

export const EmailField = styled.div`
  grid-row: 2/3;
  grid-column: 1 / -1;
`

export const MessageField = styled.div`
  grid-row: 3/4;
  grid-column: 1/-1;
`

export const StatusField = styled.div`
  grid-row: 5/6;
  grid-column: 1/-1;
  text-align: center;
  color: ${props => (props.sent ? "green" : "red")};
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.8rem;

  @media screen and (min-width: 1200px) {
    grid-row: 4/5;
    grid-column: 9/-1;
    text-align: right;
  }
`

export const SubmitField = styled.div`
  grid-row: 4/5;
  grid-column: 2/12;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius2};
  background-color: ${props => props.theme.primary};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.primaryShade};
  }

  @media screen and (min-width: 1200px) {
    grid-column: 5/8;
  }
`

//************** Input Styles *****************
export const SubmitInput = styled.input`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: white;
  outline-color: ${props => props.theme.secondary};
`
