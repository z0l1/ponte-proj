import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";

import { AppHeader } from "./components";
import "./index.css";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AppHeader />

				<div className="container mx-auto">
					<AppRoutes />
				</div>
			</BrowserRouter>
		</QueryClientProvider>
	);
};
