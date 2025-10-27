export const metadata = {
  title: "個人情報処理方針 | PDFer",
  description: "PDFerは最小限の個人情報のみを安全に保護しています。",
  keywords: [
    "PDFer個人情報", "個人情報処理方針", "個人情報保護", "PDFer", "PDFer個人情報方針"
  ],
  alternates: {
    canonical: "https://www.pdfers.com/privacy",
  },
  openGraph: {
    title: "個人情報処理方針 | PDFer",
    description: "PDFerは最小限の個人情報のみを安全に保護しています。",
    url: "https://www.pdfers.com/privacy",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDFer個人情報処理方針" }
    ],
    siteName: "PDFer",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "個人情報処理方針 | PDFer",
    description: "PDFerは最小限の個人情報のみを安全に保護しています。",
    images: ["/og-image.png"]
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">個人情報処理方針</h1>
      <p className="mb-6 text-gray-700">
        PDFer（以下「サイト」）は利用者の個人情報を何よりも大切に考えています。<br />
        個人情報保護法など関連法令を遵守し、個人情報を最小限に収集し安全に管理しています。
      </p>
      <ol className="list-decimal ml-6 space-y-4 text-sm">
        <li>
          <b>収集する個人情報項目及び方法</b>
          <ul className="list-disc ml-6 mt-2">
            <li>サイトは一般的なファイル変換サービス利用時に個人情報を収集しません。</li>
            <li>お問い合わせ時、メールアドレスとお問い合わせ内容を入力していただく場合があります。</li>
            <li>Google Analytics（ウェブトラフィック分析）: アクセスログ、ページビュー、滞在時間などの匿名統計情報</li>
            <li>Google AdSense（広告配信）: 広告クリック、広告閲覧記録などの匿名データ</li>
            <li>クッキー情報: サイトの利用体験向上のため、ブラウザに一時的な識別情報を保存します</li>
          </ul>
        </li>
        <li>
          <b>個人情報の利用目的</b>
          <ul className="list-disc ml-6 mt-2">
            <li>お問い合わせ及びご要望への対応、サービス改善のための参考資料としてのみ活用します。</li>
            <li>Google Analytics: サイトの利用パターン分析、ユーザー体験の向上、トラフィック分析</li>
            <li>Google AdSense: 広告の最適化、収益化、関連度の高い広告配信</li>
            <li>これ以外の目的で個人情報を利用しません。</li>
          </ul>
        </li>
        <li>
          <b>個人情報の保有及び廃棄</b>
          <ul className="list-disc ml-6 mt-2">
            <li>お問い合わせが解決された後、即座に個人情報を安全に削除します。</li>
            <li>別途の会員登録・ログイン機能を運営していないため、長期保管しません。</li>
          </ul>
        </li>
        <li>
          <b>クッキー（Cookie）の使用</b>
          <ul className="list-disc ml-6 mt-2">
            <li>本サイトは最適なサービス提供のためにクッキーを使用します。</li>
            <li>クッキーはお客様のブラウザに保存される小規模なテキストファイルです。</li>
            <li>クッキーには個人を特定できる情報は含まれず、匿名統計情報のみが収集されます。</li>
            <li>ブラウザの設定でクッキーを無効にすることができますが、一部機能が制限される場合があります。</li>
          </ul>
        </li>
        <li>
          <b>第三者サービス（Google Analytics、Google AdSense）</b>
          <ul className="list-disc ml-6 mt-2">
            <li>本サイトはGoogle Analytics（トラフィック分析）とGoogle AdSense（広告配信）を使用しています。</li>
            <li>これらのサービスは匿名のトラフィックデータを収集し、広告配信に使用する場合があります。</li>
            <li>Googleのプライバシーポリシー: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-green-700">https://policies.google.com/privacy</a></li>
            <li>Google Analyticsの使用を停止するには、Google Analyticsオプトアウトアドオンをご利用ください。</li>
          </ul>
        </li>
        <li>
          <b>個人情報提供及び委託</b>
          <ul className="list-disc ml-6 mt-2">
            <li>匿名統計情報のみがGoogleなどの第三者サービスに提供されます。</li>
            <li>個人を特定できる情報は第三者に提供または委託しません。</li>
          </ul>
        </li>
        <li>
          <b>利用者の権利とクッキー管理</b>
          <ul className="list-disc ml-6 mt-2">
            <li>利用者はいつでも自分の個人情報の閲覧、訂正、削除を請求できます。</li>
            <li>クッキーの使用を拒否する場合、ブラウザ設定でクッキーを無効化できます。</li>
            <li>Google Analyticsの情報収集を停止するには、<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline text-green-700">オプトアウトツール</a>をご利用ください。</li>
            <li>お問い合わせ: <a href="mailto:pji3503@gmail.com" className="underline text-green-700">pji3503@gmail.com</a></li>
          </ul>
        </li>
      </ol>
      <p className="mt-8 text-xs text-gray-400">
        本方針は2025年7月19日から適用されます。<br />
        変更事項発生時はホームページを通じて事前に公告いたします。
      </p>
    </div>
  );
}