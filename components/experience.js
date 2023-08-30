"use client";
import React from "react";

import { useState } from "react";

export const Experience = () => {
	const [experience, setExperience] = useState({
		Position: "",
		Duration: "",
		Experience: "",
		Company: "",
	});
	return (
		<div>
			<label>Experience:</label>
			<br />
			<input
				type='text'
				placeholder='Position: '
				value={setExperience.Position}
				onChange={(event) => setExperience({ Position: event.target.value })}
			/>
			<br />
			<input
				type='text'
				placeholder='Duration: '
				value={setExperience.Duration}
				onChange={(event) => setExperience({ Duration: event.target.value })}
			/>
			<br />
			<input
				type='text'
				placeholder='Job Description  '
				value={setExperience.experience}
				onChange={(event) => setExperience({ Experience: event.target.value })}
			/>
			<br />
			<input
				type='text'
				placeholder='Company Name: '
				value={setExperience.Company}
				onChange={(event) => setExperience({ Company: event.target.value })}
			/>
		</div>
	);
};
