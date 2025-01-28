import { useState, useEffect } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import CVForm from "./CVForm";

function CV() {
	const [toggle, setToggle] = useState(false);

	const startData = {
		personal: {
			firstName: "John",
			surname: "Doe",
			email: "john.doe@example.com",
			phone: "1234567890",
		},
		education: {
			degree: "Bachelor of Science, Computer Science",
			institution: "University of Example",
			startDate: "2015-01",
			endDate: "2020-10",
		},
		experience: [
			{
				position: "Software Developer",
				company: "Company A",
				startDate: "2020-05",
				endDate: "2024-09",
				current: false,
				// details: [
				// 	"Built web applications using React and Node.js",
				// 	"Worked on various projects, including a project management tool",
				// 	"Worked on a mobile application using React Native",
				// ],
			},
		],
	};
	const [data, setData] = useState(startData);
	const handleToggle = () => {
		setToggle((prevToggle) => !prevToggle);
	};
	useEffect(() => {
		console.log(data, "- Has changed");
	}, [data]);

	function createExperienceArray(formValue, count) {
		console.log(formValue);
		let expArr = [];
		for (let i = 0; i < count; i++) {
			expArr.push(
				// <Experience
				// 	key={i}
				// 	data={{
				// 		position: formValue.target["position-" + i].value,
				// 		company: formValue.target["company-" + i].value,
				// 		startDate: formValue.target["start-date-" + i].value,
				// 		endDate: formValue.target["end-date-" + i].value,
				// 	}}
				// />
				{
					position: formValue.target["position" + i].value,
					company: formValue.target["company" + i].value,
					startDate: formValue.target["start-date" + i].value,
					endDate: !formValue.target["current" + i].value
						? "present"
						: formValue.target["end-date" + i].value,
					current: formValue.target["current" + i].value,
				}
			);
		}
		return expArr;
	}

	const handleSave = (e) => {
		e.preventDefault();
		console.log("Form submitted", e);
		setToggle(false);
		let newData = {
			personal: {
				firstName: e.target["first-name"].value,
				surname: e.target["surname"].value,
				email: e.target["email"].value,
				phone: e.target["phone"].value,
			},
			education: {
				degree: e.target["degree"].value,
				institution: e.target["institution"].value,
				startDate: e.target["start-edu"].value,
				endDate: e.target["end-edu"].value,
			},
			experience: createExperienceArray(e, e.target["count"].value),
			formEvent: e,
		};
		setData(newData);
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
				<CVForm
					handleSave={handleSave}
					count={data.experience.length}
					data={data}
				/>
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
			<Personal data={data.personal} />
			<Education data={data.education} />
			{console.log(data.experience)}
			<h2>Work experience</h2>

			{data.experience.map((exp, index) => (
				<Experience key={index} data={exp} />
			))}
		</>
	);
}

export default CV;
