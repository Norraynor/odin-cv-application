import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVForm from "./CVForm";

function CV() {
	//const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle((prevToggle) => !prevToggle);
	};
	// const editButton = document.querySelector("button.edit");
	// editButton.addEventListener("click", handleToggle);
	if (toggle) {
		return (
			<>
				<CVForm handleSave={handleToggle} />
			</>
		);
	}
	return (
		<>
			{/* General info
				Education
				Work experience
			*/}
			<button className="edit" onClick={handleToggle}>
				EDIT
			</button>
			<Personal />
			<Education />
			<Experience />
		</>
	);
}

export default CV;
