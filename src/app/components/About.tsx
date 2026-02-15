import React from "react";

const About: React.FC = () => {
	return (
		<div id="about">
			<section className="w-full mb-16 border-t border-gray-100  pt-16">
				<div className="max-w-3xl">
					<p className="font-serif text-2xl md:text-[24px] text-gray-900 leading-relaxed mb-6">A dedicated researcher bridging the gap between theoretical power systems and practical hardware implementation.</p>
					<p className="font-display text-lg md:text-[18px] font-light text-gray-600  leading-relaxed">
						My work lies at the intersection of power systems and embedded intelligence. I focus on developing sustainable, high-efficiency grid solutions through rigorous mathematical modeling. Currently seeking opportunities
						to apply research in industrial automation.
					</p>
				</div>
			</section>

			<section className="w-full mb-24 border-t border-gray-100  pt-8 pb-8">
				<div className="flex flex-wrap gap-8 items-center">
					<a className="text-primary font-display text-base hover:opacity-70 transition-opacity" href="mailto:j.thorne@university.edu">
						Email
					</a>
					<a className="text-primary font-display text-base hover:opacity-70 transition-opacity" href="#">
						LinkedIn
					</a>
					<a className="text-primary font-display text-base hover:opacity-70 transition-opacity" href="#">
						Google Scholar
					</a>
				</div>
			</section>
		</div>
	);
};

export default About;
