import Image from 'next/image'

export default function Hero() {
    return (
      <section className="bg-white text-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          {/* <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1> */}
          <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Hi! I'm Sneha</h2>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Thriving on Data</h1>
            <p className="text-xl mb-6">
              With 2+ years of experience in data analytics, data engineering, machine learning and software development. 
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">My Expertise:</h3>
              <ul className=" list-inside left-0">
                <li>AI in Healthcare</li>
                <li>Big Data Analytics</li>
                <li>Software development</li>
              </ul>
            </div>
            <a
            href="#projects"
            className="bg-amber-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            View My Work
          </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400">
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
          
        </div>
      </section>
    )
  }
  