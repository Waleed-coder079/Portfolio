export type ProjectCategory = "voice-ai" | "rag" | "automation" | "computer-vision";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  problem: string;
  solution: string;
  techStack: { name: string; why: string }[];
  links?: { github?: string; demo?: string };
  hasScreenshots: boolean;
  challenges?: string;
  lessonsLearned?: string;
  impact?: string;
}
