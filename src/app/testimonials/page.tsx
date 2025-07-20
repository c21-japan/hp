import { 
  Star, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Award, 
  Shield, 
  Clock, 
  Users
} from 'lucide-react';

export default function Testimonials() {
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
              お客様の声
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              ホームマートをご利用いただいたお客様から、たくさんの『ありがとう』の声を頂戴しております
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            お客様の声
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ホームマートでお手伝いさせていただいたお客様から、たくさんの『ありがとう』の声を頂戴しております。
            一部ではございますが、その中からご売却・ご購入・リフォームそれぞれの体験談をご紹介いたします。
            私たちのサービスがどのようにお役に立てたのか、ぜひご覧ください。
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="text-gray-600">最終更新：2025年3月</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ご売却いただいたお客様の声
            </h2>
            <p className="text-lg text-gray-600">
              大切な住まいの売却でお世話になったお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">奈良市在住 A様</h3>
                  <p className="text-sm text-gray-600">戸建てご売却（30代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  転勤まで時間がなく、すぐに売却したいという無理なお願いにも関わらず、ホームマートさんは迅速に対応してくださいました。
                  無料査定から1週間で買取のご提案をいただき、そのスピード感に驚きました。
                  おかげで新天地への引越し資金も早期に準備でき、家族一同感謝しております。
                  <span className="text-yellow-600 font-semibold">
                    大切な家を買い取っていただき、しかもリフォームで次の方へ繋いでくださると聞き、安心してお任せできました。
                  </span>
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">広陵町在住 O様</h3>
                  <p className="text-sm text-gray-600">戸建てご売却（50代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  築年数が経った自宅の売却でお世話になりました。他社では買い手探しに時間がかかると言われ不安でしたが、
                  ホームマートさんはURICO制度で直接買取をご提案くださり、すぐに話がまとまりました。
                  査定額も納得のいく金額で、
                  <span className="text-yellow-600 font-semibold">
                    本当にお願いして良かったです。
                  </span>
                  スタッフの皆さんの丁寧で誠実な対応にも信頼感しかありませんでした。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ご購入いただいたお客様の声
            </h2>
            <p className="text-lg text-gray-600">
              理想の住まいを手に入れたお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">大和高田市在住 K様</h3>
                  <p className="text-sm text-gray-600">中古マンションご購入＋リフォーム（40代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  古いマンションを自分好みにリノベーションするという夢を叶えるため、ホームマートさんに相談しました。
                  物件探しの段階からリフォーム前提で最適な間取りを一緒に考えてくださり、とても心強かったです。
                  購入を決めた後も、自社のリフォーム部門でキッチンやお風呂の設備交換から内装デザインまでフルサポート！
                  <span className="text-yellow-600 font-semibold">
                    まるで新築のような理想の住まいに生まれ変わり、大満足です。
                  </span>
                  ワンストップでお願いできて時間も手間も節約でき、本当にありがとうございました。
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">香芝市在住 S様</h3>
                  <p className="text-sm text-gray-600">新築一戸建てご購入（30代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  初めてのマイホーム探しで分からないことだらけでしたが、担当の方が資金計画から住宅ローンの手続きまで親身にサポートしてくれました。
                  夜遅い時間帯でもLINEで質問に答えてくださり、忙しい私たち夫婦には大変助かりました。
                  おかげさまで希望通りの新居を購入でき、家族の夢がかないました。
                  <span className="text-yellow-600 font-semibold">
                    ホームマートさんにお願いして本当に良かったです！
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              リフォームをご利用いただいたお客様の声
            </h2>
            <p className="text-lg text-gray-600">
              住まいをより快適にされたお客様からの声をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">広陵町在住 M様</h3>
                  <p className="text-sm text-gray-600">リフォーム工事（60代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  実家の空き家状態だった戸建てをリフォームして賃貸に出そうと、ホームマートさんに相談しました。
                  自社施工店をお持ちとのことで安心してお任せ。古い和室を洋室に変え、水回りも一新していただきました。
                  工事の予約が埋まるほど人気と聞きましたが、待った甲斐がある素晴らしい仕上がりでした！
                  工事中も進捗を逐一報告してくださり信頼できました。
                  <span className="text-yellow-600 font-semibold">
                    出来上がった家を見て「これがあの古い家？」と驚くほどで、大満足です。
                  </span>
                </p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">葛城市在住 T様</h3>
                  <p className="text-sm text-gray-600">キッチンリフォーム（40代ご夫婦）</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <MessageCircle className="h-6 w-6 text-yellow-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  築20年のマンションのキッチンをリフォームしました。最初は不安でしたが、
                  ホームマートさんの担当者が丁寧にプランを説明してくださり、予算内で理想のキッチンが実現できました。
                  工事期間も予定通りで、騒音や汚れの心配もありませんでした。
                  <span className="text-yellow-600 font-semibold">
                    新しいキッチンで料理が楽しくなり、家族も喜んでいます。
                  </span>
                  また何かリフォームする際は、ぜひホームマートさんにお願いしたいと思います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Party Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              外部評価・受賞歴
            </h2>
            <p className="text-lg text-gray-600">
              お客様からの信頼を裏付ける評価をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">センチュリー21接客コンテスト</h3>
              <p className="text-gray-600">優秀賞受賞</p>
              <p className="text-sm text-gray-500 mt-2">2024年度</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Googleレビュー</h3>
              <p className="text-gray-600">4.8/5.0</p>
              <p className="text-sm text-gray-500 mt-2">50件以上の評価</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">お客様満足度</h3>
              <p className="text-gray-600">98%</p>
              <p className="text-sm text-gray-500 mt-2">2024年度実績</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お客様の声を参考に、ぜひご相談ください
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            お客様の声のように、あなたの住まいの夢も叶えるお手伝いをいたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0120-43-8639"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              お問い合わせ
            </a>
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