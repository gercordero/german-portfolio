import React, { useState, useEffect } from "react"
import InputText from "./InputText/InputText"
import { useForm } from "react-hook-form"
import { errorsHandler } from "./errorsHandler"
import { sendMessage } from "../../../api/index"
import {
  StyledForm,
  NameField,
  EmailField,
  MessageField,
  StatusField,
  SubmitInput,
} from "./styles/Form.styles"

const Form = () => {
  //State for controling form errors
  const [formState, setFormState] = useState({})
  //State to know if form is submitting
  const [isSubmitting, setIsSubmitting] = useState(false)

  // React form hook
  const { register, handleSubmit, watch, errors } = useForm()

  // Watch for changes on the fields
  const watchAllFields = watch()

  // Use Effect for enabling submit button after submit is done
  useEffect(() => {
    setIsSubmitting(false)
  }, [formState])

  // On form submit handle
  const onSubmit = async data => {
    setIsSubmitting(true)
    setFormState(await sendMessage(data))
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <NameField>
        <InputText
          label="Name"
          name="name"
          value={watchAllFields.name}
          ref={register({ required: true, maxLength: 20 })}
          error={
            (errors.name && errorsHandler(errors.name, "Name")) ||
            formState.name
          }
        />
      </NameField>
      {console.log(errors)}
      <EmailField>
        <InputText
          label="Email"
          name="email"
          type="email"
          value={watchAllFields.email}
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          error={
            (errors.email && errorsHandler(errors.email, "Email")) ||
            formState.email
          }
        />
      </EmailField>
      <MessageField>
        <InputText
          label="Write me a message..."
          name="message"
          value={watchAllFields.message}
          ref={register({ required: true })}
          error={
            (errors.message && errorsHandler(errors.message, "Message")) ||
            formState.message
          }
          textarea
        />
      </MessageField>
      <StatusField>{formState.status}</StatusField>
      <SubmitInput
        type="submit"
        name="submit"
        value="submit"
        disabled={isSubmitting}
      />
    </StyledForm>
  )
}

export default Form
