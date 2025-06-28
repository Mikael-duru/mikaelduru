import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "motion/react";

import { reviews } from "../../../constants";

const Reviews = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="reviews"
			className="section"
		>
			<div className="container overflow-hidden">
				<div className="mb-8 text-center">
					<motion.p
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="outline_text"
					>
						Clients reviews
					</motion.p>

					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="mx-auto headline-2"
					>
						What our customers say
					</motion.h2>
				</div>

				<Swiper
					modules={[Pagination, Autoplay]}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					spaceBetween={20}
					breakpoints={{
						320: { slidesPerView: 1 },
						640: { slidesPerView: 1.5 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					pagination={{ clickable: true }}
					className="pb-10"
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index} className="!h-auto flex">
							<motion.div layoutId="modal">
								<ReviewCard review={review} />
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.section>
	);
};

const ReviewCard = ({ review }) => {
	const ratings = new Array(5);
	ratings.fill({ icon: "star", style: { fontVariationSettings: "'FILL' 1" } });

	return (
		<div className="flex flex-col justify-between h-full max-w-full p-5 bg-zinc-800 rounded-xl">
			<div>
				<div className="flex items-center gap-0.5 mb-3">
					{ratings.map((rating, index) => (
						<span
							key={index}
							className="text-[18px] text-yellow-500 material-symbols-rounded"
							style={rating.style}
						>
							{rating.icon}
						</span>
					))}
				</div>

				<p className="mb-6 text-zinc-400">{review.content}</p>
			</div>

			<div className="flex items-center gap-3 mt-auto">
				<figure className="overflow-hidden border-2 rounded-full border-emerald-500">
					<img
						src={review.imgSrc}
						alt={review.name}
						width={48}
						height={48}
						className="object-cover w-12 h-12"
						loading="lazy"
					/>
				</figure>

				<div>
					<p className="font-medium">{review.name}</p>
					<p className="text-xs text-zinc-400">
						{review.position}, {review.company}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
