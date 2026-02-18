export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: "Frontend" | "Backend" | "Fullstack" | "Mobile";
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Mobile";
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
}

export type ProjectCategory = "All" | "Frontend" | "Backend" | "Fullstack" | "Mobile";
