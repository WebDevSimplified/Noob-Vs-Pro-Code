import React from "react"
import Noob from "./1-noob/User"
import Advanced from "./2-advanced/User"
import Pro from "./3-pro/User"

export default function App() {
  return (
    <>
      <Noob age={25} />
      <Advanced age={25} />
      <Pro age={25} />
    </>
  )
}
