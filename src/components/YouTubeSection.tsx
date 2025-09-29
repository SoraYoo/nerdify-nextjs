import Image from 'next/image';
import { prisma } from '@/lib/prisma';

function toEmbedUrl(input?: string | null): string | null {
  if (!input) return null;
  const s = input.trim();
  // If it's already just an ID (11 chars typical)
  const idOnly = /^[a-zA-Z0-9_-]{6,}$/;
  // Try common URL patterns
  const patterns = [
    /youtube\.com\/(?:watch\?v=|embed\/|shorts\/)([a-zA-Z0-9_-]{6,})/,
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/
  ];
  let id: string | null = null;
  if (idOnly.test(s) && !s.includes('/')) {
    id = s;
  } else {
    for (const re of patterns) {
      const m = s.match(re);
      if (m && m[1]) { id = m[1]; break; }
    }
    if (!id) {
      // fallback: try v= param
      const url = new URL(s, 'https://dummy.base');
      const v = url.searchParams.get('v');
      if (v) id = v;
    }
  }
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export default async function YouTubeSection() {
  const site = await prisma.site.findUnique({ where: { artistNo: 1 } });
  const main = toEmbedUrl(site?.mainVideoLink) || 'https://www.youtube.com/embed/AJOj6JlmrGg';
  const profile = site?.youtubeProfileLink || 'https://www.youtube.com/';
  const shortsInputs = [site?.shorts1, site?.shorts2, site?.shorts3, site?.shorts4];
  const shorts = shortsInputs
    .map((s) => toEmbedUrl(s))
    .filter((s): s is string => Boolean(s));

  return (
    <section id="youtube" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src={main}
                title="Main YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-2xl lg:text-3xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              WHERE SPICY GROOVES & TASTY FOOD SET THE MOOD
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a className="bg-white text-black text-sm px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" href={profile} target="_blank" rel="noopener noreferrer">
                더 많은 영상 보기
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-start mb-8">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/250px-Youtube_shorts_icon.svg.png" alt="YouTube Shorts" width={32} height={32} className="w-8 h-8 mr-3" />
            <span className="text-2xl font-bold text-white" style={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>Shorts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shorts.map((src, idx) => (
              <div key={idx} className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <iframe
                  src={src}
                  title={`YouTube Short ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}