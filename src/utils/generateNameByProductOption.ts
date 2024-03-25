export const generateNameByProductOption = (productOption: string): string => {
	switch (productOption) {
		case "square":
			return "kwadratowy";
		case "rectangle":
			return "prostokątny";
		case "circle":
			return "okrągły";
		default:
			return "okrągły";
	}
};
