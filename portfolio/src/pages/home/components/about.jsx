import { motion } from "motion/react";

import {
	aboutItems,
	containerVariants,
	itemYVariants,
} from "../../../constants";

const About = () => {
	return (
		<section id="about" className="section">
			<div className="container">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
				>
					<div className="mb-8 text-center">
						<motion.p
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="outline_text"
						>
							Introduction
						</motion.p>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mx-auto headline-2"
						>
							About me
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="flex items-start max-sm:flex-col"
					>
						<motion.figure
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
						>
							<img
								src="/assets/about-icon.png"
								width={200}
								height="auto"
								alt=""
								className="invert max-lg:hidden mr-6 md:w-[150px] lg:w-[200px]"
							/>
						</motion.figure>

						<motion.figure
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
							className="w-[150px] h-auto max-sm:mb-6 sm:mr-6 rounded-lg lg:hidden img_container mt-1.5"
						>
							<img
								src="/assets/my_pic.png"
								width={40}
								height={40}
								loading="lazy"
								alt="Mikael Duru Portrait"
								className="img_cover"
							/>
						</motion.figure>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							viewport={{ once: false }}
							className="flex-1"
						>
							<p className="text-zinc-300 md:max-w-[65ch] mb-5 lg:mb-8">
								Hi! I&apos;m{" "}
								<span className="text-lg font-semibold text-zinc-50">
									Duru Michael C.
								</span>
								, an experienced front-end/web app developer with a strong
								passion for merging creativity and code to build visually
								appealing, highly functional, and user-friendly web
								applications. My goal is to create digital experiences that
								leave a lasting impression. Let&apos;s bring your vision to
								life!
							</p>

							<motion.ul
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.3 }}
								className="flex flex-wrap items-center gap-4 md:gap-7"
							>
								{aboutItems.map((item, index) => (
									<motion.li key={index} variants={itemYVariants}>
										<div className="flex items-center md:mb-2">
											<span className="text-3xl font-semibold md:text-4xl">
												{item.number}
											</span>
											<span className="font-semibold text-emerald-500 md:text-3xl">
												+
											</span>
										</div>
										<p className="text-sm text-zinc-400">{item.label}</p>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
