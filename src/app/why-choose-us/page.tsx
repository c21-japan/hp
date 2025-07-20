import Link from 'next/link';
import { 
  Award, 
  Users, 
  Shield, 
  Clock, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Globe, 
  Wrench, 
  Heart, 
  Star,
  Building,
  Home,
  MessageCircle
} from 'lucide-react';

export default function WhyChooseUs() {
  const strengths = [
    {
      title: '地域密着の情報力と実績',
      description: '創業以来、奈良県内で500件以上の取引実績があります。広陵町を中心に地元の事情を熟知したスタッフが多数在籍し、エリア特有の不動産動向や行政情報も踏まえた的確なアドバイスが可能です。地域に根ざした対応で、お客様から「相談して良かった」との声を多数いただいています。',
      icon: MapPin,
      color: 'yellow',
      highlight: '500件以上の取引実績'
    },
    {
      title: '全国No.1店舗ネットワークの強み',
      description: 'センチュリー21の加盟店として、全国に広がる約1000店舗のネットワークを活用できます。奈良県内だけでなく県外からの移住相談や広域的な集客にも強く、他地域の有力顧客にも物件をアプローチ可能です。豊富な情報交換と最新市場データにより、奈良エリアの魅力を最大限に引き出した売買戦略をご提案します。',
      icon: Globe,
      color: 'yellow',
      highlight: '全国約1000店舗のネットワーク'
    },
    {
      title: '買取＆リフォーム一貫対応',
      description: 'お客様のご事情に応じて、当社が直接ご自宅を買取保証するURICO制度を導入しています。仲介で買主を探す時間がない場合でも、当社が即時に買い取り、その後のリフォーム・再販まで一貫して行うため、スピーディーかつ安心です。また、購入希望者には自社施工部門によるリノベーション提案が可能で、「中古を買って自分好みにリフォーム」をワンストップで実現できます。',
      icon: Wrench,
      color: 'yellow',
      highlight: 'URICO制度で即時買取可能'
    },
    {
      title: '経験と資格を備えた安心サポート',
      description: '宅地建物取引士をはじめ不動産のプロフェッショナルが多数在籍。定期的にセンチュリー21本部の研修を受け、最新の法令知識とサービスマインドを磨いています。経験年数10年以上のベテランスタッフもおり、初めて不動産を扱うお客様にも丁寧に寄り添います。契約手続きやローン相談、火災保険手配まで包括的にサポートし、「最初から最後まで安心できた」と好評です。',
      icon: Shield,
      color: 'yellow',
      highlight: '宅建士多数在籍・10年以上のベテラン'
    },
    {
      title: 'ご相談しやすい環境づくり',
      description: '毎日夜22時まで営業しておりますので、お仕事帰りにもゆっくりご来店いただけます。店内にはキッズコーナーも完備し、小さなお子様連れでも安心してご相談可能です。ご希望に合わせ、店舗での対面相談はもちろん、お電話やメール、LINEでのオンライン相談にも柔軟に対応いたします。お客様にとって「一番相談しやすい不動産会社」をめざしています。',
      icon: Heart,
      color: 'yellow',
      highlight: '夜22時まで営業・キッズコーナー完備'
    }
  ];

  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  const trustFactors = [
    {
      title: '奈良県知事(1)第4582号 認可済',
      description: '正式な不動産会社として認可を受けており、安心してお取引いただけます。'
    },
    {
      title: '全日本不動産協会加盟',
      description: '業界団体に加盟し、適切な不動産取引の実現に努めています。'
    },
    {
      title: '累計取引実績500件以上',
      description: '奈良県内での豊富な取引実績により、地域の不動産事情に精通しています。'
    }
  ];

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
    },
    {
      name: 'C様',
      location: '生駒市在住',
      content: 'リフォームも含めてワンストップで対応していただき、とても助かりました。スタッフの方が親切で安心できました。',
      rating: 5
    }
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
              選ばれる理由
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              奈良に根ざした不動産会社として、多くのお客様に選ばれ続ける理由をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              センチュリー21ホームマートの5つの強み
            </h2>
            <p className="text-lg text-gray-600">
              地域密着と全国ネットワークを活かした、お客様に寄り添うサービスをご提供します
            </p>
          </div>

          <div className="space-y-8">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div key={strength.title} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[strength.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900">{strength.title}</h3>
                      </div>
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <p className="text-yellow-800 font-semibold">{strength.highlight}</p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              信頼性の裏付け
            </h2>
            <p className="text-lg text-gray-600">
              正式な認可と実績により、安心してお取引いただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((factor) => (
              <div key={factor.title} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Century 21 Network */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                センチュリー21のブランド力
              </h2>
              <p className="text-lg text-gray-600">
                世界最大級の不動産ネットワークを活用し、お客様に最高のサービスをお届けします
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">世界最大級のネットワーク</h3>
                <p className="text-sm text-gray-600">約1000店舗の全国ネットワーク</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ブランド力</h3>
                <p className="text-sm text-gray-600">不動産業界No.1のブランド</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">安心・安全</h3>
                <p className="text-sm text-gray-600">厳格な品質管理とサポート</p>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Service Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              サービス特徴
            </h2>
            <p className="text-lg text-gray-600">
              お客様に提供するサービスの特徴をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '無料での物件査定',
              'センチュリー21の全国ネットワーク',
              '経験豊富なスタッフ',
              '丁寧なアフターサービス',
              '透明性の高い取引',
              'お客様第一のサービス',
              '夜22時まで営業',
              'キッズコーナー完備',
              'LINE相談対応'
            ].map((feature) => (
              <div key={feature} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
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
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              お問い合わせ
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LINEで相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 