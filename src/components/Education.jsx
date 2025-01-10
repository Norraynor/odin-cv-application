/* eslint-disable react/prop-types */
function Education(props) {
	let degree = props.data.degree;
	let institution = props.data.institution;
	let startDate = props.data.startDate;
	let endDate = props.data.endDate;

	return (
		<>
			<div className="edu">
				<h2>Education</h2>
				<div className="card">
					<h3>{degree}</h3>
					<p>{institution}</p>
					<p>
						{startDate} - {endDate}
					</p>
				</div>
			</div>
		</>
	);
}

export default Education;
