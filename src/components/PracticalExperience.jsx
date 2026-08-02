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
				<label htmlFor="position-start-date">Start date</label>
				<input
					type="date"
					id="position-start-date"
					name="position-start-date"
				/>
			</div>
			<div>
				<label htmlFor="position-end-date">End date</label>
				<input
					type="date"
					id="position-end-date"
					name="position-end-date"
				/>
			</div>
		</section>
	);
}
