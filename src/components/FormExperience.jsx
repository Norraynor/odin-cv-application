/* eslint-disable react/prop-types */
import "./FormExperience.css";
function FormExperience(props) {
	console.log(props);
	return (
		<>
			<div className="exp-card">
				<label htmlFor={"position" + props.num}>Position:</label>
				<input
					type="text"
					id={"position" + props.num}
					name={"position" + props.num}
					required
				/>
				<label htmlFor={"company" + props.num}>Company:</label>
				<input
					type="text"
					id={"company" + props.num}
					name={"company" + props.num}
					required
				/>
				<label htmlFor={"start-date" + props.num}>Start:</label>
				<input
					type="date"
					id={"start-date" + props.num}
					name={"start-date" + props.num}
					required
				/>
				<label htmlFor={"end-date" + props.num}>End:</label>
				<input
					type="date"
					id={"end-date" + props.num}
					name={"end-date" + props.num}
					required
				/>
			</div>
		</>
	);
}
export default FormExperience;
