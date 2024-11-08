import React from 'react'

export default function TodoItem({todo, toggleTodo}) {


    return (
        <li className='todoItem'>
            <span
                className={ `todoText ${todo.completed}` ?  'completed' : ''}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.title}
            </span>
            <button>delete</button>
        </li>
    )
}
