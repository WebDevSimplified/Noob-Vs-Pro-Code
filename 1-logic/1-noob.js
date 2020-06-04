function toAccounting(n) {
  if (n < 0) {
    return '(' + Math.abs(n) + ')'
  } else {
    return n.toString()
  }
}

console.log(toAccounting(undefined))
console.log(toAccounting(0))
console.log(toAccounting(10))
console.log(toAccounting(-5))