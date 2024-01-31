import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="flex flex-col md:flex-row gap-20 my-5">
			<div className="imgContainer flex-1 relative h-[calc(100vh-150px)] w-[600px]">
				<Image
					src={
						"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
					}
					fill
					alt="BlogImg"
					className="object-cover"
				/>
			</div>
			<div className="textContainer flex-[2] flex-col gap-10 space-y-6">
				<h1 className="title text-6xl font-bold capitalize">title</h1>
				<div className="detailsContainer flex gap-10 items-center">
					<Image
						src={
							"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
						}
						width={50}
						height={50}
						alt="Avater"
						className="object-cover h-10 w-10 rounded-full"
					/>
					<div className="textcon flex items-center justify-between gap-5">
						<div className="detailsText flex flex-col">
							<span className="font-bold">Author</span>
							<span className="">Nirjhar sarkar</span>
						</div>
						<div className="detailsText flex flex-col">
							<span className=" font-bold">Published</span>
							<span className="">20.03.2002</span>
						</div>
					</div>
				</div>
				<div className="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Temporibus, consectetur. Rerum saepe cupiditate architecto
					facilis harum neque beatae aliquam distinctio nesciunt
					maxime recusandae nihil, porro expedita dignissimos enim
					labore, nisi, laborum libero? Quo, eius?
				</div>
			</div>
		</div>
	);
};

export default page;
