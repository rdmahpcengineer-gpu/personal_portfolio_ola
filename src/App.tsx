/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Linkedin,
  Github,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Twitter
} from "lucide-react";
import { useState } from "react";
import FlipClock from "./FlipClock";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ventures", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const portfolioItems = [
    { id: 1, title: "EHCx", category: "AI-NATIVE CCaaS", image: "https://picsum.photos/seed/abstract/800/1000", alt: "EHCx platform architecture visualization" },
    { id: 2, title: "SkyDock.ai", category: "ROBOTIC LAST-MILE-DELIVERY", image: "https://picsum.photos/seed/urban/800/600", alt: "SkyDock.ai robotic last-mile-delivery" },
    { id: 3, title: "aicollege.cloud", category: "AI-NATIVE EDUCATION", image: "https://picsum.photos/seed/natural/800/1200", alt: "aicollege.cloud course interface" },
    { id: 4, title: "Harness Engineering", category: "METHODOLOGY", image: "https://picsum.photos/seed/void/800/800", alt: "Multi-agent harness architecture diagram" },
    { id: 5, title: "GPU Infrastructure", category: "HPC / RDMA", image: "https://picsum.photos/seed/symmetry/800/1000", alt: "NVIDIA GPU cluster infrastructure" },
    { id: 6, title: "StateForge", category: "MULTIMODAL DEV ENGINE", image: "https://picsum.photos/seed/ethereal/800/700", alt: "StateForge video-to-app engine" },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-black selection:text-brand-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-white/80 backdrop-blur-md border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-serif font-bold tracking-tighter"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ELEVENTH HOUSE
          </motion.a>

          {/* Menu Toggle */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Slide-down Nav */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-brand-white border-b border-brand-black/5 p-6 flex flex-col space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="input_file_1.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-90 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 max-w-xl lg:max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-gray mb-4 block">
              Systems Architect & AI Infrastructure Founder
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-8">
              Ola<br />
              <span className="text-stroke italic">McCartney</span>
            </h1>
            <p className="max-w-md text-lg text-brand-gray leading-relaxed mb-10">
              Building the intelligence layer between GPU infrastructure and the platforms enterprises already use. From the metal up, not the API down.
            </p>
            <div className="flex space-x-6">
              <a
                href="#portfolio"
                className="bg-brand-black text-brand-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-brand-gray transition-all"
              >
                <span>View Ventures</span>
                <ArrowRight size={18} />
              </a>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/rdmahpcengineer-gpu" target="_blank" rel="noopener noreferrer" className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-white transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/eniolamccartney/" target="_blank" rel="noopener noreferrer" className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-white transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Hero Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="hidden md:block flex-shrink-0 relative ml-8 lg:ml-16"
          >
            <div className="hero-image-container relative w-[280px] h-[360px] lg:w-[400px] lg:h-[500px] xl:w-[480px] xl:h-[580px]">
              <img
                src="/hero-profile.png"
                alt="Ola McCartney"
                className="hero-profile-img w-full h-full object-cover object-top rounded-3xl"
              />
              {/* Floating elevation shadow */}
              <div className="absolute -inset-4 -z-10 bg-brand-black/8 rounded-[2rem] blur-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Hero Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:hidden absolute bottom-6 right-4 z-10"
        >
          <div className="hero-image-container relative w-[160px] h-[210px]">
            <img
              src="/hero-profile.png"
              alt="Ola McCartney"
              className="hero-profile-img w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute -inset-3 -z-10 bg-brand-black/8 rounded-[1.5rem] blur-xl"></div>
          </div>
        </motion.div>

        {/* Side Rail Text */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
          <div className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-brand-gray/40 font-bold">
            OPEN TO STRATEGIC PARTNERSHIPS
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-black text-brand-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="input_file_2.png"
                  alt="Ola McCartney — Founder, Eleventh House AI Cx"
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-white/5 backdrop-blur-3xl rounded-full -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-serif mb-8">The Architect Behind <br /><span className="italic">The Infrastructure</span></h2>
              <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                <p>
                  I design AI systems where GPU-accelerated compute is the intelligence core and legacy platforms — telecomms, telephony, CRMs, LMS, booking engines — become downstream actuators. My background in RDMA/HPC networking means I think about AI from InfiniBand and GPUDirect up through multi-agent orchestration.
                </p>
                <p>
                  As a solo technical founder, architect, build with pending patents in vertical industries, including last-mile-delivery robotic integrated systems. Production systems and cloud based zero touch agentic contact center, end-to-end — from infrastructure code and Data models to event centric ai dashboards and real-time human-like voice pipelines. Every compounded venture shares one thesis: the harness around the model matters more than the model itself.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-white font-bold mb-2">Certifications</h4>
                  <p className="text-sm text-brand-gray">NVIDIA NCP · NVIDIA NCA · AWS-</p>
                </div>
                <div>
                  <h4 className="text-brand-white font-bold mb-2">Operating From</h4>
                  <p className="text-sm text-brand-gray">New York · Dallas/Frisco, TX</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gray mb-4 block">Active Ventures</span>
              <h2 className="text-6xl font-serif">Portfolio.</h2>
            </div>
            <p className="max-w-xs text-brand-gray text-sm mt-6 md:mt-0">
              A portfolio of AI-native platforms, each inverting the traditional software model — GPU infrastructure as the brain, legacy systems as connectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-black/5 mb-6">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-white text-brand-black px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center space-x-2">
                      <span>View</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif mb-1">{item.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-brand-gray">{item.category}</p>
                  </div>
                  <span className="text-xs font-mono text-brand-gray/40">0{item.id}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote / Technical Foundation */}
          <div className="mt-32 relative h-[60vh] overflow-hidden rounded-3xl">
            <img
              src="input_file_0.png"
              alt="Technical Foundation"
              className="w-full h-full object-cover grayscale opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-serif mb-6">"The bottleneck is never the model — it's the system around it."</h3>
                <p className="text-brand-gray italic">— Harness Engineering Principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section id="contact" className="py-32 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] font-bold text-brand-gray/60 mb-6 block">ELEVENTH HOUSE AI.</span>
              <h2 className="text-6xl font-serif mb-8">Let's <br /><span className="italic">Build.</span></h2>
              <p className="text-brand-gray text-lg mb-12 max-w-md">
                Exploring investment, partnership, or want to talk infrastructure? I'd like to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gray">Email</p>
                    <p className="text-lg">ola.mccartney@eleventhhouse.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gray">Location</p>
                    <p className="text-lg">New York · Dallas, Texas</p>
                  </div>
                </div>
              </div>

              {/* Footer Nav Links */}
              <nav className="mt-12 flex space-x-8">
                <a href="#about" className="text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">About</a>
                <a href="#portfolio" className="text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Ventures</a>
                <a href="#contact" className="text-xs uppercase tracking-widest text-brand-gray hover:text-brand-white transition-colors">Contact</a>
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              {/* Flip Clock */}
              <FlipClock />

              {/* Compact Contact Form */}
              <div className="bg-brand-white/5 p-6 rounded-2xl backdrop-blur-sm border border-brand-white/10">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-brand-white/20 py-2 text-sm focus:border-brand-white outline-none transition-colors placeholder:text-brand-gray/50"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-brand-white/20 py-2 text-sm focus:border-brand-white outline-none transition-colors placeholder:text-brand-gray/50"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="What are you working on?"
                    className="w-full bg-transparent border-b border-brand-white/20 py-2 text-sm focus:border-brand-white outline-none transition-colors placeholder:text-brand-gray/50"
                  />
                  <button className="w-full bg-brand-white text-brand-black py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gray hover:text-brand-white transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar */}
      <footer className="py-12 bg-brand-black border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray text-sm mb-6 md:mb-0">
            © 2026 Eleventh House AI. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="https://github.com/rdmahpcengineer-gpu" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/eniolamccartney/" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-brand-gray hover:text-brand-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
