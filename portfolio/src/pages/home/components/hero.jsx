import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

import { ButtonPrimary, ButtonOutline } from "../../../components/button";

const Hero = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="home"
			className="pt-32 xl:px-24"
		>
			<div className="container items-center md:grid md:grid-cols-2 md:gap-20">
				<div>
					<div className="flex items-center gap-3">
						<motion.figure
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
							className="w-20 h-20 rounded-lg img_container md:w-9 md:h-9"
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

						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide"
						>
							<span className="relative rounded-full size-2 bg-emerald-400">
								<span className="absolute inset-0 rounded-full size-2 bg-emerald-400 animate-ping"></span>
							</span>
							Available for work
						</motion.p>
					</div>

					<>
						<motion.h2
							initial={{ y: -20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-3"
						>
							Building Scalable Modern Web Apps that Solve Real Problems.
						</motion.h2>
						<motion.p
							initial={{ y: -30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="mb-8 text-sm sm:text-base lg:mb-10 text-zinc-300"
						>
							{/* <Typewriter
								words={["Pixels, performance, and purpose — that's my stack."]}
								loop={0}
								cursor
								cursorStyle="_"
								cursorBlinking={true}
								typeSpeed={80}
								deleteSpeed={50}
								delaySpeed={1500}
							/> */}
						</motion.p>
					</>

					<div className="flex items-center gap-3">
						<motion.div
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 1 }}
						>
							<ButtonPrimary
								download={true}
								href={"/mcduru_resume.pdf"}
								target="_blank"
								label="My Resume"
								icon="download"
								classes={"shrink-0"}
							/>
						</motion.div>

						<motion.div
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 1.2 }}
						>
							<ButtonOutline href="#contact" label="Hire me" />
						</motion.div>
					</div>
				</div>

				<div className="hidden md:block">
					<motion.figure
						initial={{ x: 30, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="w-full max-w-[480px] h-[450px] lg:h-[550px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
					>
						<img
							src="/assets/hero-banner.png"
							width={656}
							height={600}
							loading="lazy"
							alt="Michael Duru"
							className="w-full"
						/>
					</motion.figure>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
