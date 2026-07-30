export function PracticalExperience() {
	return (
		<>
			<h2>Practical Experience</h2>
			<div>
				<label for="company-name">Company name</label>
				<input type="text" id="company-name" name="company-name" />
			</div>
			<div>
				<label for="position-title">Position title</label>
				<input type="text" id="position-title" name="position-title" />
			</div>
			<div>
				<label for="main-responsibilities">Main responsibilities</label>
				<textarea
					id="main-responsibilities"
					name="main-responsibilities"
				></textarea>
			</div>
			<div>
				<label for="start-date">Start date</label>
				<input type="date" id="start-date" name="start-date" />
			</div>
			<div>
				<label for="end-date">End date</label>
				<input type="date" id="end-date" name="end-date" />
			</div>
		</>
	);
}
