export function General() {
	return (
		<>
			<h2>General inhtmlFormation</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
			</div>
			<div>
				<label htmlFor="phone-number">Phone number</label>
				<input type="tel" id="phone-number" name="phone-number" />
			</div>
		</>
	);
}
