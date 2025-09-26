import Header from '@/components/Header';
import IntroductionSection from '@/components/IntroductionSection';
import YouTubeSection from '@/components/YouTubeSection';
import ImageSlides from '@/components/ImageSlides';
import MusicSection from '@/components/MusicSection';
import PatreonSection from '@/components/PatreonSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <IntroductionSection />
        <YouTubeSection />
        <ImageSlides />
        <MusicSection />
        <PatreonSection />
      </main>
      <Footer />
    </div>
  );
}