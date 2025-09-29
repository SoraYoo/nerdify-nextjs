'use client';

export default function MusicSection() {
  return (
    <section id="music" className="py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#333]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Tunes that we groove to on our trip as slow living DJs
          </h2>
        </div>

        {/* Spotify Playlist Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://open.spotify.com/embed/album/7fRKvowbTUZLc3D7oIpdOB?utm_source=generator&theme=0"
              width="100%"
              height="400"
              frameBorder="0"
              allow="encrypted-media"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
