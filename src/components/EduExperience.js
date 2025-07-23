"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stevens Institute of Technology",
      period: "2023 - 2025",
      description: "Focusing on Machine Learning, Data Engineering, and Big Data Analytics",
      achievements: [
        "GPA: 4.0/4.0",
        "Graduate Academic Scholarship Recipient",
        "Technology Consultant at IT Department",
        "Board Member of Indian Student Association",
        "Multiple Hackathon Participant"
      ]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Manipal Institute of Technology",
      period: "2019 - 2023",
      description: "Specialized in Data Structures, Algorithms, and Machine Learning",
      achievements: [
        "GPA: 3.7/4.0",
        "Published Research in Healthcare ML",
        "Research Assistant for Machine Learning for Dr. Sucheta Kolekar, Dr. Nisha P Shetty, Prof Jayashree, Dr. Sanjay Singh, Prof Veena",
        "Pre-placement offer from Deloitte",
        "Board Member of Film Club"
      ]
    }
  ]
export default function AcademicJourney() {
  return (
    <section id = "education" className="py-20 px-4 md:px-6 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a90e2] mb-12 flex items-center gap-3">
            <GraduationCap className="h-8 w-8" />
            Education
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 border border-[#e6b3ff] text-gray-800 h-full hover:bg-white transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">{edu.degree}</CardTitle>
                    <CardDescription className="text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="h-4 w-4" />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 text-gray-700">{edu.description}</div>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

