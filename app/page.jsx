"use client";

// app/page.jsx 또는 app/page.tsx

import WizardClient from "@/components/WizardClient";
import SchemaFAQ from "@/components/SchemaFAQ";
import { trackPageView } from "@/lib/analytics";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    trackPageView('home');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100"> 

      {/* 업로드/변환 마법사 */}
      <section id="wizard" className="max-w-2xl mx-auto mt-0">
        <WizardClient />
      </section>

      {/* 3단계 이용방법 카드 */}
        <section className="w-full flex flex-col items-center mt-16 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <span>📝</span>
          <span>利用方法 – 2ステップで完了！</span>
          <span>📝</span>
        </h2>
        <div className="w-full max-w-3xl flex flex-col gap-7">
            {/* 1단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step1.gif" alt="ファイルアップロード" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-green-700 mb-2 text-xl md:text-2xl">1. ファイルアップロード</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                変換したいファイルを<b>クリックまたはドラッグ</b>してアップロードしてください。
            </p>
            </div>
            {/* 2단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step2.gif" alt="ツール選択" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-green-700 mb-2 text-xl md:text-2xl">2. ツール選択</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                自動推奨される変換ツールの中から希望する作業をクリック！<br />
                変換完了後、ダウンロードボタンでファイルを取得
            </p>
            </div>
        </div>
        </section>

      {/* 특징 및 신뢰/FAQ – FAQ 디자인 개선 */}
      <section className="max-w-3xl mx-auto mt-16 mb-28 px-4">
        <h2 className="text-2xl font-bold mb-8 text-green-800 text-center">✨ PDFerが特別な理由</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-10">
          <li className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100 hover:shadow-lg transition">
            <span className="text-3xl">💯</span>
            <span className="leading-relaxed"><b>100%無料</b> すべての変換機能完全無料！</span>
          </li>
          <li className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-100 hover:shadow-lg transition">
            <span className="text-3xl">⚡️</span>
            <span className="leading-relaxed"><b>超高速</b> 平均3~10秒内外変換</span>
          </li>
          <li className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-100 hover:shadow-lg transition">
            <span className="text-3xl">🔒</span>
            <span className="leading-relaxed"><b>安全セキュリティ</b> 変換後自動削除、HTTPS送信</span>
          </li>
          <li className="flex items-start gap-3 bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border-2 border-orange-100 hover:shadow-lg transition">
            <span className="text-3xl">📱</span>
            <span className="leading-relaxed"><b>PC/モバイル両方対応</b> スマートフォン、タブレットでもすぐに使用</span>
          </li>
        </ul>
        {/* FAQ */}
        <div className="mt-4 bg-gradient-to-br from-white via-green-50 to-emerald-50 p-8 rounded-3xl shadow-xl border-2 border-green-100">
        <h3 className="font-semibold mb-7 text-green-900 text-2xl text-center flex items-center justify-center gap-2">
          <span>❓</span>
          <span>よくある質問</span>
          <span>❓</span>
        </h3>
        <ul className="space-y-8 text-gray-800 font-normal">
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>💡</span>
                <span>Q. ドキュメントキングは本当に無料ですか？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                はい、<b className="text-green-700 font-semibold">PDFer</b>のすべての<b>文書変換</b>および<b>画像変換</b>サービスは100%<b className="text-green-700 font-semibold">無料</b>です。
                会員登録やインストールなしで誰でもすぐに利用でき、PDF、Word、Excel、画像など多様なファイルを自由に変換できます。<br />
                有料決済、隠れた費用なしで本当に無料で安全に使用してください。
            </div>
            </li>
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>🔐</span>
                <span>Q. ファイルはどこに保存されますか？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-green-700 font-semibold">PDFer</b>にアップロードされたファイルは変換後1時間後に自動削除され、サーバーにも残りません。
                すべてのファイルは暗号化(SSL)で安全に送信され、外部漏洩のリスクがない安全な<b>文書セキュリティ</b>環境を提供します。<br />
                個人情報保護とファイルセキュリティを最優先に考える信頼できる変換サービスです。
            </div>
            </li>
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>📱</span>
                <span>Q. モバイルも対応していますか？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                はい、<b className="text-green-700 font-semibold">PDFer</b>はPC、モバイル、タブレットなどすべてのデバイスで完璧に動作します。<br />
                スマートフォンでもPDF変換、画像変換など多様な機能を簡単に使用でき、いつでもどこでも高速で便利にファイル変換が可能です。
            </div>
            </li>
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>📄</span>
                <span>Q. 対応しているファイル形式は？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-green-700 font-semibold">PDFer</b>ではPDF、DOCX(Word)、XLSX(Excel)、CSV、PPT、JPG、PNG、HEIC、WEBPなど多様なファイルの変換に対応しています。<br />
                文書変換、画像変換、圧縮、サイズ調整など多様な機能を業務、課題、レポート、SNSなど様々な状況で自由に活用できます。
            </div>
            </li>
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>🎯</span>
                <span>Q. どのくらいのファイルサイズまで変換できますか？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                一般的な変換では<b className="text-green-700 font-semibold">50MB以下のファイル</b>を推奨しています。それ以上のサイズのファイルも処理可能ですが、処理時間が長くなることがあります。<br />
                大容量ファイルも分割してアップロードする方法をご利用いただけます。
            </div>
            </li>
            <li className="bg-white/60 p-5 rounded-xl border border-green-100">
            <div className="mb-2 text-lg font-bold text-green-800 tracking-tight leading-snug flex items-center gap-2">
                <span>🚀</span>
                <span>Q. 変換速度はどのくらいですか？</span>
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                平均<b className="text-green-700 font-semibold">3~10秒</b>内外で変換が完了します。ファイルの種類やサイズによって多少異なりますが、国内最適化サーバーを使用しているため、どこよりも高速です。
            </div>
            </li>
        </ul>
        </div>
        <SchemaFAQ />
      </section>

      {/* CTA 배너 */}
      <div className="w-full bg-gradient-to-r from-green-200 via-emerald-200 to-green-300 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 flex items-center justify-center gap-2">
          <span>✨</span>
          <span>いつでも無料で変換してください！</span>
          <span>✨</span>
        </h2>
        <a href="#wizard" className="inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">
          🚀 ファイル変換すぐに開始 &rarr;
        </a>
        <p className="mt-4 text-gray-700 text-sm md:text-base">会員登録、インストールなしで完全無料！必要な時、PDFer！</p>
      </div>
    </div>
  );
}