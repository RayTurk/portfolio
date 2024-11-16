import React from 'react';
import { Card } from '../components/ui/card';
import { ArrowLeft, GraduationCap, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  const education = [
    {
      school: 'JCT Institutions',
      degree: 'BE.CSE',
      period: 'Sep 2023 - Jul 2026',
      description: 'Bachelor of Engineering in Computer Science',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development',
        'Mobile App Development'
      ]
    },
    {
      school: 'M-DIT Polytechnic',
      degree: 'DCE',
      period: 'Sep 2021 - Apr 2023',
      description: 'Diploma in Computer Engineering',
      courses: [
        'Programming Fundamentals',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering'
      ]
    }
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
          My <span className="text-white/90 text-shadow">Education</span>
        </h1>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ school, degree, period, description, courses }) => (
  <Card className="glass-card p-6 rounded-2xl">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold text-white">{school}</h2>
        <p className="text-white/90">{degree}</p>
        <p className="text-white/80 text-sm">{period}</p>
      </div>
      <div className="glass-button p-2 rounded-full">
        <GraduationCap className="w-5 h-5 text-white/90" />
      </div>
    </div>

    <p className="text-white/90 mb-4">{description}</p>

    <div>
      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
        <Book className="w-4 h-4" />
        Key Courses:
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {courses.map((course, index) => (
          <li key={index} className="text-white/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
            {course}
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

export default Education;