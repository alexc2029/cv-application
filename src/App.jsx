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
	const handleFinalSubmit = (formDataObject) => {
		console.log(formDataObject);
	};
	return (
		<>
			<main>
				<h1>CV Application</h1>
				<CvForm
					onSubmit={handleFinalSubmit}
					setGeneralInformation={setGeneralInformation}
					setEducation={setEducation}
					setPracticalExperience={setPracticalExperience}
				/>
				<button
					type={isFormSubmitted ? "button" : "submit"}
					form={isFormSubmitted ? "" : "cv-form"}
					onClick={toggleSubmit}
				>
					{isFormSubmitted ? "Edit" : "Submit"}
				</button>
			</main>
		</>
	);
}

export default App;
