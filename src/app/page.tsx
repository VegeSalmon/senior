import Hero from '@/components/Hero';
import About from '@/components/About';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Team from '@/components/Team';
import Impact from '@/components/Impact';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-graphite selection:bg-coral selection:text-cream">
      <Hero />
      <About />
      <ProblemSolution />
      <HowItWorks />
      <Impact />
      <Team />
      <JoinUs />
      <Footer />
    </main>
  );
}
