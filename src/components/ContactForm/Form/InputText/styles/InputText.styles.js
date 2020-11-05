import styled from "styled-components"

export const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.2s ease;

  & > label {
    font-size: 1rem;
    top: 15px;
    position: absolute;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 1;

    ${props =>
      props.focused &&
      `
      font-size: 13px;
      transform: translateY(-23px) translateX(-5px);
      z-index: 501;
      background: white;
      padding: 0 8px;
    `}
  }

  & > input {
    height: 100%;
    border: 1px solid ${props => (props.error ? "#e77674" : "#eee")};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 1rem;
    transition: all 0.2s ease;
    z-index: 1;
  }

  & > textarea {
    height: 100%;
    border: 1px solid ${props => (props.error ? "#e77674" : "#eee")};
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 1rem;
    z-index: 1;
  }
`
