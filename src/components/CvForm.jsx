import { General } from "./General";
import { Education } from "./Education";
import { PracticalExperience } from "./PracticalExperience";

export function CvForm({
	onSubmit,
	generalInformation,
	education,
	practicalExperience,
}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
		onSubmit(data);
	};
	return (
		<form id="cv-form" onSubmit={handleSubmit} action="">
			<General generalInformation={generalInformation} />
			<Education education={education} />
			<PracticalExperience practicalExperience={practicalExperience} />
		</form>
	);
}
