/* eslint-disable react/prop-types */
function Experience(props) {
	let position = props.data.position;
	let company = props.data.company;
	let startDate = props.data.startDate;
	let endDate = props.data.endDate;
	return (
		<>
			<div className="exp">
				<div className="card">
					<h3>{position}</h3>
					<p>{company}</p>
					<p>
						{startDate} - {endDate}
					</p>
				</div>
			</div>
		</>
	);
}

export default Experience;
