import Link from 'next/link';
import { 
  Building, 
  Calculator, 
  Users, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle,
  Shield,
  Award,
  Clock,
  Star,
  MapPin
} from 'lucide-react';

export default function Sell() {
  const sellingSteps = [
    {
      step: 1,
      title: '無料査定依頼',
      description: 'お電話またはお問い合わせフォームからご連絡ください。費用は一切かかりません。',
      icon: Calculator
    },
    {
      step: 2,
      title: '現地調査・査定',
      description: '物件の現地調査を行い、適正価格での査定を実施します。秘密厳守で対応いたします。',
      icon: Building
    },
    {
      step: 3,
      title: '売却方法の決定',
      description: 'お客様のご希望に合わせて最適な売却方法（仲介 or URICO買取）をご提案します。',
      icon: Users
    },
    {
      step: 4,
      title: 'ご契約',
      description: '仲介の場合は買主とのマッチング、URICOの場合は当社との直接契約を行います。',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'お引き渡し',
      description: '売買契約の締結から引渡しまで、丁寧にサポートいたします。',
      icon: CheckCircle
    }
  ];

  const sellingMethods = [
    {
      title: '仲介による売却',
      description: '市場相場に近い価格で売却可能',
      features: ['市場相場での売却', '期間：平均3～6ヶ月', '買主をお待ちいただく必要があります'],
      color: 'yellow'
    },
    {
      title: 'URICO制度（当社買取）',
      description: '最短数週間での現金化が可能',
      features: ['即現金化', '期間：最短数週間', '仲介手数料不要'],
      color: 'yellow'
    }
  ];

  const testimonials = [
    {
      name: 'A様',
      location: '奈良市在住',
      content: '築30年の戸建てを当社が買取→リフォームし再販売したケースでは、お問い合わせから1ヶ月で売却完了。あんなに早く売れるとは思わなかった。的確なアドバイスと対応に感謝。',
      rating: 5
    },
    {
      name: 'B様',
      location: '広陵町在住',
      content: '希望通りの価格で売却できました。ホームマートさんにお願いして本当に良かったです。',
      rating: 5
    }
  ];

  const colorClasses = {
    yellow: 'bg-yellow-100 text-yellow-600'
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
              不動産の売却も<br />
              ホームマートにお任せください
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              お住まいの無料査定からご成約まで、地元密着の当社がスピーディーかつ丁寧にサポートいたします
            </p>
            <p className="text-lg mb-8 text-yellow-200 max-w-4xl mx-auto">
              創業以来培った地域相場の知識とセンチュリー21のネットワーク力で、お客様の大切な資産を最適な形で現金化します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
              >
                <Calculator className="mr-2 h-6 w-6" />
                無料査定を依頼
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
              <h3 className="text-lg font-semibold mb-2">120件以上の売却実績</h3>
              <p className="text-sm text-gray-600">直近5年間の豊富な実績</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">90%以上の早期売却成約率</h3>
              <p className="text-sm text-gray-600">奈良県内平均より短縮</p>
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

      {/* Selling Methods Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              選べる2つの売却方法
            </h2>
            <p className="text-lg text-gray-600">
              お客様のご事情に合わせて最適な売却方法をご提案いたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sellingMethods.map((method) => (
              <div key={method.title} className="bg-white p-8 rounded-lg shadow-md">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClasses[method.color as keyof typeof colorClasses]}`}>
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <div className="space-y-3">
                  {method.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URICO System Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              当社買取『URICO（ウリコ）制度』とは？
            </h2>
            <p className="text-lg text-gray-600">
              お客様の不動産をホームマートが直接買い取り、当社でリフォーム・再販売する独自サービスです
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">URICO制度の特徴</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">仲介ではありませんので、買主探しの時間が不要</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">最短で契約可能、売却代金は速やかにお支払い</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">転勤や相続などで早く処分したい方に最適</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">近隣に知られず売却したい方にも選ばれています</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">安心のポイント</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">査定は無料</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">買取価格にご納得いただけなければ仲介での売却も可能</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-3" />
                    <span className="text-sm text-gray-700">安心してご相談ください</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              売却の流れ
            </h2>
            <p className="text-lg text-gray-600">
              お客様のご要望に合わせて、最適な売却方法をご提案いたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {sellingSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
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