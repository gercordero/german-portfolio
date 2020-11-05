import React from "react"
import Form from "./Form/Form"
import logo from "../../assets/logo-white.svg"
import { Title, Container } from "../"
import {
  ContactSection,
  ContactCenter,
  FormContainer,
  ContactInfo,
} from "./styles/ContactForm.styles"

const ContactForm = () => {
  return (
    <ContactSection>
      <Container>
        <Title>Contact</Title>
        <ContactCenter>
          <FormContainer>
            <Form />
          </FormContainer>
          <ContactInfo>
            <img src={logo} alt="logo" />
          </ContactInfo>
        </ContactCenter>
      </Container>
    </ContactSection>
  )
}

export default ContactForm
