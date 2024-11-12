import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './slice/todoSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})