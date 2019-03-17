export const getErrorMessageClient = (error, labelInput) => {
  let errorCode = error

  switch (errorCode) {
    case 'required':
      return `Please enter ${labelInput}`

    default:
      return error
  }
}
