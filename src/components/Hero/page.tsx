"use client";

import { useState } from "react";
import Heading from "../reuseable/Heading";
import Image from "next/image";

interface Props {
	image: string;
	headCenter?: boolean;
	heading: string;
	subtitle: string;
	paragraph: string;
	reverce?: boolean;
}

const Hero: React.FC<Props> = ({
	image,
	heading,
	headCenter,
	subtitle,
	paragraph,
	reverce,
}) => {
	return (
		<div className="h-[80vh] w-full flex flex-col md:flex-row items-center justify-between gap-5">
			{reverce ? (
				<>
					<div className="h-full w-full md:w-1/2 ">
						
						<Heading
							title={heading}
							center={headCenter}
							subtitle={subtitle}
							para={paragraph}
							classN="justify-evenly"
						/>
					</div>
					<div className="h-full w-full md:w-1/2 relative hidden md:flex">
						<Image
							src={image}
							alt="image"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</>
			) : (
				<>
					<div className="h-full w-full md:w-1/2 relative hidden md:flex">
						<Image
							src={image}
							alt="image"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div className="h-full w-full md:w-1/2">
						<Heading
							title={heading}
							center={headCenter}
							subtitle={subtitle}
							para={paragraph}
							classN="justify-evenly"
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Hero;
