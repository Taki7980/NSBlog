import Link from "next/link";
import { Button } from "../ui/button";

const AuthCom = () => {
	const session = true;
	const isAdmin = true;

	return (
		<div className="flex gap-3">
			{session ? (
				<>
					<Button
						className={`text-lg text-inherit rounded-2xl bg-inherit font-medium`}
					>
						<Link href={"/admin"}>Admin</Link>
					</Button>
					<Button
						variant={"destructive"}
						className={`text-lg text-inherit rounded-2xl bg-inherit font-medium`}
					>
						<Link href={"/logout"}>Logout</Link>
					</Button>
				</>
			) : (
				<>
					<Button className="text-lg text-inherit rounded-2xl hover:bg-green-600 bg-inherit font-medium">
						<Link href={"/login"}>Login</Link>
					</Button>
					<Button className="text-lg text-inherit rounded-2xl bg-inherit font-medium">
						<Link href={"/register"}>Register</Link>
					</Button>
				</>
			)}
		</div>
	);
};

export default AuthCom;
