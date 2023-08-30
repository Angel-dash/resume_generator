"use client";
import React from "react";
import { useState } from "react";
export const Education = () => {
	const [education, setEducation] = useState({
		uniName: "",
		gradYear: "",
		degree: "",
		startedYear: "",
	});
	return (
		<div>
			<h1>Education background and Certificate</h1>
			<br />
			<input
				placeholder='Name of University/College'
				type='text'
				value={setEducation.uniName}
				onChange={(e) => setEducation({ uniName: e.target.value })}
			/>
			<br />
			<input
				placeholder='Started Year'
				type='text'
				value={setEducation.startedYear}
				onChange={(e) => setEducation({ startedYear: e.target.value })}
			/>
			<br />
			<input
				placeholder='Graduated Year:'
				type='number'
				value={setEducation.gradYear}
				onChange={(e) => setEducation({ gradYear: e.target.value })}
			/>
			<br />
			<input
				placeholder='Degree'
				type='text'
				value={setEducation.degree}
				onChange={(e) => setEducation({ degree: e.target.value })}
			/>
		</div>
	);
};
