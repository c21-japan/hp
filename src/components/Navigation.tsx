'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MessageCircle, Home, Building, MapPin, Clock } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);

  const propertyMenuItems = [
    { name: '中古戸建て', href: '/buy/used-house', icon: Home },
    { name: '新築戸建て', href: '/buy/new-house', icon: Home },
    { name: 'マンション', href: '/buy/mansion', icon: Building },
    { name: '土地', href: '/buy/land', icon: MapPin },
  ];

  // ドロップダウンメニューが開いている時に他の場所をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = () => {
      if (propertyDropdownOpen) {
        setPropertyDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [propertyDropdownOpen]);

  const handlePropertyDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPropertyDropdownOpen(!propertyDropdownOpen);
  };

  // メニュー項目をクリックした時にメニューを閉じる
  const handleMenuClick = () => {
    setIsOpen(false);
    setPropertyDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* 上部連絡先情報バー */}
      <div className="bg-yellow-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">0120-43-8639</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>営業時間：9：00～22：00</span>
              </div>
              <div className="hidden sm:block">
                <span>定休日：年末年始</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            </div>
          </div>
        </div>
      </div>

      {/* メインナビゲーション */}
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
            {/* 物件種別ドロップダウン */}
            <div className="relative">
              <button
                onClick={handlePropertyDropdownClick}
                className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                物件を探す
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${propertyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {propertyDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {propertyMenuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                        onClick={handleMenuClick}
                      >
                        <IconComponent className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              売りたい方
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              リフォーム
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
                href="https://lin.ee/gzWsIFF" 
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
            {/* 物件種別メニュー */}
            <div className="bg-gray-50 px-3 py-2 rounded-md">
              <div className="text-sm font-medium text-gray-700 mb-2">物件を探す</div>
              {propertyMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    onClick={handleMenuClick}
                  >
                    <IconComponent className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Link href="/sell" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              売りたい方
            </Link>
            <Link href="/renovation" className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={handleMenuClick}>
              リフォーム
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
                href="https://lin.ee/gzWsIFF" 
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