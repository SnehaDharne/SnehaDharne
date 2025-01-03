import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-bold transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-800 to-teal-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-10">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-teal-300 mb-4 animate-pulse">Hi! I'm Sneha</h2>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-300">
              Transforming Data into Insights
            </h1>
            <div className="text-xl mb-8 text-gray-200 max-w-lg mx-auto lg:mx-0">
              With 2+ years of experience in data engineering and analytics, machine learning, and software development.
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-teal-200">My Interests:</h3>
              <ul className="space-y-2 text-lg text-gray-200">
                {['AI in Healthcare', 'Big Data Analytics', 'Software Development'].map((item, index) => (
                  <li key={index} className="flex items-center justify-center lg:justify-start">
                    <span className="mr-2 text-purple-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start  space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-teal-500  hover:bg-teal-600 text-white">
                View My Projects
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden mr-10 border-8 border-teal-300 shadow-2xl transition-transform duration-300 hover:scale-105">
              <Image
                src="/image.png"
                alt="Sneha Dharne"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {[
            { icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername' },
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
            { icon: 'mail', label: 'Email', href: 'mailto:your.email@example.com' },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-purple-300 transition-colors duration-300"
              aria-label={label}
            >
              <span className="sr-only">{label}</span>
              <span className={`icon-${icon} text-2xl`}></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

