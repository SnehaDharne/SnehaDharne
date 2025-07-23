import Link from "next/link"
import Navigation from "@/components/Header"
import Footer from "@/components/Footer"
export default function BlogIndex() {
  const posts = [
    {
      title: "ChatML: Lightweight LLM Pipelines",
      description: "Building modular AI pipelines without LangChain.",
      slug: "chatml",
      image: "/project/guidedml.png"
    },
    {
      title: "Exocortex: Multi-Agent Debates for Science",
      description: "Using agents to reason over research papers.",
      slug: "exocortex",
      image: "/project/guidedml.png"
    },
    {
      title: "FinAI: Automating Financial Reporting",
      description: "Cutting financial report prep from hours to minutes.",
      slug: "finai",
      image: "/project/guidedml.png"
    }
  ]

  return (
    //  <div className="min-h-screen flex flex-col">
    //       <Navigation />
          
    // <h1 className="container mx-auto px-6">Blog Posts</h1>
    //   <div className="grid md:grid-cols-2 gap-6">
    //     {posts.map((post) => (
    //       <Link key={post.slug} href={`/blogs/${post.slug}`}>
    //         <div className="rounded-lg border p-4 hover:shadow-lg transition">
    //           <img src={post.image} alt={post.title} className="mb-3 rounded" />
    //           <h2 className="text-xl font-semibold">{post.title}</h2>
    //           <p className="text-gray-600">{post.description}</p>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    //       <Footer />
    //     </div>
    <div className="min-h-screen flex flex-col">
          <Navigation />
          {/* <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-700 to-teal-600"> */}
          <main className="min-h-screen container mx-auto px-6">
            <div className="grid md:grid-cols-3 mt-10 gap-6 mx-auto px-auto">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="rounded-lg border p-4 hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="mb-3 rounded" />
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </Link>
        ))}
       </div>
          </main>
          <Footer />
        </div>
  )
}
