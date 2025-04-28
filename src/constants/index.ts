import { NavItem, SocialLink, CounterItem, ServiceItem, WorkItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '#home',
  },
  {
    id: 'services',
    title: 'Services',
    href: '#services',
  },
  {
    id: 'resume',
    title: 'Resume',
    href: '#resume',
  },
  {
    id: 'work',
    title: 'Work',
    href: '#work',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    url: 'https://fiverr.com',
    icon: 'ExternalLink',
  },
  {
    id: 'upwork',
    name: 'Upwork',
    url: 'https://upwork.com',
    icon: 'ExternalLink',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    url: 'https://reddit.com',
    icon: 'MessageSquare',
  },
];

export const COUNTER_ITEMS: CounterItem[] = [
  {
    id: 'experience',
    value: 4,
    label: 'Years of Experience',
  },
  {
    id: 'projects',
    value: 15,
    label: 'Projects Completed',
  },
  {
    id: 'technologies',
    value: 10,
    label: 'Technologies Mastered',
  },
  {
    id: 'commits',
    value: 810,
    label: 'Code Commits',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    icon: 'Code',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    icon: 'Palette',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    icon: 'PenTool',
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.',
    icon: 'Search',
  },
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'project-1',
    title: 'Fullstack E-commerce Platform',
    description: 'A fully-featured e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    technologies: 'Next.js, Tailwind.css, Node.js'
  },
  {
    id: 'project-2',
    title: 'Health & Fitness App',
    description: 'A mobile application for tracking fitness goals, nutrition, and workout routines.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#',
    technologies: 'React Native, Firebase, Redux'
  },
  {
    id: 'project-3',
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for visualizing financial data and trends with real-time updates.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['TypeScript', 'D3.js', 'Express'],
    link: '#',
    technologies: 'TypeScript, D3.js, Express'
  },
  {
    id: 'project-4',
    title: 'Social Media Analytics',
    description: 'A platform for tracking and analyzing social media engagement and performance metrics.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Next.js', 'Python', 'PostgreSQL'],
    link: '#',
    technologies: 'Next.js, Python, PostgreSQL'
  },
];

export const SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3', 
  'MongoDB', 'PostgreSQL', 'Express', 'Next.js', 'GraphQL', 'Redux', 
  'React Native', 'Git', 'Docker', 'AWS', 'Firebase', 'TailwindCSS'
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    year: '2018 - 2020',
    description: 'Specialized in Software Engineering and Machine Learning'
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'National University',
    year: '2014 - 2018',
    description: 'Graduated with honors, focusing on web technologies'
  }
];

export const EXPERIENCE = [
  {
    position: 'Senior Software Developer',
    company: 'TechCorp Inc.',
    year: '2021 - Present',
    description: 'Lead developer for enterprise-level web applications, managing a team of 5 developers.'
  },
  {
    position: 'Software Developer',
    company: 'Digital Solutions Ltd.',
    year: '2018 - 2021',
    description: 'Developed and maintained multiple client projects using React and Node.js.'
  },
  {
    position: 'Junior Developer',
    company: 'WebStart Studio',
    year: '2016 - 2018',
    description: 'Assisted in the development of web applications and gained experience in front-end technologies.'
  }
];

export const ABOUT = {
  title: 'Why hire me?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  name: 'Huzaifa Shahab',
  phone: '(+40) 321 654 876',
  experience: '5+ Years',
  skype: 'huzaifa.01',
  nationality: 'Pakistani',
  email: 'huzaifa.01@gmail.com',
  freelance: 'Available',
  languages: 'English, Urdu',
  personalInfo: 'Personal information and contact details.'
};