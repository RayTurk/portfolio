import React from 'react';
import { Card } from '../components/ui/card';
import {
  ArrowLeft,
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Medal,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWordpress,
  faReact,
  faJs,
  faPhp,
  faGit
} from '@fortawesome/free-brands-svg-icons';
import html2pdf from 'html2pdf.js';


const Resume = () => {
  const handleDownload = () => {
    const resumeContent = document.getElementById('resume-content').cloneNode(true);
    const downloadButton = resumeContent.querySelector('#download-button');
    const backButton = resumeContent.querySelector('#back-button');
    if (downloadButton) downloadButton.remove();
    if (backButton) backButton.remove();

    const opt = {
      margin: 1,
      filename: 'raymond-turk-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(resumeContent).save();
      };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <GradientBackground />
      <div className="relative h-full p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/"
              className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:scale-105 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <button
              id="download-button"
              onClick={handleDownload}
              className="glass-button px-4 py-2 rounded-lg inline-flex items-center gap-2 text-white/90 hover:text-white hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

        <div id="resume-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Header Section */}
            <Card className="glass-card p-6 rounded-2xl lg:col-span-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white text-glow">
                    Raymond <span className="text-white/90">Turk</span>
                  </h1>
                  <h2 className="text-xl text-white/80">WordPress Developer</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ContactButton icon={<Mail />} text="hello@rturk.me" />
                  <ContactButton icon={<Github />} text="GitHub" />
                  <ContactButton icon={<Linkedin />} text="LinkedIn" />
                </div>
              </div>
            </Card>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-4">
              {/* Experience Section */}
              <Card className="glass-card p-6 rounded-2xl">
                <SectionHeader icon={<Briefcase />} title="Professional Experience" />
                <div className="space-y-6 mt-4">
                  <ExperienceItem
                    title="WordPress Developer"
                    company="Full Spectrum Marketing"
                    period="April 2024 - Present"
                    achievements={[
                      'Lead developer for enterprise WordPress projects',
                      'Implement custom themes and plugins for client needs',
                      'Optimize website performance and security'
                    ]}
                  />
                  <ExperienceItem
                    title="Junior WordPress Developer"
                    company="Company 119"
                    period="Feb 2021 - Feb 2024"
                    achievements={[
                      'Developed and maintained client websites',
                      'Created custom WordPress plugins',
                      'Collaborated with design team on UX improvements'
                    ]}
                  />
                </div>
              </Card>

              {/* Projects Section */}
              <Card className="glass-card p-6 rounded-2xl">
                <SectionHeader icon={<Star />} title="Key Projects" />
                <div className="space-y-4 mt-4">
                  <ProjectItem
                    title="Petitti's Garden Center"
                    description="E-commerce solution with inventory management"
                    tech={['WordPress', 'WooCommerce', 'Custom Plugins']}
                  />
                  <ProjectItem
                    title="Geauga County's Government Multisite"
                    description="Multisite platform for county departments"
                    tech={['WordPress Multisite', 'Custom Theme', 'API Integration']}
                  />
                  <ProjectItem
                    title="RadAir Car Care"
                    description="Modern automotive service platform"
                    tech={['WordPress', 'Appointment Booking', 'Custom Development']}
                  />
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              {/* Skills Section */}
              <Card className="glass-card p-6 rounded-2xl">
                <SectionHeader icon={<Code />} title="Technical Skills" />
                <div className="space-y-4 mt-4">
                  <SkillCategory
                    title="WordPress Development"
                    skills={[
                      { name: 'Custom Themes', level: 90 },
                      { name: 'Plugin Development', level: 85 },
                      { name: 'WooCommerce', level: 80 }
                    ]}
                  />
                  <SkillCategory
                    title="Frontend"
                    skills={[
                      { name: 'HTML/CSS', level: 90 },
                      { name: 'JavaScript', level: 75 },
                      { name: 'React', level: 65 }
                    ]}
                  />
                  <SkillCategory
                    title="Backend"
                    skills={[
                      { name: 'PHP', level: 80 },
                      { name: 'MySQL', level: 75 },
                      { name: 'REST APIs', level: 70 }
                    ]}
                  />
                </div>
              </Card>

              {/* Education Section */}
              <Card className="glass-card p-6 rounded-2xl">
                <SectionHeader icon={<GraduationCap />} title="Education" />
                <div className="mt-4">
                  <div className="space-y-2">
                    <h3 className="text-white font-medium">Associates Degree</h3>
                    <p className="text-white/70 text-sm">Lakeland Community College</p>
                    <p className="text-white/60 text-sm">Aug 2017 - Dec 2020</p>
                  </div>
                </div>
              </Card>

              {/* Certifications */}
              <Card className="glass-card p-6 rounded-2xl">
                <SectionHeader icon={<Medal />} title="Certifications" />
                <div className="space-y-3 mt-4">
                  <CertificationItem
                    title="WordPress Advanced Security"
                    issuer="WordPress.org"
                    year="2023"
                  />
                  <CertificationItem
                    title="Advanced Custom Fields Pro"
                    issuer="ACF"
                    year="2022"
                  />
                </div>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3">
    {React.cloneElement(icon, { className: 'w-5 h-5 text-purple-400' })}
    <h2 className="text-xl font-bold text-white">{title}</h2>
  </div>
);

const ContactButton = ({ icon, text }) => (
  <button className="glass-button px-3 py-1 rounded-full text-sm text-white/90 hover:text-white inline-flex items-center gap-2">
    {React.cloneElement(icon, { className: 'w-4 h-4' })}
    {text}
  </button>
);

const ExperienceItem = ({ title, company, period, achievements }) => (
  <div className="space-y-2">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="text-white/80 text-sm">{company}</div>
    <div className="text-white/60 text-sm">{period}</div>
    <ul className="space-y-1 mt-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-white/70 text-sm flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-purple-500/50 mt-2" />
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({ title, description, tech }) => (
  <div className="glass-button p-4 rounded-xl">
    <h3 className="text-white font-medium mb-1">{title}</h3>
    <p className="text-white/70 text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((item, index) => (
        <span key={index} className="text-xs text-white/60 px-2 py-1 rounded-full glass-button">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="space-y-2">
    <h3 className="text-white/90 font-medium text-sm">{title}</h3>
    {skills.map((skill, index) => (
      <div key={index} className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-white/80">{skill.name}</span>
          <span className="text-white/60">{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500/50 rounded-full"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

const CertificationItem = ({ title, issuer, year }) => (
  <div className="glass-button p-3 rounded-xl">
    <h4 className="text-white text-sm font-medium">{title}</h4>
    <div className="flex justify-between items-center mt-1">
      <span className="text-white/60 text-xs">{issuer}</span>
      <span className="text-white/50 text-xs">{year}</span>
    </div>
  </div>
);

export default Resume;
