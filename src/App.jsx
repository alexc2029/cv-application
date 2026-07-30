import { CvForm } from "./components/CvForm";
import "./styles/App.css";
import { useState } from "react";

function App() {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsFormSubmitted(!isFormSubmitted);
	};
	return (
		<>
			<main>
				<h1>CV Application</h1>
				<CvForm
					handleSubmit={handleSubmit}
					isSubmitted={isFormSubmitted}
				/>
			</main>
		</>
	);
}

export default App;
