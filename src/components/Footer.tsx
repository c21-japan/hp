import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">センチュリー21ホームマート</h3>
            <p className="text-gray-300 mb-4">
              センチュリー21リフォーム施工店。奈良県広陵町の不動産専門店。センチュリー21の全国ネットワークを活かし、
              売買仲介・リフォームまでワンストップでサポートいたします。
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-300">TEL: 0120-43-8639</span>
              <span className="text-gray-300">FAX: 050-3183-9576</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/buy" className="text-gray-300 hover:text-white">
                  家を買う
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-300 hover:text-white">
                  家を売る
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-gray-300 hover:text-white">
                  選ばれる理由
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  ブログ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  責任者紹介
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-300 hover:text-white">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 センチュリー21ホームマート. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 