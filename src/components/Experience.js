"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const internships = [
  // Masters Internships
  {
    title: "Data Engineering and DevOps Intern",
    company: "Oncology Reference Inc.",
    period: "September 2024 - Present",
    description:
      "Built ETL pipelines for unstructured data and automated categorization of documents using NLP, reducing processing time by 30%.",
    technologies: ["Python", "TensorFlow", "SQL", "MongoDB", "NLP"],
    achievements: [
      "Architected data pipelines from 14 medical data sources, reducing manual intervention by 60%.",
      "Developed a data labeling system using NER and GPT-4, ensuring accurate tagging for clinical analysis.",
      "Designed dashboards for clinical developments, improving data analysis speed by 50%.",
    ],
    type: "masters",
  },
  {
    title: "Technical Consultant",
    company: "Stevens Institute of Technology (OneIT)",
    period: "March 2024 - September 2024",
    description:
      "Provided technical support and solutions to university users while enhancing user satisfaction.",
    technologies: ["SQL", "Technical Support", "Troubleshooting"],
    achievements: [
      "Resolved an average of 20 data security and technical issues weekly for over 700 users.",
      "Recognized as MVP and Speed Racer Employee for exceptional performance.",
      "Improved user satisfaction through clear communication of technical solutions.",
    ],
    type: "masters",
  },
  // Bachelors Internships
  {
    title: "Business Analyst Intern",
    company: "Deloitte USI",
    period: "May 2022 - July 2022",
    description:
      "Analyzed sales data to uncover trends and optimize business performance.",
    technologies: ["SQL", "Power BI", "DAX"],
    achievements: [
      "Implemented DAX functions to transform Nike sales data, improving data processing efficiency by 50%.",
      "Optimized Power BI data models, revealing a 40% revenue increase despite a drop in unit sales.",
      "Ensured secure and scalable management of user data with SQL.",
    ],
    type: "bachelors",
  },
  {
    title: "Software Engineering Intern",
    company: "Chipspirit Technologies",
    period: "January 2023 - May 2023",
    description: "Developed multithreaded user interface for a Data Diode system, enhancing data processing speed.",
    technologies: ["Python", "Multithreading", "Data Diode"],
    achievements: [
      "Reduced hardware testing time by 60% through optimized data transfer and packet handling algorithms.",
      "Collaborated with cross-functional teams to align hardware and software solutions and debug deployment errors.",
      "Recognized by CEO and Senior RTL Engineers for efforts in reducing hardware testing time.",
    ],
    type: "bachelors",
  },
  {
    title: "Machine Learning Intern",
    company: "Horned Owl",
    period: "July 2021 - September 2021",
    description: "Contributed to machine learning projects and software development tasks.",
    technologies: ["Python", "Machine Learning", "Software Development"],
    achievements: [
      "Implemented machine learning algorithms to improve data analysis capabilities.",
      "Resolved bugs and validation errors in existing codebase, enhancing overall system stability.",
      "Collaborated with the development team to optimize ML model performance and integration.",
    ],
    type: "bachelors",
  },
];

export function Experience() {
  return (
    <section id = "experience" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="h-8 w-8" />
            Professional Experience
          </h2>

          {/* Masters Internships */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">Graduate Internships</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {internships
                .filter((intern) => intern.type === "masters")
                .map((internship, index) => (
                  <InternshipCard key={index} internship={internship} index={index} />
                ))}
            </div>
          </div>

          {/* Bachelors Internships */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">Undergraduate Internships</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {internships
                .filter((intern) => intern.type === "bachelors")
                .map((internship, index) => (
                  <InternshipCard key={index} internship={internship} index={index} />
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InternshipCard({ internship, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-white/10 border-none text-white h-full hover:bg-white/20 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl text-teal-300">{internship.title}</CardTitle>
          <CardDescription className="text-gray-300">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="h-4 w-4" />
              {internship.company}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {internship.period}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-300">{internship.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {internship.technologies.map((tech) => (
              <Badge key={tech} className="bg-white/20">
                {tech}
              </Badge>
            ))}
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
            {internship.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
