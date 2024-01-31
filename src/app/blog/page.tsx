import BlogCard from "@/components/reuseable/BlogCard";

const page = () => {
	const date = new Date();
	return (
		<div className="flex flex-wrap justify-between h-full w-full my-10">
			<div className="w-full md:w-1/2 ">
				<BlogCard
					title={"heelo"}
					subtitle={`“Tailwind CSS is the only framework that I've seen scale
					on large teams. It's easy to customize, adapts to any design,
					and the build size is tiny.”`}
					imgUrl={
						"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
					}
					date={date}
				/>
			</div>
			<div className="w-full md:w-1/2 ">
				<BlogCard
					title={"heelo"}
					subtitle={`“Tailwind CSS is the only framework that I've seen scale
					on large teams. It's easy to customize, adapts to any design,
					and the build size is tiny.”`}
					imgUrl={
						"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
					}
					date={date}
				/>
			</div>
			<div className="w-full md:w-1/2 ">
				<BlogCard
					title={"heelo"}
					subtitle={`“Tailwind CSS is the only framework that I've seen scale
					on large teams. It's easy to customize, adapts to any design,
					and the build size is tiny.”`}
					imgUrl={
						"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
					}
					date={date}
				/>
			</div>
		</div>
	);
};

export default page;
