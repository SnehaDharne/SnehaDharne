import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Sneha Dharne
        </Link>
        <div className="space-x-4">
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
