import { useState, useEffect } from 'react';
import { SERVICE_ITEMS, WORK_ITEMS, SKILLS, EDUCATION, EXPERIENCE, ABOUT } from '../constants';
import { ServiceItem, WorkItem, EducationItem, ExperienceItem, AboutItem } from '../types';

export const usePortfolioData = () => {
  const [services, setServices] = useState<ServiceItem[]>([...SERVICE_ITEMS]);
  const [projects, setProjects] = useState<WorkItem[]>([...WORK_ITEMS]);
  const [skills, setSkills] = useState<string[]>([...SKILLS]);
  const [education, setEducation] = useState<EducationItem[]>([...EDUCATION]);
  const [experience, setExperience] = useState<ExperienceItem[]>([...EXPERIENCE]);
  const [about, setAbout] = useState<AboutItem>(ABOUT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Load data from localStorage
      const storedServices = localStorage.getItem('services');
      const storedProjects = localStorage.getItem('projects');
      const storedSkills = localStorage.getItem('skills');
      const storedEducation = localStorage.getItem('education');
      const storedExperience = localStorage.getItem('experience');
      const storedAbout = localStorage.getItem('about');

      // Use stored data if available, otherwise use default data
      if (storedServices) setServices(JSON.parse(storedServices));
      if (storedProjects) setProjects(JSON.parse(storedProjects));
      if (storedSkills) setSkills(JSON.parse(storedSkills));
      if (storedEducation) setEducation(JSON.parse(storedEducation));
      if (storedExperience) setExperience(JSON.parse(storedExperience));
      if (storedAbout) setAbout(JSON.parse(storedAbout));
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    services,
    projects,
    skills,
    education,
    experience,
    about,
    isLoading
  };
}; 