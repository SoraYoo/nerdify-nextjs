'use client';

import Image from 'next/image';

export default function PatreonSection() {
  return (
    <section id="patreon" className="py-20 text-white" style={{ backgroundColor: '#FF7F32' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 custom-basic-font">
            <h2 className="text-5xl font-bold mb-6 md:mb-12" style={{ fontFamily: 'var(--font-playfair)' }}>
              PATREON
            </h2>
            <p className="text-base text-gray-200 mb-6 leading-tight md:leading-snug">
              By supporting us on Patreon, you&apos;re not just helping us continue doing what we love; you&apos;re becoming an integral part of our journey. Your contributions enable us to create better content, explore new horizons, and build a stronger connection with you. We&apos;re excited to share this adventure with you, and we can&apos;t wait to welcome you into our Patreon family.
            </p>
            <p className="text-base text-gray-200 mb-8 md:mb-12 leading-tight md:leading-snug">
              Some benefits you&apos;ll have as a Patron are access to a Private Video Call With Us, Behind The Scenes Videos, Recipes, Lifestyle &amp; Travel Content, Decision Making, our Mixes on Soundcloud and much more.
            </p>
            <button 
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base transition-colors hover:bg-gray-100"
              onClick={() => window.open('https://www.patreon.com/cw/samwhereareyou', '_blank')}
            >
              Become a Patreon
            </button>
          </div>

          {/* Right Side - Image with Arch Window Frame */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full md:w-[75%] h-[448px] md:h-[500px]">
              {/* Arch image without decorative frame */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderTopLeftRadius: '9999px',
                  borderTopRightRadius: '9999px',
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '0px'
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Patreon showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}