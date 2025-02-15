import { Navigate, Route, Routes } from "react-router";
import { ProjectsRoutes } from "./pages/Projects/routes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/projects" />} />
			{ProjectsRoutes}
		</Routes>
	);
};
