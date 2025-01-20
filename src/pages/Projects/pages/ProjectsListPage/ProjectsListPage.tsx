import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Project } from "../../types";
import { fetchProjectsAsync } from "./api/projects";
import { ProjectsListCard } from "./components/ProjectsListCard";
import { Link } from "react-router";
import { FetchErrorView } from "../../components";

export const ProjectsListPage = () => {
	const query = useQuery<Project[]>({
		queryKey: ["get projects list"],
		queryFn: () => fetchProjectsAsync(),
		retry: false,
	});

	if (query.isLoading || query.isRefetching) {
		return (
			<PageLayout>
				<SkeletonLoaders />
			</PageLayout>
		);
	}

	if (query.isError) {
		return (
			<PageLayout>
				<FetchErrorView
					title="Hiba a betöltés közben"
					// title={query.error.name}
					// description={query.error.message}
					onRetry={query.refetch}
				></FetchErrorView>
			</PageLayout>
		);
	}

	if (!query.data) {
		return (
			<PageLayout>
				<FetchErrorView
					title="Ismeretlen hiba a betöltés közben"
					onRetry={query.refetch}
				></FetchErrorView>
			</PageLayout>
		);
	}

	return (
		<PageLayout>
			{query.data.map((proj) => (
				<ProjectsListCard key={proj.id} project={proj} />
			))}
		</PageLayout>
	);
};

const PageLayout = (props: PropsWithChildren) => {
	return (
		<div>
			<h1 className="text-3xl font-bold">Jelenlegi Projektek</h1>

			<div className="p-4 border-b-2 mx-2 flex justify-end">
				<Link
					to="/projects/new"
					className="bg-teal-300 px-2 py-1.5 rounded-sm"
				>
					Új projekt
				</Link>
			</div>

			<div className="p-4 flex flex-wrap gap-4">{props.children}</div>
		</div>
	);
};

const SkeletonLoaders = () => {
	return (
		<>
			<div className="w-[300px] h-[300px] animate-pulse bg-black bg-opacity-30 rounded-md"></div>
			<div className="w-[300px] h-[300px] animate-pulse bg-black bg-opacity-30 rounded-md"></div>
			<div className="w-[300px] h-[300px] animate-pulse bg-black bg-opacity-30 rounded-md"></div>
			<div className="w-[300px] h-[300px] animate-pulse bg-black bg-opacity-30 rounded-md"></div>
		</>
	);
};
