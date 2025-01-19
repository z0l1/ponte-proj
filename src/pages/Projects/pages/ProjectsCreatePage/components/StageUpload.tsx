import { useState } from "react";
import { useNavigate } from "react-router";
import { useProjectCreationContext } from "../contexts";
import { makeProjectImageUrl } from "../utils";
import { createProjectAsync } from "../api";

export const StageUpload = () => {
	const ctx = useProjectCreationContext();
	const navigate = useNavigate();

	const [isUploading, setIsUploading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	const onUpload = async () => {
		setIsUploading(true);
		setError(undefined);

		const data = ctx.data;
		data.imageUrl = makeProjectImageUrl(ctx.data.name);

		const result = await createProjectAsync(data);
		if (result === null) {
			setError("Hiba a feltöltés során");
			return;
		}

		// toast logic here
		navigate(`/projects/${result.id}`);
	};

	return (
		<div className="h-full flex flex-col">
			<button type="button" onClick={onUpload} disabled={isUploading}>
				Feltöltés
			</button>

			{error && (
				<div className="text-lg font-semibold text-red-500">
					{error}
				</div>
			)}
		</div>
	);
};
