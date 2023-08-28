"use client";
import React from "react";

import { useState } from "react";
export const Info = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [dob, setDOB] = useState("");
	const [linkedin, setlinkedinID] = useState("");
	return (
		<form>
			<div>
				<h1>Enter your General Infomration below !!</h1>
				<label>Name:</label>
				<input
					type='text'
					placeholder='Enter your name:   '
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<br />
				<label>Email:</label>
				<input
					type='email'
					placeholder='Email id:   '
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label>Phone Number:</label>
				<input
					type='text'
					placeholder='Ph number:   '
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.values)}
				/>
				<br />
				<label>Location :</label>
				<input
					type='text'
					placeholder='Location :   '
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<br />
				<label>Date of birth:</label>
				<input
					type='text'
					placeholder='Date of birth:   '
					value={dob}
					onChange={(e) => setDOB(e.target.value)}
				/>
				<br />
				<label>LinkedIn ID:</label>
				<input
					type='text'
					placeholder='linkedin ID:   '
					value={linkedin}
					onChange={(e) => setlinkedinID(e.target.value)}
				/>
				<br />
				<br />
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};
