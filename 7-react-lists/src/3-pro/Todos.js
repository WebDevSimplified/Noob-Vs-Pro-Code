import React, { useState } from "react"
import PropTypes from "prop-types"
import Todo from "./Todo"

function Todos({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos)
  const [selectedTodoId, setSelectedTodoId] = useState()
  const selectedTodo = todos.find(todo => todo.id === selectedTodoId)

  function handleToggleComplete(todoId) {
    setTodos(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    })
  }

  return (
    <>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={setSelectedTodoId}
        />
      ))}
      <h3>Selected Todo</h3>
      {selectedTodo && (
        <Todo
          todo={selectedTodo}
          handleSelect={setSelectedTodoId}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  )
}

Todos.propTypes = {
  initialTodos: PropTypes.array
}

export default Todos
