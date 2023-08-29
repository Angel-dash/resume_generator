"use client";
import React from "react";
import { useState } from "react";
import { Info } from "./generalInfo";
import { Experience } from "./experience";
import { Education } from "./education";
export const ExperienceForm = () => {
	const [experiences, setExperiences] = useState([]);

	const handleAddExperience = (experienceData) => {
		setExperiences([...experiences, experienceData]);
	};

	return (
		<div>
			<h1>Work Experience</h1>
			<Experience onAddExperience={handleAddExperience} />
			{/* Display the list of experiences */}
			<div>
				<h2>Entered Experiences:</h2>
				<ul>
					{experiences.map((experience, index) => (
						<li key={index}>
							<strong>Position:{experience}</strong> {experience.position}
							<br />
							<strong>Duration:</strong> {experience.duration}
							<br />
							<strong>Job Description:</strong> {experience.experience}
							<br />
							<strong>Company Name:</strong> {experience.company}
							<br />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
