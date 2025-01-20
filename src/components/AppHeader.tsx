import { Link } from "react-router";

export const AppHeader = () => {
	return (
		<div
			className="bg-slate-300 px-4 py-2 border-b border-slate-400  shadow-slate-300 shadow-md w-full mb-4
				
					flex justify-between items-center
				"
		>
			<p className="text-lg font-bold">Projekt Kezelő</p>
			<nav className="flex items-center gap-2">
				<Link to="/projects">Projektek</Link>|
				<Link to="/projects/new">Új Projekt</Link>
			</nav>
		</div>
	);
};
