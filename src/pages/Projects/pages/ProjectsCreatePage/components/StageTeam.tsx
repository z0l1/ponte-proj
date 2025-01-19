import { Developer } from "@/pages/Projects/types";
import { useState, useMemo } from "react";
import { useProjectCreationContext } from "../contexts";

export const StageTeam = () => {
	const ctx = useProjectCreationContext();

	const [name, setName] = useState("");
	const [role, setRole] = useState("");

	const onAddDev = () => {
		ctx.setData((prev) => ({
			...prev,
			developers: [...prev.developers, { name, role }],
		}));

		setName("");
		setRole("");
	};

	const removeDev = (devToRemove: Developer) => {
		ctx.setData((prev) => ({
			...prev,
			developers: prev.developers.filter(
				(iterDev) =>
					iterDev.name !== devToRemove.name ||
					iterDev.role !== devToRemove.role
			),
		}));
	};

	const nameAlreadyExists = useMemo(() => {
		return (
			ctx.data.developers.find(
				(dev) => dev.name === name && dev.role === role
			) !== undefined
		);
	}, [ctx.data.developers, name, role]);

	const addDisabled = !name.length || !role.length || nameAlreadyExists;

	return (
		<div className="h-full flex flex-col">
			<h3 className="text-lg font-semibold mb-6">Csapattagok</h3>

			<div className="flex flex-row gap-2 items-end mb-6">
				<div className="flex flex-col gap-1 flex-1">
					<label htmlFor="inp-name">Név</label>
					<input
						id="inp-name"
						type="text"
						autoComplete="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>

				<div className="flex flex-col gap-1 flex-1">
					<label htmlFor="inp-role">Pozíció</label>
					<input
						id="inp-role"
						type="text"
						autoComplete="organization-title"
						value={role}
						onChange={(e) => setRole(e.target.value)}
					></input>
				</div>

				<button
					type="button"
					onClick={onAddDev}
					disabled={addDisabled}
					className="border border-black max-h-min p-2"
				>
					Hozzáad
				</button>
			</div>

			<div className="flex-1 p-1 border overflow-y-auto max-h-[280px] flex flex-col gap-2">
				{ctx.data.developers.map((dev) => (
					<div key={`${dev.name}-${dev.role}`} className="flex gap-2">
						<p className="flex-1">{dev.name}</p>
						<p className="flex-1">{dev.role}</p>

						<button
							type="button"
							onClick={() => removeDev(dev)}
							className="border border-black max-h-min p-1 text-sm"
						>
							Eltávolít
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
