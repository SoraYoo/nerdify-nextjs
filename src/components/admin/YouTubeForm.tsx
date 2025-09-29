'use client';

import { useEffect, useState } from 'react';

export default function YouTubeForm() {
  const [formData, setFormData] = useState({
    mainVideoLink: '',
    youtubeProfileLink: '',
    shorts1: '',
    shorts2: '',
    shorts3: '',
    shorts4: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/site', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setFormData({
              mainVideoLink: data.mainVideoLink ?? '',
              youtubeProfileLink: data.youtubeProfileLink ?? '',
              shorts1: data.shorts1 ?? '',
              shorts2: data.shorts2 ?? '',
              shorts3: data.shorts3 ?? '',
              shorts4: data.shorts4 ?? '',
            });
          }
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('저장 실패');
      alert('유튜브 섹션이 저장되었습니다.');
    } catch {
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>불러오는 중...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">유튜브</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main YouTube Video */}
        <div>
          <label htmlFor="mainVideoLink" className="block text-sm font-medium text-gray-700 mb-2">
            메인 유튜브 영상 링크 *
          </label>
          <p className="mt-1 text-sm text-gray-500 mb-4">
            YouTube 영상 URL을 입력하세요. (예: https://youtube.com/watch?v=VIDEO_ID)
          </p>
          <input
            type="text"
            id="mainVideoLink"
            name="mainVideoLink"
            value={formData.mainVideoLink}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
            placeholder="AJOj6JlmrGg"
          />
          
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
            placeholder="https://youtube.com/channel/..."
          />
        </div>

        {/* YouTube Shorts */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">유튜브 Shorts</h3>
          <p className="text-sm text-gray-500 mb-4">YouTube Shorts URL을 입력하세요 (예: https://youtube.com/shorts/VIDEO_ID)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['shorts1','shorts2','shorts3','shorts4'] as const).map((key, idx) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-2">
                  Shorts {idx + 1}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
                  placeholder="g3FZqCVz5j8"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {saving ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </form>
    </div>
  );
}
