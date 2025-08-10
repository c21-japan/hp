import { Suspense } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Award,
  Users,
  Target,
  Heart
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

function AboutContent() {
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
              代表あいさつ
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              センチュリー21ホームマート代表 乾 佑企
            </p>
          </div>
        </div>
      </section>

      {/* Representative Profile */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-yellow-100 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                    <span className="text-yellow-600 font-semibold">代表者写真</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  代表取締役 乾 佑企
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  奈良県で生まれ育ち、この大好きな地元に恩返しがしたいという想いから、不動産業界に飛び込みました。
                  2014年、28歳の時にホームマートを創業し、地元密着のサービスを展開してまいりました。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">宅地建物取引士</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">不動産業界キャリア10年</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">奈良県出身</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-gray-700">地域密着型経営</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">経歴</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 1993年 - 奈良県生まれ</li>
                    <li>• 2013年 - 不動産業界に従事開始</li>
                    <li>• 2013年 - 株式会社ホームマート創業</li>
                    <li>• 2016年 - リフォーム部門開設</li>
                    <li>• 2025年 - 新店舗移転・モデルルーム開設</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                代表メッセージ
              </h2>
            </div>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                センチュリー21ホームマート代表の乾 佑企と申します。ホームマートのウェブサイトにお越しいただき、誠にありがとうございます。
              </p>
              
              <p className="mb-6">
                私は奈良県で生まれ育ち、この大好きな地元に恩返しがしたいという想いから、不動産業界に飛び込みました。2013年、27歳の時にホームマートを創業した当初は、小さな店舗からのスタートでした。しかし
                <span className="text-yellow-600 font-semibold">&ldquo;住まいに新たな価値を、生涯の安心を&rdquo;</span>
                という理念のもと、中古住宅の再生やリフォーム提案を通じて、お客様の暮らしをより良いものにするお手伝いに邁進してまいりました。
              </p>
              
              <p className="mb-6">
                おかげさまで、多くのお客様とのご縁に支えられ、ここ奈良で12年にわたり事業を続けてこられましたこと、心より感謝しております。
              </p>
              
              <p className="mb-6">
                不動産は単なる「物」ではなく、そこで暮らす人々の人生の舞台です。だからこそ私たちは、単に物件を売買するだけでなく、その先にあるお客様の未来まで見据えてご提案することを大切にしています。
              </p>
              
              <p className="mb-6">
                例えば、使われなくなった空き家を再び人が集う住まいに蘇らせるリフォーム事業にも力を入れております。それは地域の課題解決にも繋がり、奈良の街並みに新しい命を吹き込む仕事でもあります。
              </p>
              
              <p className="mb-6">
                これから家を売りたい方、買いたい方、リフォームしたい方——お客様それぞれに異なるご事情や夢がおありでしょう。私たちホームマートは、培った確かな知識とネットワーク、そして地元企業ならではの機動力と真心で、その夢の実現を全力でお手伝いいたします。
                <span className="text-yellow-600 font-semibold">『ホームマートに頼んで良かった』</span>
                と心から思っていただけるよう、スタッフ一同日々研鑽を積んでおります。
              </p>
              
              <p className="mb-6">
                最後になりますが、これまで支えてくださった地域の皆様、お取引いただいたお客様に深く御礼申し上げます。そして、これから出会う未来のお客様へ――どんな小さなことでも構いません、住まいに関するお悩みやご希望がございましたら、ぜひお気軽にご相談ください。お客様の笑顔が、私たちの何よりの喜びです。
              </p>
              
              <p className="text-yellow-600 font-semibold">
                今後ともホームマートをどうぞよろしくお願い申し上げます。
              </p>
            </div>
            
            <div className="text-right mt-8 pt-6 border-t border-yellow-200">
              <p className="text-gray-600 font-semibold">株式会社ホームマート</p>
              <p className="text-gray-600 font-semibold">代表取締役　乾 佑企</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              経営理念
            </h2>
            <p className="text-lg text-gray-600">
              私たちが大切にしている価値観をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">お客様第一</h3>
              <p className="text-gray-600">
                お客様の人生に寄り添い、最良の選択をご提案することを何より大切にしています。
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">誠実・安心</h3>
              <p className="text-gray-600">
                透明性の高い取引と、確かな知識・経験に基づくサービスを提供いたします。
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">地域貢献</h3>
              <p className="text-gray-600">
                奈良の地で、地域の課題解決と発展に寄与する企業を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お客様への約束
            </h2>
            <p className="text-lg text-gray-600">
              私たちがお約束する3つのこと
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">常に正直であること</h3>
                <p className="text-gray-600">物件の良い点も悪い点も、隠すことなく正直にお伝えします。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">迅速な対応</h3>
                <p className="text-gray-600">お客様からのご相談には、できる限り早くお答えいたします。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">継続的なサポート</h3>
                <p className="text-gray-600">お引越し後も、住まいに関するご相談をいつでもお受けいたします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-lg text-gray-600">
              ご質問やご相談がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">お電話</h3>
              <p className="text-gray-600">0120-43-8639</p>
              <p className="text-sm text-gray-500">9:00-22:00（年末年始定休）</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">メール</h3>
              <p className="text-gray-600">info@c21-homemart.com</p>
              <p className="text-sm text-gray-500">24時間受付</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">所在地</h3>
              <p className="text-gray-600">
                〒635-0821<br />
                奈良県北葛城郡広陵町笠287-1
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              お問い合わせフォーム
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
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
} 