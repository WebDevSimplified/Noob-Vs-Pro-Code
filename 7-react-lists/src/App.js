import React from "react"
import Noob from "./1-noob/Todos"
import Advanced from "./2-advanced/Todos"
import Pro from "./3-pro/Todos"

export default function App() {
  const initialTodos = [
    {
      id: 1,
      complete: false,
      name: "Do Laundry"
    },
    {
      id: 2,
      complete: true,
      name: "Wash Dishes"
    },
    {
      id: 3,
      complete: false,
      name: "Record This Video"
    }
  ]
  return (
    <>
      {/* <Noob initialTodos={initialTodos} /> */}
      {/* <Advanced initialTodos={initialTodos} /> */}
      <Pro initialTodos={initialTodos} />
    </>
  )
}
