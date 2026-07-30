export function Education() {
	return (
		<section>
			<h2>Education</h2>
			<div>
				<label htmlFor="school-name">School name</label>
				<input type="text" id="school-name" name="school-name" />
			</div>
			<div>
				<label htmlFor="title-of-study">Title of study</label>
				<input type="text" id="title-of-study" name="title-of-study" />
			</div>
			<div>
				<label htmlFor="study-start-date">Start date</label>
				<input
					type="date"
					id="study-start-date"
					name="study-start-date"
				/>
			</div>
			<div>
				<label htmlFor="study-end-date">End date</label>
				<input type="date" id="study-end-date" name="study-end-date" />
			</div>
		</section>
	);
}
