export function General({ generalInformation }) {
	return (
		<section>
			<h2>General Information</h2>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					defaultValue={generalInformation.name}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					defaultValue={generalInformation.email}
				/>
			</div>
			<div>
				<label htmlFor="phone-number">Phone number</label>
				<input
					type="tel"
					id="phone-number"
					name="phone-number"
					defaultValue={generalInformation.phoneNumber}
				/>
			</div>
		</section>
	);
}
