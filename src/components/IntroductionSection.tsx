import Image from 'next/image';
import { prisma } from '@/lib/prisma';

export default async function IntroductionSection() {
  const site = await prisma.site.findUnique({ where: { artistNo: 1 } });

  const banner = site?.mainImageUrl || '/img/banner-img.jpg';
  const title = site?.mainTitle || 'Sam, Where are you?';
  const description = site?.mainDescription ||
    'Sam, Where are you? is a guitarist and producer blending live guitar grooves with electronic beats, crafting immersive Disco, House, and Funk-inspired tracks. Expect energetic loops, soulful riffs, and a personal touch that turns every release into a mini musical journey.';

  return (
    <section id="welcome" className="bg-white">
      <div className="relative h-96 lg:h-[600px] w-full">
        <Image
          src={banner}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="py-20" style={{ backgroundColor: '#40826D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 text-white custom-title-font">
            {title}
          </h1>
          <p className="text-base sm:text-xl text-white leading-relaxed custom-basic-font">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
