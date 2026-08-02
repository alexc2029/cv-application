export function PracticalExperience({}) {
	return (
		<section>
			<h2>Practical Experience</h2>
			<div>
				<label htmlFor="company-name">Company name</label>
				<input
					type="text"
					id="company-name"
					name="company-name"
					defaultValue="Microsoft"
				/>
			</div>
			<div>
				<label htmlFor="position-title">Position title</label>
				<input
					type="text"
					id="position-title"
					name="position-title"
					defaultValue="CEO"
				/>
			</div>
			<div>
				<label htmlFor="main-responsibilities">
					Main responsibilities
				</label>
				<textarea
					id="main-responsibilities"
					name="main-responsibilities"
					defaultValue="Running the company"
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
