"use client";
import React from "react";

import { Info } from "../components/generalInfo";
import { Experience } from "../components/experience";
import { Education } from "../components/education";
import { ExperienceForm } from "../components/letter";
const page = () => {
	return (
		<div>
			<h1>This is the home page</h1>
			<Info />
			<Experience />
			<Experience />
			<Education />
			<ExperienceForm />
		</div>
	);
};

export default page;
