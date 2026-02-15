export interface Experience {
	role: string;
	company: string;
	period: string;
}

export interface Project {
	year: string;
	title: string;
	tags: string[];
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

export interface FocusArea {
	title: string;
	items: string[];
}
