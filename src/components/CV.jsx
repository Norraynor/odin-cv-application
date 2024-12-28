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
	/*{
	personal:{
	    firstName: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
    },
	education:{
	    degree: "Bachelor of Science, Computer Science",
        institution: "University of Example",
        startDate: "2015",
        endDate: "2020",
    },
	experience:{
	    position: "Software Developer",
        company: "Company A",
        startDate: "2020",
        endDate: "Present",
		details: [
            "Built web applications using React and Node.js",
            "Worked on various projects, including a project management tool",
            "Worked on a mobile application using React Native",
        ],}

}*/
	const [data, setData] = useState({});
	const handleSave = (e) => {
		e.preventDefault();
		console.log("Form submitted", e);
		setToggle(false);
		console.log(e.target["first-name"].value);
		// if personal then collect all inputs and save them to personal object of data etc
		// Reset form fields
		// const inputs = document.querySelectorAll("input");
		// inputs.forEach((input) => (input.value = ""));
		// const selects = document.querySelectorAll("select");
		// selects.forEach((select) => (select.value = ""));
		// const textareas = document.querySelectorAll("textarea");
		// textareas.forEach((textarea) => (textarea.value = ""));
		// const radios = document.querySelectorAll("input[type='radio']");
		// radios.forEach((radio) => (radio.checked = false));
		// const checkboxes = document.querySelectorAll("input[type='checkbox']");
		// checkboxes.forEach((checkbox) => (checkbox.checked = false));
	};
	// const editButton = document.querySelector("button.edit");
	// editButton.addEventListener("click", handleToggle);
	if (toggle) {
		return (
			<>
				<CVForm handleSave={handleSave} />
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
