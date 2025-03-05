"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const education = [
    {
      degree: "Master's Degree \t",
      field: "Computer Science",
      institution: "Stevens Institute of Technology",
      year: "September 2023 - May 2025",
      description: "Specialized in AI and Machine Learning with focus on healthcare applications",
      achievements: ["GPA: 4.0/4.0", "Technical Consultant - OneIT Department", "Graduate Merit Scholarship"],
    },
    {
      degree: "Bachelor's Degree",
      field: "Information Technology",
      institution: "Manipal Institute of Technology",
      year: "July 2019 - July 2023",
      description: "Foundation in computer science with emphasis on data structures and algorithms, minor in Big Data Analytics",
      achievements: ["GPA: 3.62/4.0", "Machine Learning Research Assistant", "Board - Film making society"],
    },
  ]
export default function AcademicJourney() {
  return (
    <section id = "education" className="py-20 px-4 md:px-6 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <GraduationCap className="h-8 w-8" />
            Academic Journey
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-400 to-purple-500" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${index === 0 ? "md:rtl" : ""}`}
                >
                  {index === 0 && <div className="hidden md:block" />}
                  <div className={`${index === 0 ? "md:text-right" : ""} md:ltr`}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-teal-300 mb-2">
                          {index === 0 ? (
                            <>
                            <div className="flex x-space-2 items-center justify-end w-full">
                              <GraduationCap className="h-5 w-5 mx-3" />
                              {edu.degree}
                              </div>
                            </>
                          ) : (
                            <>
                            <div className="flex items-center" >
                              <GraduationCap className={"h-5 w-5 mx-3"} />
                              {edu.degree}
                              </div>
                            </>
                            
                          )}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-white">{edu.field}</CardDescription>
                        <div className="space-y-2 text-gray-300">
                          <p>{edu.institution}</p>
                          <p className="text-teal-400">{edu.year}</p>
                          <p className="text-sm mt-2">{edu.description}</p>
                          <ul
                            // className={`list-disc ${index === 0 ? "list-inside" : "list-outside ml-4"} text-sm space-y-1 mt-3`}
                          >
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                  {index === 1 && <div className="hidden md:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

