import React from "react";

function Card({ number, desc, icon }) {
	return (
		<div className="flex flex-col w-[25%] px-4 py-2 items-center gap-2 bg-slate-50 border border-gray-200 rounded-xl shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
			{icon && (
				<div className=" flex m-1 items-center justify-center">
					{icon}
				</div>
			)}

			<div className="flex flex-col justify-between p-4 leading-normal ">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{number}
				</h5>
				<p className="mb-3 mt-1 font-normal text-gray-700 dark:text-gray-400">
					{desc}
				</p>
			</div>
		</div>
	);
}

export default Card;
