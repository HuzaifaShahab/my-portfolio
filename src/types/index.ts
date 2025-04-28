// Define types for the portfolio website

export interface NavItem {
  id: string;
  title: string;
  href: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface CounterItem {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  technologies: string;
}

export interface EducationItem {
  id?: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface ExperienceItem {
  id?: string;
  position: string;
  company: string;
  year: string;
  description: string;
}

export interface AboutItem {
  title: string;
  description: string;
  name: string;
  phone: string;
  experience: string;
  skype: string;
  nationality: string;
  email: string;
  freelance: string;
  languages: string;
  personalInfo: string;
}