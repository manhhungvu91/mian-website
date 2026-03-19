import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Differentiators from './components/Differentiators';
import PullQuote from './components/PullQuote';
import StatsBar from './components/StatsBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Differentiators />
      <PullQuote />
      <StatsBar />
    </main>
  );
}
