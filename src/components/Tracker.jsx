import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Card from "./Card";
import { useSelector } from "react-redux";
import CircularProgress from "./CircularProgress";
function Tracker() {
	const [showConfetti, setShowConfetti] = useState(false);
	const todos = useSelector((state) => state.todo.todos) || [];
	const tasksCompleted = todos.filter((todo) => todo.completed).length;
	const progress =
		todos.length !== 0
			? Math.round((tasksCompleted / todos.length) * 100)
			: 0;
	useEffect(() => {
		if (tasksCompleted === todos.length && todos.length > 0) {
			setShowConfetti(true);
			const timer = setTimeout(() => {
				setShowConfetti(false);
			}, 6000);

			return () => clearTimeout(timer);
		} else {
			setShowConfetti(false);
		}
	}, [tasksCompleted, todos.length]);
	const TasksIcon = ({ size = 40, className = "" }) => (
		<div className="w-15 h-15 py-3 px-3 bg-sky-100 dark:bg-sky-900 rounded-2xl flex items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width={size}
				height={size}
				viewBox="0 0 48 48"
				className={className}
			>
				<defs>
					<linearGradient
						id="OxW4oj_jGkBF3bcaUjGE2a_NQHTIO3UIvs9_gr1"
						x1="24.8"
						x2="24.8"
						y1="36.91"
						y2="-2.028"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="#97f8ff"></stop>
						<stop offset=".115" stopColor="#84edff"></stop>
						<stop offset=".725" stopColor="#26b3fd"></stop>
						<stop offset="1" stopColor="#009cfc"></stop>
					</linearGradient>

					<linearGradient
						id="OxW4oj_jGkBF3bcaUjGE2b_NQHTIO3UIvs9_gr2"
						x1="5.913"
						x2="37.913"
						y1="36.5"
						y2="36.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							offset="0"
							stopColor="#daa6ff"
							stopOpacity=".6"
						></stop>
						<stop
							offset="1"
							stopColor="#dca6ff"
							stopOpacity=".4"
						></stop>
					</linearGradient>

					<linearGradient
						id="OxW4oj_jGkBF3bcaUjGE2c_NQHTIO3UIvs9_gr3"
						x1="23.217"
						x2="8.298"
						y1="33.672"
						y2="42.366"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							offset="0"
							stopColor="#f5ebff"
							stopOpacity=".2"
						></stop>
						<stop
							offset="1"
							stopColor="#daa6ff"
							stopOpacity=".4"
						></stop>
					</linearGradient>
				</defs>

				<path
					fill="#118bef"
					d="M6.822,40.664c-1.475,0.125-2.791-0.556-3.725-1.578l0.007,0.023 C3.982,40.354,5.326,41,7,41h27c-2.209,0-5-1-5-6v-2c0-0.552-0.448-1-1-1H11.25v3.681C11.25,40.143,7.602,40.586,6.822,40.664z"
					opacity=".4"
				/>

				<path
					fill="#118bef"
					d="M6.644,40.328c-1.406,0.174-2.76-0.395-3.69-1.481l0.022,0.077 C3.847,40.294,5.244,41,7,41h27c-2.209,0-5-1-5-6v-2c0-0.552-0.448-1-1-1H10.5v3.999C10.5,39.497,7.652,40.171,6.644,40.328z"
					opacity=".3"
				/>

				<path
					fill="#118bef"
					d="M6.466,39.993c-1.337,0.224-2.73-0.234-3.654-1.384l0.033,0.125 C3.701,40.239,5.159,41,7,41h27c-2.209,0-5-1-5-6v-2c0-0.552-0.448-1-1-1H9.75v4.316C9.75,38.851,7.702,39.757,6.466,39.993z"
					opacity=".2"
				/>

				<path
					fill="#118bef"
					d="M6.288,39.657c-1.267,0.272-2.694-0.072-3.614-1.282C3.495,40.113,5.023,41,7,41h27 c-2.209,0-5-1-5-6v-2c0-0.552-0.448-1-1-1H9v4.633C9,38.205,7.752,39.342,6.288,39.657z"
					opacity=".1"
				/>

				<path
					fill="#0576e5"
					d="M15.438,6h27.114C44.052,6,46,7.126,46,9.876v2.037c0,0.324-0.263,0.587-0.587,0.587H19.462	c-0.324,0-0.587-0.263-0.587-0.587v-1.788C18.875,6.687,16.956,6,15.438,6z"
				/>

				<path
					fill="url(#OxW4oj_jGkBF3bcaUjGE2a_NQHTIO3UIvs9_gr1)"
					d="M15.438,6C13.539,6,12,7.539,12,9.438v25.927C12,40.788,7.553,41,7,41h27c2.761,0,5-2.239,5-5	V9.875C39,6.146,42.221,6,42.601,6H15.438z"
				/>

				<path
					fill="#20affd"
					d="M18,16c0-0.552,0.448-1,1-1H32c0.552,0,1,0.448,1,1s-0.447,1-1,1H19C18.448,17,18,16.552,18,16z M28,25H19c-0.552,0-1,0.448-1,1V26c0,0.552,0.448,1,1,1H28c0.552,0,1-0.448,1-1V26C29,25.448,28.553,25,28,25z M32,20H19	c-0.552,0-1,0.448-1,1V21c0,0.552,0.448,1,1,1H32c0.552,0,1-0.448,1-1V21C33,20.448,32.553,20,32,20z"
				/>

				<path
					fill="#24a1ff"
					d="M12,35.364C12,40.788,7.553,41,7,41h27c-2.064,0-4.6-1.295-4.6-6v-2 c0-0.773-0.627-1.4-1.4-1.4H12V35.364z"
					opacity=".4"
				/>

				<path
					fill="#24a1ff"
					d="M12,35.364C12,40.788,7.553,41,7,41h27c-1.919,0-4.2-1.59-4.2-6v-2 c0-0.993-0.807-1.8-1.8-1.8H12V35.364z"
					opacity=".3"
				/>

				<path
					fill="#24a1ff"
					d="M12,35.364C12,40.788,7.553,41,7,41h27c-1.774,0-3.8-1.885-3.8-6v-2 c0-1.214-0.987-2.2-2.2-2.2H12V35.364z"
					opacity=".2"
				/>

				<path
					fill="#24a1ff"
					d="M12,35.364C12,40.788,7.553,41,7,41h27c-1.628,0-3.4-2.18-3.4-6v-2 c0-1.434-1.166-2.6-2.6-2.6H12V35.364z"
					opacity=".1"
				/>

				<path
					fill="#24a1ff"
					d="M12,35.364C12,40.788,7.553,41,7,41h27c-1.483,0-3-2.476-3-6v-2c0-1.654-1.346-3-3-3 H12V35.364z"
					opacity=".05"
				/>

				<path
					fill="url(#OxW4oj_jGkBF3bcaUjGE2b_NQHTIO3UIvs9_gr2)"
					d="M34,41H7c-3,0-5-2-5-6v-2	c0-0.552,0.448-1,1-1h25c0.552,0,1,0.448,1,1v2C29,40,31.791,41,34,41z"
				/>

				<path
					fill="url(#OxW4oj_jGkBF3bcaUjGE2c_NQHTIO3UIvs9_gr3)"
					d="M28,32.5c0.276,0,0.5,0.224,0.5,0.5v2	c0,2.965,0.947,4.608,2.145,5.5H7c-2.902,0-4.5-1.953-4.5-5.5v-2c0-0.276,0.224-0.5,0.5-0.5H28 M28,32H3c-0.552,0-1,0.448-1,1v2	c0,4,2,6,5,6h27c-2.209,0-5-1-5-6v-2C29,32.448,28.552,32,28,32L28,32z"
				/>
			</svg>
		</div>
	);
	const CompletedCheckIcon = ({ size = 40 }) => (
		<div className="w-15 h-15 py-3 px-3 bg-cyan-100 dark:bg-cyan-900 rounded-2xl flex items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0,0,256,256"
			>
				<defs>
					<linearGradient
						x1="27.5"
						y1="42.73"
						x2="27.5"
						y2="6.496"
						gradientUnits="userSpaceOnUse"
						id="color-1_sDDyDunEuSSX_gr1"
					>
						<stop offset="0" stopColor="#1ed18c"></stop>
						<stop offset="0.762" stopColor="#a9f49c"></stop>
						<stop offset="1" stopColor="#87e550"></stop>
					</linearGradient>
					<linearGradient
						x1="6.293"
						y1="9.318"
						x2="33.903"
						y2="31.048"
						gradientUnits="userSpaceOnUse"
						id="color-2_sDDyDunEuSSX_gr2"
					>
						<stop
							offset="0"
							stopColor="#50efea"
							stopOpacity="0.4"
						></stop>
						<stop
							offset="1"
							stopColor="#27ded8"
							stopOpacity="0.30196"
						></stop>
					</linearGradient>
					<linearGradient
						x1="36.786"
						y1="36.786"
						x2="2.546"
						y2="2.546"
						gradientUnits="userSpaceOnUse"
						id="color-3_sDDyDunEuSSX_gr3"
					>
						<stop
							offset="0"
							stopColor="#10253e"
							stopOpacity="0.2"
						></stop>
						<stop
							offset="1"
							stopColor="#81b1e6"
							stopOpacity="0.2"
						></stop>
					</linearGradient>
				</defs>
				<g
					fill="none"
					fillRule="nonzero"
					stroke="none"
					strokeWidth="none"
					strokeLinecap="none"
					strokeLinejoin="none"
					strokeMiterlimit="10"
					strokeDasharray=""
					strokeDashoffset="0"
					fontFamily="none"
					fontWeight="none"
					fontSize="none"
					textAnchor="none"
					style={{ mixBlendMode: "normal" }}
				>
					<g transform="scale(5.33333,5.33333)">
						<path
							d="M43,38.867c0,2.282 -1.851,4.133 -4.133,4.133h-22.734c-2.282,0 -4.133,-1.851 -4.133,-4.133v-22.734c0,-2.282 1.851,-4.133 4.133,-4.133h22.733c2.283,0 4.134,1.851 4.134,4.133z"
							fill="url(#color-1_sDDyDunEuSSX_gr1)"
						></path>
						<path
							d="M16,12c-2.209,0 -4,1.791 -4,4v20h20c2.209,0 4,-1.791 4,-4v-20z"
							fill="#49c38c"
						></path>
						<path
							d="M32,5h-23c-2.209,0 -4,1.791 -4,4v23c0,2.209 1.791,4 4,4h23c2.209,0 4,-1.791 4,-4v-23c0,-2.209 -1.791,-4 -4,-4z"
							fill="url(#color-2_sDDyDunEuSSX_gr2)"
						></path>
						<path
							d="M16,20.938l4.062,4.062l8.938,-8.938"
							fill="none"
							stroke="#ffffff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</g>
			</svg>
		</div>
	);

	const TasksPendingIcon = ({ size = 40, className = "" }) => (
		<div className="w-15 h-15 py-3 px-3 bg-violet-100 dark:bg-violet-900 rounded-2xl flex items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width={size}
				height={size}
				viewBox="0 0 48 48"
				className={className}
			>
				<defs>
					<linearGradient
						id="WBIETQcahDS_w2LSVTVMMa_5cJddikxEAhI_gr1"
						x1="22.21"
						x2="-3.016"
						y1="23.79"
						y2="49.016"
						gradientTransform="translate(1.266 .524)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor="#009cfc"></stop>
						<stop offset=".12" stopColor="#18abfc"></stop>
						<stop offset=".416" stopColor="#4eccfe"></stop>
						<stop offset=".672" stopColor="#76e4fe"></stop>
						<stop offset=".875" stopColor="#8ef3ff"></stop>
						<stop offset="1" stopColor="#97f8ff"></stop>
					</linearGradient>

					<linearGradient
						id="WBIETQcahDS_w2LSVTVMMb_5cJddikxEAhI_gr2"
						x1="16.41"
						x2="36.397"
						y1="29.59"
						y2="9.603"
						gradientTransform="translate(1.266 .524)"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							offset="0"
							stopColor="#daa6ff"
							stopOpacity=".6"
						></stop>
						<stop
							offset="1"
							stopColor="#dca6ff"
							stopOpacity=".4"
						></stop>
					</linearGradient>

					<linearGradient
						id="WBIETQcahDS_w2LSVTVMMc_5cJddikxEAhI_gr3"
						x1="23.214"
						x2="29.134"
						y1="43.244"
						y2="15.621"
						gradientTransform="translate(1.266 .524)"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							offset="0"
							stopColor="#f5ebff"
							stopOpacity=".2"
						></stop>
						<stop
							offset="1"
							stopColor="#daa6ff"
							stopOpacity=".4"
						></stop>
					</linearGradient>
				</defs>

				<path
					fill="#007df9"
					d="M20.558,27.231c2.105,2.105,4.611,3.483,7.206,4.094 c7.142-7.435-3.877-18.458-11.312-11.29C17.065,22.628,18.456,25.129,20.558,27.231z"
					opacity=".1"
				/>

				<path
					fill="#007df9"
					d="M20.558,27.231c1.878,1.878,4.075,3.188,6.369,3.884l0.171-0.171 c6.777-6.779-3.469-17.037-10.253-10.254l-0.161,0.161C17.379,23.15,18.678,25.351,20.558,27.231z"
					opacity=".2"
				/>

				<path
					fill="#007df9"
					d="M20.558,27.231c1.663,1.663,3.577,2.866,5.586,3.607l0.424-0.424 c6.076-6.077-3.11-15.275-9.192-9.193l-0.429,0.429C17.688,23.657,18.897,25.57,20.558,27.231z"
					opacity=".3"
				/>

				<path
					fill="#007df9"
					d="M20.558,27.231c1.451,1.451,3.095,2.555,4.825,3.307l0.656-0.655 c5.375-5.376-2.75-13.514-8.132-8.132l-0.656,0.656C18.002,24.137,19.107,25.78,20.558,27.231z"
					opacity=".4"
				/>

				<path
					fill="url(#WBIETQcahDS_w2LSVTVMMa_5cJddikxEAhI_gr1)"
					d="M25.508,22.282c-1.953-1.953-5.118-1.953-7.071,0L5.002,35.717 c-1.953,1.953-1.953,5.118,0,7.071c1.953,1.953,5.118,1.953,7.071,0l13.435-13.435C27.461,27.4,27.461,24.234,25.508,22.282z M7.123,40.666c-0.781-0.781-0.781-2.047,0-2.828c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828 C9.171,41.447,7.904,41.447,7.123,40.666z"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-2.401,2.401 c0.762,1.305,1.778,2.631,3.109,3.962c1.33,1.33,2.657,2.347,3.964,3.107l2.399-2.399C27.461,27.4,27.461,24.234,25.508,22.281z"
					opacity=".05"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-2.086,2.086 c0.743,1.325,1.743,2.663,3.076,3.995c1.332,1.332,2.671,2.332,3.998,3.073l2.083-2.083C27.461,27.4,27.461,24.234,25.508,22.281z"
					opacity=".1"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-1.774,1.774 c0.726,1.346,1.72,2.696,3.047,4.024c1.327,1.327,2.678,2.319,4.027,3.044l1.771-1.771C27.461,27.4,27.461,24.234,25.508,22.281z"
					opacity=".2"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-1.451,1.451 c0.715,1.379,1.688,2.746,3.007,4.065c1.317,1.318,2.685,2.29,4.066,3.005l1.45-1.45C27.461,27.4,27.461,24.234,25.508,22.281z"
					opacity=".3"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-1.148,1.148 c0.715,1.414,1.694,2.792,2.986,4.085c1.291,1.291,2.669,2.271,4.085,2.986l1.148-1.148C27.461,27.4,27.461,24.234,25.508,22.281z"
					opacity=".4"
				/>

				<path
					fill="#118bef"
					d="M25.508,22.281c-1.953-1.953-5.118-1.953-7.071,0l-0.847,0.847c0.735,1.464,1.721,2.855,2.969,4.103 s2.639,2.234,4.103,2.969l0.847-0.847C27.461,27.4,27.461,24.234,25.508,22.281z"
				/>

				<path
					fill="url(#WBIETQcahDS_w2LSVTVMMb_5cJddikxEAhI_gr2)"
					d="M43.663,13.566L43.663,13.566 c-0.654-0.654-1.714-0.654-2.368,0l-7.938,7.938c-0.485,0.485-1.233,0.566-1.83,0.228c-2.367-1.342-4.215-3.148-5.492-5.466 c-0.329-0.596-0.245-1.336,0.236-1.818l7.953-7.953c0.654-0.654,0.654-1.714,0-2.368v0c-0.229-0.229-0.517-0.396-0.834-0.461 c-4.531-0.918-10.052,0.987-13.538,4.473c-5.467,5.467-4.76,13.625,0.707,19.092s13.625,6.174,19.092,0.707 c3.486-3.486,5.391-9.007,4.473-13.538C44.059,14.083,43.892,13.795,43.663,13.566z"
				/>

				<path
					fill="url(#WBIETQcahDS_w2LSVTVMMc_5cJddikxEAhI_gr3)"
					d="M31.024,3.937 c0.785,0,1.547,0.074,2.266,0.219c0.21,0.043,0.41,0.155,0.58,0.324c0.222,0.222,0.344,0.517,0.344,0.831S34.092,5.92,33.87,6.141 l-7.953,7.953c-0.636,0.636-0.765,1.606-0.321,2.413c1.296,2.353,3.209,4.257,5.684,5.66c0.313,0.177,0.666,0.271,1.022,0.271 c0.534,0,1.034-0.206,1.409-0.58l7.938-7.938c0.222-0.222,0.517-0.344,0.831-0.344s0.609,0.122,0.83,0.344 c0.17,0.17,0.282,0.37,0.324,0.58c0.867,4.284-0.916,9.664-4.337,13.085c-2.367,2.367-5.318,3.618-8.534,3.618 c-3.563,0-7.061-1.536-9.85-4.325c-5.442-5.442-5.746-13.346-0.707-18.385C23.015,5.682,27.161,3.937,31.024,3.937 M31.024,3.437 c-3.973,0-8.275,1.805-11.173,4.703c-5.467,5.467-4.76,13.625,0.707,19.092c2.91,2.91,6.582,4.471,10.204,4.471 c3.184,0,6.33-1.206,8.888-3.764c3.486-3.486,5.391-9.007,4.473-13.538c-0.064-0.318-0.232-0.605-0.461-0.834 c-0.327-0.327-0.756-0.49-1.184-0.49c-0.429,0-0.857,0.164-1.184,0.49l-7.938,7.938c-0.288,0.288-0.668,0.434-1.055,0.434 c-0.265,0-0.533-0.068-0.775-0.206c-2.367-1.342-4.215-3.148-5.492-5.466c-0.329-0.596-0.245-1.336,0.236-1.818l7.953-7.953 c0.654-0.654,0.654-1.714,0-2.368c-0.229-0.229-0.517-0.396-0.834-0.461C32.625,3.511,31.831,3.437,31.024,3.437L31.024,3.437z"
				/>
			</svg>
		</div>
	);

	return (
		<>
			{showConfetti && <Confetti width={window.innerWidth} />}
			<motion.div
				className="flex w-[75%]  gap-4 justify-between mt-8 m-auto"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				<Card number={todos.length} desc="Total" icon={<TasksIcon />} />
				<Card
					number={todos.length - tasksCompleted}
					desc="Pending"
					icon={<TasksPendingIcon />}
				/>
				<Card
					number={tasksCompleted}
					desc="Completed"
					icon={<CompletedCheckIcon />}
				/>

				<Card
					number={`${progress}%`}
					desc="Progress"
					icon={<CircularProgress progress={progress} />}
				/>
			</motion.div>
		</>
	);
}

export default Tracker;
