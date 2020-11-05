import React, { forwardRef, useState } from "react"
import { InputContainer } from "./styles/InputText.styles"
/**
 * A Plaid-inspired custom input component
 *
 * @param {string} name - the name of the controlled input
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {string} error - the value of the error message
 * @param {boolean} textarea - boolean to change from input to textarea
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {reference} ref - reference used to add this input as a ref for a parent component
 */

const InputText = forwardRef(
  (
    { name, value, type, label, error, textarea, onFocus, onBlur, ...props },
    ref
  ) => {
    const [focused, setFocused] = useState(false)

    const handleOnFocus = () => {
      setFocused(true)
      onFocus()
    }

    const handleOnBlur = () => {
      setFocused(false)
      onBlur()
    }

    const renderLabel = error =>
      error ? label && <label>{error}</label> : label && <label>{label}</label>

    const isFocused = focused || value.length

    return (
      <InputContainer focused={isFocused} error={error}>
        {renderLabel(error)}
        {!textarea ? (
          <input
            name={name}
            type={type}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={ref}
            {...props}
          />
        ) : (
          <textarea
            name={name}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={ref}
            {...props}
          />
        )}
      </InputContainer>
    )
  }
)

InputText.defaultProps = {
  type: "text",
  label: "",
  value: "",
  onFocus: () => {},
  onBlur: () => {},
}

export default InputText
