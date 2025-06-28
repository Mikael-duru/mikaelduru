import { useState, useEffect, useRef } from "react";

import { navItems } from "../constants";

const Navbar = ({ navOpen, setNavOpen }) => {
	const [isScroll, setIsScroll] = useState(false);
	const activeLink = useRef();

	const activeCurrentLink = (e) => {
		activeLink.current?.classList.remove("active");
		e.target.classList.add("active");
		activeLink.current = e.target;

		setNavOpen(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
	}, []);

	return (
		<nav
			className={
				`${isScroll ? "ring-1 navbar " : "navbar "}` + (navOpen ? "open" : "")
			}
		>
			{navItems.map((item, index) => (
				<a
					key={index}
					ref={item.label === "Home" ? activeLink : null}
					href={item.link}
					className={item.className}
					onClick={activeCurrentLink}
				>
					<span className="material-symbols-rounded md:hidden">
						{item.icon}
					</span>
					{item.label}
				</a>
			))}
		</nav>
	);
};

export default Navbar;
