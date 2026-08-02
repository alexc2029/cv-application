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
					defaultValue="Principal Software Engineer"
				/>
			</div>
			<div>
				<label htmlFor="main-responsibilities">
					Main responsibilities
				</label>
				<textarea
					id="main-responsibilities"
					name="main-responsibilities"
					defaultValue={`- Architected and scaled core distributed systems serving 10M+ users on Azure, maintaining 99.99% availability and cutting latency by 35%.
					- Led cross-functional teams of 15+ engineers to deliver cloud-native services, setting CI/CD and engineering quality standards.
					- Driven modern technical strategies across org boundaries, reducing annual infrastructure costs by $450K while mentoring senior talent.`}
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
