import React from "react";
import { EXPERIENCES } from "../constants";

const ExperienceSection: React.FC = () => {
	return (
		<section id="experience" className="w-full mb-24">
			<h2 className="font-serif text-[24px] text-gray-900  mb-8 border-b border-gray-200 pb-4">Professional Experience</h2>
			<div className="flex flex-col w-full">
				{EXPERIENCES.map((exp, index) => (
					<div key={index} className="py-6 border-b border-[#E5E5E5]  first:pt-0">
						<div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2 md:gap-4">
							<div className="flex flex-col">
								<span className="font-serif text-xl text-gray-900 ">{exp.role}</span>
								<span className="font-display text-sm text-gray-500  mt-1">{exp.company}</span>
							</div>
							<span className="font-display text-sm font-medium text-gray-500  whitespace-nowrap">{exp.period}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;
