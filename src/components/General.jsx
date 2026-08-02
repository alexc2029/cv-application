export function General({}) {
	return (
		<section>
			<h2>General Information</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					defaultValue="John Smith"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					defaultValue="john.smith@email.com"
				/>
			</div>
			<div>
				<label htmlFor="phone-number">Phone number</label>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					defaultValue="0722222222"
				/>
			</div>
		</section>
	);
}
