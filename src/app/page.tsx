'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Home as HomeIcon, 
  Building, 
  ArrowRight, 
  MapPin, 
  Shield, 
  Star, 
  CheckCircle,
  Award,
  Clock,
  ChevronDown,
  ChevronUp,
  Calendar,
  User
} from 'lucide-react';
import { useState } from 'react';
import PropertyModal from '@/components/PropertyModal';
import UpdateInfo from '@/components/UpdateInfo';
import PropertyDisplay from '@/components/PropertyDisplay';
import ContactForm from '@/components/ContactForm';
import ClientButton from '@/components/ClientButton';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  size: string;
  age: string;
  description: string;
  highlight?: string; // Added for new_featured_properties
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
}

function HomeContent() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([]);

  // 未使用の変数を削除
  /*
  const properties: Property[] = [
    {
      id: 1,
      title: '新築戸建て',
      location: '奈良県広陵町',
      price: '4,980万円',
      image: '/api/placeholder/400/250',
      type: '新築戸建て',
      size: '120㎡',
      age: '築1年',
      description: '閑静な住宅街に位置する新築戸建てです。3LDKの広々とした間取りで、ご家族の理想の住まいとして最適です。',
      highlight: '新築'
    },
    {
      id: 2,
      title: '中古マンション',
      location: '奈良県奈良市',
      price: '3,280万円',
      image: '/api/placeholder/400/250',
      type: '中古マンション',
      size: '65㎡',
      age: '築15年',
      description: '駅徒歩5分の好立地にある中古マンションです。2LDKの使いやすい間取りで、投資用としても人気があります。',
      highlight: '中古'
    },
    {
      id: 3,
      title: '土地',
      location: '奈良県生駒市',
      price: '2,980万円',
      image: '/api/placeholder/400/250',
      type: '土地',
      size: '150㎡',
      age: '角地',
      description: '住宅用地として最適な角地の土地です。日当たり良好で、新築戸建ての建設が可能です。',
      highlight: '土地'
    },
    {
      id: 4,
      title: '中古戸建て',
      location: '奈良県橿原市',
      price: '3,580万円',
      image: '/api/placeholder/400/250',
      type: '中古戸建て',
      size: '95㎡',
      age: '築8年',
      description: 'リフォーム済みの中古戸建てです。3LDKの使いやすい間取りで、すぐにお引っ越し可能です。',
      highlight: '中古'
    },
    {
      id: 5,
      title: '投資用マンション',
      location: '奈良県大和郡山市',
      price: '1,980万円',
      image: '/api/placeholder/400/250',
      type: '中古マンション',
      size: '45㎡',
      age: '築20年',
      description: '投資用として人気の1Kマンションです。駅徒歩3分の好立地で、安定した家賃収入が期待できます。',
      highlight: '投資'
    },
    {
      id: 6,
      title: '新築マンション',
      location: '奈良県天理市',
      price: '5,680万円',
      image: '/api/placeholder/400/250',
      type: '新築マンション',
      size: '75㎡',
      age: '築0年',
      description: '最新設備を備えた新築マンションです。2LDKの広々とした間取りで、セキュリティも充実しています。',
      highlight: '新築'
    }
  ];
  */

  const faqItems: FAQItem[] = [
    {
      question: '買取価格はどのように決まりますか？',
      answer: '物件の築年数、立地、間取り、現状などを総合的に判断して査定いたします。市場相場を基準に、お客様に最適な価格をご提示いたします。',
      category: 'buy'
    },
    {
      question: '買取査定は無料ですか？',
      answer: 'はい、買取査定は完全無料で行っております。お気軽にお問い合わせください。',
      category: 'buy'
    },
    {
      question: '物件の内見は可能ですか？',
      answer: 'はい、物件の内見は可能です。お客様のご都合に合わせて、平日・土日祝日問わず対応いたします。',
      category: 'sell'
    },
    {
      question: 'リフォームの見積りは無料ですか？',
      answer: 'はい、リフォームの見積りは完全無料で行っております。現地調査も含めて、お気軽にお問い合わせください。',
      category: 'renovation'
    },
    {
      question: '営業時間は何時から何時までですか？',
      answer: '営業時間は9:00〜22:00です。定休日は年末年始となっております。',
      category: 'other'
    },
    {
      question: '対応エリアはどこですか？',
      answer: '奈良県全域に対応しております。特に広陵町・大和高田市を中心に、奈良市・生駒市・橿原市・大和郡山市・天理市などで多くの実績がございます。',
      category: 'other'
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '【お知らせ】新モデルルームOPEN！最新リノベーション事例を公開中',
      excerpt: '広陵町にマンションリノベーションのモデルルームが誕生しました！実際の施工事例を見学できるチャンスです。',
      author: 'ホームマート',
      date: '2025-03-15',
      category: 'お知らせ',
      readTime: '3分',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: '住まいの買い替え成功ガイド：タイミングとポイントを解説',
      excerpt: '現在のお住まいから新居へスムーズに移るには？売却と購入を無理なく進めるためのポイントを専門家が解説します。',
      author: '乾 佑企',
      date: '2025-03-10',
      category: '不動産豆知識',
      readTime: '8分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: '奈良・広陵町エリア子育てファミリーに人気の学校区まとめ',
      excerpt: '初めてのマイホーム選び、気になるのは学校区ですよね。広陵町・大和高田市の人気学校区と周辺環境をご紹介します。',
      author: 'ホームマート',
      date: '2025-03-05',
      category: '地域情報',
      readTime: '6分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: '築年数別リフォームのポイント：20年・30年・40年で何をすべき？',
      excerpt: '築年数によってリフォームの優先順位は変わります。20年・30年・40年それぞれの築年数で重点的に取り組むべきポイントをご紹介。',
      author: 'ホームマート',
      date: '2025-02-20',
      category: 'リフォーム事例',
      readTime: '7分',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const toggleFAQItem = (index: number) => {
    setOpenFAQItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const testimonials = [
    {
      name: 'A様',
      location: '奈良市在住',
      content: '戸建ての売却を相談したところ、迅速な対応で希望通りの価格で売却できました。ホームマートさんにお願いして本当に良かったです。',
      rating: 5
    },
    {
      name: 'B様',
      location: '広陵町在住',
      content: '中古マンションの購入でお世話になりました。地域の情報を詳しく教えていただき、理想の物件を見つけることができました。',
      rating: 5
    }
  ];

  const handlePropertyDetail = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleInquiry = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            奈良・南大阪の不動産とリフォームなら<br/>
            ホームマートにお任せください
          </h1>
                      <p className="text-lg md:text-xl mb-8">創業12年の実績</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientButton text="今すぐ無料査定" action={() => window.location.href='/assessment'} />
            <ClientButton text="電話で相談 0120-43-8639" action={() => window.location.href='tel:0120-43-8639'} />
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">累計取引実績500件以上</h3>
              <p className="text-base text-gray-600">奈良県内での豊富な実績</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">宅建士多数在籍</h3>
              <p className="text-base text-gray-600">専門資格保有スタッフ</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">奈良県知事(1)第4582号 認可済</h3>
              <p className="text-base text-gray-600">正式な不動産会社</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Statistics Section */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">999件</div>
              <div className="text-base text-yellow-600">掲載物件数</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">998件</div>
              <div className="text-base text-yellow-600">公開物件数</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">527件</div>
              <div className="text-base text-yellow-600">本日の更新物件数</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-700 mb-1">0件</div>
              <div className="text-base text-yellow-600">会員物件数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">買いたい方</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              当社は奈良県内だけでなく、奈良県と大阪府を対応しています。ホームマートでは奈良県や大阪府を中心に、お客様の理想の住まいをサポートいたします。
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">物件検索</h3>
            
            {/* フリーワード検索 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">フリーワード検索</label>
              <input
                type="text"
                placeholder="駅名、エリア名、物件名など"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              />
            </div>

            {/* 主要駅から探す */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">主要駅から探す</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {['高田駅', '王寺駅', '橿原神宮前駅', '大和八木駅', '桜井駅', '生駒駅', '大和高田駅', '香芝駅', '柏原駅', '大和朝倉駅'].map((station) => (
                  <button
                    key={station}
                    className="px-4 py-3 text-base border border-gray-300 rounded-md hover:border-yellow-500 hover:text-yellow-600 transition-colors min-h-[48px]"
                  >
                    {station}
                  </button>
                ))}
              </div>
            </div>

            {/* 主要エリアから探す */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">主要エリアから探す</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {['橿原市', '大和高田市', '香芝市', '生駒市', '北葛城郡王寺町', '桜井市', '大和郡山市', '天理市', '北葛城郡河合町', '磯城郡川西町'].map((area) => (
                  <button
                    key={area}
                    className="px-4 py-3 text-base border border-gray-300 rounded-md hover:border-yellow-500 hover:text-yellow-600 transition-colors min-h-[48px]"
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* 詳細条件検索 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">物件種別</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="">種別を選択</option>
                  <option value="new-house">新築一戸建て</option>
                  <option value="used-house">中古戸建て</option>
                  <option value="mansion">中古マンション</option>
                  <option value="land">土地</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">価格</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="">価格を選択</option>
                  <option value="0-500">500万円まで</option>
                  <option value="500-1000">500万円から1000万円</option>
                  <option value="1000-1500">1000万円から1500万円</option>
                  <option value="1500-2000">1500万円から2000万円</option>
                  <option value="2000-2500">2000万円から2500万円</option>
                  <option value="2500-3000">2500万円から3000万円</option>
                  <option value="3000-">3000万円以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">沿線</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="">沿線を選択</option>
                  <option value="kansai">関西本線</option>
                  <option value="jr-wakayama">JR和歌山線</option>
                  <option value="jr-sakurai">JR桜井線</option>
                  <option value="kintetsu-kashihara">近鉄橿原線</option>
                  <option value="kintetsu-tenri">近鉄天理線</option>
                  <option value="kintetsu-minami-osaka">近鉄南大阪線</option>
                  <option value="kintetsu-gose">近鉄御所線</option>
                  <option value="kintetsu-tawaramoto">近鉄田原本線</option>
                  <option value="kintetsu-osaka">近鉄大阪線</option>
                  <option value="hanwa">阪和線</option>
                  <option value="kintetsu-namba-nara">近鉄難波・奈良線</option>
                  <option value="kintetsu-ikoma">近鉄生駒線</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-yellow-600 text-white py-4 px-6 rounded-md font-semibold hover:bg-yellow-700 transition-colors text-lg min-h-[48px]">
                  検索する
                </button>
              </div>
            </div>
          </div>

          {/* Property Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/buy/new-house" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <HomeIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">新築一戸建て</h3>
              <p className="text-gray-600 text-sm">新築の一戸建て住宅をご紹介します</p>
              <div className="mt-4 text-yellow-600 font-medium group-hover:text-yellow-700 transition-colors">
                物件を見る →
              </div>
            </Link>
            <Link href="/buy/used-house" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <HomeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">中古戸建て</h3>
              <p className="text-gray-600 text-sm">中古の一戸建て住宅をご紹介します</p>
              <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                物件を見る →
              </div>
            </Link>
            <Link href="/buy/used-mansion" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">中古マンション</h3>
              <p className="text-gray-600 text-sm">中古マンション・アパートをご紹介します</p>
              <div className="mt-4 text-green-600 font-medium group-hover:text-green-700 transition-colors">
                物件を見る →
              </div>
            </Link>
            <Link href="/buy/land" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">土地</h3>
              <p className="text-gray-600 text-sm">住宅用地や投資用土地をご紹介します</p>
              <div className="mt-4 text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                物件を見る →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">売りたい方</h2>
            <div className="text-lg text-gray-600 mb-8">
              <div className="sm:hidden">
                <div>不動産の売却も</div>
                <div>ホームマートにお任せください</div>
              </div>
              <div className="hidden sm:block">
                不動産の売却もホームマートにお任せください
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">10,000件以上の問い合わせ実績</h3>
              <p className="text-gray-600">直近10年間の豊富な実績</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">奈良県と大阪府内平均より短縮</h3>
              <p className="text-gray-600">スピーディーな売却を実現</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">不具合があっても当社の職人が対応</h3>
              <p className="text-gray-600">自社施工で安心のアフターサービス</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/sell"
              className="inline-flex items-center bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-lg"
            >
              無料査定を依頼する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Display Section */}
      <PropertyDisplay />

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-lg text-gray-600">
              実際にご利用いただいたお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">「{testimonial.content}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-lg text-gray-600">
              不動産に関するよくある質問をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleFAQItem(index)}
                >
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  {openFAQItems.includes(index) ? (
                    <ChevronUp className="h-6 w-6 text-yellow-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-yellow-600" />
                  )}
                </div>
                {openFAQItems.includes(index) && (
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              もっと見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ブログ・お知らせ
            </h2>
            <p className="text-lg text-gray-600">
              不動産に関する最新情報や地域の話題をお届けします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/400/250" 
                    alt="記事画像" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('ja-JP')}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    続きを読む
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              もっと見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
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

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
