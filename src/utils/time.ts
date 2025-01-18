export const sleepAsync = (sleepFor: number = 1000): Promise<void> => {
	return new Promise<void>((resolve, _reject) => {
		setTimeout(() => {
			resolve();
		}, sleepFor);
	});
};
