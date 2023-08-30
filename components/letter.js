"use client";
import React from "react";

import { Info } from "./generalInfo";
import { Experience } from "./experience";
import { Education } from "./education";
export const InfoCard = (props) => {
	let uniName = props.uniName;
	console.log(uniName);
	return (
		<div>
			<h1>This is the CV pages</h1>
			<p>{uniName}</p>
		</div>
	);
};
