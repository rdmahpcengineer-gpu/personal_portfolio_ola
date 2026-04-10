/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Menu, 
  X,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const portfolioItems = [
    { id: 1, title: "Abstract Forms", category: "Photography", image: "https://picsum.photos/seed/abstract/800/1000" },
    { id: 2, title: "Urban Silence", category: "Architecture", image: "https://picsum.photos/seed/urban/800/600" },
    { id: 3, title: "Natural Light", category: "Portrait", image: "https://picsum.photos/seed/natural/800/1200" },
    { id: 4, title: "The Void", category: "Minimalism", image: "https://picsum.photos/seed/void/800/800" },
    { id: 5, title: "Symmetry", category: "Design", image: "https://picsum.photos/seed/symmetry/800/1000" },
    { id: 6, title: "Ethereal", category: "Art", image: "https://picsum.photos/seed/ethereal/800/700" },
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
            PORTFOLIO.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium hover:text-brand-gray transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-brand-white border-b border-brand-black/5 p-6 flex flex-col space-y-4"
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

      {/* Hero Section - Inspired by input_file_1.png */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-semibold text-brand-gray mb-4 block">
              Creative Director & Photographer
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-8">
              Visual <br />
              <span className="text-stroke italic">Storyteller</span>
            </h1>
            <p className="max-w-md text-lg text-brand-gray leading-relaxed mb-10">
              Capturing the essence of moments through a minimalist lens. Based in London, working worldwide.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#portfolio" 
                className="bg-brand-black text-brand-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-brand-gray transition-all"
              >
                <span>View Work</span>
                <ArrowRight size={18} />
              </a>
              <div className="flex items-center space-x-4">
                <a href="#" className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 border border-brand-black/10 rounded-full hover:bg-brand-black hover:text-brand-white transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Side Rail Text - Inspired by Recipe 11 */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
          <div className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-brand-gray/40 font-bold">
            ESTABLISHED • TWENTY TWENTY SIX • PORTFOLIO
          </div>
        </div>
      </section>

      {/* About Section - Using input_file_2.png */}
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
                  alt="About Me" 
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
              <h2 className="text-5xl font-serif mb-8">The Man Behind <br /><span className="italic">The Lens</span></h2>
              <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                <p>
                  I believe that every image tells a story, and every story deserves to be told with clarity and emotion. My work is a reflection of my fascination with the interplay of light, shadow, and human connection.
                </p>
                <p>
                  With over a decade of experience in visual arts, I've collaborated with global brands and individual visionaries to bring their stories to life through compelling imagery.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-white font-bold mb-2">Exhibitions</h4>
                  <p className="text-sm text-brand-gray">London, Paris, New York, Tokyo</p>
                </div>
                <div>
                  <h4 className="text-brand-white font-bold mb-2">Awards</h4>
                  <p className="text-sm text-brand-gray">Visual Arts Excellence 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Inspired by input_file_0.png */}
      <section id="portfolio" className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gray mb-4 block">Selected Works</span>
              <h2 className="text-6xl font-serif">Portfolio.</h2>
            </div>
            <p className="max-w-xs text-brand-gray text-sm mt-6 md:mt-0">
              A curated collection of projects that define my visual language and technical approach.
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
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-white text-brand-black px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Project
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

          {/* Background Image Reference - input_file_0.png */}
          <div className="mt-32 relative h-[60vh] overflow-hidden rounded-3xl">
            <img 
              src="input_file_0.png" 
              alt="Portfolio Context" 
              className="w-full h-full object-cover grayscale opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-serif mb-6">"Simplicity is the ultimate sophistication."</h3>
                <p className="text-brand-gray italic">— Leonardo da Vinci</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl font-serif mb-8">Get in <br /><span className="italic">Touch.</span></h2>
              <p className="text-brand-gray text-lg mb-12 max-w-md">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gray">Email</p>
                    <p className="text-lg">hello@portfolio.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gray">Location</p>
                    <p className="text-lg">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-white/5 p-10 rounded-3xl backdrop-blur-sm border border-brand-white/10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-gray">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-brand-white/20 py-3 focus:border-brand-white outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-gray">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-brand-white/20 py-3 focus:border-brand-white outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-gray">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-brand-white/20 py-3 focus:border-brand-white outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-white text-brand-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-gray hover:text-brand-white transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-black border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray text-sm mb-6 md:mb-0">
            © 2026 Portfolio Showcase. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-brand-gray hover:text-brand-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-brand-gray hover:text-brand-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-brand-gray hover:text-brand-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-brand-gray hover:text-brand-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
