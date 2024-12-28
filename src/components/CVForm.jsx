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
					<button type="submit">SAVE</button>
				</form>
			</div>
		</>
	);
}

export default CVForm;
