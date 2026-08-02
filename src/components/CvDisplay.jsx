import "../styles/CvDisplay.css";

export function CvDisplay({
	generalInformation,
	education,
	practicalExperience,
}) {
	return (
		<div id="cv-display">
			<div className="general-information-display">
				<h2>{generalInformation.name}</h2>
				<div>
					<span>{generalInformation.phoneNumber}</span>
					<span className="separator">|</span>
					<span>{generalInformation.email}</span>
				</div>
			</div>
			<div className="education-display">
				<h2>Education</h2>
				<hr />
				<div>
					<div>
						<h3>{education.schoolName}</h3>
						<div className="cv-display-subheading">
							{education.titleOfStudy}
						</div>
					</div>
					<div className="dates">
						<div>{education.startDate}</div>
						<span className="separator">–</span>
						<div>{education.endDate}</div>
					</div>
				</div>
			</div>
			<div>
				<h2>Practical Experience</h2>
				<hr />
				<div className="practical-experience-display">
					<div className="practical-experience-display-main-info">
						<div>
							<h3>{practicalExperience.positionTitle}</h3>
							<div className="cv-display-subheading">
								{practicalExperience.companyName}
							</div>
						</div>
						<div className="dates">
							<div>{practicalExperience.startDate}</div>
							<span className="separator">–</span>
							<div>{practicalExperience.endDate}</div>
						</div>
					</div>
					<div className="cv-display-main-responsibilities">
						{practicalExperience.mainResponsibilities}
					</div>
				</div>
			</div>
		</div>
	);
}
