import { General } from "./General";
import { Education } from "./Education";
import { PracticalExperience } from "./PracticalExperience";

export function CvForm() {
	return (
		<form action="">
			<General />
			<Education />
			<PracticalExperience />
			<button type="submit">Submit</button>
		</form>
	);
}
