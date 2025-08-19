export const metadata = {
  title: "個人情報処理方針 | 文書キング",
  description: "文書キングは最小限の個人情報のみを安全に保護しています。",
  keywords: [
    "文書キング個人情報", "個人情報処理方針", "個人情報保護", "文書キング", "文書キング個人情報方針"
  ],
  alternates: {
    canonical: "https://www.pdfers.com/privacy",
  },
  openGraph: {
    title: "個人情報処理方針 | 文書キング",
    description: "文書キングは最小限の個人情報のみを安全に保護しています。",
    url: "https://www.pdfers.com/privacy",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "文書キング個人情報処理方針" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "個人情報処理方針 | 文書キング",
    description: "文書キングは最小限の個人情報のみを安全に保護しています。",
    images: ["/og-image.png"]
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">個人情報処理方針</h1>
      <p className="mb-6 text-gray-700">
        文書キング（以下「サイト」）は利用者の個人情報を何よりも大切に考えています。<br />
        個人情報保護法など関連法令を遵守し、個人情報を最小限に収集し安全に管理しています。
      </p>
      <ol className="list-decimal ml-6 space-y-4 text-sm">
        <li>
          <b>収集する個人情報項目及び方法</b>
          <ul className="list-disc ml-6 mt-2">
            <li>サイトは一般的なファイル変換サービス利用時に個人情報を収集しません。</li>
            <li>お問い合わせ時、メールアドレスとお問い合わせ内容を入力していただく場合があります。</li>
          </ul>
        </li>
        <li>
          <b>個人情報の利用目的</b>
          <ul className="list-disc ml-6 mt-2">
            <li>お問い合わせ及びご要望への対応、サービス改善のための参考資料としてのみ活用します。</li>
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
          <b>個人情報提供及び委託</b>
          <ul className="list-disc ml-6 mt-2">
            <li>第三者に個人情報を提供または委託しません。</li>
          </ul>
        </li>
        <li>
          <b>利用者の権利</b>
          <ul className="list-disc ml-6 mt-2">
            <li>利用者はいつでも自分の個人情報の閲覧、訂正、削除を請求できます。</li>
            <li>お問い合わせ: <a href="mailto:contact@pdfers.com" className="underline text-blue-700">contact@pdfers.com</a></li>
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