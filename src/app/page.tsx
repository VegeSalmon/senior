import Hero from '@/components/Hero';
import About from '@/components/About';
import BentoGrid from '@/components/BentoGrid';
import Team from '@/components/Team';
import Impact from '@/components/Impact';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-deep selection:bg-electric-cyan selection:text-navy-deep">
      <Hero />
      <About />
      <BentoGrid />
      <Impact />
      <Team />
      <JoinUs />
      <Footer />
    </main>
  );
}
