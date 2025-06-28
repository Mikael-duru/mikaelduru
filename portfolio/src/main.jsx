/**
 *@copyright 2025 Michael C. Duru
 *@license Apache-2.0
 */

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
