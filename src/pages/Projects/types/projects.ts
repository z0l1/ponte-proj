export type Project = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	links: string[];
	developers: Developer[];
};

export type Developer = {
	name: string;
	role: string;
};
