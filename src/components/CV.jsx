import { useState, useEffect } from "react";
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
			startDate: "2015",
			endDate: "2020",
		},
		experience: [
			{
				position: "Software Developer",
				company: "Company A",
				startDate: "2020",
				endDate: "Present",
				// details: [
				// 	"Built web applications using React and Node.js",
				// 	"Worked on various projects, including a project management tool",
				// 	"Worked on a mobile application using React Native",
				// ],
			},
		],
	};
	const [data, setData] = useState(startData);

	useEffect(() => {
		console.log(data, "- Has changed");
	}, [data]);

	// function createExperienceArray() {
	// 	let expArr = [];
	//     for (let i = 0; i < count; i++) {
	//         expArr.push(
	//             <Experience
	//                 key={i}
	//                 data={{
	//                     position: e.target["position-" + i].value,
	//                     company: e.target["company-" + i].value,
	//                     startDate: e.target["start-date-" + i].value,
	//                     endDate: e.target["end-date-" + i].value,
	//                     // details: [
	//                     //     e.target["detail-" + i + "-1"].value,
	//                     //     e.target["detail-" + i + "-2"].value,
	//                     //     e.target["detail-" + i + "-3"].value,
	//                     // ],
	//                 }}
	//             />
	//         );
	//     }
	//     return expArr;
	// }

	const handleSave = (e) => {
		e.preventDefault();
		console.log("Form submitted", e);
		let formData = new FormData(e.target);
		setToggle(false);
		for (let d of formData) {
			console.log(d);
		}
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
			experience: [
				{
					position: e.target["position"].value,
					company: e.target["company"].value,
					startDate: e.target["start-date"].value,
					endDate: e.target["end-date"].value,
				},
			],
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
				<CVForm handleSave={handleSave} count={data.experience.length} />
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
			<Experience data={data.experience[0]} />
		</>
	);
}

export default CV;
