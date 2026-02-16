import { Experience, Project, SkillCategory, FocusArea } from "./types";

export const EXPERIENCES: Experience[] = [
	{
		role: "IoT & Hardware Engineer",
		company: "McEasy",
		period: "2025 — Present",
	},
	{
		role: "Field Engineer Intern",
		company: "PT. Purnama Manggala Prima",
		period: "2025 — 2025",
	},
];

export const TECHNICAL_STACK: SkillCategory[] = [
	{
		title: "Analysis",
		skills: ["MATLAB", "Simulink", "LTSpice"],
	},
	// {
	// 	title: "Design",
	// 	skills: ["Altium Designer", "AutoCAD", "SolidWorks"],
	// },
	{
		title: "Programming",
		skills: ["C/C++", "Python", "JS/TS"],
	},
];

export const SELECTED_WORKS: Project[] = [
	{
		year: "2025",
		title: "Implementation of Farthest Point Sampling and Data Augmentation for Human Activity Recognition with PointNet Model Based on Point Cloud from FMCW Radar",
		tags: ["PUBLICATION", "Human Activity Recognition", "FMCW Radar"]
	},
	{
		year: "2025",
		title: "Implementation of PointNet Model for Human Activity Recognition Based on Point Cloud Data from FMCW Radar Sensor",
		tags: ["THESIS", "Human Activity Recognition", "FMCW Radar",],
		
	},
	{
		year: "2025",
		title: "Implementation of Solar-Powered Public Street Lighting in Rural Areas of Bandung to Improve Village Illumination",
		tags: ["CAPSTONE", "IoT"],
	},
	{
		year: "2024",
		title: "Website Application for Smart Shopping Cart",
		tags: ["PATENT"],
	},
	// {
	// 	year: "2021",
	// 	title: "Automated Circuit Topography",
	// 	tags: ["RESEARCH", "PYTHON"],
	// },
];

export const FOCUS_AREAS: FocusArea[] = [
	{
		title: "Research Interests",
		items: ["Signal Processing", "Deep Learning", "Internet of Things"],
	},
	{
		title: "Professional Focus",
		items: ["Internet of Things", "Hardware Design", "System Design"],
	},
];

export const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Research"];
