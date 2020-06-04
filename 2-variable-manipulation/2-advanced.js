const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

function calculateTotal(items, options = {}) {
  if (items == null || items.length === 0) return 0

  let total = 0
  items.forEach(item => {
    total += item.price * item.quantity
  })
  total = total - total * (options.discount || 0)
  total = total * TAX_RATE
  if (options.shipping !== 0) {
    total = total + (options.shipping || SHIPPING_DEFAULT)
  }
  return total
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 }
]

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
// console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: .75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))