import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeatureSection from '../components/FeatureSection'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import CallBar from '../components/CallBar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureSection />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <CallBar />
    </main>
  )
}
