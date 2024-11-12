import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, toggleTodoThunk } from '../redux/slices/todoSlice'


export default function TodoPage() {
  const dispatch = useDispatch()
  const {items: todos} = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [])

  const handleAddTodo = (title) => {
    dispatch(addTodoThunk(title))
  }

  const handleToggleTodo = async (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id)
    dispatch(toggleTodoThunk({id, completed: !todoToUpdate.completed}))
  }

  const handleDeleteTodo =  (id) => {
    dispatch(deleteTodoThunk(id))
    console.log("delete todo", id)
  }

  return (
    <div className='container'>
        <h1 className='header'>Todo Page</h1>
        <TodoForm addTodo={handleAddTodo}/>
        <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
    </div>
  )
}
