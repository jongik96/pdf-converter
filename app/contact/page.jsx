"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '전송에 실패했습니다. 다시 시도해주세요.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <p className="mb-8 text-gray-700">
      ドキュメントキングのサービスに関するご質問、ご要望、不具合のご報告など、
どのようなお問い合わせも大歓迎です。<br />
下記のメールアドレスまたはお問い合わせフォームよりご連絡いただければ、
迅速にご回答いたします。
      </p>
      
      <div className="bg-gray-100 rounded p-6 mb-6">
        <p className="mb-2 font-semibold">E-mail お問い合わせ</p>
        <a href="mailto:contact@pdfers.com" className="text-blue-700 underline font-mono">
          contact@pdfers.com
        </a>
      </div>

      {/* 상태 메시지 표시 */}
      {status.message && (
        <div className={`p-4 rounded mb-6 ${
          status.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {status.message}
        </div>
      )}

      {/* 문의폼 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
            className="border rounded w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="border rounded w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="문의내용을 자세히 입력해주세요"
            rows={5}
            className="border rounded w-full p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-3 rounded font-semibold transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSubmitting ? '전송중...' : '문의 보내기'}
        </button>
      </form>

      <div className="mt-10 space-y-4 text-sm text-gray-600">
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">📧 お問い合わせ後の流れ</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-700">
          <li>送信完了後、確認メールが届きます</li>
  <li>内容を確認のうえ、24時間以内にご返信いたします</li>
  <li>お急ぎの場合は、直接メールでも対応可能です</li>
</ol>
</div>

<p className="text-xs text-gray-400">
  ご返信はすべて確認後、メールにてお送りいたします。
</p>
      </div>
    </div>
  );
}