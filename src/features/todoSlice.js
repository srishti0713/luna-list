import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			if (!action.payload.text) return;
			const todo = {
				id: Date.now(),
				text: action.payload.text,
				time: action.payload.time,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		},
		checkTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		},
		replaceTodos: (state, action) => {
			state.todos = action.payload;
		},
	},
});

export const { addTodo, removeTodo, updateTodo, checkTodo, replaceTodos } =
	todoSlice.actions;
export default todoSlice.reducer;
