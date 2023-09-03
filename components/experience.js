import React from "react";

export const Experience = (props) => {
	const { experience, setExperience } = props;
	return (
		<div className='bg-gray-100 px-2 py-4 mx-60 md:px-20 lg:px-40 text-center rounded-md'>
			<h1 className='font-semibold text-lg  text-black align-middle'>
				Experience:
			</h1>

			<input
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
				type='text'
				placeholder='Position: '
				value={experience.Position}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Position: e.target.value }))
				}
			/>
			<br />
			<input
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
				type='text'
				placeholder='Duration: '
				value={experience.Duration}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Duration: e.target.value }))
				}
			/>
			<br />
			<input
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
				type='text'
				placeholder='Job Description  '
				value={experience.Experience}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Experience: e.target.value }))
				}
			/>
			<br />
			<input
				className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
				type='text'
				placeholder='Company Name: '
				value={experience.Company}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Company: e.target.value }))
				}
			/>
		</div>
	);
};
