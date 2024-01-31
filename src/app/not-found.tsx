import Heading from "@/components/reuseable/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full h-screen">
			
				<Button asChild className="rounded-2xl">
					<Link href="/">Return Home</Link>
				</Button>
		</div>
	);
}
