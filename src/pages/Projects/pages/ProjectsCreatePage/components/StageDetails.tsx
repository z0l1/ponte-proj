import { ChangeEventHandler } from "react";
import { useProjectCreationContext } from "../contexts";

export const StageDetails = () => {
	const ctx = useProjectCreationContext();

	const onNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		ctx.setData((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};

	const onDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		ctx.setData((prev) => ({
			...prev,
			description: e.target.value,
		}));
	};

	return (
		<div className="h-full">
			<h3 className="text-lg font-semibold mb-6">Alapadatok</h3>

			<div className="flex flex-col gap-1 mb-6">
				<label htmlFor="inp-name">Név</label>
				<input
					id="inp-name"
					type="text"
					value={ctx.data.name}
					onChange={onNameChange}
				></input>

				<p className="text-xs font-light">
					hossz: {ctx.data.name.length}
				</p>
			</div>

			<div className="flex flex-col gap-1 mb-6">
				<label htmlFor="inp-name">Leírás</label>
				<input
					id="inp-name"
					type="text"
					value={ctx.data.description}
					onChange={onDescriptionChange}
				></input>
				<p className="text-xs font-light">
					hossz: {ctx.data.description.length}
				</p>
			</div>

			{ctx.error && (
				<div className="text-red-500 text-semibold mt-10">
					Hiba: {ctx.error}
				</div>
			)}
		</div>
	);
};
