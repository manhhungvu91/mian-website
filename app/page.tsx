import Nav from './components/Nav'
import Hero from './components/Hero'
import ClientStrip from './components/ClientStrip'
import Editorial from './components/Editorial'
import Capabilities from './components/Capabilities'
import ProductEditorial from './components/ProductEditorial'
import Statement from './components/Statement'
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
      <ClientStrip />
      <Editorial />
      <Capabilities />
      <ProductEditorial />
      <Statement />
      <RDCenter />
      <Stats />
      <Certifications />
      <Inquiry />
      <Footer />
    </main>
  )
}
