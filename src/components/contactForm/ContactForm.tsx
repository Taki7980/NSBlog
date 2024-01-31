"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(formRef.current as HTMLFormElement);
		const data = Object.fromEntries(formData);
		console.log(data);
		
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className="form flex flex-col w-full items-center justify-around space-y-3"
		>
			<div className="name w-[30rem] flex flex-col gap-2">
				<Label htmlFor="name">Your Name</Label>
				<Input type="text" name="name" placeholder="Name" />
			</div>
			<div className="email w-[30rem] flex flex-col gap-2">
				<Label htmlFor="email">Your Email</Label>
				<Input type="email" name="email" placeholder="Email" />
			</div>
			<div className="message w-[30rem] flex flex-col gap-2">
				<Textarea
					name="message"
					placeholder="Type your message here."
				/>
			</div>
			<Button type="submit" className="rounded-[1rem] ">
				Submit
			</Button>
		</form>
	);
};

export default ContactForm;
