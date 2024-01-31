"use client";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Button } from "../ui/button";

interface BlogCardProps {
	title: string;
	subtitle: string;
	imgUrl: string;
	date: Date;

}

const BlogCard: React.FC<BlogCardProps> = ({
	title,
	subtitle,
	imgUrl,
	date,

}) => {
	return (
		<div className="flex flex-col gap-5 mb-5">
			<div className="top flex items-center justify-center h-full w-full">
				<div className="imgContainer w-[80%] h-[400px] relative">
                    <Image src={imgUrl} alt={title} fill className="object-cover rounded-tl-xl rounded-br-xl" />
                </div>
				<div className="date w-[20%] text-sm rotate-[270deg] h-fit">{date.toISOString()}</div>
			</div>
			<div className="bottom w-[80%]">
				<h1 className="text-xl mb-5 capitalize font-bold">{title}</h1>
				<p className="mb-5 font-light text-gray-500">{subtitle}</p>
				<Button className="ml-0 pl-0" variant={"link"} asChild>
					<Link href={"/blog/post"}>Read more</Link>
				</Button>
			</div>
		</div>
	);
};

export default BlogCard;
