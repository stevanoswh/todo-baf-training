import React from 'react'

export default function TodoItem({todo, toggleTodo, deleteTodo}) {

    const completed = todo.completed ?  'completed' : '';


    return (
        <li className='todoItem'>
            <span
                className={ `todoText ${completed}`}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
    )
}
