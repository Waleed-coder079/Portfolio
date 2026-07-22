export interface ExperienceEntry {
  role: string;
  company: string;
  companyLogo?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  stack: string[];
  promoted?: boolean;
}
