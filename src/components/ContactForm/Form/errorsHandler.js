export const errorsHandler = (error, errorField) => {
  switch (error.type) {
    case "required":
      return `${errorField} is required!`

    case "maxLength":
      return `${errorField} cannot be longer than 30 caracters`

    case "pattern":
      return `Please enter a valid ${errorField}`

    default:
      return `Invalid ${errorField}`
  }
}
