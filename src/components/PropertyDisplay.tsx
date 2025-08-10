'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Home, Building, Calendar, ArrowRight } from 'lucide-react';

interface Property {
  id: string;
  type: '中古一戸建' | '新築一戸建' | 'マンション' | '売地';
  title: string;
  price: string;
  details: string;
  area: string;
  station: string;
  walkTime: string;
  image?: string;
  updatedDate: string;
}

const PropertyDisplay = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'featured'>('new');

  // サンプル物件データ（実際のAPIから取得する想定）
  const newProperties: Property[] = [
    {
      id: '1',
      type: '売地',
      title: '桜井市大字大福の売地',
      price: '1,230万円',
      details: '205.08㎡',
      area: '桜井市大字大福',
      station: '近鉄大阪線「耳成」駅',
      walkTime: '徒歩15分',
      updatedDate: '2025.08.09'
    },
    {
      id: '2',
      type: '中古一戸建',
      title: '奈良市富雄川西２丁目　一戸建',
      price: '3,498万円',
      details: '3LDK / 79.49㎡',
      area: '奈良市富雄川西２丁目',
      station: '近鉄難波・奈良線「富雄」駅',
      walkTime: '徒歩13分',
      updatedDate: '2025.08.08'
    },
    {
      id: '3',
      type: '中古一戸建',
      title: '生駒郡斑鳩町阿波２丁目　一戸建',
      price: '2,980万円',
      details: '3LDK / 85.20㎡',
      area: '生駒郡斑鳩町阿波２丁目',
      station: 'JR関西本線「王寺」駅',
      walkTime: '徒歩8分',
      updatedDate: '2025.08.07'
    },
    {
      id: '4',
      type: 'マンション',
      title: 'シティハウス王寺駅前',
      price: '3,880万円',
      details: '2LDK / 65.30㎡',
      area: '北葛城郡王寺町',
      station: 'JR関西本線「王寺」駅',
      walkTime: '徒歩3分',
      updatedDate: '2025.08.06'
    }
  ];

  const getPropertyIcon = (type: string) => {
    switch (type) {
      case '中古一戸建':
      case '新築一戸建':
        return <Home className="h-5 w-5 text-blue-600" />;
      case 'マンション':
        return <Building className="h-5 w-5 text-green-600" />;
      case '売地':
        return <MapPin className="h-5 w-5 text-orange-600" />;
      default:
        return <Home className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPropertyTypeColor = (type: string) => {
    switch (type) {
      case '中古一戸建':
        return 'bg-blue-100 text-blue-800';
      case '新築一戸建':
        return 'bg-green-100 text-green-800';
      case 'マンション':
        return 'bg-purple-100 text-purple-800';
      case '売地':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            物件を探す
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            奈良県内の最新物件情報をお届けします。お気に入りの物件が見つかるまで、お気軽にご相談ください。
          </p>
        </div>

        {/* タブ切り替え */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('new')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'new'
                  ? 'bg-yellow-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-yellow-600'
              }`}
            >
              新着物件
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'featured'
                  ? 'bg-yellow-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-yellow-600'
              }`}
            >
              おすすめ物件
            </button>
          </div>
        </div>

        {/* 物件一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* 物件画像プレースホルダー */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <img 
                  src="/api/placeholder/400/250" 
                  alt={`${property.title}の物件画像`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* 物件情報 */}
              <div className="p-4">
                {/* 物件種別と更新日 */}
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPropertyTypeColor(property.type)}`}>
                    {property.type}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {property.updatedDate}
                  </div>
                </div>

                {/* 物件タイトル */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {property.title}
                </h3>

                {/* 価格 */}
                <div className="text-2xl font-bold text-yellow-600 mb-3">
                  {property.price}
                </div>

                {/* 詳細情報 */}
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">面積：</span>
                    {property.details}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">エリア：</span>
                    {property.area}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">最寄駅：</span>
                    {property.station}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">徒歩：</span>
                    {property.walkTime}
                  </div>
                </div>

                {/* アクションボタン */}
                <div className="flex space-x-2">
                  <Link
                    href={`/buy/property/${property.id}`}
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    詳細を見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="text-center mt-8">
          <Link
            href="/buy"
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white rounded-md font-medium transition-colors"
          >
            もっと物件を見る
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* 物件検索ツール */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            物件検索ツール
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">エリア検索</h4>
              <p className="text-sm text-gray-600">地域から物件を探す</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors">
              <Building className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">沿線検索</h4>
              <p className="text-sm text-gray-600">駅・沿線から物件を探す</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors">
              <Home className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">条件検索</h4>
              <p className="text-sm text-gray-600">詳細条件で物件を探す</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDisplay;
