"use client";
import React from "react";
import { useState } from "react";
export const Experience = () => {
	const [experience, setExperience] = useState("");
	const [duration, setDuration] = useState("");
	const [position, setPosition] = useState("");
	const [company, setCompany] = useState("");
	return (
		<div>
			<label>Experience:</label>
			<br />
			<input
				type='text'
				placeholder='Position: '
				value={position}
				onChange={(event) => setPosition(event.target.value)}
			/>
			<br />
			<input
				type='text'
				placeholder='Duration: '
				value={duration}
				onChange={(event) => setDuration(event.target.value)}
			/>
			<br />
			<input
				type='text'
				placeholder='Job Description  '
				value={experience}
				onChange={(event) => setExperience(event.target.value)}
			/>
			<br />
			<input
				type='text'
				placeholder='Company Name: '
				value={company}
				onChange={(event) => setCompany(event.target.value)}
			/>
		</div>
	);
};
