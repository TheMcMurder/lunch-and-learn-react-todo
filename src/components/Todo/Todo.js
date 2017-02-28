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
  id: PropTypes.string,
  name: PropTypes.string,
  completed: PropTypes.bool
}

export default Todo
