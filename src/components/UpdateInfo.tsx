'use client';

import { useState } from 'react';
import { Calendar, Star, TrendingUp, Home, Building, MapPin } from 'lucide-react';

interface UpdateItem {
  id: number;
  type: 'contract' | 'price' | 'new';
  title: string;
  content: string;
  date: string;
  customer?: string;
  location?: string;
  price?: string;
  propertyType?: string;
  image?: string;
}

const UpdateInfo = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'contract' | 'price' | 'new'>('all');

  const updateItems: UpdateItem[] = [
    {
      id: 1,
      type: 'contract',
      title: 'ご成約いただきました！',
      content: 'この度はセンチュリー21ベース奈良西大和店をご利用いただきありがとうございました。これからも地域密着！親しみやすい不動産会社を目指して参ります。',
      date: '2025.08.09',
      customer: 'N様',
      location: '奈良市在住'
    },
    {
      id: 2,
      type: 'contract',
      title: 'ご成約いただきました！',
      content: 'この度はセンチュリー21奈良西大和店にて大和高田市の中古マンションをご成約いただきありがとうございました！不慣れなところもありご不安にさせてしまったところもあったかと思いますが、信頼していただきありがとうございました。',
      date: '2025.07.28',
      customer: 'C様',
      location: '大和高田市'
    },
    {
      id: 3,
      type: 'contract',
      title: 'ご成約いただきました！',
      content: 'この度は、センチュリー21ベース奈良西大和店にて上牧町の新築戸建てをご成約いただきありがとうございました。引き続き住宅ローンのお打ち合わせ等、しっかりと努めさせていただきますので、引き続きよろしくお願いいたします。',
      date: '2025.07.21',
      customer: 'N様',
      location: '上牧町'
    },
    {
      id: 4,
      type: 'price',
      title: '～新着情報～「価格変更物件」',
      content: 'パナホーム（現パナソニックホームズ）施工の軽量鉄鋼のお家！LDKは広々約20帖！リフォーム歴あり！室内大変きれいにお使いです！法隆寺駅より徒歩12分',
      date: '2025.07.02',
      location: '斑鳩町服部1丁目',
      propertyType: '中古戸建て'
    },
    {
      id: 5,
      type: 'new',
      title: '☆王寺駅より徒歩3分♪シティハウス王寺駅前☆ ☆新着物件情報☆',
      content: '快速急行停車駅！人気のJR王寺駅より徒歩3分の好立地マンション！SEIYU王寺店まで徒歩4分、王寺町役場やコンビニ等生活するうえでかかせない商業施設がほぼすべて徒歩圏内！',
      date: '2025.07.01',
      location: 'シティハウス王寺駅前',
      price: '3,880万円',
      propertyType: 'マンション'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? updateItems 
    : updateItems.filter(item => item.type === activeTab);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'contract': return 'ご成約';
      case 'price': return '価格更新';
      case 'new': return '新着物件';
      default: return '';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'contract': return 'bg-green-100 text-green-600';
      case 'price': return 'bg-blue-100 text-blue-600';
      case 'new': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'contract': return <Star className="h-4 w-4" />;
      case 'price': return <TrendingUp className="h-4 w-4" />;
      case 'new': return <Home className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">更新情報</h2>
          <p className="text-lg text-gray-600">最新の物件情報や成約情報をお届けします</p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-yellow-50'
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => setActiveTab('contract')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center ${
              activeTab === 'contract' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            <Star className="mr-2 h-4 w-4" />
            ご成約
          </button>
          <button
            onClick={() => setActiveTab('price')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center ${
              activeTab === 'price' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            価格更新
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center ${
              activeTab === 'new' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-yellow-50'
            }`}
          >
            <Home className="mr-2 h-4 w-4" />
            新着物件
          </button>
        </div>

        {/* 更新情報一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* ヘッダー */}
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1">{getTypeLabel(item.type)}</span>
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                {/* タイトル */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* 物件情報 */}
                {item.propertyType && (
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-1" />
                    {item.propertyType}
                  </div>
                )}

                {item.location && (
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                )}

                {item.price && (
                  <div className="text-lg font-bold text-red-600 mb-3">
                    {item.price}
                  </div>
                )}

                {/* 内容 */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.content}
                </p>

                {/* お客様情報（成約の場合） */}
                {item.customer && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">お客様：</span>
                      {item.customer}
                      {item.location && (
                        <span className="ml-2">（{item.location}）</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="text-center mt-8">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            更新情報一覧
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateInfo;
