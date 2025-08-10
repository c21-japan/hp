'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここでフォームデータを送信する処理を実装
    console.log('Simple form submitted:', formData);
    
    // 送信完了後の処理
    setTimeout(() => {
      setIsSubmitting(false);
      alert('お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。');
      setFormData({ name: '', phone: '', inquiry: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="お名前"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="電話番号"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      

      
      <div>
        <textarea
          name="inquiry"
          value={formData.inquiry}
          onChange={handleInputChange}
          placeholder="ご相談内容"
          rows={3}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
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
              無料相談を申し込む
            </>
          )}
        </button>
      </div>
    </form>
  );
}
