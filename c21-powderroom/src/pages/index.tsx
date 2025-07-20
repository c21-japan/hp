'use client';

import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen bg-[#f7f7f7] flex flex-col items-center`}
    >
      {/* ====== ヘッダー・ロゴ ====== */}
      <header className="w-full flex flex-col items-center py-8 bg-white shadow-md mb-8">
        {/*
        <Image
          src="/c21-logo.svg"       // ← ロゴを /public に置いたらパスを合わせてコメント解除
          alt="CENTURY21リフォーム ロゴ"
          width={320}
          height={60}
          priority
        />
        */}
        <h1 className="text-2xl font-bold mt-2 text-[#b4975a] tracking-wide">
          CENTURY21リフォーム
        </h1>
      </header>

      {/* ====== メインビジュアル ====== */}
      <section className="w-full max-w-4xl flex flex-col items-center px-4 mb-12">
        {/*
        <div className="w-full rounded-xl overflow-hidden shadow-lg mb-6">
          <Image
            src="/main-visual.jpg"  // ← ビジュアル投入後にコメント解除
            alt="リフォームイメージ"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        */}
        <p className="text-lg text-center text-gray-700 mb-2">
          奈良・広陵町のリフォームなら
          <br className="sm:hidden" />
          <span className="font-bold text-[#b4975a]">CENTURY21リフォーム</span>
          にお任せください。
        </p>
        <a
          href="https://line.me/ti/p/0_Cxj91mML"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#06c755] text-white font-semibold rounded-full px-6 py-3 mt-4 shadow hover:bg-[#05b14a] transition-colors"
        >
          {/*
          <Image src="/line.svg" alt="LINE" width={28} height={28} />
          */}
          LINEで簡単お問い合わせ
        </a>
      </section>

      {/* ====== スタッフ紹介 ====== */}
      <section className="w-full max-w-4xl px-4 mb-16">
        <h2 className="text-xl font-bold text-[#b4975a] mb-6">スタッフ紹介</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* 代表 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            {/*
            <Image src="/staff1.png" alt="代表イラスト" width={100} height={100} className="rounded-full mb-2" />
            */}
            <span className="font-semibold">乾 佑企</span>
            <span className="text-sm text-gray-500">代表</span>
          </div>
          {/* アドバイザー */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            {/*
            <Image src="/staff2.png" alt="スタッフAイラスト" width={100} height={100} className="rounded-full mb-2" />
            */}
            <span className="font-semibold">リフォームアドバイザー</span>
            <span className="text-sm text-gray-500">スタッフA</span>
          </div>
          {/* コーディネーター */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            {/*
            <Image src="/staff3.png" alt="スタッフBイラスト" width={100} height={100} className="rounded-full mb-2" />
            */}
            <span className="font-semibold">コーディネーター</span>
            <span className="text-sm text-gray-500">スタッフB</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          ※スタッフ画像はイメージです
        </p>
      </section>

      {/* ====== サービス案内 ====== */}
      <section className="w-full max-w-4xl px-4 mb-16">
        <h2 className="text-xl font-bold text-[#b4975a] mb-6">サービス案内</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            {/*
            <Image src="/service1.png" alt="水回りリフォーム" width={60} height={60} className="mb-2" />
            */}
            <span className="font-semibold mb-1">水回りリフォーム</span>
            <span className="text-gray-600 text-sm">
              キッチン・浴室・トイレなどのリフォーム
            </span>
          </li>
          <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            {/*
            <Image src="/service2.png" alt="内装リフォーム" width={60} height={60} className="mb-2" />
            */}
            <span className="font-semibold mb-1">内装リフォーム</span>
            <span className="text-gray-600 text-sm">
              クロス・床・建具などのリフォーム
            </span>
          </li>
          <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            {/*
            <Image src="/service3.png" alt="外装リフォーム" width={60} height={60} className="mb-2" />
            */}
            <span className="font-semibold mb-1">外装リフォーム</span>
            <span className="text-gray-600 text-sm">
              外壁・屋根・エクステリアなど
            </span>
          </li>
          <li className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            {/*
            <Image src="/service4.png" alt="その他リフォーム" width={60} height={60} className="mb-2" />
            */}
            <span className="font-semibold mb-1">その他リフォーム</span>
            <span className="text-gray-600 text-sm">
              小さな修繕から大規模リノベーションまで
            </span>
          </li>
        </ul>
      </section>

      {/* ====== お問い合わせフォーム ====== */}
      <section className="w-full max-w-2xl px-4 mb-16">
        <h2 className="text-xl font-bold text-[#b4975a] mb-6">お問い合わせ</h2>
        <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="お名前"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="メールアドレス"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="tel"
            placeholder="電話番号（任意）"
            className="border rounded px-3 py-2"
          />
          <textarea
            placeholder="お問い合わせ内容"
            className="border rounded px-3 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-[#b4975a] text-white font-semibold rounded px-6 py-3 hover:bg-[#a0864a] transition-colors"
          >
            送信する
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">
          ※フォーム送信先は当社指定のものに設定してください
        </p>
      </section>

      {/* ====== フッター：会社情報 ====== */}
      <footer className="w-full bg-[#222] text-white py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-2">
          <div className="font-bold text-lg mb-1">
            センチュリー21 ホームマート
          </div>
          <div>〒635-0821 奈良県北葛城郡広陵町笠287-1</div>
          <div>
            電話番号：
            <a href="tel:050-7117-7107" className="underline">
              050-7117-7107
            </a>
          </div>
          <div>代表：乾 佑企</div>
          <div>免許番号：奈良県知事（1）第4582号</div>
          <div>営業時間：9:00〜22:00（水曜定休）</div>
        </div>
      </footer>
    </div>
  );
}