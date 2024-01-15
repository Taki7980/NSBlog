"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
	title: string;
	subtitle?: string;
	center?: boolean;
	para?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center, para }) => {
	return (
		<div
			className={cn(
				`${center ? "text-center items-center" : "text-start"} h-full flex flex-col  justify-center w-full pr-5`
			)}
		>
			<div className="text-5xl font-bold">{title}</div>
			<div className="font-medium text-3xl text-neutral-600 mt-2">{subtitle}</div>
			<div className="font-light text-neutral-500 mt-2">{para}</div>
		</div>
	);
};

export default Heading;
