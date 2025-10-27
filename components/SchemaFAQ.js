// /components/SchemaFAQ.js
"use client";
export default function SchemaFAQ() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "PDFerは本当に無料ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、PDFerのすべての文書変換および画像変換サービスは100%無料です。会員登録やインストールなしで誰でもすぐに利用できます。有料決済、隠れた費用なしで本当に無料で安全に使用してください。"
              }
            },
            {
              "@type": "Question",
              "name": "ファイルはどこに保存されますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PDFerにアップロードされたファイルは変換後1時間後に自動削除され、サーバーにも残りません。すべてのファイルは暗号化(SSL)で安全に送信され、外部漏洩のリスクがない安全な環境を提供します。"
              }
            },
            {
              "@type": "Question",
              "name": "モバイルも対応していますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、PDFerはPC、モバイル、タブレットなどすべてのデバイスで完璧に動作します。スマートフォンでもPDF変換、画像変換など多様な機能を簡単に使用できます。"
              }
            },
            {
              "@type": "Question",
              "name": "対応しているファイル形式は？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PDFerではPDF、DOCX(Word)、XLSX(Excel)、CSV、PPT、JPG、PNG、HEIC、WEBPなど多様なファイルの変換に対応しています。文書変換、画像変換、圧縮、サイズ調整など多様な機能を業務、課題、レポート、SNSなど様々な状況で自由に活用できます。"
              }
            }
          ]
        })
      }}
    />
  );
}