import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function TodoPage() {

  const [todos, setTodos] = useState([])

  const handleAddTodo = (title) => {
    const newTodo = {
      id: todos.length ? todos[todos.length -  1].id + 1 : 1,
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      // console.log(todo.id, id)
      todo.id === id ?  { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id  !== id))
  }

  return (
    <div className='container'>
        <h1 className='header'>Todo Page</h1>
        <TodoForm addTodo={handleAddTodo}/>
        <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
    </div>
  )
}
