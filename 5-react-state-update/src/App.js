import React from "react"
import Noob from "./1-noob/Counter"
import Advanced from "./2-advanced/Counter"
import Pro from "./3-pro/Counter"

export default function App() {
  return (
    <>
      <Noob initialCount={1} />
      <Advanced initialCount={1} />
      <Pro initialCount={1} />
    </>
  )
}
