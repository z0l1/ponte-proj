import { Route } from "react-router";
import { ProjectsListPage } from "./pages/ProjectsListPage/ProjectsListPage";
import { ProjectsCreatePage } from "./pages/ProjectsCreatePage/ProjectsCreatePage";

export const ProjectsRoutes = (
	<Route path="projects">
		<Route index element={<ProjectsListPage />} />
		<Route path="new" element={<ProjectsCreatePage />} />
	</Route>
);
