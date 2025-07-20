import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Building,
  Award,
  MapPin
} from 'lucide-react';

export default function Blog() {
  const blogPosts = [
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
      title: '【スタッフブログ】地域清掃活動に参加してきました！',
      excerpt: '先日、当社スタッフで地域清掃活動に参加してきました！広陵町の公園周辺をみんなでゴミ拾い。普段お世話になっている地域を綺麗にできて、心も晴れやかになりました♪',
      author: 'スタッフ一同',
      date: '2025-03-01',
      category: 'スタッフブログ',
      readTime: '4分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: '失敗しない住宅ローンの選び方【2025年最新版】',
      excerpt: '住宅ローン選びで失敗しないためのポイントを、2025年の最新情報とともに詳しく解説します。金利や返済期間の選び方も紹介。',
      author: '乾 佑企',
      date: '2025-02-25',
      category: '不動産豆知識',
      readTime: '10分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: '築年数別リフォームのポイント：20年・30年・40年で何をすべき？',
      excerpt: '築年数によってリフォームの優先順位は変わります。20年・30年・40年それぞれの築年数で重点的に取り組むべきポイントをご紹介。',
      author: 'ホームマート',
      date: '2025-02-20',
      category: 'リフォーム事例',
      readTime: '7分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 7,
      title: '不動産売却Q&Aトップ5：よくある質問にお答えします',
      excerpt: '不動産売却でよくある質問を5つ厳選して詳しく解説。査定から売却完了までの流れも分かりやすく説明します。',
      author: '乾 佑企',
      date: '2025-02-15',
      category: '不動産豆知識',
      readTime: '6分',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 8,
      title: '【お知らせ】2025年春の物件情報：新着物件をご紹介',
      excerpt: '2025年春の新着物件情報をお届けします。広陵町・大和高田市エリアの最新物件をチェックしてください。',
      author: 'ホームマート',
      date: '2025-02-10',
      category: 'お知らせ',
      readTime: '3分',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = [
    { name: 'お知らせ', count: 2, icon: '📢' },
    { name: '不動産豆知識', count: 3, icon: '📚' },
    { name: '地域情報', count: 1, icon: '🗺️' },
    { name: 'スタッフブログ', count: 1, icon: '👥' },
    { name: 'リフォーム事例', count: 1, icon: '🏠' }
  ];

  const popularPosts = blogPosts.slice(0, 3);

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
              ブログ・お知らせ
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              不動産に関する最新情報や地域の話題をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="記事を検索..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>カテゴリ</option>
                  <option>お知らせ</option>
                  <option>不動産豆知識</option>
                  <option>地域情報</option>
                  <option>スタッフブログ</option>
                  <option>リフォーム事例</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>並び順</option>
                  <option>新しい順</option>
                  <option>古い順</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">特集記事画像</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
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
                    className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    続きを読む
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post) => (
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

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                    前へ
                  </button>
                  <button className="px-3 py-2 bg-yellow-600 text-white rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                    次へ
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">カテゴリ</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/blog/category/${category.name}`}
                        className="flex items-center justify-between text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        <span className="flex items-center">
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">人気記事</h3>
                  <div className="space-y-4">
                    {popularPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.date).toLocaleDateString('ja-JP')}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2">最新情報をお届け</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    不動産に関する最新情報やお得な情報をメールでお届けします
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button className="w-full bg-yellow-600 text-white py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition-colors">
                      登録する
                    </button>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-yellow-600 text-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
                  <p className="text-sm text-yellow-100 mb-4">
                    不動産に関するご質問やご相談は、経験豊富なスタッフが丁寧にサポートいたします
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block w-full bg-white text-yellow-600 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                    >
                      お問い合わせ
                    </Link>
                    <a
                      href="tel:0120-43-8639"
                      className="block w-full border border-white text-white py-2 rounded-md text-sm font-medium hover:bg-white hover:text-yellow-600 transition-colors text-center"
                    >
                      0120-43-8639
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              この記事を読んだ方にオススメのサービス
            </h2>
            <p className="text-lg text-gray-600">
              ブログの内容に関連するサービスをご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Building className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">無料査定</h3>
              <p className="text-gray-600 mb-4">
                不動産の価値を正確に査定いたします
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                詳しく見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">リフォーム相談</h3>
              <p className="text-gray-600 mb-4">
                住まいのリフォームをトータルサポート
              </p>
              <Link
                href="/renovation"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                詳しく見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">物件紹介</h3>
              <p className="text-gray-600 mb-4">
                地域密着の物件情報をご提供
              </p>
              <Link
                href="/buy"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                詳しく見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 