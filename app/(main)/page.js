import Navbar from '../../components/common/Navbar'
import Hero from '../../components/home/Hero'
import AboutPreview from '../../components/home/AboutPreview'
import ServicesOverview from '../../components/home/ServicesOverview'
import PortfolioPreview from '../../components/home/PortfolioPreview'
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel'
import PartnersCarousel from '../../components/home/PartnersCarousel'
import CTABanner from '../../components/home/CTABanner'
import Footer from '../../components/common/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <PortfolioPreview />
      <TestimonialsCarousel />
      <PartnersCarousel />
      <CTABanner />
      <Footer />
    </>
  )
}
