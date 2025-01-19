import { useState } from "react";
import { Project } from "../../types";
import { makeEmptyProject } from "../../utils";
import { ProjectCreationContext } from "./contexts";
import { StageDetails, StageTeam, StageLinks, StageUpload } from "./components";
import { useStages } from "./hooks";

export const ProjectsCreatePage = () => {
	const maxStages = 3;
	const stages = useStages({ count: maxStages });

	const [data, setData] = useState<Project>(makeEmptyProject());

	let error: string | undefined = undefined;
	if (data.name === "") {
		error = "'Név' megadása kötelező";
	} else if (data.name.length > 255) {
		error = "'Név' maximum 255 karakter lehet";
	}
	if (
		(data.description !== "" && data.description.length < 50) ||
		data.description.length > 500
	) {
		error =
			"Ha a 'Leírás' kitöltésre kerül, legalább 50 és maximum 500 karakternek kell lennie";
	}

	const nextDisabled = error !== undefined;

	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-3xl font-bold">Új Projekt Létrehozása</h1>

			<div className="min-w-[400px] w-10/12 mx-auto flex flex-col justify-between h-[500px] border rounded-b-md border-black">
				<progress
					className="w-full"
					value={stages.index}
					max={maxStages}
				></progress>

				<div className="flex-1 p-2">
					<ProjectCreationContext.Provider
						value={{ data, setData, error }}
					>
						{stages.index === 0 && <StageDetails />}
						{stages.index === 1 && <StageTeam />}
						{stages.index === 2 && <StageLinks />}
						{stages.index === 3 && <StageUpload />}
					</ProjectCreationContext.Provider>
				</div>

				<div className="w-full p-2 border-t border-gray-400 flex justify-between bg-gray-100 rounded-b-md">
					{stages.isFirst ? (
						<div></div>
					) : (
						<button type="button" onClick={stages.prev}>
							Előző
						</button>
					)}

					{stages.isFinished ? (
						<></>
					) : (
						<button
							type="button"
							disabled={nextDisabled}
							onClick={stages.next}
						>
							{stages.isFinal
								? "Tovább a feltöltéshez"
								: "Tovább"}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
