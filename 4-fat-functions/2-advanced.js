const { updateUser, createUser } = require('./api/users')

function saveUser(user) {
  if (user.id == null) {
    console.log('Created User')
    createUser(user)
  } else {
    console.log('Updated User')
    updateUser(user)
  }
}

function validateUser(user) {
  return [
    ...validateUsername(user.username),
    ...validatePassword(user.password)
  ]
}

function validateUsername(username) {
  const errors = []
  if (!username) errors.push('Username is required')
  if (username != null && username.length < 3) errors.push('Username must be 3 or more characters')
  return errors
}

function validatePassword(password) {
  const errors = []
  if (!password) errors.push('Password is required')
  if (password != null && password.length < 8) errors.push('Password must be 8 or more characters')
  return errors
}

const user = {
  username: 'WDS',
  password: 'password'
}

const errors = validateUser(user)
if (errors.length > 0) {
  errors.forEach(error => console.error(error))
  return
}

saveUser(user)
