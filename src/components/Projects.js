import Image from 'next/image'
import projectsJson from './projects.json'
const projects = projectsJson

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-600 mb-2 ">{project.title}</h3>
                <div className=" gap-4 justify-between">{project.tag.map((t) => (<p className=' font-semibold text-gray-800 border-2 rounded-xl p-4 bg-slate-50 hover:bg-pink-200'> {t} </p>))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
