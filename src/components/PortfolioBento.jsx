import React, { useEffect, useRef, useState } from 'react';
import { Card } from "./ui/card";
import {
  Download,
  ExternalLink,
  Music,
  Gamepad,
  Globe,
  QrCode,
  Cloud,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Lightbulb,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
  Sprout,
  Gavel,
  CarFront,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientBackground from './GradientBackground';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import avatar from '../assets/rturk_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faPython,
  faJs,
  faGit,
  faFigma,
  faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faPalette,
  faPuzzlePiece,
  faGauge,
  faPlug,
  faShoppingCart
} from '@fortawesome/pro-solid-svg-icons';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Avatar = () => (
  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
    <img
      src={avatar}
      alt="Avatar"
      className="w-full h-full object-cover rounded-full"
    />
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 animate-pulse" />
  </div>
);

const TechIcon = ({ icon, name, color = "text-white/90" }) => {
  console.log('TechIcon rendering:', { icon, name });
  return (
    <div
      className={`glass-button p-4 rounded-xl hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 hover-lift ${color}`}
      title={name}
    >
      {icon}
      <span className="text-xs text-white/70">{name}</span>
    </div>
  );
};

const SocialButton = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-button p-2 rounded-full hover:scale-110 transition-all"
    title={label}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5 text-white/90' })}
  </a>
);

