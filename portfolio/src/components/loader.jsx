import { motion } from "motion/react";

const Loader = () => {
	return (
		<div className="flex items-center justify-center w-full pt-10 h-80">
			<motion.div
				className="spinner"
				animate={{ rotate: 360 }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: "linear",
				}}
			/>
		</div>
	);
};

export default Loader;
