/* eslint-disable react/prop-types */
function CVForm(props) {
	return (
		<>
			<div className="cv-form">
				<h3>Please fill out your CV</h3>
				<form action="post" onSubmit={props.handleSave}>
					<fieldset name="personal">
						<legend>Personal Information</legend>
						<label htmlFor="first-name">First Name:</label>
						<input type="text" id="first-name" name="first-name" required />
						<label htmlFor="surname">Surname:</label>
						<input type="text" id="surname" name="surname" required />
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />
						<label htmlFor="phone">Phone:</label>
						<input type="tel" id="phone" name="phone" required />
					</fieldset>

					<fieldset name="education">
						<legend>Education Information</legend>
						<label htmlFor="degree">Degree:</label>
						<input type="text" id="degree" name="degree" required />
						<label htmlFor="institution">Institution:</label>
						<input type="text" id="institution" name="institution" required />
						<label htmlFor="start-edu">Start:</label>
						<input type="date" id="start-edu" name="start-edu" required />
						<label htmlFor="end-edu">End:</label>
						<input type="date" id="end-edu" name="end-edu" required />
					</fieldset>

					<fieldset name="experience">
						<legend>Experience Information</legend>
						<label htmlFor="position">Position:</label>
						<input type="text" id="position" name="position" required />
						<label htmlFor="company">Company:</label>
						<input type="text" id="company" name="company" required />
						<label htmlFor="start-date">Start:</label>
						<input type="date" id="start-date" name="start-date" required />
						<label htmlFor="end-date">End:</label>
						<input type="date" id="end-date" name="end-date" required />
					</fieldset>
					<button type="submit">SAVE</button>
				</form>
			</div>
		</>
	);
}

export default CVForm;
