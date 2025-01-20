export type FetchErrorViewProps = {
	title?: string;
	description?: string;
	onRetry?: () => void;
};
export const FetchErrorView = (props: FetchErrorViewProps) => {
	const title = props.title ?? "Hiba a lekérés közben";
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
