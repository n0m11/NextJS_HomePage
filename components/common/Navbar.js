'use client'

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">NOMI_NextJS</div>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  )
}
