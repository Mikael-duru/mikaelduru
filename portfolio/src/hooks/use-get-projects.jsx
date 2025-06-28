import { useEffect } from "react";
import { useState } from "react";

import { sanityClient } from "../sanity/client";

export const useGetProjects = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const data = await sanityClient.fetch(
					`*[_type == "project"] | order(_createdAt desc){
            title,
            desc,
            projectLink,
            githubLink,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            projectType,
          }`
				);
				setProjects(data);
			} catch (error) {
				console.error("Error fetching projects:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	return { projects, loading };
};
