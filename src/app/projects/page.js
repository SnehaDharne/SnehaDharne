import Projects from '@/components/Projects' 
import Link from "next/link"
import Navigation from "@/components/Header"
import Footer from "@/components/Footer"
export default function View_Projects() {
  return (
    <div className="min-h-screen flex flex-col">
          <Navigation />
          {/* <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-700 to-teal-600"> */}
          <main className="min-h-screen container mx-auto px-6">
            <Projects/>
          </main>
          <Footer />
        </div>
  )
}
