"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { linkData } from "@/lib/LinkDataNavbar/data";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="flex items-center gap-4 justify-between">
			<div className="logo text-lg hover:no-underline font-light">
				<Link href={"/"}>NSblog</Link>
			</div>
			<div className=" hidden md:flex buttons gap-4">
				{linkData.map((item, i) => (
					<Button
						variant={"link"}
						className="text-lg hover:no-underline font-light"
						key={i}
					>
						<Link href={item.link}>{item.title}</Link>
					</Button>
				))}
			</div>
			<div className="block md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" className="rounded-full">Open</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col items-center justify-center">
							{linkData.map((item, i) => (
								<Button
									variant={"link"}
									className="text-lg hover:no-underline font-light"
									key={i}
								>
									<Link href={item.link}>{item.title}</Link>
								</Button>
							))}
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button>
									<Link href={"/contact"}>Contact Us</Link>
								</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default Navbar;
