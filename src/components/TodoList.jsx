import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo}) {
  console.log(todos)
  return (
      <ul className='todoList'>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}

            />
          ))}
      </ul>
  )
}
