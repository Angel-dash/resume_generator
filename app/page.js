import React from "react";

import { Info } from "../components/generalInfo";
import { Experience } from "../components/experience";
const page = () => {
	return (
		<div>
			<h1>This is the home page</h1>
			<Info />
			<Experience />
			<Experience />
		</div>
	);
};

export default page;
