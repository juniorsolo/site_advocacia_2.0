import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import News from '@/components/News/News';
import Location from '@/components/Location/Location';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <News />
      <Location />
      <Footer />
    </main>
  );
}
