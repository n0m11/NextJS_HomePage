'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  { id: 1, quote: 'Amazing service and design!', author: 'Muhammad Noman' },
  { id: 2, quote: 'They transformed our website!', author: 'NOMI' },
  { id: 3, quote: 'Highly recommended team.', author: 'Noman Ahmed' },
]

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { quote, author } = testimonials[idx]

  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
        <blockquote className="text-xl italic text-gray-800 mb-4">“{quote}”</blockquote>
        <p className="font-semibold text-blue-600"> {author}</p>
      </div>
    </section>
  )
}
