import React from "react";

export const Education = (props) => {
	const { education, setEducation } = props;

	return (
		<div className='bg-gray-100 px-2 py-4 mx-60 md:px-20 lg:px-40 text-center rounded-md'>
			<h1 className='font-semibold text-lg  text-black align-middle '>
				Education background and Certificate
			</h1>
			<br />
			<input
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
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
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
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
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
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
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
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
