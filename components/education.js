"use client";
import React from "react";
import { useState } from "react";
export const Education = () => {
	const [uniName, setuniName] = useState("");
	const [gradYear, setGradYear] = useState("");
	const [degree, setDegree] = useState("");
	const [startedYear, setStartedYear] = useState("");
	return (
		<div>
			<h1>Education background and Certificate</h1>
			<br />
			<input
				placeholder='Name of University/College'
				type='text'
				value={uniName}
				onChange={(e) => setuniName(e.target.value)}
			/>
			<br />
			<input
				placeholder='Started Year'
				type='text'
				value={startedYear}
				onChange={(e) => e.setStartedYear}
			/>
			<br />
			<input
				placeholder='Graduated Year:'
				type='number'
				value={gradYear}
				onChange={(e) => setGradYear(e.target.value)}
			/>
			<br />
			<input
				placeholder='Degree'
				type='text'
				value={degree}
				onChange={(e) => setDegree(e.target.value)}
			/>
		</div>
	);
};
