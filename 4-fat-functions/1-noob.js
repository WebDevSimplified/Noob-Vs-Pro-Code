const { updateUser, createUser } = require('./api/users')

function saveUser(user) {
  const errors = []
  if (user.username) {
    if (user.username.length < 3) {
      errors.push("Username must be 3 or more characters")
    }
  } else {
    errors.push("Username is required")
  }

  if (user.password) {
    if (user.password.length < 8) {
      errors.push("Password must be 8 or more characters")
    }
  } else {
    errors.push("Password is required")
  }

  if (errors.length > 0) {
    errors.forEach(error => console.error(error))
    return
  }

  if (user.id == null) {
    console.log('Created User')
    createUser(user)
  } else {
    console.log('Updated User')
    updateUser(user)
  }
}

const user = {
  username: '',
  password: 'password'
}

saveUser(user)