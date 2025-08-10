'use client';

import { useState, useEffect, useMemo } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Building, ExternalLink } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    phone: '',
    inquiryType: '',
    preferredContact: '',
    inquiry: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [propertyInfo, setPropertyInfo] = useState<{
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    size: string;
    age: string;
  } | null>(null);

  // 物件情報（実際の実装ではAPIから取得）
  const properties = useMemo(() => [
    {
      id: 1,
      title: '新築戸建て',
      location: '奈良県広陵町',
      price: '4,980万円',
      type: '新築戸建て',
      size: '120㎡',
      age: '築1年'
    },
    {
      id: 2,
      title: '中古マンション',
      location: '奈良県奈良市',
      price: '3,280万円',
      type: '中古マンション',
      size: '65㎡',
      age: '築15年'
    },
    {
      id: 3,
      title: '土地',
      location: '奈良県生駒市',
      price: '2,980万円',
      type: '土地',
      size: '150㎡',
      age: '角地'
    }
  ], []);

  useEffect(() => {
    // URLパラメータから物件IDを取得
    const propertyId = searchParams.get('property');
    if (propertyId) {
      const property = properties.find(p => p.id === parseInt(propertyId));
      if (property) {
        setPropertyInfo(property);
        // 問い合わせ内容を自動入力
        setFormData(prev => ({
          ...prev,
          inquiryType: 'buy',
          inquiry: `物件についてお問い合わせいたします。

物件名: ${property.title}
所在地: ${property.location}
価格: ${property.price}
物件種別: ${property.type}
専有面積: ${property.size}
築年数: ${property.age}

ご質問・ご要望:
`
        }));
      }
    }
  }, [searchParams, properties]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須です';
    }

    if (!formData.furigana.trim()) {
      newErrors.furigana = 'ふりがなは必須です';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号は必須です';
    } else if (!/^[0-9-]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください';
    }



    if (!formData.inquiryType) {
      newErrors.inquiryType = 'ご相談内容を選択してください';
    }

    if (!formData.preferredContact) {
      newErrors.preferredContact = 'ご希望の連絡方法を選択してください';
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = '相談内容は必須です';
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = '個人情報の取り扱いについて同意してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // ここでフォームデータを送信する処理を実装
    console.log('Form submitted:', formData);
    
    // 送信完了後の処理
    setTimeout(() => {
      setIsSubmitting(false);
      // サンクスページに遷移
      router.push('/contact/thanks');
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 歓迎メッセージ */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせ</h1>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              お気軽にご相談ください
            </h2>
            <p className="text-lg text-yellow-700 mb-4">
              不動産の売買・賃貸・投資など、どんなことでもお気軽にお問い合わせください。
              経験豊富なスタッフが、お客様一人ひとりに寄り添ったアドバイスをいたします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-yellow-700">
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" />
                平日 9:00-18:00
              </div>
              <div className="flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                24時間受付可能
              </div>
              <div className="flex items-center justify-center">
                <Building className="h-5 w-5 mr-2" />
                無料相談実施中
              </div>
            </div>
          </div>
        </div>

        {/* 物件情報が表示されている場合 */}
        {propertyInfo && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              お問い合わせ物件
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-900">{propertyInfo.title}</p>
                <p className="text-sm text-gray-600">{propertyInfo.location}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-yellow-600">{propertyInfo.price}</p>
                <p className="text-sm text-gray-600">{propertyInfo.type} / {propertyInfo.size}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">お問い合わせ先</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-yellow-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">電話番号</p>
                    <p className="text-lg font-semibold text-yellow-600">0120-43-8639</p>
                    <p className="text-sm text-gray-500">9:00-22:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-yellow-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">メールアドレス</p>
                    <p className="text-lg font-semibold text-yellow-600">info@c21-homemart.com</p>
                    <p className="text-sm text-gray-500">24時間受付可能</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">所在地</p>
                    <p className="text-gray-600">
                      〒635-0821<br />
                      奈良県北葛城郡広陵町笠287-1<br />
                      センチュリー21ホームマート
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      最寄り駅：近鉄「大和高田駅」
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium text-yellow-800 mb-2">対応エリア</h3>
                  <p className="text-sm text-yellow-700">
                    奈良県全域・大阪府全域
                  </p>
                </div>

                {/* LINE公式アカウント */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">LINE公式アカウント</h3>
                  <p className="text-sm text-green-700 mb-3">
                    24時間受付可能！お気軽にご相談ください
                  </p>
                  <a
                    href="https://lin.ee/gzWsIFF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    LINEで相談する
                    <ExternalLink className="ml-1 h-3 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">お問い合わせフォーム</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="furigana" className="block text-sm font-medium text-gray-700 mb-2">
                      ふりがな <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="furigana"
                      name="furigana"
                      value={formData.furigana}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.furigana ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.furigana && (
                      <p className="text-red-500 text-sm mt-1">{errors.furigana}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="例: 0120-43-8639"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      ご相談内容 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">ご相談内容を選択してください</option>
                      <option value="buy">物件購入</option>
                      <option value="sell">物件売却</option>
                      <option value="investment">投資用物件</option>
                      <option value="rental">賃貸物件</option>
                      <option value="renovation">リフォーム</option>
                      <option value="other">その他</option>
                    </select>
                    {errors.inquiryType && (
                      <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      ご希望の連絡方法 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.preferredContact ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">選択してください</option>
                      <option value="phone">電話</option>
                      <option value="both">どちらでも可</option>
                    </select>
                    {errors.preferredContact && (
                      <p className="text-red-500 text-sm mt-1">{errors.preferredContact}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                    ご相談内容の詳細 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="ご相談内容やご質問、ご希望などを詳しくお聞かせください。例：購入希望エリア、予算、希望条件など"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.inquiry ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.inquiry && (
                    <p className="text-red-500 text-sm mt-1">{errors.inquiry}</p>
                  )}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-4">個人情報の保護について</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="mb-3">
                      当社は、お客様の個人情報を適切に管理し、以下の目的でのみ利用いたします：
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      <li>お問い合わせへの回答</li>
                      <li>物件情報のご案内</li>
                      <li>サービス向上のための分析</li>
                      <li>お客様への適切なサービス提供</li>
                    </ul>
                    <p className="mb-3">
                      個人情報の取り扱いについては、当社のプライバシーポリシーに従って適切に管理いたします。
                      お客様の個人情報は、法令に基づく場合を除き、お客様の同意なしに第三者に提供することはありません。
                    </p>
                    <p className="text-yellow-700 font-medium">
                      ※お客様のご要望により、個人情報の開示・訂正・削除・利用停止を承ります。
                    </p>
                  </div>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      個人情報の取り扱いについて同意いたします <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.privacyAgreed && (
                    <p className="text-red-500 text-sm mt-1">{errors.privacyAgreed}</p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-colors ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-yellow-600 text-white hover:bg-yellow-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        送信する
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    送信後、担当者より2営業日以内にご連絡いたします
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
