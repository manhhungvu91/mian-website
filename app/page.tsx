import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Differentiators from './components/Differentiators';
import PullQuote from './components/PullQuote';

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Differentiators />
      <PullQuote />
    </main>
  );
}
