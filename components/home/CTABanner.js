'use client'

export default function CTABanner() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 text-lg">Let’s work together to build something amazing.</p>
        <a href="/contact" className="btn-secondary inline-block mt-2">
          Contact Us
        </a>
      </div>
    </section>
  )
}
