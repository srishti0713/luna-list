import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, checkTodo } from "../features/todoSlice";

function ToDos() {
	const [editTodoId, setEditTodoId] = useState(null);
	const [newText, setNewText] = useState("");
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	const handleUpdate = (e) => {
		e.preventDefault();
		if (!editTodoId) return;
		dispatch(updateTodo({ id: editTodoId, text: newText }));
		setEditTodoId(null);
	};

	function formatTo12Hour(time) {
		if (!time) return "";
		const [hour, minute] = time.split(":");
		let h = parseInt(hour, 10);
		const ampm = h >= 12 ? "PM" : "AM";
		h = h % 12 || 12;
		return `${h}:${minute} ${ampm}`;
	}

	return (
		<>
			{todos.length === 0 ? (
				<motion.div
					className="m-20 h-15  py-4 flex flex-col justify-center"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
				>
					<p className="text-gray-900 dark:text-gray-100 text-lg font-bold">
						No tasks yet
					</p>
					<p className=" text-gray-400 dark:text-gray-400">
						Add your first task!
					</p>
				</motion.div>
			) : (
				<>
					<motion.div
						className="text-xl w-[35%] text-gray-900 dark:text-gray-100 mt-10 "
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Tasks ({todos.length}) :
					</motion.div>
					<ul className="list-none relative">
						<AnimatePresence>
							{todos.map((todo) => (
								<motion.li
									className={` mt-4 flex w-[75%] m-auto justify-between items-center bg-white dark:bg-zinc-800 px-5 py-2 shadow   dark:shadow:2xl rounded  ${
										editTodoId
											? ""
											: "hover:shadow-lg dark:hover:shadow-xl hover:scale-102 transition-transform duration-300 "
									}`}
									key={todo.id}
									initial={{ opacity: 0, y: 25 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{
										opacity: 0,
										y: -10,
										scale: 0.8,
										height: 0,
										marginTop: 0,
										transition: {
											duration: 0.3,
											ease: [0.25, 0.46, 0.45, 0.94],
										},
									}}
									transition={{
										duration: 0.2,
										ease: [0.25, 0.46, 0.45, 0.94],
										// delay: index * 0.1,
									}}
									layout
								>
									<div className="flex peer gap-2 flex-1">
										<input
											type="checkbox"
											checked={todo.completed}
											onChange={() =>
												dispatch(checkTodo(todo.id))
											}
											className="cursor-pointer mb-2.5 w-4 accent-violet-400 "
										/>
										<div
											className={`mt-2 flex flex-col justify-start dark:text-gray-100 ${
												todo.completed
													? "line-through text-gray-500 dark:text-gray-400"
													: ""
											} ${!todo.time ? "pb-5" : ""}`}
										>
											<div className="">{todo.text}</div>
											{todo.time && (
												<div className="flex mt-1 gap-1 flex-1 text-sm text-cyan-600 dark:text-sky-100">
													<div className=" text-cyan-600 dark:text-sky-200 pointer-events-none py-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={2}
															stroke="currentColor"
															className="w-4 h-4"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
															/>
														</svg>
													</div>
													<div className="text-cyan-700 dark:text-sky-200 text-md py-0.5">
														{" "}
														{formatTo12Hour(
															todo.time
														)}
													</div>
												</div>
											)}
										</div>
									</div>
									<div className="m-2 opacity-0 peer-hover:opacity-100 hover:opacity-100">
										<button
											onClick={() => {
												setEditTodoId(todo.id);
												setNewText(todo.text);
											}}
											className=" mr-4 text-blue-500 dark:text-blue-100 bg-blue-200 dark:bg-blue-500 cursor-pointer border-0  w-8 h-8 py-1 px-1 rounded focus:outline-none text-xs "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.862 4.487l1.65 1.65a2.121 2.121 0 010 3l-7.293 7.293a2.121 2.121 0 01-1.5.621H6.75a.75.75 0 01-.75-.75v-3.97c0-.398.158-.78.439-1.061l7.293-7.293a2.121 2.121 0 013 0z"
												/>
											</svg>
										</button>

										<button
											onClick={() =>
												dispatch(removeTodo(todo.id))
											}
											className="text-red-500 dark:text-red-100 bg-red-200 dark:bg-red-500 focus:outline-none w-8 h-8 cursor-pointer border-0 py-1 px-1 rounded text-xs "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
										</button>
									</div>
									{/*Modal*/}
									{editTodoId && (
										<form onSubmit={handleUpdate}>
											<div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
												<div className=" relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-1 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-50 dark:shadow-xl w-80 z-80">
													<button
														className="absolute right-1 top-1 cursor-pointer"
														onClick={() =>
															setEditTodoId(null)
														}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="size-6"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M6 18 18 6M6 6l12 12"
															/>
														</svg>
													</button>

													<h2 className="text-lg font-semibold mb-3">
														Edit Task
													</h2>
													<div className="flex border p-2 gap-2  w-full rounded mb-4">
														<input
															type="text"
															value={newText}
															onChange={(e) =>
																setNewText(
																	e.target
																		.value
																)
															}
															className="w-full focus:outline-none focus:border-b-2 "
														/>
														<button
															type="submit"
															className="cursor-pointer opacity-0 hover:opacity-100"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth={
																	1.5
																}
																stroke="currentColor"
																className="size-6"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
																/>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</form>
									)}
								</motion.li>
							))}
						</AnimatePresence>
					</ul>
				</>
			)}
		</>
	);
}
export default ToDos;
