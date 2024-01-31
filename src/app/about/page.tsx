"use client";
import Heading from "@/components/reuseable/Heading";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between h-screen md:h-[70vh] w-full my-10">
			<div className="item1 h-full w-full md:w-1/2 ">
				<Heading
					classN="gap-5 h-2/3 w-full"
					title="About Us"
					subtitle="NSblog"
					para="
					Our journey began with a simple yet profound mission: to curate content that inspires, informs, and engages. NSblog is more than just a blog; it's a tapestry woven with diverse threads of thought, expertise, and storytelling. From thought-provoking articles to creative expressions, we are committed to fostering a space where curiosity is celebrated, minds are expanded, and connections are forged.
					NSblog - Where Minds Unite, Ideas Flourish, and Discoveries Begin."
				/>
				<div className="text h-1/3 w-full"></div>
			</div>
			<div className="item2 h-full w-full md:w-1/2">
				<div className="h-2/3 w-full relative">
					<Image
						src={"/aboutPic.jpg"}
						alt="about"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="rounded-[1rem]"
					/>
				</div>
				<div className="text h-1/3 w-full flex flex-col">
					<div className="box1 flex h-1/2 w-full">
						<div className="item1 h-full w-1/2 flex flex-col items-center justify-center">
							<h3 className="">Daily users</h3>

							<span className="text-2xl font-bold">
								1,000,000
							</span>
						</div>
						<div className="item2 h-full w-1/2  flex flex-col items-center justify-center">
							<h3 className="">Daily users</h3>

							<span className="text-2xl font-bold">
								1,000,000
							</span>
						</div>
					</div>
					<div className="box2 flex h-1/2 w-full">
						<div className="item1 h-full w-1/2  flex flex-col items-center justify-center">
							<h3 className="">Daily users</h3>

							<span className="text-2xl font-bold">
								1,000,000
							</span>
						</div>
						<div className="item2 h-full w-1/2 flex flex-col items-center justify-center">
							<h3 className="">Daily users</h3>

							<span className="text-2xl font-bold">
								1,000,000
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
