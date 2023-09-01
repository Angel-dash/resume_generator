import React from "react";

export const InfoCard = (props) => {
	const { education, experience, info } = props;

	return (
		<div className='bg-slate-700 py-10 px-10 ml-20 mr-20 mt-20 mb-20 min-w-fit min-h-screen sm:px-5 md:px-20 lg:px-40 '>
			<title className='text-5xl text-black'>
				I'M {info.firstName} {info.lastName}
			</title>
			<div className='bg-red-50'>
				<h1 className=' text-6xl  text-teal-600 px-4 font-sans'>Profile</h1>
				<div className='flex justify-between'>
					<p>
						Name:{info.firstName} {info.lastName}
					</p>
					<p>Email :{info.EmaiId}</p>
					<p>Contact:{info.phoneNumber}</p>
					<p>Address :{info.Address}</p>
					<p>Date of birth :{info.DOB}</p>
					<p>LinkedIn :{info.linkedin}</p>
				</div>
			</div>
			<br />
			<div className='bg-red-50'>
				<h2 className='px-4 text-6xl text-red-700 font-medium  font-sans'>
					Education
				</h2>
				<div className=' py-4 px-4'>
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

			<div>
				<h3 className='text-3xl py-2 px-4 text-red-700 font-medium md:text-6xl'>
					Experience
				</h3>
				<p>
					In my previous role as a {experience.Position} at {experience.Company}
					, I had the privilege of contributing to a dynamic team and enhancing
					my skill set. Throughout my {experience.Duration} with the company, I
					gained valuable experience and worked on a range of projects that
					allowed me to deepen my understanding of {experience.Experience}. It
					was an incredible opportunity to collaborate with talented
					professionals and to immerse myself in projects that challenged me to
					innovate and grow. I am proud to have been a part of{" "}
					{experience.Company} and to have played a role in creating impactful
					digital solutions. This experience has further fueled my passion for
					frontend development and inspired me to continue pushing the
					boundaries of what's possible in the ever-evolving world of
					technology.
				</p>
			</div>
		</div>
	);
};
