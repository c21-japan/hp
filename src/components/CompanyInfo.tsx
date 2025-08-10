'use client';

import { MapPin, Phone, Mail, Clock, Award, Building, Users, Target } from 'lucide-react';

const CompanyInfo = () => {
  const companyData = {
    name: 'センチュリー21 ホームマート',
    nameKana: 'センチュリー21 ホームマート',
    address: '奈良県北葛城郡広陵町笠287-1',
    phone: '0120-43-8639',
    fax: '050-3183-9576',
    businessHours: '9：00～22：00',
    holidays: '年末年始',
    license: '奈良県知事 (1) 第4582号',
    established: '2010年4月',
    capital: '1,000万円',
    employees: '15名',
    ceo: '乾 佑企',
    ceoKana: 'イヌイ ユウキ'
  };

  const services = [
    '不動産売買仲介',
    '不動産賃貸仲介',
    '不動産管理',
    '不動産コンサルティング',
    '住宅ローン相談',
    'リフォーム相談'
  ];

  const areas = [
    '奈良県全域',
    '橿原市',
    '大和高田市', 
    '香芝市',
    '生駒市',
    '北葛城郡王寺町',
    '桜井市',
    '大和郡山市',
    '天理市',
    '北葛城郡河合町',
    '磯城郡川西町'
  ];

  const achievements = [
    { number: '999件', label: '掲載物件数' },
    { number: '998件', label: '公開物件数' },
    { number: '527件', label: '本日の更新物件数' },
    { number: '500件+', label: '累計取引実績' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">弊社について</h2>
          <p className="text-lg text-gray-600">地域密着の不動産会社として、お客様の理想の住まい実現をサポートいたします</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 会社基本情報 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">会社名</span>
                  <div className="text-gray-700">{companyData.name}</div>
                  <div className="text-sm text-gray-500">{companyData.nameKana}</div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">所在地</span>
                  <div className="text-gray-700">〒635-0821</div>
                  <div className="text-gray-700">{companyData.address}</div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">TEL</span>
                  <div className="text-gray-700">{companyData.phone}</div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">FAX</span>
                  <div className="text-gray-700">{companyData.fax}</div>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">営業時間</span>
                  <div className="text-gray-700">{companyData.businessHours}</div>
                  <div className="text-sm text-gray-500">定休日：{companyData.holidays}</div>
                </div>
              </div>

              <div className="flex items-start">
                <Award className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">免許番号</span>
                  <div className="text-gray-700">{companyData.license}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <span className="font-medium text-gray-900">設立</span>
                  <div className="text-gray-700">{companyData.established}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">資本金</span>
                  <div className="text-gray-700">{companyData.capital}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">従業員数</span>
                  <div className="text-gray-700">{companyData.employees}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-900">代表者</span>
                  <div className="text-gray-700">{companyData.ceo}</div>
                  <div className="text-sm text-gray-500">{companyData.ceoKana}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 事業内容・実績 */}
          <div className="space-y-8">
            {/* 事業内容 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">事業内容</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 対応エリア */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">対応エリア</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 実績 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">実績</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 代表挨拶 */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">代表挨拶</h3>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <div className="text-lg font-semibold text-gray-900">{companyData.ceo}</div>
              <div className="text-gray-600">代表取締役</div>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                センチュリー21ベースでは、お客様に嘘をつかず誠実に向き合う、そして心の底から喜んでいただけるよう常に考えて行動する。
              </p>
              <p>
                社員全員で徹底して取り組んでいます。簡単なことではありますが当たり前のことではないのが不動産業界です。
              </p>
              <p>
                これからもお客様ファーストの姿勢を貫いていきます。
              </p>
            </div>
          </div>
        </div>

        {/* アクセス・お問い合わせ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">アクセス</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-700">{companyData.address}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    最寄り駅：近鉄「大和高田駅」よりバス15分・「さわやかホール」バス停下車徒歩5分
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">地図</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{companyData.phone}</div>
                <div className="text-gray-600">営業時間：{companyData.businessHours}</div>
              </div>
              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  お問い合わせフォーム
                </button>
              </div>
              <div className="text-center">
                <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                  来店予約
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
