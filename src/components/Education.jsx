export function Education() {
	return (
		<>
			<h2>Education</h2>
			<div>
				<label for="school-name">School name</label>
				<input type="text" id="school-name" name="school-name" />
			</div>
			<div>
				<label for="title-of-study">Title of study</label>
				<input type="text" id="title-of-study" name="title-of-study" />
			</div>
			<div>
				<label for="study-start-date">Start date</label>
				<input
					type="date"
					id="study-start-date"
					name="study-start-date"
				/>
			</div>
			<div>
				<label for="study-end-date">End date</label>
				<input type="date" id="study-end-date" name="study-end-date" />
			</div>
		</>
	);
}
