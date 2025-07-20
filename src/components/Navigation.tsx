'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  const buyMenuItems = [
    { name: '新築1戸建て', href: '/buy/new-house' },
    { name: '中古戸建て', href: '/buy/used-house' },
    { name: '中古マンション', href: '/buy/used-mansion' },
    { name: '土地', href: '/buy/land' },
  ];

  // ドロップダウンメニューが開いている時に他の場所をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-yellow-600">センチュリー21ホームマート</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              トップページ
            </Link>
            
            {/* Buy Dropdown */}
            <div className="relative">
              <button
                onClick={handleBuyDropdownClick}
                className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                家を買う
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {buyDropdownOpen && (
                <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {buyMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                        onClick={() => setBuyDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              家を売る
            </Link>
            <Link href="/comparison" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              買取比較
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              リフォーム
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              トップページ
            </Link>
            <Link href="/buy" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              家を買う
            </Link>
            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              家を売る
            </Link>
            <Link href="/comparison" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              買取比較
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              リフォーム
            </Link>
            <Link href="/why-choose-us" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              選ばれる理由
            </Link>
            <Link href="/about" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              責任者紹介
            </Link>
            <Link href="/company" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              会社概要
            </Link>
            
            {/* Mobile Contact Buttons */}
            <div className="pt-2 space-y-2">
              <Link 
                href="/contact" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center"
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