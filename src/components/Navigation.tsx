'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  const buyMenuItems = [
    { name: '新築一戸建て', href: '/buy/new-house' },
    { name: '中古戸建て', href: '/buy/used-house' },
    { name: '中古マンション', href: '/buy/used-mansion' },
    { name: '土地', href: '/buy/land' },
  ];

  // ドロップダウンメニューが開いている時に他の場所をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = () => {
      if (buyDropdownOpen) {
        setBuyDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [buyDropdownOpen]);

  const handleBuyDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBuyDropdownOpen(!buyDropdownOpen);
  };

  // メニュー項目をクリックした時にメニューを閉じる
  const handleMenuClick = () => {
    setIsOpen(false);
    setBuyDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-yellow-600">C21</div>
              <div className="ml-2 text-sm text-gray-600">
                <div>ホームマート</div>
                <div>奈良に根ざした安心サポート</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/buy" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              買いたい方
            </Link>
            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              売りたい方
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              リフォーム
            </Link>
            <Link href="/comparison" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              当社と他社の違い
            </Link>
            <Link href="/why-choose-us" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              選ばれる理由
            </Link>
            <Link href="/about" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              責任者紹介
            </Link>
            <Link href="/company" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              会社概要
            </Link>
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              <Link 
                href="/contact" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <Phone className="mr-1 h-4 w-4" />
                お問い合わせ
              </Link>
              <a 
                href="https://line.me/R/ti/p/@c21-homemart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                LINE
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link href="/buy" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              買いたい方
            </Link>
            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              売りたい方
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              リフォーム
            </Link>
            <Link href="/comparison" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              当社と他社の違い
            </Link>
            <Link href="/why-choose-us" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              選ばれる理由
            </Link>
            <Link href="/about" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              責任者紹介
            </Link>
            <Link href="/company" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              会社概要
            </Link>
            
            {/* Mobile Contact Buttons */}
            <div className="pt-2 space-y-2">
              <Link 
                href="/contact" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center" onClick={handleMenuClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                お問い合わせ
              </Link>
              <a 
                href="https://line.me/R/ti/p/@c21-homemart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで相談
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 