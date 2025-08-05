import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeChange() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("theme") === "dark"
	);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			onClick={() => setDarkMode(!darkMode)}
			className=" fixed top-4 left-4 px-4 py-2 rounded-full cursor-pointer bg-white outline-1 outline-gray-200 dark:outline-none dark:bg-gray-800 hover:scale-105 transition w-14 h-12"
		>
			{darkMode ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-yellow-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-yellow-500"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<circle cx="12" cy="12" r="5" />
					<g stroke="currentColor" strokeWidth="2">
						<line x1="12" y1="1" x2="12" y2="4" />
						<line x1="12" y1="20" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
						<line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="4" y2="12" />
						<line x1="20" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
						<line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
					</g>
				</svg>
			)}
		</motion.button>
	);
}
