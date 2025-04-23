import ThemeToggle from '@/components/ThemeToggle/component';
import {
  Header,
  Hero,
  Benefits,
  HowItWorks,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Stats,
  Testimonial,
  FAQ,
  Pricing,
  Contact,
  CTA,
  Footer,
} from '@/components/sections';

const Home = () => {
  return (
    <main
      className="
        flex min-h-screen flex-col relative
        font-[var(--font-sans)]
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors duration-300
      "
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Stats />
      <Testimonial />
      <FAQ />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
