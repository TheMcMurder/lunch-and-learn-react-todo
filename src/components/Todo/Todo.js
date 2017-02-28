import React, { PropTypes } from 'react'
import classnames from 'classnames'
import './Todo.css'


const Todo = ({ todo }) => {
  const todoClasses = classnames(
    'panel',
    'panel-default',
    {
      'complete': todo.completed,
    }
  )
  return (
    <div className={todoClasses}>
      <div className="panel-body">
        {todo.name}
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
}

export default Todo
