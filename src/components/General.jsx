export function General() {
	return (
		<>
			<h2>General information</h2>
			<div>
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" />
			</div>
			<div>
				<label for="phone-number">Phone number</label>
				<input type="tel" id="phone-number" name="phone-number" />
			</div>
		</>
	);
}
