import { Project } from "@/pages/Projects/types";

export const fetchProjectByIdAsync = async (
	id: string
): Promise<Project | null> => {
	const response = await fetch(`http://localhost:3000/projects/${id}`);
	if (!response.ok) {
		return null;
	}

	const json = await response.json();
	return json;
};
