/* eslint-disable react/prop-types */
function Personal(props) {
	let name = props.data.firstName + " " + props.data.surname;
	let email = props.data.email;
	let phone = props.data.phone;
	return (
		<>
			<div className="head">
				<h1 className="name">{name}</h1>
				<div className="card">
					<p>Email: {email}</p>
					<p>Phone: {phone}</p>
				</div>
			</div>
		</>
	);
}

export default Personal;
