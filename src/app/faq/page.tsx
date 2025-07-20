'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle,
  CheckCircle,
  Award,
  Clock,
  User
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    // 買取関連
    {
      question: '買取価格はどのように決まりますか？',
      answer: '物件の築年数、立地、間取り、現状などを総合的に判断して査定いたします。市場相場を基準に、お客様に最適な価格をご提示いたします。',
      category: 'buy'
    },
    {
      question: '買取から売却までの期間はどのくらいですか？',
      answer: 'URICO制度（当社買取）の場合は最短数週間で現金化が可能です。仲介による売却の場合は、市場状況により3〜6ヶ月程度かかることがございます。',
      category: 'buy'
    },
    {
      question: '買取査定は無料ですか？',
      answer: 'はい、買取査定は完全無料で行っております。お気軽にお問い合わせください。',
      category: 'buy'
    },
    {
      question: 'URICO制度と仲介売却の違いは何ですか？',
      answer: 'URICO制度は当社が直接買い取るため、最短で現金化が可能です。仲介売却は市場相場に近い価格での売却が期待できますが、買主が見つかるまでお時間をいただく必要があります。',
      category: 'buy'
    },
    // 購入関連
    {
      question: '物件の内見は可能ですか？',
      answer: 'はい、物件の内見は可能です。お客様のご都合に合わせて、平日・土日祝日問わず対応いたします。',
      category: 'sell'
    },
    {
      question: '住宅ローンについて相談できますか？',
      answer: 'はい、提携金融機関との住宅ローン相談も承っております。お客様のご状況に合わせて最適なプランをご提案いたします。',
      category: 'sell'
    },
    {
      question: '中古物件のリフォームについても相談できますか？',
      answer: 'はい、中古物件購入後のリフォームについても、自社施工で対応いたします。購入からリフォームまでワンストップでサポートいたします。',
      category: 'sell'
    },
    // リフォーム関連
    {
      question: 'リフォームの見積りは無料ですか？',
      answer: 'はい、リフォームの見積りは完全無料で行っております。現地調査も含めて、お気軽にお問い合わせください。',
      category: 'renovation'
    },
    {
      question: 'リフォーム工事中は住み続けることができますか？',
      answer: '工事内容によって異なりますが、可能な限りお住まいを継続していただけるよう配慮いたします。工事期間中は仮住まいのご相談も承ります。',
      category: 'renovation'
    },
    {
      question: 'リフォーム後の保証はありますか？',
      answer: 'はい、リフォーム工事後は保証制度が適用されます。詳細は工事内容により異なりますので、お見積り時にご説明いたします。',
      category: 'renovation'
    },
    // その他
    {
      question: '営業時間は何時から何時までですか？',
      answer: '営業時間は9:00〜22:00です。定休日は毎週水曜日となっております。',
      category: 'other'
    },
    {
      question: '対応エリアはどこですか？',
      answer: '奈良県全域に対応しております。特に広陵町・大和高田市を中心に、奈良市・生駒市・橿原市・大和郡山市・天理市などで多くの実績がございます。',
      category: 'other'
    },
    {
      question: 'LINEでの相談は可能ですか？',
      answer: 'はい、LINEでの相談も可能です。お気軽にメッセージをお送りください。',
      category: 'other'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて', icon: HelpCircle },
    { id: 'buy', name: '買取・売却', icon: CheckCircle },
    { id: 'sell', name: '物件購入', icon: User },
    { id: 'renovation', name: 'リフォーム', icon: Award },
    { id: 'other', name: 'その他', icon: Clock }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
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
              <HelpCircle className="inline mr-4 h-12 w-12" />
              よくあるご質問
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              お客様からよくいただくご質問をまとめました
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-yellow-600" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">該当する質問が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お答えできない場合は
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              上記の質問で解決しない場合は、お気軽にお問い合わせください。
              経験豊富なスタッフが丁寧にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors inline-flex items-center text-lg"
              >
                <Phone className="mr-2 h-6 w-6" />
                お問い合わせ
              </Link>
              <Link
                href="/contact"
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center text-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                LINEで相談
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              関連ページ
            </h2>
            <p className="text-lg text-gray-600">
              お客様のご要望に合わせて、関連ページもご覧ください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/sell" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">家を売る</h3>
              <p className="text-gray-600">無料査定から売却まで、丁寧にサポートいたします</p>
            </Link>
            <Link href="/renovation" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">リフォーム</h3>
              <p className="text-gray-600">自社施工で品質とコストの両立を実現</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <Phone className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
              <p className="text-gray-600">お気軽にご相談ください</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 