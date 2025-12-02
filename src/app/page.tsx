import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main className="min-h-screen bg-tech-bg text-tech-text selection:bg-tech-primary selection:text-black">
      <Hero />
      <About />
      <Team />

      {/* Footer */}
      <footer className="py-12 text-center text-tech-muted text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} SSS - Senior Support System. All rights reserved.</p>
      </footer>
    </main>
  );
}
