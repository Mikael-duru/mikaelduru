import { motion } from "motion/react";

import PortfolioCard from "../../../components/portfolio-card";
import { ButtonOutline } from "../../../components/button";
import { useGetProjects } from "../../../hooks/use-get-projects";
import Loader from "../../../components/loader";
import { itemXVariants, listVariants } from "../../../constants";

const RecentProjects = () => {
	const { projects, loading } = useGetProjects();

	const recentProjects = projects && projects.slice(0, 12);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="projects"
			className="section"
		>
			<div className="container">
				<div className="mb-8 text-center">
					<motion.p
						initial={{ y: -20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="outline_text"
					>
						My portfolio
					</motion.p>

					<motion.h2
						initial={{ y: -20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}
						className="mx-auto mb-3 headline-2"
					>
						My latest work
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}
						className="text-zinc-400 md:max-w-[50ch] mx-auto"
					>
						Here's a glimpse of some exciting projects 👨‍💻 I've done.
					</motion.p>
				</div>

				{loading ? (
					<Loader />
				) : recentProjects ? (
					<div className="space-y-8">
						<motion.ul
							variants={listVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="project_card_content"
						>
							{recentProjects.map((item, index) => (
								<motion.li
									variants={itemXVariants}
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.6 }}
									key={index}
								>
									<PortfolioCard item={item} />
								</motion.li>
							))}
						</motion.ul>

						{recentProjects.length === 12 && (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 1, duration: 0.5 }}
								className="flex justify-center"
							>
								<ButtonOutline
									label={"View All Projects"}
									href={"/projects"}
									classes={"!px-10"}
								/>
							</motion.div>
						)}
					</div>
				) : (
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}
						className="flex items-center justify-center text-center text-zinc-400 h-52"
					>
						No projects yet.
					</motion.p>
				)}
			</div>
		</motion.section>
	);
};

export default RecentProjects;
