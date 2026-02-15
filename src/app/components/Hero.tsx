"use client";
import React from "react";

const Hero: React.FC = () => {
	return (
		<section id="home" className="py-24 md:py-32 flex flex-col items-center text-center space-y-6">
			<h1 className="font-serif text-6xl md:text-8xl font-medium text-gray-900  tracking-tight leading-tight">Muhamad Al Fitra Zulfikhar Akbar</h1>
			<div className="h-px w-24 bg-primary/40 my-4"></div>
			<p className="text-lg md:text-xl font-light text-gray-600  tracking-wide">Electrical Engineer & Researcher</p>
		</section>
	);
};

export default Hero;
