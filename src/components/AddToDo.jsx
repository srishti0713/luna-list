import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { motion } from "framer-motion";

function AddToDo() {
	const [input, setInput] = useState("");
	const [time, setTime] = useState("");
	const dispatch = useDispatch();
	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo({ text: input, time }));

		setInput("");
		setTime("");
	};

	return (
		<form onSubmit={addTodoHandler} className="space-x-3 mt-12">
			<motion.div
				className="flex justify-between w-[75%]  m-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-300 shadow-sm dark:border-gray-700 py-2 px-2 "
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay:0.2 }}
			>
				<input
					type="text"
					className=" flex-1 mr-2 ml-2 bg-white dark:bg-gray-800 text-base outline-none dark:text-gray-100 px-3 py-1 leading-8  border-b-2 border-transparent focus:border-gray-400 "
					placeholder="Add a Task"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>

				<div className="relative w-40">
					<input
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						className=" peer mr-4 focus:text-gray-900 bg-white dark:bg-gray-800 dark:focus:text-gray-100 px-3 py-2 dark:border-gray-600   [color:transparent] dark:text-gray-800 focus:outline-none border-b-1 border-transparent focus:border-gray-400 dark:border-0 "
					/>
					{time === null ? (
						<span className="absolute left-3 top-2.5 text-gray-400 text-sm pointer-events-none">
							Select time
						</span>
					) : (
						""
					)}
				</div>

				<button
					type="submit"
					className="text-white bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-500 w-12 cursor-pointer  border-0 py-2 focus:outline-none dark:hover:bg-indigo-600 rounded-lg text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-5 h-5 m-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4v16m8-8H4"
						/>
					</svg>
				</button>
			</motion.div>
		</form>
	);
}

export default AddToDo;
