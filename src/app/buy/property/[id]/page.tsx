'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  MapPin, 
  Home, 
  Phone, 
  MessageCircle, 
  ArrowLeft,
  CheckCircle,
  Calendar,
  Users,
  Car,
  Train
} from 'lucide-react';
import { useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  size: string;
  age: string;
  features: string[];
  highlight?: string;
  image: string;
  description: string;
  details: {
    address: string;
    access: string;
    layout: string;
    landSize: string;
    buildingSize: string;
    parking: string;
    structure: string;
    totalFloors: string;
    floor: string;
    direction: string;
    balcony: string;
    equipment: string[];
    facilities: string[];
  };
}

export default function PropertyDetail() {
  const params = useParams();
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  // 物件データ（実際の実装ではAPIから取得）
  const properties: Property[] = [
    {
      id: 1,
      title: '新築戸建て',
      location: '奈良県広陵町',
      price: '4,980万円',
      type: '新築戸建て',
      size: '120㎡',
      age: '築1年',
      features: ['駅徒歩5分', '南向き角地', 'リフォーム対応可'],
      highlight: 'おすすめ物件',
      image: '/api/placeholder/400/250',
      description: '閑静な住宅街に位置する新築戸建てです。3LDKの広々とした間取りで、ご家族の理想の住まいとして最適です。',
      details: {
        address: '奈良県北葛城郡広陵町笠287-1',
        access: '近鉄「大和高田駅」よりバス15分・「さわやかホール」バス停下車徒歩5分',
        layout: '3LDK',
        landSize: '150㎡',
        buildingSize: '120㎡',
        parking: '2台分',
        structure: '木造2階建て',
        totalFloors: '2階建て',
        floor: '1階・2階',
        direction: '南向き',
        balcony: '10㎡',
        equipment: ['エアコン', '給湯器', '床暖房', 'システムキッチン'],
        facilities: ['駐車場', '庭', '物置', 'ガレージ']
      }
    },
    {
      id: 2,
      title: '中古マンション',
      location: '奈良県奈良市',
      price: '3,280万円',
      type: '中古マンション',
      size: '65㎡',
      age: '築15年',
      features: ['駅徒歩3分', 'リフォーム済み', 'URICO対象物件'],
      highlight: '新着物件',
      image: '/api/placeholder/400/250',
      description: '駅徒歩5分の好立地にある中古マンションです。2LDKの使いやすい間取りで、投資用としても人気があります。',
      details: {
        address: '奈良県奈良市西大寺町1-1-1',
        access: '近鉄「西大寺駅」徒歩3分',
        layout: '2LDK',
        landSize: '-',
        buildingSize: '65㎡',
        parking: '1台分',
        structure: 'RC造',
        totalFloors: '8階建て',
        floor: '5階',
        direction: '南向き',
        balcony: '8㎡',
        equipment: ['エアコン', '給湯器', 'システムキッチン', '洗面台'],
        facilities: ['駐車場', '宅配ボックス', 'エレベーター', '管理人常駐']
      }
    },
    {
      id: 3,
      title: '土地',
      location: '奈良県生駒市',
      price: '2,980万円',
      type: '土地',
      size: '150㎡',
      age: '角地',
      features: ['日当たり良好', '新築可能', '駐車場完備'],
      highlight: 'おすすめ物件',
      image: '/api/placeholder/400/250',
      description: '住宅用地として最適な角地の土地です。日当たり良好で、新築戸建ての建設が可能です。',
      details: {
        address: '奈良県生駒市生駒町1-1-1',
        access: '近鉄「生駒駅」徒歩10分',
        layout: '-',
        landSize: '150㎡',
        buildingSize: '-',
        parking: '2台分',
        structure: '-',
        totalFloors: '-',
        floor: '-',
        direction: '南向き',
        balcony: '-',
        equipment: [],
        facilities: ['駐車場', '水道', 'ガス', '電気']
      }
    }
  ];

  const propertyId = Number(params.id);
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">物件が見つかりません</h1>
          <p className="text-gray-600 mb-8">指定された物件は存在しないか、削除された可能性があります。</p>
          <Link
            href="/buy"
            className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            物件一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              href="/buy"
              className="inline-flex items-center text-yellow-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              物件一覧に戻る
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {property.title}
            </h1>
            <p className="text-xl mb-4 text-yellow-100">
              {property.location}
            </p>
            <p className="text-3xl font-bold text-yellow-200">
              {property.price}
            </p>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">物件外観写真</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">間取り図</span>
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">内装写真</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">物件概要</h2>
                  {property.highlight && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.highlight}
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">物件説明</h3>
                    <p className="text-gray-700 leading-relaxed">{property.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">物件特徴</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">基本情報</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Home className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">物件種別</p>
                          <p className="font-medium">{property.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">所在地</p>
                          <p className="font-medium">{property.details.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Train className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">アクセス</p>
                          <p className="font-medium">{property.details.access}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">間取り</p>
                          <p className="font-medium">{property.details.layout}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">築年数</p>
                          <p className="font-medium">{property.age}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Car className="h-5 w-5 text-yellow-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">駐車場</p>
                          <p className="font-medium">{property.details.parking}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">設備・施設</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">設備</h4>
                        <div className="space-y-1">
                          {property.details.equipment.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">施設</h4>
                        <div className="space-y-1">
                          {property.details.facilities.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">価格</h3>
                <p className="text-3xl font-bold text-yellow-600 mb-4">{property.price}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>物件種別: {property.type}</p>
                  <p>専有面積: {property.size}</p>
                  <p>築年数: {property.age}</p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
                <p className="text-gray-600 mb-4">
                  この物件について詳しく知りたい方は、お気軽にお問い合わせください。
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowInquiryModal(true)}
                    className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    <Phone className="inline mr-2 h-5 w-5" />
                    この物件を問い合わせる
                  </button>
                  <a
                    href="https://line.me/R/ti/p/@c21-homemart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center block"
                  >
                    <MessageCircle className="inline mr-2 h-5 w-5" />
                    LINEで相談する
                  </a>
                  <Link
                    href="/contact"
                    className="w-full border border-yellow-600 text-yellow-600 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors text-center block"
                  >
                    お気軽に相談する
                  </Link>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">センチュリー21ホームマート</h3>
                <div className="space-y-2 text-sm text-yellow-700">
                  <p>奈良県広陵町の不動産専門店</p>
                  <p>TEL: 0120-43-8639</p>
                  <p>営業時間: 9:00-22:00</p>
                  <p>定休日: 年末年始</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">物件お問い合わせ</h3>
            <p className="text-gray-600 mb-4">
              {property.title}（{property.location}）についてお問い合わせいただき、ありがとうございます。
            </p>
            <div className="space-y-4">
              <Link
                href={`/contact?property=${property.id}`}
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-center block"
              >
                お問い合わせフォームへ進む
              </Link>
              <a
                href="https://line.me/R/ti/p/@c21-homemart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center block"
              >
                LINEで相談する
              </a>
              <button
                onClick={() => setShowInquiryModal(false)}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 