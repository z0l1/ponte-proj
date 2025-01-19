import { useState, FormEventHandler, useMemo } from "react";
import { useProjectCreationContext } from "../contexts";

export const StageLinks = () => {
	const ctx = useProjectCreationContext();

	const [link, setLink] = useState("");

	const onAddLink = () => {
		ctx.setData((prev) => ({
			...prev,
			links: [link, ...prev.links],
		}));

		setLink("");
	};

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		onAddLink();
	};

	const removeLink = (linkToRemove: string) => {
		ctx.setData((prev) => ({
			...prev,
			links: prev.links.filter((iterLink) => iterLink !== linkToRemove),
		}));
	};

	const linkAlreadyExists = useMemo(() => {
		return (
			ctx.data.links.find((iterLink) => iterLink === link) !== undefined
		);
	}, [ctx.data.links, link]);

	const addDisabled = !link.length || linkAlreadyExists;

	return (
		<div className="h-full flex flex-col">
			<h3 className="text-lg font-semibold mb-6">Linkek</h3>

			<form
				onSubmit={onSubmit}
				className="flex flex-row gap-2 items-end mb-6"
			>
				<div className="flex flex-col gap-1 flex-1">
					<label htmlFor="inp-name">Link</label>
					<input
						id="inp-name"
						type="text"
						autoComplete="url"
						value={link}
						onChange={(e) => setLink(e.target.value)}
					></input>
				</div>

				<button
					type="submit"
					onClick={onAddLink}
					disabled={addDisabled}
					className="border border-black max-h-min p-2"
				>
					Hozzáad
				</button>
			</form>

			<div className="flex-1 p-1 border overflow-y-auto max-h-[280px] flex flex-col gap-2">
				{ctx.data.links.map((iterLink) => (
					<div key={iterLink} className="flex gap-2">
						<p className="flex-1">{iterLink}</p>

						<button
							type="button"
							onClick={() => removeLink(iterLink)}
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
