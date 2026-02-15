import React from "react";
import { FOCUS_AREAS } from "../constants";

const FocusSection: React.FC = () => {
	return (
		<section id="research" className="w-full border-t border-gray-100  pt-16">
			<h2 className="font-serif text-[24px] text-gray-900  mb-12">Academic & Professional Focus</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{FOCUS_AREAS.map((area) => (
					<div key={area.title} className="flex flex-col gap-6">
						<h3 className="text-xs font-semibold tracking-widest uppercase text-[#666666]  mb-2">{area.title}</h3>
						<ul className="space-y-4">
							{area.items.map((item) => (
								<li key={item} className="flex items-start">
									<span className="text-primary mr-3 text-lg">•</span>
									<span className="text-[#1A1A1A]  font-display text-lg">{item}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default FocusSection;
