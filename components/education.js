import React from "react";

export const Education = (props) => {
	const { education, setEducation } = props;

	return (
		<div>
			<h1>Education background and Certificate</h1>
			<br />
			<input
				placeholder='Name of University/College'
				type='text'
				value={education.uniName}
				onChange={(e) =>
					setEducation((oldvalues) => ({
						...oldvalues,
						uniName: e.target.value,
					}))
				}
			/>
			<br />
			<input
				placeholder='Started Year'
				type='text'
				value={education.startedYear}
				onChange={(e) =>
					setEducation((oldvalues) => ({
						...oldvalues,
						startedYear: e.target.value,
					}))
				}
			/>
			<br />
			<input
				placeholder='Graduated Year:'
				type='number'
				value={education.gradYear}
				onChange={(e) =>
					setEducation((oldvalues) => ({
						...oldvalues,
						gradYear: e.target.value,
					}))
				}
			/>
			<br />
			<input
				placeholder='Degree'
				type='text'
				value={education.degree}
				onChange={(e) =>
					setEducation((oldvalues) => ({
						...oldvalues,
						degree: e.target.value,
					}))
				}
			/>
		</div>
	);
};
