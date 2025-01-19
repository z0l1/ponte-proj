import { Project } from "../types";

export const makeEmptyProject = (): Project => {
	return {
		id: "",
		name: "",
		description: "",
		imageUrl: "",
		developers: [],
		links: [],
	};
};
