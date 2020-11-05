export const errorsHandler = (error, errorField) => {
  if (error.type == "required") {
    return `${errorField} is required!`
  } else {
    return `Please enter a valid ${errorField}`
  }
}
