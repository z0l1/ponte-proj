import { Project } from "../../../types";
import { sleepAsync } from "@/utils/time";

export const fetchProjectsAsync = async (): Promise<Project[]> => {
	await sleepAsync(1000);

	const response = await fetch("http://localhost:3000/projects");
	const json = await response.json();

	return json as Project[];
};
