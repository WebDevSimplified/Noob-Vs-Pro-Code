const readline = require('readline')
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readlineInterface.question("What is your name? ", name => {
  readlineInterface.question("What is your job? ", job => {
    readlineInterface.question("How old are you? ", age => {
      console.log("Hello " + name + ". You are a " + age + " year old " + job + ".")
      readlineInterface.close()
    })
  })
})