import React from "react"
import styled from "styled-components"
import { Title } from "../../"

export const MethodologiesSection = styled.section`
  z-index: 1;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234ebb90' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -1px;
    right: 0;
    left: 0;
    bottom: 60%;
    background: ${props => props.theme.primary};
  }

  @media screen and (min-height: 736px) {
    padding-top: 0;
  }
`

export const StyledTitle = styled(props => <Title {...props} />)`
  h2 {
    color: ${props => props.theme.white} !important;
  }

  .title-underline {
    margin-bottom: 2rem !important;
    background: ${props => props.theme.white} !important;
  }
`

export const StyledMethodologies = styled.div`
  z-index: 4;
  background-color: ${props => props.theme.white};
  border: 1px solid #dee2e6;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Methodologie = styled.div`
  flex: 1 1 1rem;
  padding: 2rem 1rem;
  text-align: center;
  color: ${props => props.theme.gray};

  & h4 {
    font-weight: 700;
  }

  & svg {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.primary};
  }

  &:hover svg {
    color: ${props => props.theme.secondary};
  }
`
