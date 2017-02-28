import React, { PropTypes } from 'react'
import Todo from '../Todo'

const TodoList = ({todos}) => {
  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} />
        )
      })}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList
