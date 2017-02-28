import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './App.css'
import { v4 } from 'node-uuid'
import TodoList from '../TodoList'

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
    console.log('Todos', Todos)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList todos={Todos}/>
      </div>
    )
  }
}

export default App
