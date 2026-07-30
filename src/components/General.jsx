export function General({ isSubmitted }) {
	return (
		<section>
			<h2>General Information</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					readOnly={isSubmitted}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					readOnly={isSubmitted}
				/>
			</div>
			<div>
				<label htmlFor="phone-number">Phone number</label>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					readOnly={isSubmitted}
				/>
			</div>
		</section>
	);
}
