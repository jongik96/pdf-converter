// app/page.jsx 또는 app/page.tsx

import WizardClient from "@/components/WizardClient";
import SchemaFAQ from "@/components/SchemaFAQ";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"> 

      {/* 업로드/변환 마법사 */}
      <section id="wizard" className="max-w-2xl mx-auto mt-0">
        <WizardClient />
      </section>

      {/* 3단계 이용방법 카드 */}
        <section className="w-full flex flex-col items-center mt-16 px-2">
        <h2 className="text-2xl font-bold text-center mb-8">利用方法 – 2ステップで完了！</h2>
        <div className="w-full max-w-3xl flex flex-col gap-7">
            {/* 1단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step1.gif" alt="ファイルアップロード" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-blue-700 mb-2 text-xl md:text-2xl">1. ファイルアップロード</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                変換したいファイルを<b>クリックまたはドラッグ</b>してアップロードしてください。
            </p>
            </div>
            {/* 2단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step2.gif" alt="ツール選択" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-blue-700 mb-2 text-xl md:text-2xl">2. ツール選択</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                自動推奨される変換ツールの中から希望する作業をクリック！<br />
                変換後自動でダウンロード
            </p>
            </div>
        </div>
        </section>

      {/* 특징 및 신뢰/FAQ – FAQ 디자인 개선 */}
      <section className="max-w-3xl mx-auto mt-16 mb-28 px-4">
        <h2 className="text-xl font-bold mb-6 text-blue-800 text-center">ドキュメントキングが特別な理由</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-10">
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">💯</span>
            <span><b>100%無料</b> すべての変換機能完全無料！</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">⚡️</span>
            <span><b>高速</b> 平均3~10秒内外変換</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">🔒</span>
            <span><b>安全セキュリティ</b> 変換後ファイル1時間以内自動削除、HTTPS送信</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">📱</span>
            <span><b>PC/モバイル両方対応</b> スマートフォン、タブレットでもすぐに使用</span>
          </li>
        </ul>
        {/* FAQ */}
        <div className="mt-4 bg-white/95 p-8 rounded-2xl shadow border">
        <h3 className="font-semibold mb-7 text-blue-900 text-2xl text-center">よくある質問</h3>
        <ul className="space-y-8 text-gray-800 font-normal">
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. ドキュメントキングは本当に無料ですか？
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                はい、<b className="text-blue-700 font-semibold">ドキュメントキング</b>のすべての<b>文書変換</b>および<b>画像変換</b>サービスは100%<b className="text-blue-700 font-semibold">無料</b>です。
                会員登録やインストールなしで誰でもすぐに利用でき、PDF、Word、Excel、画像など多様なファイルを自由に変換できます。<br />
                有料決済、隠れた費用なしで本当に無料で安全に使用してください。
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. ファイルはどこに保存されますか？
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-blue-700 font-semibold">ドキュメントキング</b>にアップロードされたファイルは変換後1分後に自動削除され、サーバーにも残りません。
                すべてのファイルは暗号化(SSL)で安全に送信され、外部漏洩のリスクがない安全な<b>文書セキュリティ</b>環境を提供します。<br />
                個人情報保護とファイルセキュリティを最優先に考える信頼できる変換サービスです。
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. モバイルも対応していますか？
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                はい、<b className="text-blue-700 font-semibold">ドキュメントキング</b>はPC、モバイル、タブレットなどすべてのデバイスで完璧に動作します。<br />
                スマートフォンでもPDF変換、画像変換など多様な機能を簡単に使用でき、いつでもどこでも高速で便利にファイル変換が可能です。
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. 対応しているファイル形式は？
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-blue-700 font-semibold">ドキュメントキング</b>ではPDF、DOCX(Word)、XLSX(Excel)、CSV、PPT、JPG、PNG、HEIC、WEBPなど多様なファイルの変換に対応しています。<br />
                文書変換、画像変換、圧縮、サイズ調整など多様な機能を業務、課題、レポート、SNSなど様々な状況で自由に活用できます。
            </div>
            </li>
        </ul>
        </div>
        <SchemaFAQ />
      </section>

      {/* CTA 배너 */}
      <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-200 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">いつでも無料で変換してください！</h2>
        <a href="#wizard" className="inline-block px-10 py-4 bg-blue-700 text-white rounded-2xl font-semibold shadow hover:bg-blue-800 transition text-lg">
          ファイル変換すぐに開始 &rarr;
        </a>
        <p className="mt-3 text-gray-700 text-sm">会員登録、インストール、広告一切なし。必要な時、ドキュメントキング！</p>
      </div>
    </div>
  );
}