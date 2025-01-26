/* eslint-disable react/prop-types */
import { useState } from "react";
import FormExperience from "./FormExperience";
function CVForm(props) {
	const [count, setCount] = useState(props.count);
	const [experience, setExperience] = useState([
		<FormExperience key={0} num={0} />,
	]);
	function handleClick() {
		setCount(count + 1);
		let newArr = [...experience];
		for (let i = newArr.length; i <= count; i++) {
			newArr.push(<FormExperience key={i} num={i} />);
			setExperience(newArr);
		}
	}

	return (
		<>
			<div className="cv-form">
				<h3>Please fill out your CV</h3>
				<form action="post" onSubmit={props.handleSave}>
					<fieldset name="personal">
						<legend>Personal Information</legend>
						<label htmlFor="first-name">First Name:</label>
						<input
							type="text"
							id="first-name"
							name="first-name"
							required
							value={props.data.personal.firstName}
						/>
						<label htmlFor="surname">Surname:</label>
						<input
							type="text"
							id="surname"
							name="surname"
							required
							value={props.data.personal.surname}
						/>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							value={props.data.personal.email}
						/>
						<label htmlFor="phone">Phone:</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							required
							value={props.data.personal.phone}
						/>
					</fieldset>

					<fieldset name="education">
						<legend>Education Information</legend>
						<label htmlFor="degree">Degree:</label>
						<input
							type="text"
							id="degree"
							name="degree"
							required
							value={props.data.education.degree}
						/>
						<label htmlFor="institution">Institution:</label>
						<input
							type="text"
							id="institution"
							name="institution"
							required
							value={props.data.education.institution}
						/>
						<label htmlFor="start-edu">Start:</label>
						<input
							type="date"
							id="start-edu"
							name="start-edu"
							required
							value={props.data.education.startDate}
						/>
						<label htmlFor="end-edu">End:</label>
						<input
							type="date"
							id="end-edu"
							name="end-edu"
							required
							value={props.data.education.endDate}
						/>
					</fieldset>

					<fieldset name="experience">
						<legend>Experience Information</legend>
						{experience.map((exp) => (
							<FormExperience
								key={exp.key}
								num={exp.key}
								data={props.data.experience[exp.key]}
							/>
						))}
						<button onClick={handleClick}>Add</button>
					</fieldset>
					<button type="submit">SAVE</button>
					<button type="button" onClick={props.handleSave}>
						CANCEL
					</button>
					<input type="hidden" name="count" id="count" value={count} />
				</form>
			</div>
		</>
	);
}

export default CVForm;
