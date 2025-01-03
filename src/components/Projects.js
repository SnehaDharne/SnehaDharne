import Image from 'next/image'
import projectsJson from './projects.json'
const projects = projectsJson

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-teal-300 via-indigo-400 to-purple-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              {/* <div className="p-6">
               
                {project.tag.map((t) => (<p key={t} className=' font-semibold flex-wrap text-sm text-gray-800 border-2 rounded-xl px-4 bg-slate-50 hover:bg-pink-200'> {t} </p>))}
              </div> */}
              <div className='p-2 m-2'>
              <h3 className="text-xl font-semibold text-gray-600 mb-2 ">{project.title}</h3>
              <div className="flex flex-wrap gap-2"> {/* Container for tags */}
                {project.tag.map((t) => (
                  <div
                    key={t} 
                    className="font-semibold text-sm text-gray-800 border-2 rounded-xl px-4 bg-slate-50 hover:bg-pink-200"
                  >
                    {t}
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
