import React from 'react';
import { Card } from '../components/ui/card';
import {
  ArrowLeft,
  Code2,
  Server,
  Wrench,
  Heart,
  Mail,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';

const About = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Main Introduction - Spans 8 columns */}
            <Card className="glass-card p-6 rounded-2xl md:col-span-8">
              <h1 className="text-3xl font-bold text-white text-glow mb-4">
                About <span className="text-white/90">Me</span>
              </h1>
              <p className="text-white/90 text-sm leading-relaxed">
                I'm a WordPress developer passionate about crafting digital experiences, from small business websites to enterprise-level solutions. With over 5 years of experience in custom theme and plugin development, I specialize in creating efficient, scalable web solutions that bring ideas to life.
              </p>
            </Card>

            {/* Quick Stats - Spans 4 columns */}
            <Card className="glass-card p-6 rounded-2xl md:col-span-4">
              <div className="grid grid-cols-2 gap-4">
                <StatItem
                  icon={<Briefcase className="w-5 h-5 text-purple-400" />}
                  value="5+"
                  label="Years Experience"
                />
                <StatItem
                  icon={<Star className="w-5 h-5 text-purple-400" />}
                  value="50+"
                  label="Projects"
                />
                <StatItem
                  icon={<GraduationCap className="w-5 h-5 text-purple-400" />}
                  value="4+"
                  label="Certifications"
                />
                <StatItem
                  icon={<Mail className="w-5 h-5 text-purple-400" />}
                  value="24/7"
                  label="Support"
                />
              </div>
            </Card>

            {/* Skills Section - Using 3 columns layout */}
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <SkillCategory
                icon={<Code2 />}
                title="Frontend"
                skills={['React', 'SASS/CSS', 'HTML', 'JavaScript', 'Tailwind', 'WordPress Theme Development', 'Three.js/ GSAP']}
              />
              <SkillCategory
                icon={<Server />}
                title="Backend"
                skills={['WordPress Plugin Development', 'Node.js', 'Python', 'MySQL', 'RESTful APIs']}
              />
              <SkillCategory
                icon={<Wrench />}
                title="Tools"
                skills={['Git', 'VS Code', 'Google Analytics', 'Figma', 'Adobe XD']}
              />
            </div>

            {/* Interests Section */}
            <Card className="glass-card p-6 rounded-2xl md:col-span-12">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold text-white">
                  Interests & <span className="text-white/90">Background</span>
                </h2>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Beyond coding, I'm a Cleveland native who believes in the power of web technology to transform businesses. I enjoy connecting with clients, understanding their vision, and providing comprehensive web solutions including hosting, analytics, and ongoing support. What started as building a gaming community website in high school has grown into a passion for helping others establish their digital presence.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center glass-button p-3 rounded-xl hover:scale-105 transition-all">
    {icon}
    <div className="text-xl font-bold text-white mt-2">{value}</div>
    <div className="text-xs text-white/70">{label}</div>
  </div>
);

const SkillCategory = ({ icon, title, skills }) => (
  <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
    <div className="flex items-center gap-3 mb-4">
      {React.cloneElement(icon, { className: 'w-5 h-5 text-purple-400' })}
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="text-white/80 text-sm flex items-center gap-2"
        >
          <div className="w-1 h-1 rounded-full bg-purple-500/50" />
          {skill}
        </li>
      ))}
    </ul>
  </Card>
);

export default About;