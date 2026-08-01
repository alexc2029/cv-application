import { General } from "./General";
import { Education } from "./Education";
import { PracticalExperience } from "./PracticalExperience";

export function CvForm({ handleSubmit, isSubmitted }) {
	return (
		<form action="">
			<General isSubmitted={isSubmitted} />
			<Education isSubmitted={isSubmitted} />
			<PracticalExperience isSubmitted={isSubmitted} />
		</form>
	);
}
