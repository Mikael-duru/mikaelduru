import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import RecentProjects from "./components/recent-projects";
import Reviews from "./components/reviews";
import Contact from "./components/contact";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<About />
			<Skills />
			<RecentProjects />
			<Reviews />
			<Contact />
		</main>
	);
};

export default Home;
