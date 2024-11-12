import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, fetchTodos, toggleTodo, deleteTodo } from "../../services/todoService";

export const fetchTodosThunk = createAsyncThunk('todos/fetchTodos', async () => {
    return await fetchTodos()
})

export const addTodoThunk = createAsyncThunk('todos/addTodo', async (title) => {
    return await addTodo(title)
})

export const toggleTodoThunk = createAsyncThunk('todos/toggleTodo', async ({id, completed}) => {
    return await toggleTodo(id, completed)
})

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async (id) => {
    await deleteTodo(id)
    return id
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading : false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchTodosThunk.pending,(state) => {
                state.loading = true
            })
            .addCase(fetchTodosThunk.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchTodosThunk.rejected, (state, action) => {
                state.loading = false
                state.error = "Failed to fetch todos"
            })
            .addCase(addTodoThunk.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addCase(toggleTodoThunk.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    state.items[index] = action.payload
                }
            })
            .addCase(deleteTodoThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload)
            })
    }
})

export default todoSlice.reducer