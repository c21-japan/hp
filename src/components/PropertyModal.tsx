'use client';

import { X, MapPin, Home, Building } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  size: string;
  age: string;
  description: string;
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">物件詳細</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image */}
            <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-500">物件画像</span>
            </div>

            {/* Property Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-600">{property.price}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  {property.type.includes('マンション') ? (
                    <Building className="h-5 w-5 text-gray-600 mr-2" />
                  ) : (
                    <Home className="h-5 w-5 text-gray-600 mr-2" />
                  )}
                  <span className="text-gray-700">{property.type}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">面積:</span> {property.size}
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">築年:</span> {property.age}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">物件概要</h4>
                <p className="text-gray-600">{property.description}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex-1 bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                お問い合わせ
              </button>
              <button className="flex-1 border-2 border-yellow-600 text-yellow-600 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 