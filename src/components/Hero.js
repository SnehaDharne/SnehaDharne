import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-bold transition duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const TechTag = ({ children }) => (
  <span className="px-3 py-1 text-sm font-medium bg-white/10 border border-[#e6b3ff] text-[#4a90e2] rounded-full hover:bg-[#e6b3ff] hover:text-white transition-all duration-300">
    {children}
  </span>
)

export default function Hero() {
  const techStack = [
    'Python', 'SQL', 'MongoDB', 'React', 'Next.js', 'TensorFlow', 'NLP',
    'Power BI', 'DAX', 'Data Analysis', 'Machine Learning', 'Git', 'ETL',
    'Node.js', 'AWS'
  ];

  return (
    <section className="text-gray-800 py-20 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-10">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-[#4a90e2] mb-4 animate-pulse">Hi! I'm Sneha</h2>
            <h1 className="text-5xl lg:text-5Exl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4a90e2] to-[#e6b3ff]">
              AI-focused Data Scientist
            </h1>

            <h4 className="flex items-center justify-center lg:justify-start mb-6">
              Currently building assistants to cut manual work and speed up research.
            </h4>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/projects" className="hover:text-gray-300">
                <Button className="bg-[#4a90e2] hover:bg-[#357abd] text-white">
                  View My Projects
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blogs" className="hover:text-gray-300">
                <Button className="bg-[#4a90e2] hover:bg-[#357abd] text-white">
                  Read my Blogs
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href='/SnehaDataAnalyst.pdf' download>
                {/* <Button className="bg-white hover:bg-[#f5f0ff] text-[#4a90e2] border border-[#e6b3ff]">
                  Download Resume
                </Button> */}
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-[#e6b3ff] shadow-2xl transition-transform duration-300 hover:scale-105">
              <Image
                src="/image.jpeg"
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
            { icon: 'github', label: 'GitHub', href: 'https://github.com/SnehaDharne' },
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sneha-dharne-6837441b6/' },
            { icon: 'mail', label: 'Email', href: 'mailto:snehadattadharne@gmail.com' },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a90e2] hover:text-[#e6b3ff] transition-colors duration-300"
              aria-label={label}
            >
              <span className="sr-only text-white">{label}</span>
              <span className={`icon-${icon} text-2xl`}></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

