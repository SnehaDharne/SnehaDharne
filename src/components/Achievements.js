"use client"

import { motion } from "framer-motion"
import { FileText, Award  } from "lucide-react"

const achievements = [
  {
    icon: FileText,
    title: "Research Publication in PubMed",
    description: "Machine Learning for Early Gestational Diabetes Mellitus Diagnosis",
    link: "https://pubmed.ncbi.nlm.nih.gov/39662422/"
  },
  {
    icon: Award,
    title: "Graduate Academic Scholarship",
    description: "Awarded by Stevens Institute of Technology for academic excellence.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-6 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a90e2] mb-12">Key Achievements</h2>
          <div className="grid gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 rounded-lg p-6 hover:bg-white transition-colors border border-[#e6b3ff]"
              >
                <achievement.icon className="h-12 w-12 text-[#4a90e2] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a90e2] hover:text-[#e6b3ff] transition-colors duration-300"
                  >
                    View Publication
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}