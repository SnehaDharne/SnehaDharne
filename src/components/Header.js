import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
           
        </Link>
      <div className="flex space-x-4 items-center">
        <a 
          href="https://github.com/SnehaDharne" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-bold hover:text-gray-300"
        >
          <FaGithubSquare />
        </a>
        <a 
          href="https://www.linkedin.com/in/sneha-dharne-6837441b6/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-bold hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <Link href="#projects" className="hover:text-gray-300 text-lg">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-gray-300 text-lg">
          Contact
        </Link>
      </div>


      </nav>
    </header>
  )
}
