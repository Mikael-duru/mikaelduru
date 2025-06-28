/**
 *@copyright 2025 Michael C. Duru
 *@license Apache-2.0
 */

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import { AnimatePresence } from "motion/react";

const App = () => {
	const location = useLocation();

	return (
		<>
			<Header />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} exact />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default App;
