import React from "react";
import { TECHNICAL_STACK } from "../constants";

const TechStackSection: React.FC = () => {
	return (
		<section id="tech-stack" className="w-full mb-24">
			<h2 className="font-serif text-[24px] text-gray-900 mb-12 border-b border-gray-200  pb-4">Technical Stack</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{TECHNICAL_STACK.map((category) => (
					<div key={category.title} className="flex flex-col gap-4">
						<h3 className="text-xs font-semibold tracking-widest uppercase text-[#666666] ">{category.title}</h3>
						<ul className="space-y-2">
							{category.skills.map((skill) => (
								<li key={skill} className="text-[#1A1A1A] d font-display">
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default TechStackSection;
