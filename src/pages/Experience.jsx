import React from 'react';
import { Card } from '../components/ui/card';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      title: 'Android Developer',
      company: 'Prodigy InfoTech',
      period: 'Aug 2024 - Sep 2024',
      duration: '2 mos',
      description: 'Developed and maintained Android applications using modern technologies and best practices.',
      responsibilities: [
        'Built responsive and user-friendly mobile applications',
        'Collaborated with cross-functional teams',
        'Implemented new features and optimizations'
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 text-white/90 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white text-glow mb-6">
          My <span className="text-white/90 text-shadow">Experience</span>
        </h1>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, company, period, duration, description, responsibilities }) => (
  <Card className="glass-card p-6 rounded-2xl">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-white/90">{company}</p>
        <p className="text-white/80 text-sm">{period} · {duration}</p>
      </div>
      <div className="glass-button p-2 rounded-full">
        <Briefcase className="w-5 h-5 text-white/90" />
      </div>
    </div>

    <p className="text-white/90 mb-4">{description}</p>

    <div>
      <h3 className="text-white font-semibold mb-2">Key Responsibilities:</h3>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-white/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

export default Experience;