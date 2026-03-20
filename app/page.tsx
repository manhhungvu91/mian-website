import Nav from './components/Nav'
import Hero from './components/Hero'
import Editorial from './components/Editorial'
import Capabilities from './components/Capabilities'
import ProductEditorial from './components/ProductEditorial'
import Statement from './components/Statement'
import FullBleed from './components/FullBleed'
import RDCenter from './components/RDCenter'
import Stats from './components/Stats'
import Certifications from './components/Certifications'
import Inquiry from './components/Inquiry'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Editorial />
      <Capabilities />
      <ProductEditorial />
      <Statement />
      <FullBleed bg="#1A1A16" label="MIAN GROUP R&D CENTER · INTERIOR · 2024" aspect="16/9" />
      <RDCenter />
      <Stats />
      <Certifications />
      <Inquiry />
      <Footer />
    </main>
  )
}
