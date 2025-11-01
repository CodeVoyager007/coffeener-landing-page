import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Video from '@/components/Video';
import About from '@/components/About';
import Experience from '@/components/Experience';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="relative bg-general-body">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1152px] w-full max-w-[1170px] mx-auto flex justify-between items-center px-4 pointer-events-none">
          <div className="bg-[#2c2c2c] h-full w-px" />
          <div className="bg-[#2c2c2c] h-full w-px" />
          <div className="bg-[#2c2c2c] h-full w-px" />
          <div className="bg-[#2c2c2c] h-full w-px" />
          <div className="bg-[#2c2c2c] h-full w-px" />
        </div>
        <Header />
        <Hero />
      </div>
      <Video />
      <About />
      <Experience />
      <News />
      <Footer />
    </main>
  );
}