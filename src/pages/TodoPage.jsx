import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from '../services/todoService'

export default function TodoPage() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchTodos()
      setTodos(data)
    }

    fetch()

  }, [])

  const handleAddTodo = async (title) => {
    const newTodo = await addTodo(title)
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = async (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id)
    if (todoToUpdate){
      const updatedTodo = await toggleTodo(id, !todoToUpdate.completed)
      setTodos(todos.map(todo => 
        todo.id === id ?  updatedTodo : todo
      ))
    }
    
  }

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id)
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
