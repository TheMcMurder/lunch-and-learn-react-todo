import React, { PropTypes } from 'react'

const Todo = ({ todo }) => {
  return (
    <div>
      TODO Here
    </div>
  )
}

Todo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default Todo
