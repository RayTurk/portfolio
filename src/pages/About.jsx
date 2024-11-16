import React from 'react';
import { Card } from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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

        <Card className="glass-card p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-white text-glow mb-6">
            About <span className="text-white/90 text-shadow">Me</span>
          </h1>

          <div className="space-y-6 text-white/90">
            <p className="readable-text">
            I'm a WordPress developer passionate about crafting digital experiences, from small business websites to enterprise-level solutions. With over 5 years of experience in custom theme and plugin development, I specialize in creating efficient, scalable web solutions that bring ideas to life.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <SkillCategory title="Frontend" skills={['React', 'SASS/CSS', 'HTML', 'JavaScript', 'Tailwind', 'WordPress Theme Development', 'Three.js/ GSAP']} />
                <SkillCategory title="Backend" skills={['WordPress Plugin Development', 'Node.js', 'Python', 'MySQL', 'RESTful APIs']} />
                <SkillCategory title="Tools" skills={['Git', 'VS Code', 'Google Analytics', 'Figma', 'Adobe XD']} />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Interests</h2>
              <p className="readable-text">
              Beyond coding, I'm a Cleveland native who believes in the power of web technology to transform businesses. I enjoy connecting with clients, understanding their vision, and providing comprehensive web solutions including hosting, analytics, and ongoing support. What started as building a gaming community website in high school has grown into a passion for helping others establish their digital presence.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="glass-card p-4 rounded-xl">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <ul className="space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="text-white/80 text-sm">{skill}</li>
      ))}
    </ul>
  </div>
);

export default About;