"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
	classN?: string;
}

const MaxWidthRapper: React.FC<Props> = ({ children, classN }) => {
	return (
		<div
			className={cn(
				"max-w-5xl mx-auto px-5 md:px-4 min-h-[100vh] z-30",
				classN
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthRapper;
