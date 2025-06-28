// Primary Button
const ButtonPrimary = ({
	href,
	target,
	label,
	icon,
	classes,
	download,
	onClick = () => {},
}) => {
	if (href) {
		return (
			<a
				href={href}
				target={target ? target : "_self"}
				className={"btn btn-primary " + classes}
				download={download ? true : false}
				rel="noopener noreferrer"
			>
				{label}{" "}
				{icon ? (
					<span className="material-symbols-rounded" aria-hidden="true">
						{icon}
					</span>
				) : null}
			</a>
		);
	} else {
		return (
			<button className={"btn btn-primary " + classes} onClick={onClick}>
				{label}{" "}
				{icon ? (
					<span className="material-symbols-rounded" aria-hidden="true">
						{icon}
					</span>
				) : null}
			</button>
		);
	}
};

// Outline Button
const ButtonOutline = ({ href, target, label, icon, download, classes }) => {
	if (href) {
		return (
			<a
				href={href}
				target={target ? target : "_self"}
				className={"btn btn-outline " + classes}
				download={download ? true : false}
				rel="noopener noreferrer"
			>
				{label}{" "}
				{icon ? (
					<span className="material-symbols-rounded" aria-hidden="true">
						{icon}
					</span>
				) : null}
			</a>
		);
	} else {
		return (
			<button className={"btn btn-outline " + classes}>
				{label}
				{icon ? (
					<span className="material-symbols-rounded" aria-hidden="true">
						{icon}
					</span>
				) : null}
			</button>
		);
	}
};

export { ButtonPrimary, ButtonOutline };
