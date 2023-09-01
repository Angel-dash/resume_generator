import React from "react";

export const Education = (props) => {
	const { education, setEducation } = props;

	return (
		<div className='bg-white px-10 py-10 min-h-screen md:px-20 lg:px-40'>
			<h1 className='text-base text-red-500 align-middle'>
				Education background and Certificate
			</h1>
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
