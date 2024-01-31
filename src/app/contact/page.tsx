import Heading from "@/components/reuseable/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "../../components/contactForm/ContactForm";

const page = () => {
	return (
		<div className="flex items-center justify-center h-full w-full my-10">
			<div className="innerBox w-full h-full flex flex-col items-center justify-around gap-6">
				<div className="head">
					<Heading title="Contact Us" center />
				</div>
				<ContactForm/>				
			</div>
		</div>
	);
};

export default page;
