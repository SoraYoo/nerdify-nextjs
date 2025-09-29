'use client';

import { useState } from 'react';

export default function YouTubeForm() {
  const [formData, setFormData] = useState({
    mainVideoLink: '',
    youtubeProfileLink: '',
    shorts1: '',
    shorts2: '',
    shorts3: '',
    shorts4: '',
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
    console.log('YouTube:', formData);
    // TODO: Save to database
    alert('유튜브 섹션이 저장되었습니다.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">유튜브</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main YouTube Video */}
        <div>
          <label htmlFor="mainVideoLink" className="block text-sm font-medium text-gray-700 mb-2">
            메인 유튜브 영상 링크 *
          </label>
          <input
            type="url"
            id="mainVideoLink"
            name="mainVideoLink"
            value={formData.mainVideoLink}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://youtube.com/watch?v=..."
          />
          <p className="mt-1 text-sm text-gray-500">
            YouTube 영상 URL을 입력하세요 (예: https://youtube.com/watch?v=VIDEO_ID)
          </p>
        </div>

        {/* YouTube Profile Link */}
        <div>
          <label htmlFor="youtubeProfileLink" className="block text-sm font-medium text-gray-700 mb-2">
            유튜브 프로필 링크 *
          </label>
          <input
            type="url"
            id="youtubeProfileLink"
            name="youtubeProfileLink"
            value={formData.youtubeProfileLink}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://youtube.com/channel/..."
          />
        </div>

        {/* YouTube Shorts */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">유튜브 쇼츠</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shorts1" className="block text-sm font-medium text-gray-700 mb-2">
                쇼츠 1
              </label>
              <input
                type="url"
                id="shorts1"
                name="shorts1"
                value={formData.shorts1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://youtube.com/shorts/..."
              />
            </div>

            <div>
              <label htmlFor="shorts2" className="block text-sm font-medium text-gray-700 mb-2">
                쇼츠 2
              </label>
              <input
                type="url"
                id="shorts2"
                name="shorts2"
                value={formData.shorts2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://youtube.com/shorts/..."
              />
            </div>

            <div>
              <label htmlFor="shorts3" className="block text-sm font-medium text-gray-700 mb-2">
                쇼츠 3
              </label>
              <input
                type="url"
                id="shorts3"
                name="shorts3"
                value={formData.shorts3}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://youtube.com/shorts/..."
              />
            </div>

            <div>
              <label htmlFor="shorts4" className="block text-sm font-medium text-gray-700 mb-2">
                쇼츠 4
              </label>
              <input
                type="url"
                id="shorts4"
                name="shorts4"
                value={formData.shorts4}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://youtube.com/shorts/..."
              />
            </div>
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
