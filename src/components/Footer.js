export default function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff] border-t border-[#e6b3ff]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Sneha Dharne. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/SnehaDharne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a90e2] hover:text-[#e6b3ff] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/snehadharne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a90e2] hover:text-[#e6b3ff] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:snehadattadharne@gmail.com"
            className="text-[#4a90e2] hover:text-[#e6b3ff] transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
  