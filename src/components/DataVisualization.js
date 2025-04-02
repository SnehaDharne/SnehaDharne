import React from 'react';
import Image from 'next/image';

export default function DataVisualization() {
  const visualizations = [
    {
      title: "Data Engineering & ML",
      description: "Building ETL pipelines and developing ML models for healthcare applications",
      tools: ["Python", "TensorFlow", "NLP", "MongoDB", "SQL"]
    },
    {
      title: "Business Intelligence",
      description: "Creating data-driven insights and visualizations for business decisions",
      tools: ["Power BI", "DAX", "Data Analysis", "SQL"]
    },
    {
      title: "Full Stack Development",
      description: "Developing scalable applications and data processing systems",
      tools: ["React", "Next.js", "Node.js", "Git", "AWS"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#4a90e2] mb-12">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visualizations.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-lg p-6 transform transition duration-300 hover:scale-105 border border-[#e6b3ff]"
            >
              <h3 className="text-2xl font-semibold text-[#4a90e2] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-[#f5f0ff] text-[#4a90e2] border border-[#e6b3ff] rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 