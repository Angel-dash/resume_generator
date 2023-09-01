import React from "react";

export const Experience = (props) => {
	const { experience, setExperience } = props;
	return (
		<div>
			<label>Experience:</label>
			<br />
			<input
				type='text'
				placeholder='Position: '
				value={experience.Position}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Position: e.target.value }))
				}
			/>
			<br />
			<input
				type='text'
				placeholder='Duration: '
				value={experience.Duration}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Duration: e.target.value }))
				}
			/>
			<br />
			<input
				type='text'
				placeholder='Job Description  '
				value={experience.Experience}
				onChange={(e) =>
					setExperience((prev) => ({ ...prev, Experience: e.target.value }))
				}
			/>
			<br />
			<input
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
