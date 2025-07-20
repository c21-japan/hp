'use client';

import Link from 'next/link';
import { 
  Home, 
  Wrench, 
  DollarSign, 
  RotateCcw, 
  Building, 
  Lightbulb,
  CheckCircle,
  Phone,
  MessageCircle
} from 'lucide-react';

export default function Comparison() {
  const comparisonItems = [
    {
      label: '買取価格',
      competitor: { value: '安く', description: '仕入れ重視のため、売主への提示価格を抑制。利益確保を最優先とした価格設定。' },
      ourCompany: { value: '高く', description: '市場最高水準の買取価格を提示。売主満足度向上により情報が集中。', highlight: true }
    },
    {
      label: 'リフォーム費',
      competitor: { value: '高い', description: '外注工務店への依存により、中間マージンが発生。コスト効率が悪化。' },
      ourCompany: { value: '低い', description: '自社施工体制により外注費を大幅削減。コスト効率を最大化。', highlight: true }
    },
    {
      label: '販売価格',
      competitor: { value: '高い', description: '高い仕入れ・施工コストを転嫁。市場価格より高値での販売が必要。' },
      ourCompany: { value: '低い', description: 'コスト削減効果を購入者に還元。市場競争力のある価格設定。', highlight: true }
    },
    {
      label: '回転率',
      competitor: { value: '低い', description: '高価格設定により購入者が見つからず、販売期間が長期化。資金効率が悪化。' },
      ourCompany: { value: '高い', description: '適正価格により需要が増加。短期間販売で資金効率を向上。', highlight: true }
    },
    {
      label: '1件利益',
      competitor: { value: '大きい', description: '高い利益率を追求。1件あたりの利益は大きいが、件数が少ない。' },
      ourCompany: { value: '小さい', description: '薄利多売モデル。件数増加により総利益を確保。', highlight: true }
    },
    {
      label: '紹介・情報数',
      competitor: { value: '少ない', description: '売主にとってのメリットが少なく、口コミや紹介による案件獲得が困難。' },
      ourCompany: { value: '多い', description: '高価買取により口コミ・紹介が拡大。継続的な案件獲得。', highlight: true }
    },
    {
      label: '銀行融資枠',
      competitor: { value: '小さい', description: '低い回転率により銀行からの評価が低く、融資枠も制限される。' },
      ourCompany: { value: '大きい', description: '高回転率により銀行評価が向上。融資枠拡大と金利優遇を獲得。', highlight: true }
    }
  ];

  const advantages = [
    '高価買取',
    '自社施工',
    '高回転率',
    '銀行信用',
    '継続成長'
  ];

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
              <Home className="inline mr-4 h-12 w-12 animate-bounce" />
              当社と他社の違い
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              不動産売却で最も重要なのは、&ldquo;適正価格での迅速な売却&rdquo;です。
              当社では、お客様の大切な不動産を適正価格で買い取り、スピーディーに現金化いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 他社カラム */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="bg-blue-600 text-white p-6 rounded-lg mb-4">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">他社</h2>
                  <p className="text-blue-100">従来型のアプローチ</p>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Home className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-semibold text-gray-900">{item.label}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                        {item.competitor.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-8">
                      {item.competitor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 当社カラム */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="bg-yellow-600 text-white p-6 rounded-lg mb-4">
                  <Home className="h-8 w-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">当社</h2>
                  <p className="text-yellow-100">革新的なビジネスモデル</p>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item, index) => (
                  <div key={index} className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Home className="h-5 w-5 text-yellow-600 mr-3" />
                        <span className="font-semibold text-gray-900">{item.label}</span>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                        {item.ourCompany.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-8">
                      {item.ourCompany.highlight && (
                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-semibold mr-2">
                          ポイント
                        </span>
                      )}
                      {item.ourCompany.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <div className="flex justify-center mb-6">
              <Lightbulb className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              当社の戦略的優位性
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-yellow-600">高価買取 × 自社施工 × 高回転モデル</strong>により、
              売主・買主・銀行の三者すべてにメリットを提供する
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded font-semibold">Win-Win-Win</span>の関係を構築。
              <br /><br />
              従来の業界常識を覆す革新的なアプローチにより、
              持続可能で成長性の高いビジネスモデルを実現しています。
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {advantages.map((advantage, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
                  <CheckCircle className="inline h-4 w-4 mr-2" />
                  {advantage}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                なぜ当社が選ばれるのか？
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">市場最高水準の買取価格</h4>
                  <p className="text-sm text-gray-600">売主様の満足度を最優先に考えた価格設定</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">自社施工によるコスト削減</h4>
                  <p className="text-sm text-gray-600">外注費を削減し、購入者に還元</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold mb-2">高回転率による資金効率</h4>
                  <p className="text-sm text-gray-600">短期間での販売で資金効率を向上</p>
                </div>
              </div>
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
            不動産の売却でお困りの際は、経験豊富なスタッフが丁寧にサポートいたします
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