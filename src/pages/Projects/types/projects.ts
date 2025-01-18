export type Project = {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	links: string[];
	developers: Developers[];
};

export type Developers = {
	name: string;
	role: string;
};
