import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchProjectByIdAsync } from "./api";
import { PropsWithChildren, ReactNode } from "react";
import { FetchErrorView } from "../../components";

export const ProjectsViewPage = () => {
	const { id } = useParams();

	const query = useQuery({
		queryKey: ["get project", id],
		// necessary assertion since the query is disabled if ID is undefined
		queryFn: () => fetchProjectByIdAsync(id!),
		enabled: id !== undefined,
		retry: false,
	});

	{
	}
	if (query.isLoading || query.isRefetching) {
		return (
			<PageLayout title={`Projekt "${id}" betöltése...`}>
				<div className="w-8 h-8 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
			</PageLayout>
		);
	}

	if (query.isError) {
		return (
			<PageLayout title={`Projekt "${id}"`}>
				<FetchErrorView
					title="Hiba a betöltés közben"
					onRetry={query.refetch}
				/>
			</PageLayout>
		);
	}

	if (!query.data) {
		return (
			<PageLayout title={`Projekt "${id}"`}>
				<FetchErrorView
					title="Ismeretlen hiba a betöltés közben"
					onRetry={query.refetch}
				></FetchErrorView>
			</PageLayout>
		);
	}

	return (
		// being completely honest, I generated this layout with chatgpt.
		<PageLayout title={`Projekt "${query.data.name}"`}>
			<div className="bg-white rounded-lg shadow-md p-6">
				<img
					src={query.data.imageUrl}
					alt="Project Image"
					className="w-full h-64 object-cover rounded-md mb-6"
				></img>

				{/* <h1 className="text-3xl font-bold mb-4">{query.data.name}</h1> */}

				<p className="text-gray-600 mb-6">{query.data.description}</p>
				<div className="mb-6">
					<h2 className="text-2xl font-semibold mb-4">Links</h2>
					<ul className="list-disc pl-5 text-blue-500">
						{query.data.links.map((link) => (
							<li>
								<a
									href={link}
									target="_blank"
									className="hover:underline"
								>
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">Developers</h2>
					<ul className="list-none">
						{query.data.developers.map((dev) => (
							<li className="mb-4">
								<span className="font-medium">{dev.name}</span>{" "}
								-
								<span className="text-gray-600">
									{dev.role}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</PageLayout>
	);
};

type PageLayoutProps = { title: string };
const PageLayout = (props: PropsWithChildren<PageLayoutProps>) => {
	return (
		<div className="p-2">
			<h1 className="text-3xl font-bold">{props.title}</h1>

			{/* <div className="p-4 border-b-2 mx-2 flex justify-end"></div> */}

			<div className="">{props.children}</div>
		</div>
	);
};
