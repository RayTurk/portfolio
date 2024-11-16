
import React from 'react';
import { Card } from '../components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Petitti\'s Garden Center',
      description: 'A retail gardening chain ready to bring their business to the digital age.',
      tech: ['WordPress', 'Payment Processing', 'eCommerce'],
      links: {
        demo: 'https://www.petittigardencenter.com/',
      },
      image: '/api/placeholder/600/300'
    },
    {
      title: 'Geauga County\'s Government Multisite',
      description: 'Bringing all departments of the county together on one Multisite build.',
      tech: ['User Permissions', 'WordPress Multisite'],
      links: {
        demo: 'https://geauga.oh.gov/',
      },
      image: '/api/placeholder/600/300'
    },
    {
      title: 'RadAir Car Care',
      description: 'Modernizing the Car Care experience.',
      tech: ['WordPress Theme Development', 'WordPress Multisite'],
      links: {
        demo: 'https://radair.com',
      },
      image: '/api/placeholder/600/300'
    },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 text-white/90 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white text-glow mb-6">
          My <span className="text-white/90 text-shadow">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <Card className="glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
      <p className="text-white/80 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="glass-button px-3 py-1 rounded-full text-sm text-white/90"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button px-4 py-2 rounded-lg text-white/90 hover:text-white inline-flex items-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Live Site
        </a>
      </div>
    </div>
  </Card>
);

export default Projects;