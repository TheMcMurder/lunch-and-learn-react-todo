import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './App.css'
import { v4 } from 'node-uuid'
import TodoList from '../TodoList'
import { findIndex } from 'lodash'

class App extends Component {

  onTodoClick = (event) => {
    event.preventDefault()
    const todoId = event.target.id
    const todoIndex = findIndex(this.state.todos, {id: todoId})
    const todo = this.state.todos[todoIndex]
    const newTodos = [
      ...this.state.todos.slice(0, todoIndex),
      {
        ...todo,
        completed: !todo.completed
      },
      ...this.state.todos.slice(todoIndex + 1),
    ]
    this.setState(prevState => ({
      todos: newTodos
    }))
  }

  state = {
    todos: [
      {
        id: v4(),
        name: 'Learn React',
        completed: false
      },
      {
        id: v4(),
        name: 'Do something awesome',
        completed: true
      },
      {
        id: v4(),
        name: 'Eat Pizza',
        completed: false
      },
    ]
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList todos={this.state.todos} onTodoClick={this.onTodoClick}/>
      </div>
    )
  }
}

export default App
