import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const InfoCard = (props) => {
	const { education, experience, info } = props;
	const pdRef = useRef();

	const downloadPDF = () => {
		const input = pdfRef.current;
		html2canvas(input).then(() => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF("p", "mm", "a4", true);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.getHeight();
			const imgWidth = canvas.width;
			const imgHeight = canvas.height;
			const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
			const imgX = (imgWidth * ratio) / 2;
			const imgY = 30;
			pdf.addImage(
				imgData,
				"PNG",
				imgX,
				imgY,
				imgWidth * ratio * imgHeight * ratio
			);
			pdf.save("Cv.pdf");
		});
	};

	return (
		<div
			className='bg-gray-100 rounded-md p-10 mx-60 my-5 max-w-4xl sm:p-5 md:p-20 lg:p-40'
			ref={pdRef}>
			<div className='flex '>
				<h1 className='text-3xl  mx-auto text-gray-800 font-bold'>
					{info.firstName} {info.lastName}
				</h1>
				<button
					className='bg-black text-white px-1 rounded-md'
					onClick={downloadPDF}>
					Download
				</button>
			</div>

			<div className='bg-white shadow-lg rounded-lg mt-10 p-10'>
				<h2 className='text-4xl text-teal-600 font-semibold'>Profile</h2>
				<div className='grid grid-cols-2 gap-4 mt-4'>
					<p>
						<span className='font-bold'>Name:</span> {info.firstName}{" "}
						{info.lastName}
					</p>
					<p>
						<span className='font-bold'>Email:</span> {info.EmaiId}
					</p>
					<p>
						<span className='font-bold'>Contact:</span> {info.phoneNumber}
					</p>
					<p>
						<span className='font-bold'>Address:</span> {info.Address}
					</p>
					<p>
						<span className='font-bold'>Date of birth:</span> {info.DOB}
					</p>
					<p>
						<span className='font-bold'>LinkedIn:</span> {info.linkedin}
					</p>
				</div>
			</div>
			<div className='bg-white shadow-lg rounded-lg mt-10 p-10'>
				<h3 className='text-4xl text-red-700 font-semibold'>Education</h3>
				<div className='mt-4'>
					<p>
						I am proud to have graduated from {education.uniName} with a degree
						in {education.degree}. My educational journey began in{" "}
						{education.startedYear}, and after dedicated effort and commitment,
						I successfully completed my studies in {education.gradYear}. The
						time I spent at {education.uniName} was transformative, allowing me
						to delve into a diverse range of subjects and engage with a
						community of learners and educators who inspired me to strive for
						excellence. Throughout my academic endeavors, I developed a solid
						foundation in {education.fieldOfStudy} and honed essential skills
						that have prepared me for real-world challenges. The rigorous
						coursework and collaborative projects challenged me to think
						critically, problem-solve creatively, and communicate effectively.
						These experiences have not only enriched my knowledge but have also
						instilled in me a deep curiosity to explore new horizons. As I step
						into the professional world, I am eager to apply the insights gained
						during my time at {education.uniName}. I am excited to work
						alongside talented individuals, leveraging my education as a
						stepping stone to further growth. With a strong desire to contribute
						meaningfully to the field, I am ready to embark on a journey of
						continuous learning, innovation, and impactful contributions.
					</p>
				</div>
			</div>

			<div className='bg-white shadow-lg rounded-lg mt-10 p-10'>
				<h4 className='text-4xl text-red-700 font-semibold'>Experience</h4>
				<div className='mt-4'>
					<p>
						In my previous role as a {experience.Position} at{" "}
						{experience.Company}, I had the privilege of contributing to a
						dynamic team and enhancing my skill set. Throughout my{" "}
						{experience.Duration} with the company, I gained valuable experience
						and worked on a range of projects that allowed me to deepen my
						understanding of {experience.Experience}. It was an incredible
						opportunity to collaborate with talented professionals and to
						immerse myself in projects that challenged me to innovate and grow.
						I am proud to have been a part of {experience.Company} and to have
						played a role in creating impactful digital solutions. This
						experience has further fueled my passion for frontend development
						and inspired me to continue pushing the boundaries of what's
						possible in the ever-evolving world of technology.
					</p>
				</div>
			</div>
			<div className='bg-white shadow-lg rounded-lg mt-10 p-10'>
				<h4 className='text-4xl text-red-700 font-semibold'>Contact</h4>
				<div className='mt-4'>
					<p>Phone Number:{info.phoneNumber}</p>
					<p>Email:{info.EmaiId}</p>
					<p>LinkedIn:{info.linkedin}</p>
				</div>
			</div>
		</div>
	);
};
