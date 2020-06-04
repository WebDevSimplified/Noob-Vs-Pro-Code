function createUser(user) {
  return {
    ...user,
    id: Date.now(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

function updateUser(user) {
  return {
    ...user,
    updatedAt: new Date()
  }
}

module.exports = { createUser, updateUser }