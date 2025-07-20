'use client';

import Link from 'next/link';
import { 
  Home as HomeIcon, 
  Building, 
  Users, 
  Phone, 
  ArrowRight, 
  MapPin, 
  Wrench, 
  Shield, 
  Star, 
  MessageCircle,
  CheckCircle,
  Award,
  Clock,
  Heart,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Search,
  Tag
} from 'lucide-react';
import { useState } from 'react';
import PropertyModal from '@/components/PropertyModal';

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

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([]);

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
      description: '閑静な住宅街に位置する新築戸建てです。3LDKの広々とした間取りで、ご家族の理想の住まいとして最適です。'
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
      description: '駅徒歩5分の好立地にある中古マンションです。2LDKの使いやすい間取りで、投資用としても人気があります。'
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
      description: '住宅用地として最適な角地の土地です。日当たり良好で、新築戸建ての建設が可能です。'
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
      description: 'リフォーム済みの中古戸建てです。3LDKの使いやすい間取りで、すぐにお引っ越し可能です。'
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
      description: '投資用として人気の1Kマンションです。駅徒歩3分の好立地で、安定した家賃収入が期待できます。'
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
      description: '最新設備を備えた新築マンションです。2LDKの広々とした間取りで、セキュリティも充実しています。'
    }
  ];

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
      answer: '営業時間は9:00〜22:00です。定休日は毎週水曜日となっております。',
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <span className="text-yellow-600 font-bold text-2xl">CENTURY 21</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              センチュリー21ホームマート<br />
              奈良に根ざした安心サポート
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              売買仲介・買取（URICO）・リフォームまで
            </p>
            <p className="text-lg mb-8 text-yellow-200 max-w-4xl mx-auto">
              センチュリー21ホームマートは、センチュリー21リフォーム施工店として奈良県広陵町の不動産専門店です。豊富な地域情報とセンチュリー21の全国ネットワークを活かし、お住まいの購入・売却・リフォームをワンストップでお手伝いいたします。創業以来、地域に寄り添った誠実な対応で多くのお客様にご支持いただいてきました。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
              >
                <Phone className="mr-2 h-6 w-6" />
                無料査定を依頼する
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center text-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                LINEで気軽に相談
              </Link>
            </div>
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
              <p className="text-sm text-gray-600">奈良県内での豊富な実績</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">宅建士多数在籍</h3>
              <p className="text-sm text-gray-600">専門資格保有スタッフ</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">奈良県知事(1)第4582号 認可済</h3>
              <p className="text-sm text-gray-600">正式な不動産会社</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              三位一体のワンストップサービス
            </h2>
            <p className="text-lg text-gray-600">
              お客様のニーズに合わせた幅広いサービスをご提供します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <HomeIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">買いたい方</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                地元奈良の新築・中古物件を豊富にご紹介。地域密着の情報力で理想の住まい探しを全力サポートします。
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">地域密着の情報力</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">豊富な物件情報</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">丁寧なサポート</span>
                </div>
              </div>
              <Link href="/buy" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">売りたい方</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                無料査定ですぐに価格を診断。仲介＋当社直接買取（URICO）でお客様の大切な不動産をスピーディーかつ安心に現金化します。
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">無料査定サービス</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">URICO制度で即時買取</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">スピーディーな対応</span>
                </div>
              </div>
              <Link href="/sell" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">リフォームしたい方</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                中古購入後のリノベーションもお任せください。自社施工部門が高品質なリフォームプランをご提案し、快適な住まいづくりを実現します。
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">自社施工部門</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">高品質なリフォーム</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">ワンストップ対応</span>
                </div>
              </div>
              <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              選ばれる理由
            </h2>
            <p className="text-lg text-gray-600">
              奈良に根ざした不動産会社として、多くのお客様に選ばれ続ける理由をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">地域密着</h3>
              <p className="text-sm text-gray-600">創業以来500件以上の取引実績</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">全国ネットワーク</h3>
              <p className="text-sm text-gray-600">センチュリー21約1000店舗</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ワンストップ</h3>
              <p className="text-sm text-gray-600">買取・リフォーム一貫対応</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">夜22時まで営業</h3>
              <p className="text-sm text-gray-600">お仕事帰りにも相談可能</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/why-choose-us"
              className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              詳しく見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
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
            {properties.slice(0, 6).map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">物件画像</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 mb-4">{property.price}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{property.type}</span>
                    <span>{property.size}</span>
                    <span>{property.age}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/buy"
              className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              もっと見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

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
                  <span className="text-gray-500">記事画像</span>
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
      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            不動産に関するご相談は、経験豊富なスタッフが丁寧にサポートいたします
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

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
