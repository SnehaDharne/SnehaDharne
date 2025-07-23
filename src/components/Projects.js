"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projectsJson from "./projects.json";

const projects = projectsJson;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a90e2] mb-12">My Projects</h2>

          <h3 className="text-3xl md:text-2xl font-bold text-[#4a90e2] mb-12">Agentic AI / RAG</h3>
          <div className="grid mb-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
            .filter((project) => project.label === "AI")
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.5 }}
                className="bg-white/80 rounded-lg p-6 hover:bg-white transition-colors border border-[#e6b3ff]"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-xl mb-4"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </a>
                <h3 className="text-xl font-semibold text-gray-800 my-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tag.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-medium bg-[#f5f0ff] text-[#4a90e2] border border-[#e6b3ff] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <h3 className="text-3xl md:text-2xl font-bold text-[#4a90e2] mb-12">Machine Learning</h3>
          <div className="grid  mb-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
            .filter((project) => project.label === "ML").map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.5 }}
                className="bg-white/80 rounded-lg p-6 hover:bg-white transition-colors border border-[#e6b3ff]"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-xl mb-4"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </a>
                <h3 className="text-xl font-semibold text-gray-800 my-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tag.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-medium bg-[#f5f0ff] text-[#4a90e2] border border-[#e6b3ff] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <h3 className="text-3xl md:text-2xl font-bold text-[#4a90e2] mb-12">Data Engineering / Data Analytics</h3>
          <div className="grid  mb-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.label === "Data").map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.5 }}
                className="bg-white/80 rounded-lg p-6 hover:bg-white transition-colors border border-[#e6b3ff]"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-xl mb-4"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </a>
                <h3 className="text-xl font-semibold text-gray-800 my-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tag.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-medium bg-[#f5f0ff] text-[#4a90e2] border border-[#e6b3ff] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
