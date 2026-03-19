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
      <Differentiators />
      <PullQuote />
      <StatsBar />
      <Certifications />
      <SourcingForm />
      <Footer />
    </main>
  );
}
