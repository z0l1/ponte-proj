import { Project } from "@/pages/Projects/types";
import { sleepAsync } from "@/utils";

export const fetchProjectByIdAsync = async (
	id: string
): Promise<Project | null> => {
	await sleepAsync(1000);

	const response = await fetch(`http://localhost:3000/projects/${id}`);
	if (!response.ok) {
		return null;
	}

	const json = await response.json();
	return json;
};
