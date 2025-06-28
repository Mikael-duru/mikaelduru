import { useState } from "react";
import { motion } from "motion/react";

import { SocialIcon } from "react-social-icons";
import { containerVariants, itemYVariants, socials } from "../../../constants";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showToast, setShowToast] = useState(false);

	// Error handling in real-time
	const validateField = (name, value) => {
		let error = "";

		switch (name) {
			case "name":
				if (!value.trim()) error = "Name is required";
				break;
			case "email":
				if (!value) error = "Email is required";
				else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) error = "Invalid email";
				break;
			case "message":
				if (value.length < 10) error = "Message must be at least 10 characters";
				break;
			default:
				break;
		}

		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	// Validate form before submission
	const hasErrors = () => {
		const newErrors = {};
		let isValid = true;

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
			isValid = false;
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
			isValid = false;
		} else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email)) {
			newErrors.email = "Enter a valid email";
			isValid = false;
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
			isValid = false;
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		validateField(name, value);
	};

	const showToastWithTimeout = () => {
		setShowToast(true);
		setTimeout(() => setShowToast(false), 3000);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isValid = hasErrors();

		if (!isValid) {
			console.log("Form has errors");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("https://getform.io/f/bvryrnnb", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to send message.");
			}

			// Reset form fields
			setFormData({ name: "", email: "", message: "" });
			setErrors({});
			showToastWithTimeout();
		} catch (error) {
			console.log("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="contact"
			className="section"
		>
			{/* Toaster */}
			{!showToast && (
				<div
					className={`fixed p-3 bg-white rounded-lg shadow-lg bottom-4 right-4 text-zinc-950 transition-opacity duration-500 ${
						showToast ? "opacity-100" : "opacity-0"
					}`}
				>
					<p className="flex items-center gap-2 text-[14px] md:text-[16px]">
						<span className="text-green-500 material-symbols-rounded">
							check_circle
						</span>
						Message sent successfully!
					</p>
				</div>
			)}

			{/* Main Content */}
			<div className="pt-14 pb-14 bg-zinc-800/50">
				<div className="container grid lg:gap-10 lg:grid-cols-2 lg:items-stretch">
					<div className="max-lg:mb-12 lg:flex lg:flex-col">
						<div className="max-lg:text-center">
							<motion.p
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="outline_text"
							>
								Connect with me
							</motion.p>

							<motion.h2
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="mb-3 headline-2 max-lg:mx-auto"
							>
								Get in touch
							</motion.h2>

							<motion.p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
								className="text-zinc-400 w-full max-w-[43ch] max-lg:mx-auto mb-4"
							>
								I'm always open to new opportunities and collaborations! If you
								have a project in mind, questions, comments, or feedback, please
								don't hesitate to reach out using the form.
							</motion.p>

							{/* Social Links */}
							<motion.ul
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.3 }}
								className="flex items-center gap-2 mt-auto max-lg:justify-center"
							>
								{socials.map((social) => (
									<motion.li
										variants={itemYVariants}
										whileHover={{ scale: 1.2 }}
										key={social.label}
									>
										<SocialIcon
											url={social.value}
											target="_blank"
											rel="noopener noreferrer"
											fgColor="#fff"
											bgColor="transparent"
											className="scale-90"
										/>
									</motion.li>
								))}
							</motion.ul>
						</div>
					</div>

					{/* FORM */}
					<motion.form
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						method="POST"
						className="w-full max-w-xl mx-auto"
					>
						<div className="grid gap-4 mb-4 md:grid-cols-2">
							{/* Name */}
							<motion.div
								initial={{ x: -50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.1 }}
							>
								<label htmlFor="name" className="label">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									autoComplete="name"
									required
									placeholder="John Doe"
									value={formData.name}
									onChange={handleChange}
									className={`text_field ${
										errors.name ? "border border-red-500" : ""
									}`}
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">{errors.name}</p>
								)}
							</motion.div>

							{/* Email */}
							<motion.div
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								<label htmlFor="email" className="label">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									required
									placeholder="johndoe@example.com"
									value={formData.email}
									onChange={handleChange}
									className={`text_field ${
										errors.email ? "border border-red-500" : ""
									}`}
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
							</motion.div>
						</div>

						{/* Message */}
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 1.3 }}
							className="mb-4"
						>
							<label htmlFor="message" className="label">
								Message
							</label>
							<textarea
								name="message"
								id="message"
								autoComplete="message"
								required
								placeholder="Type your message here..."
								value={formData.message}
								onChange={handleChange}
								className={`resize-y min-h-36 max-h-80 text_field ${
									errors.message ? "border border-red-500" : ""
								}`}
							/>
							{errors.message && (
								<p className="mt-1 text-sm text-red-500">{errors.message}</p>
							)}
						</motion.div>

						<motion.button
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							type="submit"
							className="btn btn-primary [&]:max-w-full w-full justify-center"
							onClick={handleSubmit}
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<span className="flex items-center gap-2">
									{/* Spinner icon */}
									<span className="material-symbols-rounded animate-spin">
										progress_activity
									</span>
									Sending...
								</span>
							) : (
								"Send Message"
							)}
						</motion.button>
					</motion.form>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
