'use client';

import { useState } from 'react';

interface ImageItem {
  id: string;
  file: File | null;
  preview: string;
}

export default function ImageGalleryForm() {
  const [images, setImages] = useState<ImageItem[]>([
    { id: '1', file: null, preview: '' },
    { id: '2', file: null, preview: '' },
    { id: '3', file: null, preview: '' },
    { id: '4', file: null, preview: '' },
  ]);

  const handleImageChange = (id: string, file: File | null) => {
    setImages(prev => prev.map(img => {
      if (img.id === id) {
        return {
          ...img,
          file,
          preview: file ? URL.createObjectURL(file) : ''
        };
      }
      return img;
    }));
  };

  const addImageSlot = () => {
    const newId = (images.length + 1).toString();
    setImages(prev => [...prev, { id: newId, file: null, preview: '' }]);
  };

  const removeImageSlot = (id: string) => {
    if (images.length > 4) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imageFiles = images.filter(img => img.file).map(img => img.file);
    console.log('Images:', imageFiles);
    // TODO: Save to database
    alert('이미지 갤러리가 저장되었습니다.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">이미지</h2>
      <p className="text-sm text-gray-500 mb-6">최소 4개 이상 넣어주세요.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={image.id} className="border border-gray-300 rounded-lg p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이미지 {index + 1}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(image.id, e.target.files?.[0] || null)}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              
              {/* Image Preview */}
              {image.preview ? (
                <div className="w-full h-48 border border-gray-300 rounded-md overflow-hidden">
                  <img
                    src={image.preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">이미지 미리보기</span>
                </div>
              )}
              
              {/* Remove button for additional images */}
              {images.length > 4 && (
                <button
                  type="button"
                  onClick={() => removeImageSlot(image.id)}
                  className="mt-2 px-3 py-1 text-sm text-red-600 hover:text-red-800"
                >
                  제거
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Image Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={addImageSlot}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            + 이미지 추가
          </button>
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
