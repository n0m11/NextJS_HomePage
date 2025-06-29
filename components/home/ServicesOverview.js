'use client'

const services = [
  {
    icon: '🖥️',
    title: 'Web Design',
    desc: 'Stunning visuals and intuitive user experiences tailored to your brand.',
  },
  {
    icon: '⚙️',
    title: 'Development',
    desc: 'Fast, scalable, and maintainable websites and apps using modern tech.',
  },
  {
    icon: '📈',
    title: 'SEO & Marketing',
    desc: 'Boost traffic, rankings, and ROI with our strategic digital marketing.',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg text-center shadow hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
