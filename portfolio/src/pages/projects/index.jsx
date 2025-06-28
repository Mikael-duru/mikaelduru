import { motion } from "motion/react";

import AllProjects from "./components/all-projects";

const Projects = () => {
	return (
		<motion.main
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{ duration: 0.4 }}
		>
			<AllProjects />
		</motion.main>
	);
};

export default Projects;
