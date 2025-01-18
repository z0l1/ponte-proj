import {Route} from "react-router";
import {ProjectsListPage} from "./pages/ProjectsListPage/ProjectsListPage";

export const ProjectsRoutes = (
	<Route path="projects">
		<Route index element={<ProjectsListPage />} />
	</Route>
);
