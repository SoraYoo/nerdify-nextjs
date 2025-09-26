'use client';

// import { Play } from 'lucide-react';

export default function YouTubeSection() {

  return (
    <section id="youtube" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Video - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/AJOj6JlmrGg"
                title="WHERE SPICY GROOVES & TASTY FOOD SET THE MOOD"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Title and Text - Right Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-2xl lg:text-3xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              WHERE SPICY GROOVES & TASTY FOOD SET THE MOOD
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-black text-sm px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors" onClick={() => window.open('https://www.youtube.com/channel/UCXaE07gxYjqtwIyFAsnDI8Q', '_blank')}>
                더 많은 영상 보기
              </button>
            </div>
          </div>
        </div>

        {/* YouTube Shorts Section */}
        <div className="mt-20">
          <div className="flex items-center justify-start mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/250px-Youtube_shorts_icon.svg.png" 
              alt="YouTube Shorts" 
              className="w-8 h-8 mr-3"
            />
            <span className="text-2xl font-bold text-white" style={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>Shorts</span>
          </div>

          {/* Shorts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Short 1 */}
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/asAM4rq3WYQ"
                title="YouTube Short #1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Short 2 */}
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/g3FZqCVz5j8"
                title="YouTube Short #2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Short 3 */}
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/YZ3H0iSNN7Y"
                title="YouTube Short #3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Short 4 */}
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/WjPkNK6dwfI"
                title="YouTube Short #4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}