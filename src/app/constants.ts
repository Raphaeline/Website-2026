import { Experience, Project, SkillCategory, FocusArea } from "./types";

export const EXPERIENCES: Experience[] = [
	{
		role: "Research Fellow",
		company: "Institute of Power Systems",
		period: "2022 — Present",
	},
	{
		role: "Electrical Engineering Intern",
		company: "Tesla Energy",
		period: "2021 — 2022",
	},
];

export const TECHNICAL_STACK: SkillCategory[] = [
	{
		title: "Analysis",
		skills: ["MATLAB", "Simulink", "PSpice"],
	},
	{
		title: "Design",
		skills: ["Altium Designer", "AutoCAD", "SolidWorks"],
	},
	{
		title: "Programming",
		skills: ["C/C++", "Python", "Verilog"],
	},
];

export const SELECTED_WORKS: Project[] = [
	{
		year: "2023",
		title: "Power Systems Optimization",
		tags: ["THESIS", "SMART GRID"],
		
	},
	{
		year: "2022",
		title: "Embedded Logic Controllers",
		tags: ["CAPSTONE", "IOT"],
	},
	{
		year: "2022",
		title: "Signal Processing in Bio-Electronics",
		tags: ["PUBLICATION", "MATLAB"],
	},
	{
		year: "2021",
		title: "Automated Circuit Topography",
		tags: ["RESEARCH", "PYTHON"],
	},
];

export const FOCUS_AREAS: FocusArea[] = [
	{
		title: "Research Interests",
		items: ["Renewable Energy Integration", "Microgrid Control Systems", "Power Electronics"],
	},
	{
		title: "Professional Focus",
		items: ["Power Systems Engineering", "Sustainable Design", "Grid Automation"],
	},
];

export const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Research"];
