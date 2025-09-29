'use client';

import Image from 'next/image';

export default function IntroductionSection() {
  return (
    <section id="welcome" className="bg-white">
      {/* Full Width Image */}
      <div className="relative h-96 lg:h-[600px] w-full">
        <Image
          src="/img/banner-img.jpg"
          alt="Sam - Musician and Producer"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Introduction Text with Background */}
      <div className="py-20" style={{ backgroundColor: '#40826D' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 text-white custom-title-font">
            Sam, Where are you?
          </h1>
          <p className="text-base sm:text-xl text-white leading-relaxed custom-basic-font">
            Sam, Where are you? is a guitarist and producer blending live guitar grooves with electronic beats, crafting immersive Disco, House, and Funk-inspired tracks. Expect energetic loops, soulful riffs, and a personal touch that turns every release into a mini musical journey.
          </p>
        </div>
      </div>
    </section>
  );
}
