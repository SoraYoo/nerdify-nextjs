'use client';

import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
                <h1 className="text-xl md:text-2xl font-bold text-white custom-title-font">Sam, Where are you?</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#welcome" className="text-white hover:text-gray text-sm font-medium custom-basic-font">
              Sam,
            </a>
            <a href="#youtube" className="text-white hover:text-gray text-sm font-medium custom-basic-font">
              YOUTUBE
            </a>
            <a href="#music" className="text-white hover:text-gray text-sm font-medium custom-basic-font">
              MUSIC
            </a>
            <a href="#patreon" className="text-white hover:text-gray text-sm font-medium custom-basic-font">
              PATREON
            </a>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-white hover:text-gray-200 custom-basic-font"
              >
                <Globe className="w-4 h-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-black rounded-md shadow-lg border border-gray-800">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 custom-basic-font"
                  >
                    🇰🇷 한국어
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 custom-basic-font"
                  >
                    🇺🇸 English
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a
                href="#welcome"
                className="block px-3 py-2 text-sm font-medium text-white hover:text-gray-200 custom-basic-font"
                onClick={() => setIsMenuOpen(false)}
              >
                Sam,
              </a>
              <a
                href="#youtube"
                className="block px-3 py-2 text-sm font-medium text-white hover:text-gray-200 custom-basic-font"
                onClick={() => setIsMenuOpen(false)}
              >
                YOUTUBE
              </a>
              <a
                href="#music"
                className="block px-3 py-2 text-sm font-medium text-white hover:text-gray-200 custom-basic-font"
                onClick={() => setIsMenuOpen(false)}
              >
                MUSIC
              </a>
              <a
                href="#patreon"
                className="block px-3 py-2 text-sm font-medium text-white hover:text-gray-200 custom-basic-font"
                onClick={() => setIsMenuOpen(false)}
              >
                PATREON
              </a>
              <div className="px-3 py-2">
                <div className="flex space-x-4">
                  <Link href="/" className="text-sm text-gray-200 hover:text-white custom-basic-font">
                    🇰🇷 한국어
                  </Link>
                  <Link href="/" className="text-sm text-gray-200 hover:text-white custom-basic-font">
                    🇺🇸 English
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
