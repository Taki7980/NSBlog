import Heading from "@/components/reuseable/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full h-full flex self-center items-center justify-center">
			<div className="box flex flex-col items-center justify-center space-y-5">
				<Heading
					title="Not Found"
					subtitle="Could not find requested resource"
					center
				/>
				<Button asChild className="rounded-2xl">
					<Link href="/">Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
