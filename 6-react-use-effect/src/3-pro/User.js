import React, { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"

function User({ age }) {
  const [name, setName] = useState("")
  const [dark, setDark] = useState(false)
  const user = useMemo(() => {
    return { age, name }
  }, [name, age])
  const buttonStyle = {
    backgroundColor: dark ? "#000" : "initial",
    color: dark ? "#FFF" : "initial"
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark(currDark => !currDark)}
      >
        Toggle Theme
      </button>
    </div>
  )
}

User.propTypes = {
  age: PropTypes.number
}

export default User
