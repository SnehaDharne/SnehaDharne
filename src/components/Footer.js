export default function Footer() {
    return (
      <footer id="contact" className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="mb-4">Feel free to reach out for collaborations or just a friendly hello</div>
          <a href="mailto:snehadattadharne@gmail.com" className="text-blue-400 hover:underline">
            snehadattadharne@gmail.com
          </a>
          <div className="mt-4">
            <div>&copy; {new Date().getFullYear()} Made with {"<3"}.</div>
          </div>
        </div>
      </footer>
    )
  }
  