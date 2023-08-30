"use client";
import React from "react";

import { useState } from "react";
export const Info = () => {
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		EmaiId: "",
		phoneNumber: "",
		Address: "",
		DOB: "",
		linkedin: "",
	});

	return (
		<form>
			<div>
				<h1>Enter your General Infomration below !!</h1>
				<label>Name:</label>
				<input
					type='text'
					placeholder='Enter your name:   '
					value={info.firstName}
					onChange={(event) => setInfo({ firstName: event.target.value })}
				/>
				<br />
				<input
					type='text'
					placeholder='Enter your name:   '
					value={info.lastName}
					onChange={(event) => setInfo({ lastName: event.target.value })}
				/>
				<br />
				<label>Email:</label>
				<input
					type='email'
					placeholder='Email id:   '
					value={info.EmaiId}
					onChange={(e) => setInfo({ EmaiId: e.target.value })}
				/>
				<br />
				<label>Phone Number:</label>
				<input
					type='text'
					placeholder='Ph number:   '
					value={info.phoneNumber}
					onChange={(e) => setInfo({ phoneNumber: e.target.value })}
				/>
				<br />
				<label>Location :</label>
				<input
					type='text'
					placeholder='Location :   '
					value={info.Address}
					onChange={(e) => setInfo({ Address: e.target.value })}
				/>
				<br />
				<label>Date of birth:</label>
				<input
					type='text'
					placeholder='Date of birth:   '
					value={info.DOB}
					onChange={(e) => setInfo({ DOB: e.target.value })}
				/>
				<br />
				<label>LinkedIn ID:</label>
				<input
					type='text'
					placeholder='linkedin ID:   '
					value={info.linkedin}
					onChange={(e) => setInfo({ linkedin: e.target.value })}
				/>
				<br />
				<br />
				<button type='submit'>Submit</button>
				<p>
					{info.firstName} {info.lastName} {info.Address}
					{info.phoneNumber}
					{info.DOB}
					{info.EmaiId}
					{info.linkedin}
				</p>
			</div>
		</form>
	);
};
