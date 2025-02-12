"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from 'next/link'
export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
             <Link href = "#education">
            
              <Button variant="link" href="#education" className="text-white hover:text-teal-300">
                Education
              </Button>
              </Link>
            </li>
            <li>
            <Link href = "#experience">
              <Button variant="link" className="text-white hover:text-teal-300">
                Experience
              </Button>
              </Link>
            </li>
            <li>
            <Link href = "#achievements">
              <Button variant="link" className="text-white hover:text-teal-300">
                Achievements
              </Button>
              </Link>
            </li>

            <li>
              <Link href = "#projects">
              <Button variant="link" className="text-white hover:text-teal-300">
                Projects
              </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/SnehaDharne" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-white hover:text-teal-300 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/sneha-dharne-6837441b6/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-white hover:text-teal-300 transition-colors" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}

