'use client';

import { useState } from 'react';

export default function BasicInfoForm() {
  const [formData, setFormData] = useState({
    artistName: '',
    instagramLink: '',
    youtubeLink: '',
    spotifyLink: '',
    email: '',
    spotifyAlbumLink: '',
    patreonLink: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Basic Info:', formData);
    // TODO: Save to database
    alert('기본정보가 저장되었습니다.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">기본정보</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="artistName" className="block text-sm font-medium text-gray-700 mb-2">
              아티스트 이름 *
            </label>
            <input
              type="text"
              id="artistName"
              name="artistName"
              value={formData.artistName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="아티스트 이름을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              이메일 주소 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="instagramLink" className="block text-sm font-medium text-gray-700 mb-2">
              인스타그램 링크
            </label>
            <input
              type="url"
              id="instagramLink"
              name="instagramLink"
              value={formData.instagramLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://instagram.com/..."
            />
          </div>

          <div>
            <label htmlFor="youtubeLink" className="block text-sm font-medium text-gray-700 mb-2">
              유튜브 링크
            </label>
            <input
              type="url"
              id="youtubeLink"
              name="youtubeLink"
              value={formData.youtubeLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://youtube.com/channel/..."
            />
          </div>

          <div>
            <label htmlFor="spotifyLink" className="block text-sm font-medium text-gray-700 mb-2">
              스포티파이 링크
            </label>
            <input
              type="url"
              id="spotifyLink"
              name="spotifyLink"
              value={formData.spotifyLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://open.spotify.com/artist/..."
            />
          </div>

          <div>
            <label htmlFor="spotifyAlbumLink" className="block text-sm font-medium text-gray-700 mb-2">
              스포티파이 앨범 링크
            </label>
            <input
              type="url"
              id="spotifyAlbumLink"
              name="spotifyAlbumLink"
              value={formData.spotifyAlbumLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://open.spotify.com/album/..."
            />
          </div>

          <div>
            <label htmlFor="patreonLink" className="block text-sm font-medium text-gray-700 mb-2">
              Patreon 링크
            </label>
            <input
              type="url"
              id="patreonLink"
              name="patreonLink"
              value={formData.patreonLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://patreon.com/..."
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
}
