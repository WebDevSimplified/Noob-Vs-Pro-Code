function validationMessages(validations, object) {
  return Object.entries(validations).reduce((errors, [property, requirements]) => {
    errors[property] = []
    if (requirements.required) {
      const errorMessage = validateRequiredMessage(object[property])
      if (errorMessage) errors[property].push(errorMessage)
    }

    if (requirements.length) {
      const errorMessage = validateLengthMessage(object[property], requirements.length)
      if (errorMessage) errors[property].push(errorMessage)
    }

    return errors
  }, {})
}

function validateLengthMessage(value, length) {
  if (value == null) return
  if (value.length >= length) return

  return `must be ${length} or more characters` 
}

function validateRequiredMessage(value) {
  if (value) return

  return 'is required' 
}

function printErrors(errors) {
  Object.entries(errors).forEach(([property, messages]) => {
    messages.forEach(message => {
      console.error(`${property} ${message}`)
    })
  })
}

module.exports = {
  validationMessages,
  printErrors
}