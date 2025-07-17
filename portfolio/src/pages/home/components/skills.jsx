import { motion } from "motion/react";

import { itemXVariants, listVariants, skillItem } from "../../../constants";

const Skills = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="skills"
			className="section"
		>
			<div className="container">
				<div>
					<div className="mb-8 text-center">
						<motion.p
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="outline_text"
						>
							My skills
						</motion.p>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="mx-auto mb-3 headline-2"
						>
							Tech stack
						</motion.h2>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.5 }}
							className="text-zinc-400 md:max-w-[60ch] mx-auto"
						>
							Essential tools I use to transform ideas into scalable,
							interactive web apps.
						</motion.p>
					</div>

					<motion.ul
						variants={listVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]"
					>
						{skillItem.map((item, index) => (
							<motion.li
								variants={itemXVariants}
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.6 }}
								key={index}
								className="flex items-center gap-3 p-3 transition-colors ring-2 ring-inset ring-zinc-50/10 rounded-2xl hover:bg-zinc-800 group"
							>
								<figure className="p-2 overflow-hidden transition-colors rounded-lg size-12 group-hover:bg-zinc-500/30 bg-zinc-700/50">
									<img
										src={item.imgSrc}
										alt={item.label}
										width={32}
										height={32}
										loading="lazy"
									/>
								</figure>
								<div>
									<h3>{item.label}</h3>
									<p className="text-sm text-zinc-400">{item.desc}</p>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
