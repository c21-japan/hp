'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Camera, 
  Phone, 
  MessageCircle,
  Wrench,
  Home,
  X,
  MapPin
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  completionDate: string;
  price?: string;
  type?: string;
  duration?: string;
  staff?: string;
}

function CaseStudiesContent() {
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
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '奈良市',
      completionDate: '2024年3月'
    },
    {
      id: '2',
      category: 'tatami',
      title: '6畳和室の洋室化',
      description: '6畳の和室を洋室に変更。畳を撤去してフローリングを施工し、照明もLEDに変更。収納も充実させて、より使いやすい空間にしました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '広陵町',
      completionDate: '2024年1月'
    },
    // お風呂
    {
      id: '3',
      category: 'bathroom',
      title: 'ユニットバスリフォーム',
      description: '古い浴槽を撤去し、新しいユニットバスにリフォーム。シャワー機能も充実し、より快適な入浴空間に生まれ変わりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '橿原市',
      completionDate: '2024年2月'
    },
    {
      id: '4',
      category: 'bathroom',
      title: '浴室全面リフォーム',
      description: '浴室の床・壁・天井を全面リフォーム。防水処理も徹底し、長く安心して使用できる浴室にしました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '大和高田市',
      completionDate: '2024年1月'
    },
    // キッチン
    {
      id: '5',
      category: 'kitchen',
      title: 'システムキッチンリフォーム',
      description: '古いキッチンを撤去し、最新のシステムキッチンにリフォーム。作業効率が大幅に向上し、料理が楽しくなりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '生駒市',
      completionDate: '2024年3月'
    },
    {
      id: '6',
      category: 'kitchen',
      title: 'キッチン設備更新',
      description: 'キッチンの設備を最新のものに更新。IHクッキングヒーターや食器洗い乾燥機も導入し、より便利なキッチンになりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '天理市',
      completionDate: '2024年2月'
    },
    // トイレ
    {
      id: '7',
      category: 'toilet',
      title: 'トイレ全面リフォーム',
      description: '古いトイレを撤去し、最新の温水洗浄便座付きトイレにリフォーム。快適で清潔な空間に生まれ変わりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '大和郡山市',
      completionDate: '2024年1月'
    },
    {
      id: '8',
      category: 'toilet',
      title: 'トイレ設備更新',
      description: 'トイレの便器とタンクを最新のものに更新。節水機能も充実し、環境にも配慮したトイレになりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '奈良市',
      completionDate: '2024年3月'
    },
    // 洗面台
    {
      id: '9',
      category: 'sink',
      title: '洗面台リフォーム',
      description: '古い洗面台を撤去し、新しい洗面台にリフォーム。収納も充実し、より使いやすい洗面所になりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '広陵町',
      completionDate: '2024年2月'
    },
    {
      id: '10',
      category: 'sink',
      title: '洗面所全面リフォーム',
      description: '洗面所の床・壁・天井を全面リフォーム。洗面台も最新のものに変更し、快適な洗面所に生まれ変わりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '橿原市',
      completionDate: '2024年1月'
    },
    // フローリング・クロス貼替
    {
      id: '11',
      category: 'flooring',
      title: 'フローリング張替え',
      description: '古いフローリングを撤去し、新しいフローリングに張替え。床の傷や汚れがなくなり、部屋が明るくなりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '大和高田市',
      completionDate: '2024年3月'
    },
    {
      id: '12',
      category: 'flooring',
      title: 'クロス張替え',
      description: '壁紙を全面張替え。明るい色のクロスに変更することで、部屋が明るく快適な空間に生まれ変わりました。',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      location: '生駒市',
      completionDate: '2024年2月'
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
                      <Image
                        src={caseStudy.beforeImage}
                        alt="施工前"
                        fill
                        className="object-cover"
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
                      <Image
                        src={caseStudy.afterImage}
                        alt="施工後"
                        fill
                        className="object-cover"
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

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">まずは無料相談から</h2>
          <p className="mb-8">お客様の状況に合わせた最適なご提案をいたします</p>
          <ContactForm />
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">施工事例詳細</h2>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image */}
                <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500">施工前後の画像</span>
                </div>

                {/* Case Study Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCase.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{selectedCase.location}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">{selectedCase.price}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-gray-700">
                      <span className="font-medium">施工内容:</span> {selectedCase.type}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">工期:</span> {selectedCase.duration}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">担当者:</span> {selectedCase.staff}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">施工のポイント</h4>
                    <p className="text-gray-600">{selectedCase.description}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="flex-1 bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                    お問い合わせ
                  </button>
                  <button className="flex-1 border-2 border-yellow-600 text-yellow-600 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudiesContent />
    </Suspense>
  );
} 