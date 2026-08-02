import { CvDisplay } from "./components/CvDisplay";
import { CvForm } from "./components/CvForm";
import "./styles/App.css";
import { useState } from "react";

function App() {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [generalInformation, setGeneralInformation] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});
	const [education, setEducation] = useState({
		schoolName: "",
		titleOfStudy: "",
		startDate: "",
		endDate: "",
	});
	const [practicalExperience, setPracticalExperience] = useState({
		companyName: "",
		positionTitle: "",
		mainResponsibilities: "",
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
					<CvForm onSubmit={handleFinalSubmit} />
				) : (
					<CvDisplay
						generalInformation={generalInformation}
						education={education}
						practicalExperience={practicalExperience}
					/>
				)}
				<button
					type={isFormSubmitted ? "button" : "submit"}
					form={isFormSubmitted ? "" : "cv-form"}
					onClick={onButtonClick}
				>
					{isFormSubmitted ? "Edit" : "Submit"}
				</button>
			</main>
		</>
	);
}

export default App;
