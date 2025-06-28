export const navItems = [
	{
		label: "Home",
		link: "/#home",
		icon: "home",
		className: "nav-link active",
	},
	{
		label: "About",
		link: "/#about",
		icon: "person_pin",
		className: "nav-link",
	},
	{
		label: "Skills",
		link: "/#skills",
		icon: "psychology",
		className: "nav-link",
	},
	{
		label: "Projects",
		link: "/#projects",
		icon: "work",
		className: "nav-link",
	},
	{
		label: "Reviews",
		link: "/#reviews",
		icon: "reviews",
		className: "nav-link",
	},
	{
		label: "Contact",
		link: "/#contact",
		icon: "mail",
		className: "nav-link md:hidden",
	},
];

export const aboutItems = [
	{
		label: "Project done",
		number: 40,
	},
	{
		label: "Years of experience",
		number: 2,
	},
];

export const skillItem = [
	{
		imgSrc: "/assets/figma.svg",
		label: "Figma",
		desc: "UI Design to Code",
	},
	{
		imgSrc: "/assets/html5.svg",
		label: "HTML5",
		desc: "Semantic Markup",
	},
	{
		imgSrc: "/assets/css3.svg",
		label: "CSS3",
		desc: "Styling & Layouts",
	},
	{
		imgSrc: "/assets/tailwindcss.svg",
		label: "TailwindCSS",
		desc: "Utility-first Styling",
	},
	{
		imgSrc: "/assets/javascript.svg",
		label: "JavaScript",
		desc: "Web Interactivity",
	},
	{
		imgSrc: "/assets/git.svg",
		label: "Git",
		desc: "Version Control",
	},
	{
		imgSrc: "/assets/react.svg",
		label: "React",
		desc: "UI Components",
	},
	{
		imgSrc: "/assets/nextjs.svg",
		label: "Next.js",
		desc: "Full-stack Framework",
	},
	{
		imgSrc: "/assets/rest-api.svg",
		label: "REST API",
		desc: "Server Communication",
	},
	{
		imgSrc: "/assets/nodejs.svg",
		label: "NodeJS",
		desc: "Backend Runtime",
	},
	{
		imgSrc: "/assets/expressjs.svg",
		label: "ExpressJS",
		desc: "Node.js Framework",
	},
	{
		imgSrc: "/assets/mongodb.svg",
		label: "MongoDB",
		desc: "NoSQL Database",
	},
	{
		imgSrc: "/assets/postgresql.svg",
		label: "PostgreSQL",
		desc: "Relational Database",
	},
	{
		imgSrc: "/assets/neon-db.svg",
		label: "Neon DB",
		desc: "Serverless SQL DB",
	},
	{
		imgSrc: "/assets/prisma.svg",
		label: "Prisma",
		desc: "ORM for Databases",
	},
	{
		imgSrc: "/assets/firebase.svg",
		label: "Firebase",
		desc: "Auth & Realtime DB",
	},
];

export const reviews = [
	{
		content:
			"Delivered our product ahead of schedule with zero compromises. Everything just worked — fast, clean, and reliable.",
		name: "Sophia Ramirez",
		imgSrc: "/review/person-1.png",
		company: "PixelForge",
		position: "Product Manager",
	},
	{
		content:
			"Our platform went live without a hitch. Clean deployment, flawless API integration, and superb UI polish.",
		name: "Ethan Caldwell",
		imgSrc: "/review/person-2.png",
		company: "NexaWave",
		position: "CTO",
	},
	{
		content:
			"The final product felt premium. From feature delivery to real-world performance — every detail was handled with care.",
		name: "Liam Bennett",
		imgSrc: "/review/person-3.png",
		company: "CodeCraft",
		position: "Senior Developer",
	},
	{
		content:
			"We needed reliability and speed, and we got both. The product shipped on time and continues to scale beautifully.",
		name: "Noah Williams",
		imgSrc: "/review/person-4.png",
		company: "BrightWeb",
		position: "Engineering Lead",
	},
	{
		content:
			"The delivered solution runs flawlessly across devices. The code quality and structure made future updates a breeze.",
		name: "Ava Thompson",
		imgSrc: "/review/person-5.png",
		company: "TechMosaic",
		position: "UI/UX Designer",
	},
	{
		content:
			"Solid execution from start to finish. Every milestone hit, every feature delivered exactly as scoped.",
		name: "Jonathan",
		imgSrc: "/review/person-6.png",
		company: "Skyline Digital",
		position: "Project Coordinator",
	},
	{
		content:
			"From Figma to functional in record time. The rollout was smooth, with everything optimized for performance.",
		name: "Isla Morton",
		imgSrc: "/review/person-7.png",
		company: "LaunchLoop",
		position: "Design Director",
	},
	{
		content:
			"Launched a complete SaaS dashboard with authentication and database hooks, all within deadline. Brilliant work!",
		name: "Marcus Lee",
		imgSrc: "/review/person-8.png",
		company: "AppNova",
		position: "Technical Product Owner",
	},
	{
		content:
			"Every deliverable was met with clarity and purpose. We now have a scalable product that speaks quality.",
		name: "Zara Alston",
		imgSrc: "/review/person-9.png",
		company: "Elevate Studio",
		position: "Startup Founder",
	},
];

export const socials = [
	{ label: "github", value: "https://github.com/Mikael-duru" },
	{ label: "linkedin", value: "https://www.linkedin.com/in/durumikaelc/" },
	{ label: "x", value: "https://x.com/durumykael" },
	{ label: "whatsapp", value: "https://wa.me/2348114876500" },
];

export const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 1,
			duration: 0.5,
		},
	},
};

export const listVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 1,
		},
	},
};

export const itemYVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8 },
	},
};

export const itemXVariants = {
	hidden: { opacity: 0, x: 20 },
	visible: { opacity: 1, x: 0 },
};
