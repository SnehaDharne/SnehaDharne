import Navigation from "./Header"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-6 ">{children}</main>
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 Sneha Dharne
      </footer>
    </div>
  )
}
