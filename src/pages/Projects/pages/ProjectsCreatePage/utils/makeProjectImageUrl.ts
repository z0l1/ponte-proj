export const makeProjectImageUrl = (name: string): string => {
	const initials = getInitialsOfWords(name);

	return `https://via.assets.so/img.jpg?t=${initials}&w=300&h=150&tc=black&bg=lightblue`;
};

const getInitialsOfWords = (text: string): string => {
	const initials = text.match(/\b\w/g);
	if (!initials) {
		return "";
	}

	return Array.from(initials).join("");
};
