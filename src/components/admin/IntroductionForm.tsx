'use client';

import { useState } from 'react';

export default function IntroductionForm() {
  const [formData, setFormData] = useState({
    mainImage: null as File | null,
    mainImagePreview: '',
    mainTitle: '',
    mainDescription: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        mainImage: file,
        mainImagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Introduction:', formData);
    // TODO: Save to database
    alert('소개 섹션이 저장되었습니다.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">소개</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Image */}
        <div>
          <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700 mb-2">
            메인 이미지 *
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
              <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
                <img
                  src={formData.mainImagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Title */}
        <div>
          <label htmlFor="mainTitle" className="block text-sm font-medium text-gray-700 mb-2">
            메인 타이틀 *
          </label>
          <input
            type="text"
            id="mainTitle"
            name="mainTitle"
            value={formData.mainTitle}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="메인 소개글을 입력하세요"
          />
          <p className="mt-1 text-sm text-gray-500">
            HTML 태그를 사용할 수 있습니다. (예: &lt;br&gt;, &lt;strong&gt;, &lt;em&gt;)
          </p>
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
