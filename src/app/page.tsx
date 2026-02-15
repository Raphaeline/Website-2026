import Image from "next/image";
import React from "react";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import FocusSection from "./components/FocusSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWorksSection from "./components/SelectedWorksSection";
import TechStackSection from "./components/TechStacSection";

export default function Home() {
	return (
		<div className="bg-white text-gray-900 font-display min-h-screen flex flex-col transition-colors duration-300">
			<Header />
			<main className="flex-grow pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
				<Hero />
				<About />
				<ExperienceSection />
				<TechStackSection />
				<SelectedWorksSection />
				<FocusSection />
			</main>
			<Footer />
		</div>
	);
}
