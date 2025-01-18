import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Project } from "../../types";
import { fetchProjectsAsync } from "./api/projects";
import { ProjectsListCard } from "./components/ProjectsListCard";
import { Link } from "react-router";

export const ProjectsListPage = () => {
	const query = useQuery<Project[]>({
		queryKey: ["get projects list"],
		queryFn: () => fetchProjectsAsync(),
		retry: false,
	});

	if (query.isLoading) {
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
					title="Could not fetch data"
					// title={query.error.name}
					// description={query.error.message}
					onRetry={query.refetch}
				></FetchErrorView>
			</PageLayout>
		);
	}

	return (
		<PageLayout>
			{query.data &&
				query.data.map((proj) => (
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

type FetchErrorViewProps = {
	title?: string;
	description?: string;
	onRetry?: () => void;
};
const FetchErrorView = (props: FetchErrorViewProps) => {
	const title = props.title ?? "Could not fetch data";
	return (
		<div className="max-h-max flex flex-col justify-items-start items-start border-2 border-red-500 rounded-md p-2 gap-2">
			<h3 className="text-lg font-semibold">{title}</h3>

			{props.description && (
				<pre className="max-w-max px-2">{props.description}</pre>
			)}

			{props.onRetry && (
				<button
					type="button"
					className="bg-teal-300 max-w-max px-2 py-0.5 rounded-sm"
					onClick={props.onRetry}
				>
					Újrapróbál
				</button>
			)}
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
