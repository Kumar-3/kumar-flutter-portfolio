export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  challenges: string;
  type: "Medical" | "Enterprise" | "Social" | "Service";
  imageUrl: string;
  downloads?: string;
  androidUrl?: string;
  iosUrl?: string;
}

export type SkillCategory =
  | "Languages"
  | "Frameworks & Architecture"
  | "Backend & Integrations"
  | "Device & Platform Communication"
  | "Tools & DevOps";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: number;
};

export interface Experience {
  company: string;
  logo?: string;
  role: string;
  employmentType?: "Full-time" | "Internship" | "Contract";
  period: string;
  location?: string;
  points: string[];
  current?: boolean;
}
export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  certificateUrl?: string;
  skills?: string[];
  imageUrl?: string;
  type: "course" | "award";
}
