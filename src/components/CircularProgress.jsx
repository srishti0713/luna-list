import React, { useState } from "react";
import { motion } from "framer-motion";

const CircularProgress = ({ progress = 0, size = 35, strokeWidth = 8 }) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const strokeDasharray = circumference;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<div className="relative w-15 h-15 py-3 px-3 bg-fuchsia-100 dark:bg-pink-800 rounded-2xl flex items-center justify-center">
			<svg width={size} height={size} className="transform -rotate-90">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="#D1D5DB"
					strokeWidth={strokeWidth}
					fill="transparent"
				/>

				<motion.circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="#ffa6c9"
					strokeWidth={strokeWidth}
					fill="transparent"
					strokeLinecap="round"
					initial={{
						strokeDasharray,
						strokeDashoffset: circumference,
					}}
					animate={{ strokeDashoffset }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					style={{ strokeDasharray }}
				/>
			</svg>

			<div className="absolute inset-0 flex items-center justify-center">
				<motion.span
					className="text-sm font-semibold text-gray-700"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				></motion.span>
			</div>
		</div>
	);
};

export default CircularProgress;
