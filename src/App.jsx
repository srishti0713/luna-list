import { motion } from "framer-motion";
import "./App.css";
import ToDos from "./components/ToDos";
import AddToDo from "./components/AddToDo";
import ThemeChange from "./components/ThemeChange";
import Tracker from "./components/Tracker";

function App() {
	function TodayDate() {
		const today = new Date();
		const formatted = today.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});

		return <p>{formatted}</p>;
	}

	return (
		<>
			<ThemeChange />
			<motion.div
				className=" m-auto "
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-gray-900 dark:text-gray-100 font-semibold text-3xl">
					Tasks For The Day
				</h1>
				<h1 className="text-gray-500 dark:text-gray-300 text-sm m-2 ">
					{TodayDate()}
				</h1>
			</motion.div>
			<Tracker />
			<AddToDo />
			<ToDos />
		</>
	);
}

export default App;
