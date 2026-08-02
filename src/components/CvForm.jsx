import { General } from "./General";
import { Education } from "./Education";
import { PracticalExperience } from "./PracticalExperience";

export function CvForm({ onSubmit }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
		onSubmit(data);
	};
	return (
		<form id="cv-form" onSubmit={handleSubmit} action="">
			<General />
			<Education />
			<PracticalExperience />
		</form>
	);
}
