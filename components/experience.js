"use client";
import React from "react";
import { useState } from "react";
export const Experience = () => {
	const [experience, setExperience] = useState("");
	return (
		<div>
			<label>Experience:</label>
			<input
				type='text'
				placeholder='Experience  '
				value={experience}
				onChange={(event) => setExperience(event.target.value)}
			/>
		</div>
	);
};
