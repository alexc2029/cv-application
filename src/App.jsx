import { General } from "./components/General";
import { Education } from "./components/Education";
import { PracticalExperience } from "./components/PracticalExperience";
import "./styles/App.css";

function App() {
	return (
		<>
			<main>
				<h1>CV Application</h1>
				<General />
				<Education />
				<PracticalExperience />
			</main>
		</>
	);
}

export default App;
