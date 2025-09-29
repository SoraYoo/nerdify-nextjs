import { Instagram, Youtube, Mail } from 'lucide-react';
import { prisma } from '@/lib/prisma';

export default async function Footer() {
  const site = await prisma.site.findUnique({ where: { artistNo: 1 } });
  const instagram = site?.instagramLink || 'https://instagram.com/';
  const youtube = site?.youtubeLink || 'https://youtube.com/';
  const spotify = site?.spotifyLink || 'https://open.spotify.com/';
  const email = site?.email || 'mailto:hi@example.com';

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>{site?.mainTitle || 'Sam, Where are you?'}</h3>
            {/* <p className="text-gray-300 mb-6">
              연결하세요! YouTube와 Instagram에서 우리를 찾을 수 있거나 메시지로 연락하세요. 모든 분들께 사랑을 전합니다!
            </p> */}
            <div className="flex space-x-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href={email.startsWith('mailto:') ? email : `mailto:${email}`}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025, {site?.mainTitle || 'Sam, Where are you?'}</span>
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">배송정보</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
