"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nouakchott, Mauritania",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "ESP - Ecole Superieure Polytechnique",
  },
  {
    icon: Briefcase,
    label: "Focus",
    value: "Full-Stack & Mobile Development",
  },
  {
    icon: Code2,
    label: "Specialties",
    value: "Flutter, Django, React, Docker",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m a passionate Full-Stack Developer based in Nouakchott,
              Mauritania, currently studying at ESP (Ecole Superieure
              Polytechnique). I specialize in building end-to-end applications
              spanning web and mobile platforms.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My work focuses on creating intelligent, real-world solutions. I
              built <span className="text-white font-medium">RAQIB</span>, an
              attendance management system combining WiFi-based location
              verification with facial recognition, and{" "}
              <span className="text-white font-medium">Tawssil</span>, a smart
              delivery platform with real-time tracking and route optimization.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy working across the full stack &mdash; from designing REST
              APIs with Django to crafting responsive UIs with React and building
              cross-platform mobile apps with Flutter. I&apos;m also experienced
              with DevOps practices using Docker and CI/CD pipelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className="p-5 rounded-xl bg-surface border border-border card-hover glow-hover"
              >
                <Icon size={20} className="text-primary-light mb-3" />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-sm text-gray-300 font-medium">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
