import { CvDisplay } from "./components/CvDisplay";
import { CvForm } from "./components/CvForm";
import "./styles/App.css";
import { useState } from "react";

function App() {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [generalInformation, setGeneralInformation] = useState({
		name: "John Smith",
		email: "john.smith@email.com",
		phoneNumber: "0722222222",
	});
	const [education, setEducation] = useState({
		schoolName: "Massachusetts Institute of Technology",
		titleOfStudy: "Computer Science",
		startDate: "",
		endDate: "",
	});
	const [practicalExperience, setPracticalExperience] = useState({
		companyName: "Microsoft",
		positionTitle: "Principal Software Engineer",
		mainResponsibilities: `- Architected and scaled core distributed systems serving 10M+ users on Azure, maintaining 99.99% availability and cutting latency by 35%.
		- Led cross-functional teams of 15+ engineers to deliver cloud-native services, setting CI/CD and engineering quality standards.
		- Driven modern technical strategies across org boundaries, reducing annual infrastructure costs by $450K while mentoring senior talent.`,
		startDate: "",
		endDate: "",
	});
	const toggleSubmit = () => {
		setIsFormSubmitted(!isFormSubmitted);
	};
	const onButtonClick = () => setTimeout(toggleSubmit);
	const handleFinalSubmit = (formDataObject) => {
		console.log(formDataObject);
		setGeneralInformation({
			name: formDataObject.name,
			email: formDataObject.email,
			phoneNumber: formDataObject["phone-number"],
		});
		setEducation({
			schoolName: formDataObject["school-name"],
			titleOfStudy: formDataObject["title-of-study"],
			startDate: formDataObject["study-start-date"],
			endDate: formDataObject["study-end-date"],
		});
		setPracticalExperience({
			companyName: formDataObject["company-name"],
			positionTitle: formDataObject["position-title"],
			mainResponsibilities: formDataObject["main-responsibilities"],
			startDate: formDataObject["position-start-date"],
			endDate: formDataObject["position-end-date"],
		});
	};
	return (
		<>
			<main>
				<h1>CV Application</h1>
				{!isFormSubmitted ? (
					<CvForm
						onSubmit={handleFinalSubmit}
						onButtonClick={onButtonClick}
						generalInformation={generalInformation}
						education={education}
						practicalExperience={practicalExperience}
					/>
				) : (
					<CvDisplay
						onButtonClick={onButtonClick}
						generalInformation={generalInformation}
						education={education}
						practicalExperience={practicalExperience}
					/>
				)}
			</main>
		</>
	);
}

export default App;
