'use client'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    img: '/images/portfolio1.jpg',
    href: '/portfolio/1',
  },
  {
    id: 2,
    title: 'Mobile App UI/UX',
    img: '/images/portfolio2.jpg',
    href: '/portfolio/2',
  },
  {
    id: 3,
    title: 'Corporate Website',
    img: '/images/portfolio3.jpg',
    href: '/portfolio/3',
  },
]

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            className="group block overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
