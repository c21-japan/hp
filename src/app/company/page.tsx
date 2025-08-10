import Link from 'next/link';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Award, 
  CheckCircle,
  Clock,
  Shield,
  Heart
} from 'lucide-react';

export default function Company() {
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
              会社概要
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              奈良県広陵町に根差す、センチュリー21ホームマート
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ホームマートについて
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                センチュリー21ホームマートは、奈良県広陵町に本社を置く不動産会社です。
                センチュリー21の全国ネットワークを活用しながら、地域密着型のサービスを提供しています。
                &ldquo;お客様の笑顔が私たちの原動力&rdquo;をモットーに、誠実で丁寧な対応を心がけています。
              </p>
              <p className="mb-6">
                不動産の売買仲介から自社買取による再販、リフォーム提案まで、住まいに関するあらゆるニーズにワンストップでお応えできる体制が私たちの強みです。
              </p>
              <p className="text-yellow-600 font-semibold">
                地元の皆様に支えられながら成長し、これからも誠実・安心をモットーに地域貢献してまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Message Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  代表挨拶
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  「私たちは奈良の地で、不動産とリフォームを融合させた独自のサービスを展開してきました。
                  お客様の人生に寄り添い、最良の選択をご提案することが私たちの喜びです。
                  これからも知識と経験を磨き、地域No.1の信頼を得られる企業を目指します。」
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    株式会社ホームマート<br />
                    代表取締役　乾 佑企
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                  >
                    代表あいさつ全文を読む
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              会社情報
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">会社名</p>
                    <p className="text-gray-600">株式会社ホームマート</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">設立</p>
                    <p className="text-gray-600">2014年6月</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">代表者</p>
                    <p className="text-gray-600">代表取締役 乾 佑企</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">事業内容</p>
                    <p className="text-gray-600">不動産売買・仲介業、リフォーム事業</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">営業時間</p>
                    <p className="text-gray-600">9:00〜22:00<br />定休日：毎週水曜日</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">所在地</p>
                    <p className="text-gray-600">
                      〒635-0833<br />
                      奈良県北葛城郡広陵町笠287-1<br />
                      <span className="text-sm text-gray-500">
                        近鉄「大和高田駅」よりバス15分・「さわやかホール」バス停下車徒歩5分
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">電話番号</p>
                    <p className="text-gray-600">0120-43-8639（お客様専用）</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">FAX</p>
                    <p className="text-gray-600">050-3183-9576</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">免許番号</p>
                    <p className="text-gray-600">奈良県知事(1)第4582号</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">所属団体</p>
                    <p className="text-gray-600">
                      公益社団法人 全日本不動産協会<br />
                      公益社団法人 不動産保証協会<br />
                      公正取引協議会 関西本部
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              会社沿革
            </h2>
            <p className="text-lg text-gray-600">
              創業から現在までの歩みをご紹介します
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-semibold">2014</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">会社設立</h3>
                <p className="text-gray-600">奈良県広陵町にて株式会社ホームマートを設立、センチュリー21加盟</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-semibold">2019</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">リフォーム部門開設</h3>
                <p className="text-gray-600">中古物件のリフォーム提案事業を開始</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-semibold">2022</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">URICO制度開始</h3>
                <p className="text-gray-600">自社買取による再販事業（URICO制度）を本格開始</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-yellow-600 font-semibold">2025</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">新店舗移転</h3>
                <p className="text-gray-600">現所在地に本店移転、モデルルーム開設</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              店舗の様子
            </h2>
            <p className="text-lg text-gray-600">
              明るく親しみやすい店舗でお待ちしております
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Building className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-500">店舗外観</span>
                <p className="text-sm text-gray-400 mt-2">明るいイエローのセンチュリー21看板が目印です</p>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-500">店内キッズスペース</span>
                <p className="text-sm text-gray-400 mt-2">お子様連れでも安心してご相談いただけます</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              アクセス
            </h2>
            <p className="text-lg text-gray-600">
              お越しいただく際のアクセス情報をご案内します
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">交通アクセス</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>近鉄「大和高田駅」よりバス15分</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>「さわやかホール」バス停下車徒歩5分</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>国道○号線沿い、「広陵町役場」交差点より南へ200m左手</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">駐車場</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>専用駐車場完備（5台分）</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                  <span>事前にご連絡いただければ駐車場をご案内いたします</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Google Maps（地図埋め込み予定）</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お気軽にお問い合わせください
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
            <a
              href="tel:0120-43-8639"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
            >
              0120-43-8639
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 