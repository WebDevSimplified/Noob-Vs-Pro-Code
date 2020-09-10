import React, { useState } from "react"
import PropTypes from "prop-types"

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  function incrementCount() {
    setCount(count + 1)
    console.log(count)
  }

  function decrementCount() {
    setCount(count - 1)
    console.log(count)
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number
}

export default Counter
