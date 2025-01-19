import { Project } from "@/pages/Projects/types";

export const createProjectAsync = async (
	project: Project
): Promise<Project | null> => {
	// ugly but this is to fake the backend so it auto generates the id
	project.id = undefined!;

	const body = JSON.stringify(project);

	const response = await fetch("http://localhost:3000/projects", {
		method: "POST",
		body,
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return null;
	}

	return await response.json();
};
