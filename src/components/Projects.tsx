"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Server, Palette } from "lucide-react";

const projects = [
  {
    title: "RAQIB",
    subtitle: "Intelligent Attendance Management System",
    description:
      "A comprehensive attendance platform combining a Django REST API backend, React admin dashboard, and Flutter mobile app. Features WiFi-based location verification, facial recognition for identity confirmation, and automated reporting.",
    tech: [
      "Django",
      "DRF",
      "React",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Celery",
      "GitHub Actions",
    ],
    icon: Server,
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
  },
  {
    title: "Tawssil",
    subtitle: "Smart Delivery Platform",
    description:
      "A feature-rich delivery application built with Flutter featuring real-time order tracking, route optimization, and efficient state management with Riverpod. Designed for seamless user experience across customer and driver interfaces.",
    tech: ["Flutter", "Dart", "Riverpod", "Google Maps API", "Firebase"],
    icon: Smartphone,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    title: "ISCAE Portal",
    subtitle: "Academic Institution Platform",
    description:
      "A full-featured institutional portal for student and admin management. Supports academic workflow automation, grade management, course scheduling, and administrative operations for the institution.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML/CSS"],
    icon: Globe,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    title: "Enterprise & Academic Projects",
    subtitle: "JEE, PHP & .NET Applications",
    description:
      "Collection of enterprise and academic projects including Java EE enterprise applications with EJB and JPA, PHP-based attendance tracking systems, and .NET MAUI cross-platform mobile applications.",
    tech: ["Java EE", "PHP", ".NET MAUI", "C#", "MySQL", "Servlets", "JSP"],
    icon: Globe,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
  },
  {
    title: "Graphic Design Work",
    subtitle: "Brand Identity & Marketing Design",
    description:
      "Certified graphic designer creating visual content for marketing campaigns, brand identities, logos, event banners, and print materials. Experienced with Adobe Photoshop and Illustrator for professional-grade design output.",
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Logo Design", "Print Design", "Branding"],
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/20 hover:border-pink-500/40",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-gray-500 mb-12 max-w-xl">
            A selection of projects I&apos;ve built and designed, from intelligent
            systems to delivery platforms, academic tools, and creative work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-surface border ${project.borderColor} card-hover glow-hover overflow-hidden`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <project.icon
                      size={20}
                      className="text-primary-light mb-3"
                    />
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-light mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface-light/80 text-gray-400 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
