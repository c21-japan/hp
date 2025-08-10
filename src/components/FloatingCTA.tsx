'use client';

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* 電話ボタン */}
      <Link
        href="tel:0120-43-8639"
        className="bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        aria-label="電話でお問い合わせ"
      >
        <Phone className="h-6 w-6" />
      </Link>
      
      {/* LINEボタン */}
      <Link
        href="https://line.me/R/ti/p/@c21-homemart"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="LINEでお問い合わせ"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </div>
  );
}
