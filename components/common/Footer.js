'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="GitHub" className="hover:text-white">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">X</a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>123 Main St, City, Country</p>
          <p>Email: hello@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NOMI. All rights reserved.
      </div>
    </footer>
  )
}
