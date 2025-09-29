"use client";

import { useEffect, useState } from 'react';

export default function BasicInfoForm() {
  const [formData, setFormData] = useState({
    artistName: "",
    instagramLink: "",
    youtubeLink: "",
    spotifyLink: "",
    email: "",
    spotifyAlbumLink: "",
    patreonLink: "",
    patreonProfileImageUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/site", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setFormData({
              artistName: data.artistName ?? "",
              instagramLink: data.instagramLink ?? "",
              youtubeLink: data.youtubeLink ?? "",
              spotifyLink: data.spotifyLink ?? "",
              email: data.email ?? "",
              spotifyAlbumLink: data.spotifyAlbumLink ?? "",
              patreonLink: data.patreonLink ?? "",
              patreonProfileImageUrl: data.patreonProfileImageUrl ?? "",
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("저장 실패");
      alert("기본정보가 저장되었습니다.");
    } catch (err) {
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handlePatreonImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const up = await fetch('/api/upload/patreon-image', { method: 'POST', body: fd });
      if (!up.ok) throw new Error('업로드 실패');
      const { url } = await up.json();
      setFormData(prev => ({ ...prev, patreonProfileImageUrl: url }));
    } catch (err) {
      alert('업로드 중 오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  }

  if (loading) return <div>불러오는 중...</div>;

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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
              placeholder="https://open.spotify.com/album/..."
            />
          </div>

        </div>

        {/* Patreon Profile Image */}
        <div className="pt-4 border-t">
          <h2 className="text-lg font-bold text-gray-700 mb-2">PATREON</h2>
          <div className="mt-4">
            <label htmlFor="patreonLink" className="block text-sm font-medium text-gray-700 mb-2">
              Patreon 링크
            </label>
            <input
              type="url"
              id="patreonLink"
              name="patreonLink"
              value={formData.patreonLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
              placeholder="https://patreon.com/..."
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">Patreon 프로필 이미지</label>
          <div className="flex items-center space-x-4">
            <input type="file" accept="image/*" onChange={handlePatreonImage} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            {formData.patreonProfileImageUrl && (
              <div
                className="relative overflow-hidden border bg-gray-100"
                style={{ width: '72px', height: '96px', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}
              >
                <img src={formData.patreonProfileImageUrl} alt="Patreon Profile" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
          {uploading && <p className="text-sm text-gray-500 mt-1">업로드 중...</p>}

          <div className="mt-3">
            <label className="block text-sm text-gray-700 mb-1">이미지가 URL 형태인 경우</label>
            <input
              type="text"
              name="patreonProfileImageUrl"
              value={formData.patreonProfileImageUrl?.startsWith('https://') ? formData.patreonProfileImageUrl : ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#333]"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {saving ? "저장 중..." : "저장하기"}
          </button>
        </div>
      </form>
    </div>
  );
}
