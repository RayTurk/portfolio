import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sprout,
  Gavel,
  CarFront,
  Code,
  Globe,
  Users,
  ShoppingCart,
  Laptop,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Petitti's Garden Center",
      description: 'A retail gardening chain ready to bring their business to the digital age.',
      longDescription: 'Transformed Petitti\'s Garden Center\'s online presence with a modern e-commerce solution. Implemented advanced features for inventory management, seasonal product highlights, and a seamless shopping experience.',
      tech: ['WordPress', 'Payment Processing', 'eCommerce', 'WooCommerce', 'Custom Plugin Development'],
      stats: {
        completion: '2023',
        type: 'E-commerce',
        role: 'Lead Developer',
        impact: '300% online sales increase'
      },
      links: {
        demo: 'https://www.petittigardencenter.com/',
      },
      image: '/api/placeholder/600/300',
      icon: <Sprout className="w-5 h-5" />,
      features: [
        'Advanced inventory management',
        'Seasonal product highlights',
        'Custom plant care guides',
        'Store locator integration'
      ]
    },
    {
      title: "Geauga County's Government Multisite",
      description: 'Bringing all departments of the county together on one Multisite build.',
      longDescription: 'Developed a comprehensive multisite solution for Geauga County, enabling efficient management of multiple department websites while maintaining consistent branding and functionality.',
      tech: ['User Permissions', 'WordPress Multisite', 'Custom Theme', 'API Integration'],
      stats: {
        completion: '2024',
        type: 'Government',
        role: 'Technical Lead',
        impact: '25+ departments unified'
      },
      links: {
        demo: 'https://geauga.oh.gov/',
      },
      image: '/api/placeholder/600/300',
      icon: <Gavel className="w-5 h-5" />,
      features: [
        'Centralized content management',
        'Department-specific customization',
        'Advanced user permissions',
        'Integrated event calendar'
      ]
    },
    {
      title: 'RadAir Car Care',
      description: 'Modernizing the Car Care experience.',
      longDescription: 'Revolutionized RadAir\'s digital presence with a modern, user-friendly website featuring online appointment booking, service history tracking, and real-time updates.',
      tech: ['WordPress Theme Development', 'WordPress Multisite', 'Appointment Booking'],
      stats: {
        completion: '2023',
        type: 'Automotive',
        role: 'WordPress Developer',
        impact: '50% more online bookings'
      },
      links: {
        demo: 'https://radair.com',
      },
      image: '/api/placeholder/600/300',
      icon: <CarFront className="w-5 h-5" />,
      features: [
        'Online appointment scheduling',
        'Service history tracking',
        'Real-time status updates',
        'Location-based services'
      ]
    },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <GradientBackground />
      <div className="relative h-full p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 text-white/90 hover:text-white hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Project Overview Section */}
            <Card className="glass-card p-6 rounded-2xl lg:col-span-12">
              <h1 className="text-3xl font-bold text-white text-glow mb-4">
                Featured <span className="text-white/90">Projects</span>
              </h1>
              <p className="text-white/80 text-sm">
                A showcase of my recent work in WordPress development, featuring custom solutions for various industries.
              </p>
            </Card>

            {/* Project Cards Grid */}
            <div className="lg:col-span-8 grid gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isActive={activeProject === index}
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                />
              ))}
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              <Card className="glass-card p-6 rounded-2xl sticky top-4">
                <h2 className="text-xl font-bold text-white mb-4">
                  Project <span className="text-white/90">Stats</span>
                </h2>
                {activeProject !== null ? (
                  <ProjectDetails project={projects[activeProject]} />
                ) : (
                  <div className="text-white/70 text-sm">
                    Select a project to view details
                  </div>
                )}
              </Card>

              {/* Quick Stats */}
              <Card className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">
                  Development <span className="text-white/90">Overview</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <StatItem icon={<Code />} label="Custom Themes" value="10+" />
                  <StatItem icon={<Globe />} label="Active Sites" value="50+" />
                  <StatItem icon={<Users />} label="Clients" value="30+" />
                  <StatItem icon={<ShoppingCart />} label="E-commerce" value="15+" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isActive, onClick }) => (
  <Card
    className={`glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer
      ${isActive ? 'ring-2 ring-purple-500/50' : ''}`}
    onClick={onClick}
  >
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 glass-button p-2 rounded-full">
        {project.icon}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button p-2 rounded-full hover:scale-110 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-4 h-4 text-white/90" />
        </a>
      </div>
      <p className="text-white/80 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="glass-button px-3 py-1 rounded-full text-xs text-white/90"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="glass-button px-3 py-1 rounded-full text-xs text-white/90">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>
    </div>
  </Card>
);

const ProjectDetails = ({ project }) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <p className="text-white/80 text-sm">{project.longDescription}</p>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(project.stats).map(([key, value]) => (
          <div key={key} className="glass-button p-3 rounded-xl">
            <div className="text-xs text-white/60 uppercase">{key}</div>
            <div className="text-sm text-white mt-1">{value}</div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-white font-medium mb-3">Key Features</h3>
      <ul className="space-y-2">
        {project.features.map((feature, index) => (
          <li key={index} className="text-white/70 text-sm flex items-center gap-2">
            <ArrowRight className="w-3 h-3 text-purple-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const StatItem = ({ icon, label, value }) => (
  <div className="glass-button p-3 rounded-xl text-center">
    {React.cloneElement(icon, { className: 'w-5 h-5 text-purple-400 mx-auto mb-2' })}
    <div className="text-lg font-bold text-white">{value}</div>
    <div className="text-xs text-white/70">{label}</div>
  </div>
);

export default Projects;