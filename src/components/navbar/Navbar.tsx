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
import { ModeToggle } from "../reuseable/DarkBtn";
import { usePathname } from "next/navigation";
import AuthCom from "../reuseable/AuthCom";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<div className="flex items-center h-fit gap-4 py-5 justify-between sticky top-0 left-0">
			<Link className="text-xl hover:no-underline font-medium" href={"/"}>
				NSblog
			</Link>
			<div className="hidden md:flex buttons gap-4 items-center justify-center">
				{linkData.map((item, i) => (
					<Button
						className={`text-lg text-inherit rounded-2xl bg-inherit ${
							pathname === item.link ? "bg-violet-700" : ""
						} font-medium`}
						key={i}
					>
						<Link href={item.link}>{item.title}</Link>
					</Button>
				))}
				<ModeToggle classN="rounded-full" />
				<AuthCom />
			</div>
			<div className="flex justify-between gap-4 md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" className="rounded-full">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
							<ModeToggle classN="rounded-full" />
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
								<Button className="rounded-lg">
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
