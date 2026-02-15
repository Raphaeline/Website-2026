import React from "react";
import { ArrowRight } from "lucide-react";
import { SELECTED_WORKS } from "../constants";

const SelectedWorksSection: React.FC = () => {
	return (
		<section id="projects" className="w-full mb-24">
			<div className="flex items-end justify-between mb-8 pb-4 border-b border-gray-200 ">
				<h2 className="font-serif text-[24px] text-gray-900 ">Selected Works</h2>
				{/* <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 ">Archive</span> */}
			</div>
			<div className="flex flex-col">
				{SELECTED_WORKS.map((work, index) => (
					<article key={index} className="group relative py-8 border-b border-gray-200  transition-colors duration-500 hover:border-primary/30">
						<p className="block grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 items-center">
							<div className="md:col-span-1 text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">{work.year}</div>
							<div className="md:col-span-7">
								<h3 className="font-serif text-3xl md:text-4xl text-gray-900 group-hover:text-primary transition-colors duration-300">{work.title}</h3>
							</div>
							<div className="md:col-span-4 flex md:justify-end gap-2 flex-wrap">
								{work.tags.map((tag) => (
									<span
										key={tag}
										className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-gray-100  text-gray-600  group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300"
									>
										{tag}
									</span>
								))}
							</div>
							{/* <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden lg:block text-primary">
								<ArrowRight size={32} />
							</div> */}
						</p>
					</article>
				))}
			</div>
			{/* <div className="mt-12 flex justify-center md:justify-start">
				<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity" href="#">
					View Full Archive
					<ArrowRight size={16} />
				</a>
			</div> */}
		</section>
	);
};

export default SelectedWorksSection;
