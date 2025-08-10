'use client';

import { useState } from 'react';
import { Search, MapPin, Train, Home, Building, Map, Star } from 'lucide-react';

interface SearchFilters {
  area: string;
  station: string;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  size: string;
  age: string;
  keyword: string;
}

const PropertySearch = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    area: '',
    station: '',
    propertyType: '',
    priceMin: '',
    priceMax: '',
    size: '',
    age: '',
    keyword: ''
  });

  const [activeTab, setActiveTab] = useState<'area' | 'line' | 'map' | 'school'>('area');

  const areas = [
    '橿原市', '大和高田市', '香芝市', '生駒市', '北葛城郡王寺町', '桜井市', 
    '大和郡山市', '天理市', '北葛城郡河合町', '磯城郡川西町'
  ];

  const stations = [
    '高田駅', '王寺駅', '橿原神宮前駅', '大和八木駅', '桜井駅', '生駒駅',
    '大和高田駅', '香芝駅', '柏原駅', '大和朝倉駅'
  ];

  const propertyTypes = [
    '中古戸建て', '新築戸建て', 'マンション', '土地', '投資用物件'
  ];

  const handleSearch = () => {
    console.log('検索条件:', searchFilters);
    // 実際の検索処理をここに実装
  };

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">物件を探す</h3>
        
        {/* 検索タブ */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('area')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'area' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
            }`}
          >
            <MapPin className="inline-block w-4 h-4 mr-2" />
            エリア検索
          </button>
          <button
            onClick={() => setActiveTab('line')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'line' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
            }`}
          >
            <Train className="inline-block w-4 h-4 mr-2" />
            沿線検索
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'map' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
            }`}
          >
            <Map className="inline-block w-4 h-4 mr-2" />
            地図検索
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'school' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
            }`}
          >
            <Star className="inline-block w-4 h-4 mr-2" />
            学区検索
          </button>
        </div>

        {/* フリーワード検索 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">フリーワード検索</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="駅名、エリア名、物件名など"
              value={searchFilters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* エリア検索 */}
        {activeTab === 'area' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">主要エリアから探す</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => handleFilterChange('area', area)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    searchFilters.area === area
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 沿線検索 */}
        {activeTab === 'line' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">主要駅から探す</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {stations.map((station) => (
                <button
                  key={station}
                  onClick={() => handleFilterChange('station', station)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    searchFilters.station === station
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  {station}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 詳細条件 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">物件種別</label>
            <select
              value={searchFilters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">種別を選択</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">価格下限</label>
            <select
              value={searchFilters.priceMin}
              onChange={(e) => handleFilterChange('priceMin', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">下限なし</option>
              <option value="1000">1,000万円</option>
              <option value="2000">2,000万円</option>
              <option value="3000">3,000万円</option>
              <option value="4000">4,000万円</option>
              <option value="5000">5,000万円</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">価格上限</label>
            <select
              value={searchFilters.priceMax}
              onChange={(e) => handleFilterChange('priceMax', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">上限なし</option>
              <option value="2000">2,000万円</option>
              <option value="3000">3,000万円</option>
              <option value="4000">4,000万円</option>
              <option value="5000">5,000万円</option>
              <option value="10000">1億円</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">築年数</label>
            <select
              value={searchFilters.age}
              onChange={(e) => handleFilterChange('age', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">指定なし</option>
              <option value="new">新築</option>
              <option value="5">築5年以内</option>
              <option value="10">築10年以内</option>
              <option value="20">築20年以内</option>
              <option value="30">築30年以内</option>
            </select>
          </div>
        </div>

        {/* 検索ボタン */}
        <div className="text-center">
          <button
            onClick={handleSearch}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center text-lg"
          >
            <Search className="mr-2 h-5 w-5" />
            検索する
          </button>
        </div>
      </div>

      {/* 物件統計情報 */}
      <div className="border-t pt-6">
        <h4 className="text-lg font-semibold mb-4">物件情報</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">999件</div>
            <div className="text-sm text-gray-600">掲載物件数</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">998件</div>
            <div className="text-sm text-gray-600">公開物件数</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">527件</div>
            <div className="text-sm text-gray-600">本日の更新物件数</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">0件</div>
            <div className="text-sm text-gray-600">会員物件数</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
