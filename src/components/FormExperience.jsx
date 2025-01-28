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
					defaultValue={props.data?.position}
				/>
				<label htmlFor={"company" + props.num}>Company:</label>
				<input
					type="text"
					id={"company" + props.num}
					name={"company" + props.num}
					required
					defaultValue={props.data?.company}
				/>
				<label htmlFor={"start-date" + props.num}>Start:</label>
				<input
					type="month"
					id={"start-date" + props.num}
					name={"start-date" + props.num}
					required
					defaultValue={props.data?.startDate}
				/>
				<label htmlFor={"end-date" + props.num}>End:</label>
				<input
					type="month"
					id={"end-date" + props.num}
					name={"end-date" + props.num}
					defaultValue={props.data?.endDate}
				/>
				<label htmlFor={"current" + props.num}>current:</label>
				<input
					type="checkbox"
					id={"current" + props.num}
					name={"current" + props.num}
					defaultValue={props.data?.current}
				/>
			</div>
		</>
	);
}
export default FormExperience;
