import React, { useState, useEffect } from 'react';
import { SERVICE_ITEMS, WORK_ITEMS, EDUCATION, EXPERIENCE, SKILLS, ABOUT } from '../constants';
import { WorkItem, ServiceItem } from '../types';

enum FormType {
  Services = 'services',
  Projects = 'projects',
  Skills = 'skills',
  Education = 'education',
  Experience = 'experience',
  About = 'about'
}

const AdminDashboard: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.Services);
  const [services, setServices] = useState<ServiceItem[]>([...SERVICE_ITEMS]);
  const [projects, setProjects] = useState<WorkItem[]>([...WORK_ITEMS]);
  const [skills, setSkills] = useState<string[]>([...SKILLS]);
  const [education, setEducation] = useState([...EDUCATION]);
  const [experience, setExperience] = useState([...EXPERIENCE]);
  const [about, setAbout] = useState(ABOUT || {
    title: 'About Me',
    subtitle: 'Software Developer',
    description: 'I am a passionate software developer specializing in web development.',
    profileImage: ''
  });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    const storedProjects = localStorage.getItem('projects');
    const storedSkills = localStorage.getItem('skills');
    const storedEducation = localStorage.getItem('education');
    const storedExperience = localStorage.getItem('experience');
    const storedAbout = localStorage.getItem('about');

    if (storedServices) setServices(JSON.parse(storedServices));
    if (storedProjects) setProjects(JSON.parse(storedProjects));
    if (storedSkills) setSkills(JSON.parse(storedSkills));
    if (storedEducation) setEducation(JSON.parse(storedEducation));
    if (storedExperience) setExperience(JSON.parse(storedExperience));
    if (storedAbout) setAbout(JSON.parse(storedAbout));
  }, []);

  // Handle admin login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password authentication - in a real app, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Invalid password');
    }
  };

  // Handle saving data to localStorage
  const saveChanges = () => {
    try {
      localStorage.setItem('services', JSON.stringify(services));
      localStorage.setItem('projects', JSON.stringify(projects));
      localStorage.setItem('skills', JSON.stringify(skills));
      localStorage.setItem('education', JSON.stringify(education));
      localStorage.setItem('experience', JSON.stringify(experience));
      localStorage.setItem('about', JSON.stringify(about));
      setMessage('Changes saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving changes');
    }
  };

  // Service form handlers
  const [newService, setNewService] = useState<ServiceItem>({
    id: '',
    title: '',
    description: '',
    icon: 'Code'
  });

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };

  const addService = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = newService.id || `service-${Date.now()}`;
    setServices([...services, { ...newService, id: serviceId }]);
    setNewService({
      id: '',
      title: '',
      description: '',
      icon: 'Code'
    });
  };

  const removeService = (id: string) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Project form handlers
  const [newProject, setNewProject] = useState<WorkItem>({
    id: '',
    title: '',
    description: '',
    image: '',
    tags: [],
    technologies: ''
  });

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setNewProject(prev => ({ ...prev, tags: value.split(',').map(tag => tag.trim()) }));
    } else {
      setNewProject(prev => ({ ...prev, [name]: value }));
    }
  };

  const addProject = (e: React.FormEvent) => {
    e.preventDefault();
    const projectId = newProject.id || `project-${Date.now()}`;
    setProjects([...projects, { ...newProject, id: projectId }]);
    setNewProject({
      id: '',
      title: '',
      description: '',
      image: '',
      tags: [],
      technologies: ''
    });
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Skills form handlers
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  // Education form handlers
  const [newEducation, setNewEducation] = useState({
    id: '',
    degree: '',
    institution: '',
    year: '',
    description: ''
  });

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const addEducation = (e: React.FormEvent) => {
    e.preventDefault();
    const educationId = newEducation.id || `education-${Date.now()}`;
    setEducation([...education, { ...newEducation, id: educationId }]);
    setNewEducation({
      id: '',
      degree: '',
      institution: '',
      year: '',
      description: ''
    });
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(item => item.id !== id));
  };

  // Experience form handlers
  const [newExperience, setNewExperience] = useState({
    id: '',
    position: '',
    company: '',
    duration: '',
    description: ''
  });

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({ ...prev, [name]: value }));
  };

  const addExperience = (e: React.FormEvent) => {
    e.preventDefault();
    const experienceId = newExperience.id || `experience-${Date.now()}`;
    setExperience([...experience, { ...newExperience, id: experienceId }]);
    setNewExperience({
      id: '',
      position: '',
      company: '',
      duration: '',
      description: ''
    });
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter(item => item.id !== id));
  };

  // About form handlers
  const handleAboutChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAbout(prev => ({ ...prev, [name]: value }));
  };

  // Forms for different content types
  const renderServiceForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
      <form onSubmit={addService} className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Title</label>
          <input
            type="text"
            name="title"
            value={newService.title}
            onChange={handleServiceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Description</label>
          <textarea
            name="description"
            value={newService.description}
            onChange={handleServiceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Icon</label>
          <select
            name="icon"
            value={newService.icon}
            onChange={handleServiceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
          >
            <option value="Code">Code</option>
            <option value="Palette">Palette</option>
            <option value="PenTool">PenTool</option>
            <option value="Search">Search</option>
            <option value="Smartphone">Smartphone</option>
            <option value="MessageCircle">MessageCircle</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add Service
        </button>
      </form>

      <div className="space-y-4">
        {services.map(service => (
          <div key={service.id} className="p-4 bg-[#1e1e1e] rounded-lg flex justify-between items-center">
            <div>
              <h4 className="font-bold text-white">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
            <button
              onClick={() => removeService(service.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Projects</h3>
      <form onSubmit={addProject} className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Title</label>
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleProjectChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Description</label>
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleProjectChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Image URL</label>
          <input
            type="text"
            name="image"
            value={newProject.image}
            onChange={handleProjectChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={newProject.tags.join(', ')}
            onChange={handleProjectChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Technologies</label>
          <input
            type="text"
            name="technologies"
            value={newProject.technologies}
            onChange={handleProjectChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add Project
        </button>
      </form>

      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="p-4 bg-[#1e1e1e] rounded-lg flex justify-between items-start">
            <div>
              <h4 className="font-bold text-white">{project.title}</h4>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-[#252525] text-sm rounded-full text-white">{tag}</span>
                ))}
              </div>
            </div>
            <button
              onClick={() => removeProject(project.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkillsForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Skills</h3>
      <form onSubmit={addSkill} className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Skill Name</label>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add Skill
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="px-3 py-2 bg-[#1e1e1e] rounded-lg flex items-center">
            <span className="text-white">{skill}</span>
            <button
              onClick={() => removeSkill(skill)}
              className="ml-2 w-5 h-5 flex items-center justify-center bg-red-500 rounded-full text-xs text-white"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducationForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
      <form onSubmit={addEducation} className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Degree</label>
          <input
            type="text"
            name="degree"
            value={newEducation.degree}
            onChange={handleEducationChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Institution</label>
          <input
            type="text"
            name="institution"
            value={newEducation.institution}
            onChange={handleEducationChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Year</label>
          <input
            type="text"
            name="year"
            value={newEducation.year}
            onChange={handleEducationChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Description</label>
          <textarea
            name="description"
            value={newEducation.description}
            onChange={handleEducationChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add Education
        </button>
      </form>

      <div className="space-y-4">
        {education.map((item: any) => (
          <div key={item.id} className="p-4 bg-[#1e1e1e] rounded-lg flex justify-between items-start">
            <div>
              <h4 className="font-bold text-white">{item.degree}</h4>
              <p className="text-gray-400">{item.institution} - {item.year}</p>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
            <button
              onClick={() => removeEducation(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExperienceForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Experience</h3>
      <form onSubmit={addExperience} className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Position</label>
          <input
            type="text"
            name="position"
            value={newExperience.position}
            onChange={handleExperienceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Company</label>
          <input
            type="text"
            name="company"
            value={newExperience.company}
            onChange={handleExperienceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Duration</label>
          <input
            type="text"
            name="duration"
            value={newExperience.duration}
            onChange={handleExperienceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Description</label>
          <textarea
            name="description"
            value={newExperience.description}
            onChange={handleExperienceChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Add Experience
        </button>
      </form>

      <div className="space-y-4">
        {experience.map((item: any) => (
          <div key={item.id} className="p-4 bg-[#1e1e1e] rounded-lg flex justify-between items-start">
            <div>
              <h4 className="font-bold text-white">{item.position}</h4>
              <p className="text-gray-400">{item.company} - {item.duration}</p>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
            <button
              onClick={() => removeExperience(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAboutForm = () => (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">About Me</h3>
      <form className="mb-6 p-4 bg-[#1e1e1e] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Title (Why hire me?)</label>
            <input
              type="text"
              name="title"
              value={about.title}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Description</label>
            <textarea
              name="description"
              value={about.description}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
              rows={1}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-white">Personal Info Description</label>
          <input
            type="text"
            name="personalInfo"
            value={about.personalInfo}
            onChange={handleAboutChange}
            className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
          />
        </div>

        <h4 className="text-lg font-semibold mb-2 text-white">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              value={about.name}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Phone</label>
            <input
              type="text"
              name="phone"
              value={about.phone}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Experience</label>
            <input
              type="text"
              name="experience"
              value={about.experience}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Skype</label>
            <input
              type="text"
              name="skype"
              value={about.skype}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={about.nationality}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Email</label>
            <input
              type="email"
              name="email"
              value={about.email}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Freelance</label>
            <input
              type="text"
              name="freelance"
              value={about.freelance}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white">Languages</label>
            <input
              type="text"
              name="languages"
              value={about.languages}
              onChange={handleAboutChange}
              className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
            />
          </div>
        </div>
      </form>

      <div className="p-4 bg-[#1e1e1e] rounded-lg">
        <h4 className="font-bold text-white mb-4">Preview</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{about.title}</h3>
            <p className="text-gray-400">{about.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">About me</h3>
            <p className="text-gray-400 mb-4">{about.personalInfo}</p>
            
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <div className="text-gray-400">Name</div>
                <div className="text-white">{about.name}</div>
              </div>
              <div>
                <div className="text-gray-400">Phone</div>
                <div className="text-white">{about.phone}</div>
              </div>
              <div>
                <div className="text-gray-400">Experience</div>
                <div className="text-white">{about.experience}</div>
              </div>
              <div>
                <div className="text-gray-400">Skype</div>
                <div className="text-white">{about.skype}</div>
              </div>
              <div>
                <div className="text-gray-400">Nationality</div>
                <div className="text-white">{about.nationality}</div>
              </div>
              <div>
                <div className="text-gray-400">Email</div>
                <div className="text-white">{about.email}</div>
              </div>
              <div>
                <div className="text-gray-400">Freelance</div>
                <div className="text-white">{about.freelance}</div>
              </div>
              <div>
                <div className="text-gray-400">Languages</div>
                <div className="text-white">{about.languages}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <section className="py-24 bg-[#121212] min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full px-6 py-8 bg-[#1e1e1e] rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Admin Login</h2>
          {message && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-center">
              {message}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#252525] border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#121212] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Admin Dashboard</h2>
          <div className="space-x-2">
            <button
              onClick={saveChanges}
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Save All Changes
            </button>
            <a
              href="/"
              className="px-4 py-2 bg-[#252525] text-white rounded-lg font-medium inline-block hover:bg-[#333] transition-colors"
            >
              Back to Site
            </a>
          </div>
        </div>

        {message && (
          <div className="mb-6 p-3 bg-green-500/20 text-green-300 rounded-lg text-center">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 bg-[#1e1e1e] p-4 rounded-lg h-fit">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveForm(FormType.About)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.About ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveForm(FormType.Services)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.Services ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveForm(FormType.Projects)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.Projects ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveForm(FormType.Skills)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.Skills ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveForm(FormType.Education)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.Education ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveForm(FormType.Experience)}
                className={`w-full text-left px-4 py-2 rounded-lg ${activeForm === FormType.Experience ? 'bg-green-500 text-white' : 'bg-[#252525] text-white hover:bg-[#333]'} transition-colors`}
              >
                Experience
              </button>
            </nav>
          </div>

          <div className="lg:col-span-3 bg-[#1e1e1e] p-6 rounded-lg">
            {activeForm === FormType.About && renderAboutForm()}
            {activeForm === FormType.Services && renderServiceForm()}
            {activeForm === FormType.Projects && renderProjectForm()}
            {activeForm === FormType.Skills && renderSkillsForm()}
            {activeForm === FormType.Education && renderEducationForm()}
            {activeForm === FormType.Experience && renderExperienceForm()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard; 