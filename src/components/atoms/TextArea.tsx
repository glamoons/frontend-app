export const TextArea = ({
	...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			className="min-h-12 w-full resize-none rounded-[25px] border border-border bg-[#D1D1C7]/10 px-5 py-3 font-serif text-sm font-normal text-secondary ring-offset-background placeholder:font-light placeholder:text-secondary focus-visible:outline-primaryDark"
			{...props}
		></textarea>
	);
};
