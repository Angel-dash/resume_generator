import React from "react";

export const InfoCard = (props) => {
	const { education, experience, info } = props;

	return (
		<div>
			<p>
				Name:{info.firstName} {info.lastName}
			</p>
			<p>Email :{info.EmaiId}</p>
			<p>Contact:{info.phoneNumber}</p>
			<p>Address :{info.Address}</p>
			<p>Date of birth :{info.DOB}</p>
			<p>LinkedIn :{info.linkedin}</p>

			<h2>Education</h2>
			<p>University: {education.uniName}</p>
			<p>Degree: {education.degree}</p>
			<p>Started Year: {education.startedYear}</p>
			<p>Graduated Year: {education.gradYear}</p>
			<p>Previous Postion:{experience.Position}</p>
			<p>Previous Duratiom:{experience.Duration}</p>
			<p>Previous Experience:{experience.Experience}</p>
			<p>Previous Company Name:{experience.Company}</p>
		</div>
	);
};
