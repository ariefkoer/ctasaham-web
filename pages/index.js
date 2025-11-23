import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <Layout
      title="CTASaham - Trading & Edukasi Saham Profesional | 26 Tahun Pengalaman"
      description="Platform trading dan edukasi saham profesional dengan pengalaman 26 tahun. Rekomendasi harian, analisis teknikal, workshop trading untuk Trading for A Living. Join 5000+ trader sukses!"
      keywords="ctasaham, trading saham, rekomendasi saham harian, analisis teknikal, edukasi trading, workshop saham, andri zakarias, trading for a living, scalping saham, swing trading"
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  )
}
