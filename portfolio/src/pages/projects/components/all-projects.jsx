import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { useGetProjects } from "../../../hooks/use-get-projects";
import Loader from "../../../components/loader";
import PortfolioCard from "../../../components/portfolio-card";

const AllProjects = () => {
	const navigate = useNavigate();
	const { projects, loading } = useGetProjects();

	const [currentPage, setCurrentPage] = useState(
		parseInt(localStorage.getItem("activePage")) || 1
	);
	const itemsPerPage = window.innerHeight < 768 ? 16 : 36;
	const totalPages = Math.ceil(projects?.length / itemsPerPage);

	useEffect(() => {
		localStorage.setItem("activePage", currentPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	const currentProjects = projects?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="pt-32 pb-20"
		>
			<div className="px-4 mx-auto lg:px-6 xl:max-w-7xl">
				<button
					onClick={() => navigate(-1)}
					className="!px-10 border btn text-zinc-50 border-zinc-500 hover:border-zinc-400 hover:bg-zinc-800 animate-bounce"
				>
					<span className="material-symbols-rounded">arrow_back</span>
					Return
				</button>

				<div className="mt-12">
					<div className="mb-8 text-center">
						<motion.p
							className="mb-2.5 text-sm md:text-base text-zinc-400"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							My Portfolio
						</motion.p>

						<motion.h2
							className="mx-auto headline-2"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							All Projects
						</motion.h2>
					</div>

					{loading ? (
						<Loader />
					) : projects ? (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.9, duration: 0.6 }}
								className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
							>
								{currentProjects.map((item, index) => (
									<motion.div
										whileHover={{ scale: 1.03 }}
										transition={{ duration: 0.3 }}
										key={index}
									>
										<PortfolioCard item={item} />
									</motion.div>
								))}
							</motion.div>

							{/* Pagination */}
							<motion.div
								initial={{ opacity: 0, y: -30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.3 }}
								className="flex items-center justify-between gap-5 mt-10 text-zinc-300"
							>
								<button
									onClick={handlePrevPage}
									disabled={currentPage === 1}
									className={`border btn border-zinc-500 transition-colors text-zinc-50 ${
										currentPage === 1
											? "opacity-50"
											: "hover:border-zinc-400 hover:bg-zinc-800"
									}`}
								>
									Prev
								</button>

								<span className="text-sm shrink-0">
									Page {currentPage} of {totalPages}
								</span>

								<button
									onClick={handleNextPage}
									disabled={currentPage === totalPages}
									className={`border btn border-zinc-500 transition-colors text-zinc-50 ${
										currentPage === totalPages
											? "opacity-50"
											: "hover:border-zinc-400 hover:bg-zinc-800"
									}`}
								>
									Next
								</button>
							</motion.div>
						</>
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
			</div>
		</motion.section>
	);
};

export default AllProjects;
