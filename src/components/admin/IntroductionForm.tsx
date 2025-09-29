'use client';

import { useEffect, useState } from 'react';

export default function IntroductionForm() {
  const [formData, setFormData] = useState({
    mainImage: null as File | null,
    mainImagePreview: '',
    mainTitle: '',
    mainDescription: '',
    mainImageUrl: '',
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
            setFormData(prev => ({
              ...prev,
              mainTitle: data.mainTitle ?? '',
              mainDescription: data.mainDescription ?? '',
              mainImageUrl: data.mainImageUrl ?? '',
              mainImagePreview: data.mainImageUrl ?? '',
            }));
          }
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        mainImage: file,
        mainImagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imageUrl = formData.mainImageUrl;
      if (formData.mainImage) {
        const fd = new FormData();
        fd.append('file', formData.mainImage);
        const uploadRes = await fetch('/api/upload/main-image', { method: 'POST', body: fd });
        if (!uploadRes.ok) throw new Error('이미지 업로드 실패');
        const { url } = await uploadRes.json();
        imageUrl = url;
        setFormData(prev => ({ ...prev, mainImageUrl: url }));
      }

      const payload = {
        mainTitle: formData.mainTitle,
        mainDescription: formData.mainDescription,
        mainImageUrl: imageUrl,
      };
      const res = await fetch('/api/site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('저장 실패');
      alert('소개 섹션이 저장되었습니다.');
    } catch (err) {
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>불러오는 중...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">소개</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Image */}
        <div>
          <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700 mb-2">
            메인 배너 이미지 *
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              id="mainImage"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {formData.mainImagePreview && (
              <div className="border border-gray-300 rounded-md overflow-hidden aspect-[16/9] h-24">
                <img
                  src={formData.mainImagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-700 mb-1">이미지가 URL 형태인 경우</label>
            <input
              type="text"
              name="mainImageUrl"
              value={formData.mainImageUrl?.startsWith('https://') ? formData.mainImageUrl : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
              placeholder="https://..."
            />
          </div>
        </div>

        {/* Main Title */}
        <div>
          <label htmlFor="mainTitle" className="block text-sm font-medium text-gray-700 mb-2">
            사이트 타이틀 *
          </label>
          <input
            type="text"
            id="mainTitle"
            name="mainTitle"
            value={formData.mainTitle}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
            placeholder="메인 타이틀을 입력하세요"
          />
        </div>

        {/* Main Description */}
        <div>
          <label htmlFor="mainDescription" className="block text-sm font-medium text-gray-700 mb-2">
            메인 소개글 *
          </label>
          <textarea
            id="mainDescription"
            name="mainDescription"
            value={formData.mainDescription}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
            placeholder="메인 소개글을 입력하세요"
          />
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
