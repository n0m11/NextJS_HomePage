'use client'

export default function AboutPreview() {
  return (
    <section id="about" className="container mx-auto flex flex-col md:flex-row items-center py-20 px-6">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-6 text-gray-700">
          I'm a one man army of creatives and technologists dedicated to crafting beautiful,
          high-performing web experiences that drive results and brand recognition.
        </p>
        <a href="/about" className="text-blue-600 hover:underline">
          Learn More →
        </a>
      </div>
      <div className="md:w-1/2">
        <img
          src="/images/about-preview.jpg"
          alt="About us"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  )
}
