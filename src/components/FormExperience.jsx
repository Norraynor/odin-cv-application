function FormExperience() {
	return (
		<>
			<label htmlFor="position">Position:</label>
			<input type="text" id="position" name="position" required />
			<label htmlFor="company">Company:</label>
			<input type="text" id="company" name="company" required />
			<label htmlFor="start-date">Start:</label>
			<input type="date" id="start-date" name="start-date" required />
			<label htmlFor="end-date">End:</label>
			<input type="date" id="end-date" name="end-date" required />
		</>
	);
}
export default FormExperience;
