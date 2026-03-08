"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light/50 border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-400">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Mohammed{" "}
          <span className="gradient-text">Hassen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 font-light"
        >
          Full-Stack Developer & Graphic Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building robust web & mobile applications with{" "}
          <span className="text-primary-light">Flutter</span>,{" "}
          <span className="text-primary-light">Django</span>,{" "}
          <span className="text-primary-light">React</span> &{" "}
          <span className="text-primary-light">Docker</span>. Crafting visual
          identities with{" "}
          <span className="text-primary-light">Photoshop</span> &{" "}
          <span className="text-primary-light">Illustrator</span>. Based in
          Nouakchott, Mauritania.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-200 glow-hover"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-border text-gray-300 hover:border-primary/50 hover:text-white transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/7assen-coder",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/mohamed-hassen-a48496373",
              label: "LinkedIn",
            },
            {
              icon: Facebook,
              href: "https://www.facebook.com/share/1ApHGsPsou/",
              label: "Facebook",
            },
            {
              icon: Mail,
              href: "mailto:Sidahmedmhd08@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface-light/50 border border-border text-gray-400 hover:text-white hover:border-primary/30 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
