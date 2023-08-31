import React from "react";

export const Info = (props) => {
	const { info, setInfo } = props;

	return (
		<form>
			<div>
				<h1>Enter your General Infomration below !!</h1>
				<label>Name:</label>
				<input
					type='text'
					placeholder='Enter your first name:   '
					value={info.firstName}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, firstName: e.target.value }))
					}
				/>
				<br />
				<input
					type='text'
					placeholder='Enter your last name:   '
					value={info.lastName}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, lastName: e.target.value }))
					}
				/>
				<br />
				<label>Email:</label>
				<input
					type='email'
					placeholder='Email id:   '
					value={info.EmaiId}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, EmaiId: e.target.value }))
					}
				/>
				<br />
				<label>Phone Number:</label>
				<input
					type='text'
					placeholder='Ph number:   '
					value={info.phoneNumber}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))
					}
				/>
				<br />
				<label>Location :</label>
				<input
					type='text'
					placeholder='Location :   '
					value={info.Address}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, Location: e.target.value }))
					}
				/>
				<br />
				<label>Date of birth:</label>
				<input
					type='text'
					placeholder='Date of birth:   '
					value={info.DOB}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, DOB: e.target.value }))
					}
				/>
				<br />
				<label>LinkedIn ID:</label>
				<input
					type='text'
					placeholder='linkedin ID:   '
					value={info.linkedin}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, linkedin: e.target.value }))
					}
				/>
			</div>
		</form>
	);
};
