import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./navbar";

const Header = () => {
	const pathname = useLocation().pathname;

	const isHome = pathname === "/";
	const [navOpen, setNavOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 z-40 flex items-center w-full h-20 border-b drop-shadow-lg bg-gradient-to-b from-zinc-900 to-zinc-900/10 backdrop-blur-xl border-zinc-500/20">
			<div className="flex items-center justify-between w-full gap-5 px-4 mx-auto md:px-6 max-w-screen-2xl xl:px-12">
				<a href="/">
					<h1 className="logo">Mikael.</h1>
				</a>

				{isHome && (
					<>
						<div className="relative md:justify-self-center">
							<motion.button
								whileTap={{ y: 1 }}
								className="menu_btn md:hidden"
								onClick={() => {
									setNavOpen((prev) => !prev);
								}}
							>
								<span className="material-symbols-rounded">
									{navOpen ? "close" : "menu"}
								</span>
							</motion.button>

							<AnimatePresence initial={false}>
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
								>
									<Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
								</motion.div>
							</AnimatePresence>
						</div>

						<a href="#contact" className="btn btn-secondary max-md:hidden">
							Contact Me
						</a>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
