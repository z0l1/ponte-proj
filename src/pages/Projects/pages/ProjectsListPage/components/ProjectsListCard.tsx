import { Project } from "@/pages/Projects/types";
import { Link } from "react-router";

export type ProjectsListCardProps = {
	project: Project;
};

export const ProjectsListCard = (props: ProjectsListCardProps) => {
	return (
		<div className="shadow-md w-[300px] h-[325px] rounded-md border border-black flex flex-col">
			<img
				src={props.project.imageUrl}
				className="rounded-t-md w-[300px] h-[150px] aspect-auto"
			></img>

			<div className="flex-1 p-4 flex flex-col gap-1">
				<h4 className="font-bold">{props.project.name}</h4>
				<p
					// display: -webkit-box;
					// max-width: 200px;
					// -webkit-line-clamp: 4;
					// -webkit-box-orient: vertical;
					// overflow: hidden;
					className="flex-1"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
					title={props.project.description}
				>
					{props.project.description}
				</p>

				<Link
					to={`/projects/${props.project.id}`}
					className="bg-blue-300 cursor-pointer rounded-md py-1 text-center"
				>
					View Project
				</Link>
			</div>
		</div>
	);
};
