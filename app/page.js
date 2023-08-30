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
	return (
		<div>
			<h1>This is the home page</h1>
			<Info />
			<Experience />
			<Education />
			<InfoCard education={education} setEducation={setEducation} />
		</div>
	);
};

export default ParentComponent;
