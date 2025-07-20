'use client';

import Link from 'next/link';
import { CheckCircle, Phone, MessageCircle, ArrowRight, Home, Mail } from 'lucide-react';

export default function ContactThanks() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            お問い合わせありがとうございます
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            お問い合わせを受け付けました。<br />
            担当者より2営業日以内にご連絡いたします。
          </p>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              お問い合わせ先
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Phone className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">お電話でのお問い合わせ</h3>
                <p className="text-lg font-bold text-yellow-600 mb-2">0120-43-8639</p>
                <p className="text-sm text-gray-600">営業時間: 9:00-22:00</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <MessageCircle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">LINE公式アカウント</h3>
                <p className="text-sm text-gray-600 mb-3">24時間受付可能</p>
                <a
                  href="https://line.me/R/ti/p/@c21-homemart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">
              次のステップ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">担当者からの連絡</h3>
                <p className="text-sm text-gray-600">
                  2営業日以内に担当者よりご連絡いたします
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">詳細ヒアリング</h3>
                <p className="text-sm text-gray-600">
                  お客様のご要望を詳しくお聞かせください
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">サービス提供</h3>
                <p className="text-sm text-gray-600">
                  お客様に最適なサービスをご提案いたします
                </p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              関連サービス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/sell"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center"
              >
                <Phone className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">無料査定</h3>
                <p className="text-sm text-gray-600">
                  不動産の価値を正確に査定いたします
                </p>
              </Link>
              <Link
                href="/renovation"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center"
              >
                <MessageCircle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">リフォーム相談</h3>
                <p className="text-sm text-gray-600">
                  住まいのリフォームをトータルサポート
                </p>
              </Link>
              <Link
                href="/buy"
                className="block p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center"
              >
                <Home className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">物件紹介</h3>
                <p className="text-sm text-gray-600">
                  地域密着の物件情報をご提供
                </p>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              <Home className="mr-2 h-5 w-5" />
              トップページに戻る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              再度お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 