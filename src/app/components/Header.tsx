"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="w-full fixed top-0 left-0 bg-white/90  backdrop-blur-md z-50 border-b border-gray-100 transition-colors duration-300">
			<div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
				<a className="font-serif text-2xl font-bold tracking-tight hover:text-primary transition-colors duration-300 z-50 relative text-gray-900" href="#">
					A. Zulfikhar
				</a>

				{/* Desktop Nav */}
				<nav className="hidden md:flex space-x-12 text-sm font-medium tracking-wide uppercase text-gray-500">
					{NAV_LINKS.map((link) => (
						<a key={link} href={`#${link.toLowerCase()}`} className={`hover:text-primary transition-colors duration-300 ${link === "Home" ? "text-primary" : ""}`}>
							{link}
						</a>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Mobile Nav Overlay */}
				<div
					className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
				>
					{NAV_LINKS.map((link) => (
						<a key={link} href={`#${link.toLowerCase()}`} className="text-xl font-medium tracking-wide uppercase text-gray-900  hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
							{link}
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
