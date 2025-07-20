'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Camera, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  Wrench,
  Home,
  Star
} from 'lucide-react';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  completionDate: string;
}

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', name: 'すべて', icon: Camera },
    { id: 'tatami', name: '和室→洋室', icon: Home },
    { id: 'bathroom', name: 'お風呂', icon: Home },
    { id: 'kitchen', name: 'キッチン', icon: Home },
    { id: 'toilet', name: 'トイレ', icon: Home },
    { id: 'sink', name: '洗面台', icon: Home },
    { id: 'flooring', name: 'フローリング・クロス貼替', icon: Home }
  ];

  const caseStudies: CaseStudy[] = [
    // 和室→洋室
    {
      id: '1',
      category: 'tatami',
      title: '和室から洋室へのリフォーム',
      description: '築30年の和室を明るい洋室にリフォーム。床材をフローリングに変更し、壁紙も明るい色に変更することで、モダンで快適な空間に生まれ変わりました。',
      beforeImage: '/images/case-studies/tatami-before-1.jpg',
      afterImage: '/images/case-studies/tatami-after-1.jpg',
      location: '奈良市',
      completionDate: '2024年3月'
    },
    {
      id: '2',
      category: 'tatami',
      title: '6畳和室の洋室化',
      description: '6畳の和室を洋室に変更。畳を撤去してフローリングを施工し、照明もLEDに変更。収納も充実させて、より使いやすい空間にしました。',
      beforeImage: '/images/case-studies/tatami-before-2.jpg',
      afterImage: '/images/case-studies/tatami-after-2.jpg',
      location: '広陵町',
      completionDate: '2024年1月'
    },
    // お風呂
    {
      id: '3',
      category: 'bathroom',
      title: '浴室の全面リフォーム',
      description: '古い浴室をユニットバスに全面リフォーム。シャワーと浴槽を分離し、安全性と快適性を向上させました。',
      beforeImage: '/images/case-studies/bathroom-before-1.jpg',
      afterImage: '/images/case-studies/bathroom-after-1.jpg',
      location: '大和高田市',
      completionDate: '2024年2月'
    },
    {
      id: '4',
      category: 'bathroom',
      title: '浴室の部分リフォーム',
      description: '浴槽とシャワー部分のみをリフォーム。既存のタイルは活かしつつ、新しい設備に交換しました。',
      beforeImage: '/images/case-studies/bathroom-before-2.jpg',
      afterImage: '/images/case-studies/bathroom-after-2.jpg',
      location: '生駒市',
      completionDate: '2023年12月'
    },
    // キッチン
    {
      id: '5',
      category: 'kitchen',
      title: 'システムキッチンの導入',
      description: '古いキッチンをシステムキッチンに全面リフォーム。IHクッキングヒーターと食器洗い乾燥機を導入し、使いやすさを大幅に向上させました。',
      beforeImage: '/images/case-studies/kitchen-before-1.jpg',
      afterImage: '/images/case-studies/kitchen-after-1.jpg',
      location: '橿原市',
      completionDate: '2024年4月'
    },
    {
      id: '6',
      category: 'kitchen',
      title: 'キッチンの部分リフォーム',
      description: 'コンロとシンク部分のみをリフォーム。既存のキャビネットは活かしつつ、新しい設備に交換しました。',
      beforeImage: '/images/case-studies/kitchen-before-2.jpg',
      afterImage: '/images/case-studies/kitchen-after-2.jpg',
      location: '大和郡山市',
      completionDate: '2023年11月'
    },
    // トイレ
    {
      id: '7',
      category: 'toilet',
      title: '温水洗浄便座の導入',
      description: '通常の便器から温水洗浄便座に変更。節水機能付きで、快適性と環境配慮を両立しました。',
      beforeImage: '/images/case-studies/toilet-before-1.jpg',
      afterImage: '/images/case-studies/toilet-after-1.jpg',
      location: '天理市',
      completionDate: '2024年1月'
    },
    {
      id: '8',
      category: 'toilet',
      title: 'トイレの全面リフォーム',
      description: '古いトイレを全面リフォーム。温水洗浄便座と節水機能付きの便器に変更し、壁紙も明るい色に変更しました。',
      beforeImage: '/images/case-studies/toilet-before-2.jpg',
      afterImage: '/images/case-studies/toilet-after-2.jpg',
      location: '奈良市',
      completionDate: '2023年10月'
    },
    // 洗面台
    {
      id: '9',
      category: 'sink',
      title: '洗面台のリフォーム',
      description: '古い洗面台を新しいデザインに変更。収納も充実させ、使いやすさを向上させました。',
      beforeImage: '/images/case-studies/sink-before-1.jpg',
      afterImage: '/images/case-studies/sink-after-1.jpg',
      location: '広陵町',
      completionDate: '2024年2月'
    },
    {
      id: '10',
      category: 'sink',
      title: '洗面台と鏡のリフォーム',
      description: '洗面台と鏡を新しいデザインに変更。LED照明付きの鏡で、明るく使いやすい空間にしました。',
      beforeImage: '/images/case-studies/sink-before-2.jpg',
      afterImage: '/images/case-studies/sink-after-2.jpg',
      location: '大和高田市',
      completionDate: '2023年12月'
    },
    // フローリング・クロス貼替
    {
      id: '11',
      category: 'flooring',
      title: 'フローリングの張替え',
      description: '古いフローリングを新しいデザインに張替え。明るい色合いで、空間がより広く感じられるようになりました。',
      beforeImage: '/images/case-studies/flooring-before-1.jpg',
      afterImage: '/images/case-studies/flooring-after-1.jpg',
      location: '生駒市',
      completionDate: '2024年3月'
    },
    {
      id: '12',
      category: 'flooring',
      title: '壁紙とフローリングの同時リフォーム',
      description: '壁紙とフローリングを同時にリフォーム。統一感のあるデザインで、空間全体の印象を向上させました。',
      beforeImage: '/images/case-studies/flooring-before-2.jpg',
      afterImage: '/images/case-studies/flooring-after-2.jpg',
      location: '橿原市',
      completionDate: '2024年1月'
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === selectedCategory);

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
              <Camera className="inline mr-4 h-12 w-12" />
              施工事例
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              実際の施工事例をご覧いただけます
            </p>
            <p className="text-lg mb-8 text-yellow-200 max-w-4xl mx-auto">
              センチュリー21ホームマートの施工実績をご紹介します。
              お客様のご要望に合わせて、様々なリフォーム工事を手がけております。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              カテゴリ別施工事例
            </h2>
            <p className="text-lg text-gray-600">
              工事内容別に施工事例をご覧いただけます
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm font-semibold">施工前</span>
                      </div>
                      <img
                        src={caseStudy.beforeImage}
                        alt="施工前"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center hidden">
                        <span className="text-gray-500 text-sm font-semibold">施工前</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm font-semibold">施工後</span>
                      </div>
                      <img
                        src={caseStudy.afterImage}
                        alt="施工後"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center hidden">
                        <span className="text-gray-500 text-sm font-semibold">施工後</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Before/After Label */}
                  <div className="absolute top-2 left-2 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ビフォーアフター
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{caseStudy.description}</p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{caseStudy.location}</span>
                    <span>{caseStudy.completionDate}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="mt-4 w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
                  >
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">該当する施工事例が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Case Study Detail */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedCase.title}</h2>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-600">施工前</h3>
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={selectedCase.beforeImage}
                      alt="施工前"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center hidden">
                      <span className="text-gray-500">施工前の写真</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-600">施工後</h3>
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={selectedCase.afterImage}
                      alt="施工後"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center hidden">
                      <span className="text-gray-500">施工後の写真</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">工事内容</h3>
                <p className="text-gray-700">{selectedCase.description}</p>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                <span>施工場所: {selectedCase.location}</span>
                <span>完工日: {selectedCase.completionDate}</span>
              </div>
              
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors inline-flex items-center"
                >
                  <Wrench className="mr-2 h-5 w-5" />
                  同様の工事を依頼する
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            リフォームでお困りの際は、経験豊富なスタッフが丁寧にサポートいたします
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
    </div>
  );
} 