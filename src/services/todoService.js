const API_URL = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = async () => {
    const response  = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch todos')
    const data = await response.json()
    return data.slice(0, 5)
}

export const addTodo = async (title) => {
    const response = await fetch(API_URL, {
      method : 'POST',
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1
      }),
      headers: {
        'Content-type' : 'application/json'
      }
    })
    if (!response.ok) throw new Error('Failed to add todo')
    const data = await response.json()
    return data
}

export const toggleTodo = async (id, completed) => {
    const response = fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-type': 'application/json'
        },
    })
    if (!response.ok) throw new Error('Failed to toggle todo')
    const updateTodo = await response.json()
    return updateTodo
}

export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete todo')
}
