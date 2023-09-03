import React from "react";

export const Info = (props) => {
	const { info, setInfo } = props;

	return (
		<form>
			<div className='bg-gray-100 px-2 py-4 mx-60 md:px-20 lg:px-40 text-center rounded-md'>
				<h1 className=' font-semibold text-lg  text-black align-middle'>
					Enter your General Infomration below !!
				</h1>
				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='text'
					placeholder='Enter your first name:   '
					value={info.firstName}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, firstName: e.target.value }))
					}
				/>
				<br />
				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='text'
					placeholder='Enter your last name:   '
					value={info.lastName}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, lastName: e.target.value }))
					}
				/>
				<br />

				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='email'
					placeholder='Email id:   '
					value={info.EmaiId}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, EmaiId: e.target.value }))
					}
				/>
				<br />

				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='text'
					placeholder='Ph number:   '
					value={info.phoneNumber}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))
					}
				/>
				<br />
				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='text'
					placeholder='Location :   '
					value={info.Address}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, Address: e.target.value }))
					}
				/>
				<br />

				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
					type='text'
					placeholder='Date of birth:   '
					value={info.DOB}
					onChange={(e) =>
						setInfo((prev) => ({ ...prev, DOB: e.target.value }))
					}
				/>
				<br />

				<input
					className=' bg-white  text-base text-gray-600 py-2  px-2 mt-1 mb-2 shadow-2xl rounded-md'
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
