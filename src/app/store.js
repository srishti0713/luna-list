import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { replaceTodos } from "../features/todoSlice";

const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
store.dispatch(replaceTodos(savedTodos));

store.subscribe(() => {
	const state = store.getState();
	localStorage.setItem("todos", JSON.stringify(state.todo.todos));
});

export default store;