const PortfolioBento = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    cardsRef.current = [];

    // Initial animation
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    // Scroll animations
    cardsRef.current.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom-=100",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const isExpanded = (cardId) => expandedCard === cardId;

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen overflow-hidden">
      <GradientBackground />
      <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
      <div className="relative h-full p-4 md:p-6">
        <div className="grid h-full grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col h-full gap-4">
            {/* Title Card */}
            <Card
              ref={addToRefs}
              className="glass-card p-6 rounded-2xl hover-lift card-transition"
              onClick={() => handleCardClick('title')}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-white text-glow">
                    Building the <span className="text-white/90">Future,</span>
                  </h1>
                  <h2 className="text-2xl text-white">
                    One Line of <span className="text-white/90">Code</span>
                    <br />at a Time
                  </h2>
                </div>
                <div className="glass-button p-2 rounded-full">
                  <Lightbulb className="w-5 h-5 text-white/90" />
                </div>
              </div>
            </Card>

            {/* Questions Card */}
            <Card
            ref={addToRefs}
            className="glass-card p-6 rounded-2xl hover-lift card-transition flex-grow"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Have some <span className="text-white/90">Questions?</span>
                </h3>
                <div className="glass-button p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-white/90" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-white/80 text-sm">Specializing in WordPress development for:</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                      Home Improvement & Contractors
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                      Legal & Professional Services
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                      Healthcare & Assisted Living
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                      Manufacturing & Industrial
                    </li>
                  </ul>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsContactFormOpen(true)}
                      className="w-full px-4 py-2 bg-purple-600/80 hover:bg-purple-700/80 transition-colors rounded-lg text-white text-sm font-medium glass-button"
                    >
                      Start Your Project
                    </button>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>hello@rturk.me</span>
                    </div>
                    <div className="text-white/60 text-xs">
                      Current availability: 15-20 hours/week
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

            {/* Resume Card */}
            <Card
              ref={addToRefs}
              className="glass-card p-6 rounded-2xl hover-lift card-transition"
            >
              <Link
                to="/resume"
                className="flex justify-between items-center"
              >
                <h3 className="text-xl font-bold text-white">
                  My <span className="text-white/90">Resume</span>
                </h3>
                <div className="glass-button p-2 rounded-full">
                  <Download className="w-5 h-5 text-white/90" />
                </div>
              </Link>
            </Card>

          </div>
          {/* Column 2 */}
          <div className="flex flex-col h-full gap-4">
            {/* Headline */}
            <Card
              ref={addToRefs}
              className="glass-card p-6 rounded-2xl hover-lift card-transition"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white">
                  rturk.me<span className="text-white/90">&lt;/Dev&gt;</span>
                </h2>
              </div>
            </Card>

            {/* Avatar Card */}
            <Card
              ref={addToRefs}
              className="glass-card p-6 rounded-2xl hover-lift card-transition"
            >
              <div className="flex flex-col items-center">
                <Avatar />
              </div>
            </Card>

            {/* About Card */}
            <Card
              ref={addToRefs}
              className={`glass-card p-6 rounded-2xl hover-lift card-transition flex-grow`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">
                  About <span className="text-white/90">Me</span>
                </h3>
                <Link
                  to="/about"
                  className="glass-button p-2 rounded-full hover:scale-110 transition-all"
                >
                  <ArrowUpRight className="w-5 h-5 text-white/90" />
                </Link>
              </div>
              <div className={`mt-4 transition-all duration-300 overflow-hidden`}>
              <p className="text-white/80 text-sm leading-relaxed">
              I transform digital visions into reality by combining WordPress expertise with business understanding. From enterprise solutions to local businesses, I create scalable websites that deliver outstanding user experiences and measurable results.
              </p>
                  <div className="mt-4">
                    <h4 className="text-white/90 font-medium mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faWordpress} className="w-3 h-3" />
                        Custom WordPress Development
                      </span>
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faPalette} className="w-3 h-3" />
                        Theme Development
                      </span>
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faPuzzlePiece} className="w-3 h-3" />
                        Plugin Creation
                      </span>
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-3 h-3" />
                        WooCommerce
                      </span>
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faGauge} className="w-3 h-3" />
                        Performance Optimization
                      </span>
                      <span className="text-xs text-white/70 px-2 py-1 rounded-full glass-button flex items-center gap-1">
                        <FontAwesomeIcon icon={faPlug} className="w-3 h-3" />
                        API Integration
                      </span>
                    </div>
                  </div>
              </div>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col h-full gap-4">
            {/* Projects Card */}
            <Card
              ref={addToRefs}
              className={`glass-card p-6 rounded-2xl hover-lift card-transition flex-grow ${
                isExpanded('projects') ? 'z-10 scale-105' : ''
              }`}
              onClick={() => handleCardClick('projects')}
            >
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    My <span className="text-white/90">Projects</span>
                  </h3>
                  <Link
                    to="/projects"
                    className="glass-button p-2 rounded-full hover:scale-110 transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white/90" />
                  </Link>
                </div>
                <div className="space-y-2 overflow-y-auto custom-scrollbar scroll-fade-bottom flex-grow">
                  <ProjectItem icon={<Sprout />} name="Petitti's Garden Center" route="/projects" />
                  <ProjectItem icon={<Gavel />} name="Geauga County's Government Multisite" route="/projects" />
                  <ProjectItem icon={<CarFront />} name="RadAir Car Care" route="/projects" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
              <h3 className="text-xl font-bold text-white mb-4">
                Core <span className="text-white/90">Services</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl glass-button">
                  <FontAwesomeIcon icon={faWordpress} className="w-4 h-4 text-purple-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Custom WordPress</h4>
                    <p className="text-white/60 text-xs">Tailored solutions for your business</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl glass-button">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-purple-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">E-Commerce</h4>
                    <p className="text-white/60 text-xs">WooCommerce development</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl glass-button">
                  <FontAwesomeIcon icon={faGauge} className="w-4 h-4 text-purple-400" />
                  <div>
                    <h4 className="text-white text-sm font-medium">Performance</h4>
                    <p className="text-white/60 text-xs">Speed optimization & analytics</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tech Stack */}
            <Card
              ref={addToRefs}
              className="glass-card p-6 rounded-2xl hover-lift card-transition flex-grow"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Tech I <span className="text-white/90">Love</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <TechIcon
                  icon={<FontAwesomeIcon icon={faReact} size="1x"/>}
                  name="React"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faNodeJs} size="1x"/>}
                  name="Node.js"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faPython} size="1x"/>}
                  name="Python"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faJs} size="1x"/>}
                  name="JavaScript"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faCode} size="1x"/>}
                  name="TypeScript"
                />
                <TechIcon
                icon={<FontAwesomeIcon icon={faCode} className="text-cyan-400" size="1x" />}
                name="Tailwind"
              />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faDatabase} size="1x"/>}
                  name="MySQL"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faReact} size="1x"/>}
                  name="Next.js"
                />
                <TechIcon
                  icon={<FontAwesomeIcon icon={faFigma} size="1x"/>}
                  name="Figma"
                />
              </div>
            </Card>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col h-full gap-4">
          {/* Social Links */}
          <Card
            ref={addToRefs}
            className="glass-card p-6 rounded-2xl hover-lift card-transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Connect <span className="text-white/90">With Me</span>
              </h3>
              <div className="flex gap-2">
                <SocialButton
                  icon={<Github />}
                  href="https://github.com"
                  label="GitHub"
                />
                <SocialButton
                  icon={<Linkedin />}
                  href="https://linkedin.com"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={<Mail />}
                  href="mailto:example@email.com"
                  label="Email"
                />
              </div>
            </div>
          </Card>

          {/* Experience Card - Now with flex-grow */}
          <Card
            ref={addToRefs}
            className="glass-card p-6 rounded-2xl hover-lift card-transition flex-grow"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  My <span className="text-white/90">Experience</span>
                </h3>
                <div className="glass-button p-2 rounded-full">
                  <Briefcase className="w-5 h-5 text-white/90" />
                </div>
              </div>
              <div className="space-y-4 overflow-y-auto custom-scrollbar scroll-fade-bottom flex-grow">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">WordPress Developer</h4>
                  <p className="text-sm text-white/90">April 2024 - Current</p>
                  <p className="text-sm text-white/90">Full Spectrum Marketing</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Junior WordPress Developer</h4>
                  <p className="text-sm text-white/90">Feb 2021 - Feb 2024 · 3 years</p>
                  <p className="text-sm text-white/90">Company 119</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
            <h3 className="text-xl font-bold text-white mb-4">
              Impact <span className="text-white/90">Numbers</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-white/70">Websites Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24h</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
            </div>
          </Card>

          {/* Education Card - Now more compact */}
          <Card
            ref={addToRefs}
            className="glass-card p-6 rounded-2xl hover-lift card-transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                My <span className="text-white/90">Education</span>
              </h3>
              <div className="glass-button p-2 rounded-full">
                <GraduationCap className="w-5 h-5 text-white/90" />
              </div>
            </div>
            <div className="space-y-1">
              <EducationItem
                school="Lakeland Community College"
                period="Aug 2017 - Dec 2020"
                degree="Associates Degree"
              />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ icon, name, route }) => (
  <Link
    to={route}
    className="flex items-center justify-between p-3 rounded-xl cursor-pointer group
                glass-button hover:scale-[1.02] transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      {React.cloneElement(icon, { className: 'w-4 h-4 text-white/90' })}
      <span className="text-white text-sm">{name}</span>
    </div>
    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100
                          transition-all duration-300 text-white/90" />
  </Link>
);

const EducationItem = ({ school, period, degree }) => (
  <div className="space-y-1">
    <h4 className="font-semibold text-white text-sm">{school}</h4>
    <p className="text-xs text-white/90">{period}</p>
    <p className="text-xs text-white/90">{degree}</p>
  </div>
);

export default PortfolioBento;