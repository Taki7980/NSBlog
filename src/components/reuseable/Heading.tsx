"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
	title: string;
	subtitle?: string;
	center?: boolean;
	para?: string;
	classN?: string;
}

const Heading: React.FC<HeadingProps> = ({
	title,
	subtitle,
	center,
	para,
	classN,
}) => {
	return (
		<div
			className={cn(
				`${
					center ? "text-center items-center" : "text-start"
				} h-full flex flex-col gap-5 md:gap-0 justify-between w-full pr-5`,
				classN
			)}
		>
			
			<div className="flex flex-col gap-3 justify-between">
				<div className="font-medium text-2xl text-violet-600">
					{subtitle}
				</div>
				<div className="text-5xl font-bold">{title}</div>
			</div>
			<div className="font-light ">{para}</div>
		</div>
	);
};

export default Heading;
