import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroRe = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center w-full h-[80vh] ">
			<div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
				<p className="text-sm font-semibold text-gray-700">
					NSblog
				</p>
			</div>
			<h1 className="w-full text-5xl font-bold md:text-6xl lg:text-7xl">
				We help you{" "}
				<span className="text-violet-600">Create & Share</span> your Memories and thoughts
			</h1>
			<p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
				With the help of our platform, you can create and share your thoughts and creativity with others
			</p>
			<Link
				href={"/dashboard"}
				className={buttonVariants({
					size: "lg",
					className: "bg-violet-700 hover:bg-violet-800 mt-5",
				})}
				target="_blank"
			>
				Get Started! <ArrowRight className="h-5 w-5" />
			</Link>
		</div>
	);
};

export default HeroRe;
