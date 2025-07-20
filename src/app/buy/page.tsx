'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Home, 
  Building, 
  MapPin, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  CheckCircle,
  Wrench,
  Award,
  Clock
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
}

export default function Buy() {
  const router = useRouter();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const propertyCategories = [
    {
      title: '新築1戸建て',
      description: '新築の一戸建て住宅をご紹介します',
      href: '/buy/new-house',
      icon: Home,
      color: 'yellow'
    },
    {
      title: '中古戸建て',
      description: '中古の一戸建て住宅をご紹介します',
      href: '/buy/used-house',
      icon: Home,
      color: 'yellow'
    },
    {
      title: '中古マンション',
      description: '中古マンション・アパートをご紹介します',
      href: '/buy/used-mansion',
      icon: Building,
      color: 'yellow'
    },
    {
      title: '土地',
      description: '住宅用地や投資用土地をご紹介します',
      href: '/buy/land',
      icon: MapPin,
      color: 'yellow'
    }
  ];

  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  const featuredProperties: Property[] = [
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
      description: '閑静な住宅街に位置する新築戸建てです。3LDKの広々とした間取りで、ご家族の理想の住まいとして最適です。'
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
      description: '駅徒歩5分の好立地にある中古マンションです。2LDKの使いやすい間取りで、投資用としても人気があります。'
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
      description: '住宅用地として最適な角地の土地です。日当たり良好で、新築戸建ての建設が可能です。'
    },
    {
      id: 4,
      title: '中古戸建て',
      location: '奈良県橿原市',
      price: '3,580万円',
      type: '中古戸建て',
      size: '95㎡',
      age: '築8年',
      features: ['リフォーム済み', '3LDK', '駐車場2台分'],
      image: '/api/placeholder/400/250',
      description: 'リフォーム済みの中古戸建てです。3LDKの使いやすい間取りで、すぐにお引っ越し可能です。'
    },
    {
      id: 5,
      title: '投資用マンション',
      location: '奈良県大和郡山市',
      price: '1,980万円',
      type: '中古マンション',
      size: '45㎡',
      age: '築20年',
      features: ['駅徒歩3分', '投資用', '安定収益'],
      image: '/api/placeholder/400/250',
      description: '投資用として人気の1Kマンションです。駅徒歩3分の好立地で、安定した家賃収入が期待できます。'
    },
    {
      id: 6,
      title: '新築マンション',
      location: '奈良県天理市',
      price: '5,680万円',
      type: '新築マンション',
      size: '75㎡',
      age: '築0年',
      features: ['最新設備', '2LDK', 'セキュリティ充実'],
      image: '/api/placeholder/400/250',
      description: '最新設備を備えた新築マンションです。2LDKの広々とした間取りで、セキュリティも充実しています。'
    }
  ];

  const handlePropertyDetail = (property: Property) => {
    setSelectedProperty(property);
    router.push(`/buy/property/${property.id}`);
  };

  const handleInquiry = (property: Property) => {
    setSelectedProperty(property);
    setShowInquiryModal(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <span className="text-yellow-600 font-bold text-2xl">CENTURY 21</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              理想の住まいを<br />
              見つけましょう
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              センチュリー21の豊富な物件情報から、お客様に最適な物件をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              奈良県内の厳選物件を多数掲載！
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                センチュリー21ホームマートでは、広陵町・大和高田市を中心に新築戸建から中古マンション・土地まで幅広く物件情報を取り扱っております。
              </p>
              <p className="mb-4">
                地元エリアに強い当社ならではの最新情報を随時更新中。お客様の理想の暮らし探しを全力でお手伝いいたします。
              </p>
              <p className="text-yellow-600 font-semibold">
                気になる物件が見つかりましたら、お気軽にお問い合わせ・ご見学予約ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔍 条件を指定して検索
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  エリア
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>エリアを選択</option>
                  <option>奈良市</option>
                  <option>広陵町</option>
                  <option>葛城市</option>
                  <option>生駒市</option>
                  <option>橿原市</option>
                  <option>大和郡山市</option>
                  <option>天理市</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  物件種別
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>物件種別を選択</option>
                  <option>新築1戸建て</option>
                  <option>中古戸建て</option>
                  <option>中古マンション</option>
                  <option>土地</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  価格
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>価格を選択</option>
                  <option>〜3,000万円</option>
                  <option>3,000万円〜5,000万円</option>
                  <option>5,000万円〜8,000万円</option>
                  <option>8,000万円〜</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  間取り
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>間取りを選択</option>
                  <option>1K/1DK</option>
                  <option>1LDK</option>
                  <option>2LDK</option>
                  <option>3LDK</option>
                  <option>4LDK以上</option>
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <button className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                <Search className="mr-2 h-5 w-5" />
                検索する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              物件カテゴリ
            </h2>
            <p className="text-lg text-gray-600">
              お客様のニーズに合わせて物件をカテゴリ別にご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-yellow-600 font-medium">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              おすすめ物件
            </h2>
            <p className="text-lg text-gray-600">
              奈良県内の厳選物件をご紹介
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">物件画像</span>
                  </div>
                  {property.highlight && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {property.highlight}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">{property.price}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.type}</span>
                    <span>{property.size}</span>
                    <span>{property.age}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <CheckCircle className="h-3 w-3 text-yellow-600 mr-2" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <button 
                      onClick={() => handlePropertyDetail(property)}
                      className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition-colors text-sm"
                    >
                      詳細を見る
                    </button>
                    <button 
                      onClick={() => handleInquiry(property)}
                      className="w-full border border-yellow-600 text-yellow-600 py-2 rounded-md hover:bg-yellow-50 transition-colors text-sm"
                    >
                      この物件を問い合わせる
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              お問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ホームマートの物件サービス
            </h2>
            <p className="text-lg text-gray-600">
              物件購入からリフォームまで、ワンストップでサポート
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">地域密着の情報力</h3>
              <p className="text-sm text-gray-600">奈良県内の豊富な物件情報と地域事情を熟知</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">リフォーム提案</h3>
              <p className="text-sm text-gray-600">中古物件購入後のリフォームプランもご提案</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">夜22時まで営業</h3>
              <p className="text-sm text-gray-600">お仕事帰りにもゆっくりご相談可能</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            物件探しでお困りの際は、経験豊富なスタッフが丁寧にサポートいたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
            >
              <Phone className="mr-2 h-6 w-6" />
              お問い合わせ
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center text-lg"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              LINEで相談
            </Link>
          </div>
        </div>
      </section>

      {/* Property Inquiry Modal */}
      {showInquiryModal && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">物件お問い合わせ</h3>
            <p className="text-gray-600 mb-4">
              {selectedProperty.title}（{selectedProperty.location}）についてお問い合わせいただき、ありがとうございます。
            </p>
            <div className="space-y-4">
              <Link
                href={`/contact?property=${selectedProperty.id}`}
                className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-center block"
              >
                お問い合わせフォームへ進む
              </Link>
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