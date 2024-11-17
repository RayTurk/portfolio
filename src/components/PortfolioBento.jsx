import React, { useEffect, useRef, useState } from 'react';
import { Card } from "./ui/card";
import {
  ChevronRight,
  ChevronLeft,
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
  faPhp,
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

// Tech Stack Slider Component
const TechStackSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const techStacks = [
    {
      title: "Development",
      items: [
        { icon: <FontAwesomeIcon icon={faWordpress} />, name: "WordPress", level: "Expert" },
        { icon: <FontAwesomeIcon icon={faPhp} />, name: "PHP", level: "Advanced" },
        { icon: <FontAwesomeIcon icon={faCode} />, name: "HTML/CSS", level: "Expert" },
        { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript", level: "Advanced" }
      ]
    },
    {
      title: "Tools & CMS",
      items: [
        { icon: <FontAwesomeIcon icon={faDatabase} />, name: "MySQL", level: "Advanced" },
        { icon: <FontAwesomeIcon icon={faShoppingCart} />, name: "WooCommerce", level: "Expert" },
        { icon: <FontAwesomeIcon icon={faGit} />, name: "Git", level: "Intermediate" },
        { icon: <FontAwesomeIcon icon={faFigma} />, name: "Figma", level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { icon: <FontAwesomeIcon icon={faReact} />, name: "React", level: "Learning" },
        { icon: <FontAwesomeIcon icon={faCode} className="text-cyan-400" />, name: "Tailwind", level: "Intermediate" },
        { icon: <FontAwesomeIcon icon={faNodeJs} />, name: "Node.js", level: "Learning" },
        { icon: <FontAwesomeIcon icon={faPython} />, name: "Python", level: "Basic" }
      ]
    }
  ];

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % techStacks.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const navigate = (direction) => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      if (direction === 'next') return (prev + 1) % techStacks.length;
      return (prev - 1 + techStacks.length) % techStacks.length;
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">
          Tech I <span className="text-white/90">Love</span>
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('prev')}
            className="glass-button p-2 rounded-full hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-white/90" />
          </button>
          <button
            onClick={() => navigate('next')}
            className="glass-button p-2 rounded-full hover:scale-110 transition-all"
          >
            <ChevronRight className="w-4 h-4 text-white/90" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {techStacks.map((stack, index) => (
            <div key={index} className="min-w-full">
              <div className="mb-3 flex justify-between items-center">
                <h4 className="text-white/90 text-sm">{stack.title}</h4>
                <span className="text-xs text-white/50">{index + 1}/{techStacks.length}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stack.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="glass-button p-3 rounded-xl hover:scale-105 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      {React.cloneElement(tech.icon, { className: 'w-4 h-4 text-white/90' })}
                      <div className="flex-1">
                        <div className="text-xs text-white/90">{tech.name}</div>
                        <div className="text-xs text-white/50">{tech.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {techStacks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-purple-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Avatar Section
const EnhancedAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 animate-pulse" />
      </div>

      <div className={`mt-4 text-center transition-all duration-300 ${
        isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
      }`}>
        <div className="space-y-2">
          <h3 className="text-white font-medium">Raymond Turk</h3>
          <p className="text-white/70 text-sm">WordPress Developer</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="glass-button px-3 py-1 rounded-full text-xs text-white/70 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for Projects
            </span>
            <span className="glass-button px-3 py-1 rounded-full text-xs text-white/70">
              15-20 hrs/week
            </span>
          </div>
          <div className="pt-2 flex justify-center gap-2">
            <button className="glass-button p-2 rounded-full hover:scale-110 transition-all">
              <MessageCircle className="w-4 h-4 text-white/90" />
            </button>
          </div>
        </div>
      </div>
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
    // Clear the refs array
    cardsRef.current = [];

    // Make sure we have elements in the refs array
    if (cardsRef.current.length > 0) {
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
        if (card) { // Check if card exists
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
        }
      });
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Only run once on mount

  // Modified addToRefs function
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
      <div className="relative h-full p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4">
            {/* Title - Full Width */}
            <div ref={addToRefs} className="col-span-full">
            <Card className="glass-card p-6 rounded-2xl hover-lift card-transition col-span-full">
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
            </div>

            {/* Left Column - Avatar & About */}
            <div ref={addToRefs} className="col-span-full sm:col-span-2 lg:col-span-3 grid gap-4">

              {/* Avatar Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
                <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white text-center">
                  rturk.me<span className="text-white/90">&lt;/Dev&gt;</span>
                </h2>
                </div>
              </Card>

              {/* Avatar */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
                <EnhancedAvatar />
              </Card>



              {/* Tech Stack Card */}
              <Card
                  ref={addToRefs}
                  className="glass-card p-6 rounded-2xl hover-lift card-transition"
                        >
                <TechStackSlider />
              </Card>
            </div>

            {/* Middle Column */}
            <div ref={addToRefs} className="col-span-full sm:col-span-4 lg:col-span-6 grid gap-4">
              {/* About Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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

              {/* Projects Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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

                {/* Core Services */}
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

              {/* Have Questions Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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

            </div>

            {/* Right Column */}
            <div ref={addToRefs} className="col-span-full sm:col-span-6 lg:col-span-3 grid gap-4">
              {/* Experience Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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
              </div>              </Card>

              {/* Education Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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
              </div>              </Card>

              {/* Impact Numbers */}
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
              </div>              </Card>
            </div>

            {/* Bottom Row - Full Width Items */}
            <div ref={addToRefs} className="col-span-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {/* Resume Card */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition">
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
              </Link>              </Card>

              {/* Social Links */}
              <Card className="glass-card p-6 rounded-2xl hover-lift card-transition sm:col-span-2">
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
            </div>
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