import { useState } from "react";
import Person from "./Person";

function CV() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* General info
				Education
				Work experience
			*/}
			<button className="edit">EDIT</button>
			<Person />
			<div className="edu">
				<h2>Education</h2>
				<div className="card">
					<h3>Bachelor of Science, Computer Science</h3>
					<p>University of Example</p>
					<p>2015-2020</p>
				</div>
			</div>
			<div className="exp">
				<h2>Work experience</h2>
				<button className="edit">EDIT</button>
				<div className="card">
					<h3>Software Developer</h3>
					<p>Company A</p>
					<p>2020-Present</p>
					<ul>
						<li>Built web applications using React and Node.js</li>
						<li>
							Worked on various projects, including a project management tool
						</li>
						<li>
							Collaborated with team members to ensure high quality and
							efficiency
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default CV;
