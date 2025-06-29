'use client'

export default function PartnersCarousel() {
  const partners = [
    '/logos/partner1.jpg',
    '/logos/partner2.jpg',
    '/logos/partner3.jpg',
    '/logos/partner4.jpg',
  ]

  return (
    <section className="py-12 px-6 bg-white border-t">
      <div className="container mx-auto overflow-x-auto flex space-x-8 items-center">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-16 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  )
}
