"use client";
import React, { useState } from "react";

import { Info } from "../components/generalInfo";
import { Experience } from "../components/experience";
import { Education } from "../components/education";
import { InfoCard } from "../components/letter";

export const ParentComponent = () => {
	const [education, setEducation] = useState({
		uniName: "",
		gradYear: "",
		degree: "",
		startedYear: "",
	});
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		EmaiId: "",
		phoneNumber: "",
		Address: "",
		DOB: "",
		linkedin: "",
	});
	const [experience, setExperience] = useState({
		Position: "",
		Duration: "",
		Experience: "",
		Company: "",
	});
	return (
		<div>
			<h1>This is the home page</h1>
			<Info info={info} setInfo={setInfo} />
			<Experience experience={experience} setExperience={setExperience} />
			<Education education={education} setEducation={setEducation} />

			<InfoCard
				education={education}
				setEducation={setEducation}
				info={info}
				setInfo={setInfo}
				experience={experience}
				setExperience={setExperience}
			/>
		</div>
	);
};

export default ParentComponent;
