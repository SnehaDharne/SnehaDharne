export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello</p>
          <a href="mailto:snehadattadharne@gmail.com" className="text-blue-400 hover:underline">
            snehadattadharne@gmail.com
          </a>
          <div className="mt-4">
            <p>&copy; {new Date().getFullYear()} Made with {"<3"}.</p>
          </div>
        </div>
      </footer>
    )
  }
  