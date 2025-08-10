'use client';

import { User, Phone, Mail, MapPin, Award, Star } from 'lucide-react';

interface StaffMember {
  id: number;
  name: string;
  nameKana: string;
  position: string;
  description: string;
  specialties: string[];
  image: string;
  phone?: string;
  email?: string;
  experience: string;
  certifications: string[];
}

const StaffSection = () => {
  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: '辻本 伸幸',
      nameKana: 'ツジモト ノブユキ',
      position: '営業担当',
      description: '長期的な視点で物事に取り組むのが得意で、任されたことは最後まで責任を持って取り組みます。お客様のご要望を丁寧にお聞きし、最適なご提案をさせていただきます。',
      specialties: ['戸建て物件', 'マンション物件', '土地物件'],
      image: '/api/placeholder/200/200',
      phone: '0745-34-0021',
      email: 'tsujimoto@c21-base.co.jp',
      experience: '不動産業界10年以上',
      certifications: ['宅地建物取引士', '不動産コンサルティングマスター']
    },
    {
      id: 2,
      name: '小林 治',
      nameKana: 'コバヤシ オサム',
      position: '営業担当',
      description: '私は、明るくどんな状況でも前向きに考えることを意識しており、お客様の不安やご心配を解消できるよう努めております。不動産のプロとして、お客様の理想の住まい探しをサポートいたします。',
      specialties: ['新築物件', '中古物件', '投資物件'],
      image: '/api/placeholder/200/200',
      phone: '0745-34-0021',
      email: 'kobayashi@c21-base.co.jp',
      experience: '不動産業界8年以上',
      certifications: ['宅地建物取引士', 'FP技能士']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">スタッフ</h2>
          <p className="text-lg text-gray-600">お客様の不動産ライフをサポートする経験豊富なスタッフをご紹介します</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <User className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-500 text-sm">スタッフ写真</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{staff.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{staff.nameKana}</p>
                    <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {staff.position}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {staff.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      {staff.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">経験・資格</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2 text-yellow-600" />
                        <span>{staff.experience}</span>
                      </div>
                      {staff.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 mr-2 text-yellow-600" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {staff.phone && (
                          <a
                            href={`tel:${staff.phone}`}
                            className="flex items-center text-sm text-yellow-600 hover:text-yellow-700"
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            {staff.phone}
                          </a>
                        )}
                        {staff.email && (
                          <a
                            href={`mailto:${staff.email}`}
                            className="flex items-center text-sm text-yellow-600 hover:text-yellow-700"
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            メール
                          </a>
                        )}
                      </div>
                      <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        詳しいプロフィール
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* スタッフ募集 */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">一緒に働きませんか？</h3>
            <p className="text-gray-700 mb-6">
              センチュリー21ベースでは、不動産のプロフェッショナルとして成長したい方を募集しています。
              地域密着の不動産会社で、お客様の理想の住まい実現をサポートしませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                採用情報を見る
              </button>
              <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
