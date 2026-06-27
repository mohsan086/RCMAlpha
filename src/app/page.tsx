import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import Curriculum from '@/components/Curriculum'
import Pricing from '@/components/Pricing'
import Instructor from '@/components/Instructor'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Curriculum />
        <Pricing />
        <Instructor />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
