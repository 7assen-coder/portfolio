"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const designs = [
  {
    src: "/design1.png",
    title: "Orange Juice - Product Ad",
    category: "Marketing",
    description:
      "Promotional poster design for a juice brand featuring vibrant colors, product photography composition, and clean typography.",
  },
  {
    src: "/design2.png",
    title: "Slurps - Brand Logo",
    category: "Logo Design",
    description:
      "Creative logo design for a beverage brand, combining tropical elements with playful typography and a fresh color palette.",
  },
  {
    src: "/design3.png",
    title: "Info Session - Event Banner",
    category: "Event Design",
    description:
      "Tech event banner for a Java Spring Boot info session organized by Google DSC, with a modern tech-inspired layout.",
  },
];

export default function DesignGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="designs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Graphic Design</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-gray-500 mb-12 max-w-xl">
            A selection of my graphic design work &mdash; logos, marketing
            materials, and event visuals crafted with Adobe Photoshop &
            Illustrator.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, i) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-surface border border-border card-hover glow-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={design.src}
                  alt={design.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/20 text-primary-light border border-primary/30">
                    {design.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">
                  {design.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-surface border border-border"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="relative w-full aspect-square">
                  <Image
                    src={designs[selected].src}
                    alt={designs[selected].title}
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs px-2 py-1 rounded-md bg-primary/20 text-primary-light border border-primary/30">
                    {designs[selected].category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3">
                    {designs[selected].title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {designs[selected].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
