'use client'

import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'

const slides = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg']

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src={slides[idx]}
        alt={`Slide ${idx + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Crafting Digital Experiences', 'Elevating Brands', 'Empowering Growth'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <button className="btn-primary-lg mt-6">See Our Work</button>
      </div>
    </section>
  )
}
