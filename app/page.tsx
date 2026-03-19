import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Differentiators from './components/Differentiators';
import PullQuote from './components/PullQuote';
import StatsBar from './components/StatsBar';
import Certifications from './components/Certifications';
import SourcingForm from './components/SourcingForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <div id="capabilities"><Differentiators /></div>
      <div id="about"><PullQuote /></div>
      <div id="products"><StatsBar /></div>
      <div id="factories"><Certifications /></div>
      <SourcingForm />
      <Footer />
    </main>
  );
}
