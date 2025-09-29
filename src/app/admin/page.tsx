'use client';

import { useState } from 'react';
import BasicInfoForm from '@/components/admin/BasicInfoForm';
import IntroductionForm from '@/components/admin/IntroductionForm';
import YouTubeForm from '@/components/admin/YouTubeForm';
import ImageGalleryForm from '@/components/admin/ImageGalleryForm';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: '기본정보', component: BasicInfoForm },
    { id: 'intro', label: '소개', component: IntroductionForm },
    { id: 'youtube', label: '유튜브', component: YouTubeForm },
    { id: 'images', label: '이미지', component: ImageGalleryForm },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">관리자 페이지</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  );
}
