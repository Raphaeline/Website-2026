import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="w-full bg-white border-t border-gray-200  py-12">
			<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
				<div className="mb-8 md:mb-0">
					<span className="font-serif text-lg font-semibold text-gray-900 ">A. Zulfikhar</span>
					<p className="text-sm text-gray-500 mt-2">© 2026 Zulfikhar Akbar. All Rights Reserved.</p>
				</div>
				<div className="flex flex-col md:flex-row gap-8 md:gap-12">
					<div className="flex flex-col gap-2">
						<h5 className="text-xs font-bold uppercase tracking-widest text-gray-400  mb-1">Social</h5>
						<a className="text-sm text-gray-600 hover:text-primary transition-colors" href="https://www.linkedin.com/in/zulfikhar-akbar/">
							LinkedIn
						</a>
						<a className="text-sm text-gray-600  hover:text-primary transition-colors" href="https://www.researchgate.net/profile/Muhamad-Zulfikhar-Akbar/">
							ResearchGate
						</a>
						{/* <a className="text-sm text-gray-600  hover:text-primary transition-colors" href="#">
							Twitter
						</a> */}
					</div>
					<div className="flex flex-col gap-2">
						<h5 className="text-xs font-bold uppercase tracking-widest text-gray-400  mb-1">Contact</h5>
						<a className="text-sm text-gray-600  hover:text-primary transition-colors" href="mailto:j.thorne@university.edu">
							j.thorne@university.edu
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
