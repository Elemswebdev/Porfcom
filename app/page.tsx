import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Livestream from '@/components/livestream'
import ServiceTimes from '@/components/service-times'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Livestream />
      <ServiceTimes />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
