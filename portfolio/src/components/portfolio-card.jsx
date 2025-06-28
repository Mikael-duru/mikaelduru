import { ButtonOutline, ButtonPrimary } from "./button";

const PortfolioCard = ({ item }) => {
	return (
		<div className="flex flex-col justify-between p-4 transition-colors transition-transform rounded-lg shadow-md bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 hover:shadow-lg active:shadow-sm hover:-translate-y-1">
			<figure className="w-full mb-4 overflow-hidden border rounded-lg shadow-md img_container aspect-square border-zinc-800/20">
				<img
					src={item.mainImage.asset.url}
					alt={`${item.title} project image`}
					loading="lazy"
					className="img_cover"
				/>
			</figure>

			<div>
				<h3 className="title-1">{item.title}</h3>

				<p className="my-2 text-sm lg:mb-4 text-zinc-300">{item.desc}</p>

				<div className="flex items-center justify-between gap-5 pt-1">
					<ButtonPrimary
						label="Live Demo"
						href={item.projectLink}
						target="_blank"
					/>

					<ButtonOutline
						label={!item.githubLink ? "Private" : "View code"}
						icon={!item.githubLink ? "lock" : ""}
						href={item.githubLink}
						target="_blank"
						classes={
							!item.githubLink ? "pointer-events-none cursor-not-allowed" : ""
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
