"use client"
import { PacmanLoader } from "react-spinners";

const loading = () => {
	return (
		<div className="h-[70vh] flex flex-col justify-center items-center">
			<PacmanLoader color="yellow" size={30} />
		</div>
	);
};

export default loading;
