export const generateColorNameByProductOption = (
	productOption: string,
): string => {
	switch (productOption) {
		case "#B0D6FD":
			return "biały zimny";
		case "#FFD15C":
			return "biały ciepły";
		default:
			return "biały zimny";
	}
};
