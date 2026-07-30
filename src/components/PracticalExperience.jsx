export function PracticalExperience() {
	return (
		<section>
			<h2>Practical Experience</h2>
			<div>
				<label htmlFor="company-name">Company name</label>
				<input type="text" id="company-name" name="company-name" />
			</div>
			<div>
				<label htmlFor="position-title">Position title</label>
				<input type="text" id="position-title" name="position-title" />
			</div>
			<div>
				<label htmlFor="main-responsibilities">
					Main responsibilities
				</label>
				<textarea
					id="main-responsibilities"
					name="main-responsibilities"
				></textarea>
			</div>
			<div>
				<label htmlFor="start-date">Start date</label>
				<input type="date" id="start-date" name="start-date" />
			</div>
			<div>
				<label htmlFor="end-date">End date</label>
				<input type="date" id="end-date" name="end-date" />
			</div>
		</section>
	);
}
