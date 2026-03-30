"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 80 },
      { name: "Django", level: 78 },
      { name: "Django REST Framework", level: 75 },
      { name: "Celery", level: 55 },
      { name: "Node.js", level: 50 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 62 },
      { name: "JavaScript", level: 72 },
      { name: "Tailwind CSS", level: 75 },
      { name: "HTML/CSS", level: 82 },
      { name: "Vite", level: 60 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 78 },
      { name: "Dart", level: 75 },
      { name: ".NET MAUI", level: 40 },
      { name: "C#", level: 42 },
    ],
  },
  {
    title: "Graphic Design",
    skills: [
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 75 },
      { name: "Logo Design", level: 72 },
      { name: "Marketing Materials", level: 70 },
      { name: "UI/UX Design", level: 60 },
    ],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 45 },
      { name: "Docker", level: 60 },
      { name: "GitHub Actions", level: 50 },
      { name: "Linux", level: 65 },
      { name: "Git", level: 75 },
    ],
  },
  {
    title: "Other Languages",
    skills: [
      { name: "Java EE", level: 50 },
      { name: "PHP", level: 45 },
      { name: "TypeScript", level: 55 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-gray-500 mb-12 max-w-xl">
            Technologies and tools I use to bring ideas to life &mdash; from
            code to canvas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-border card-hover glow-hover"
            >
              <h3 className="text-lg font-semibold text-white mb-5">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
