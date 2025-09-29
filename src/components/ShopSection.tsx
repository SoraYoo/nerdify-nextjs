'use client';

import Image from 'next/image';

export default function ShopSection() {
  const slides = [
    { id: 1, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 2, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 3, image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 4, image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 5, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 6, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 7, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 8, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 9, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
    { id: 10, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: '', description: '' },
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section className="md:py-30 py-15 bg-white w-full">
      <div className="w-full px-0">
        <div className="sm:hidden">
          <div className="relative overflow-x-auto px-[10%]">
            <div className="flex gap-0 snap-x snap-mandatory">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-shrink-0 w-[100%] snap-center">
                  <div 
                    className="relative h-72 w-72 mx-auto rounded-lg overflow-hidden bg-gray-100"
                    onClick={() => handleImageClick(slide.image)}
                  >
                    <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:block relative overflow-hidden">
          <div className="flex animate-scroll" style={{ width: '400%' }}>
            {duplicatedSlides.map((slide, index) => (
              <div key={`${slide.id}-${index}`} className="flex-shrink-0 w-80 mx-3">
                <div 
                  className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                  onClick={() => handleImageClick(slide.image)}
                >
                  <div className="relative h-80">
                    <Image src={slide.image} alt={slide.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 rounded-full p-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                      <p className="text-sm opacity-90">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-75%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
        @media (max-width: 640px) { .animate-scroll { animation-duration: 5s; } }
      `}</style>
    </section>
  );
}



