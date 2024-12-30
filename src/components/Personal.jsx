/* eslint-disable react/prop-types */
function Personal(props) {
	console.log(props);
	let name = props.firstName + " " + props.surname;
	return (
		<>
			<div className="head">
				<h1 className="name">{name}</h1>
				<div className="card">
					<p>Email: johndoe@example.com</p>
					<p>Phone: 123-456-7890</p>
				</div>
			</div>
		</>
	);
}

export default Personal;
