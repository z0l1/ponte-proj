import { Project } from "@/pages/Projects/types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type ProjectCreationContextType = {
	data: Project;
	setData: Dispatch<SetStateAction<Project>>;

	error?: string;
};
export const ProjectCreationContext = createContext<ProjectCreationContextType>(
	null!
);

export const useProjectCreationContext = () => {
	const ctx = useContext(ProjectCreationContext);

	if (!ctx) {
		throw new Error(
			"useProjectCreationContext must be used within a ProjectCreationContext.Provider"
		);
	}

	return ctx;
};
