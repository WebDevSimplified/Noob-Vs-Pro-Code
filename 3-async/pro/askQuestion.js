const readline = require('readline')

function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    readlineInterface.question(question, answer => {
      resolve(answer)
      readlineInterface.close()
    })
  })
}

module.exports = askQuestion