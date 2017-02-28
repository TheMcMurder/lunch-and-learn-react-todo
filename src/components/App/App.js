import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './App.css'
import Todo from '../Todo'
import { v4 } from 'node-uuid'

class App extends Component {
  render () {
    const Todos = [
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
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          {Todos.map((todo) => {
            return (
              <Todo key={todo.id} todo={todo} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
