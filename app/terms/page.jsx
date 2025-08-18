export const metadata = {
  title: "利用規約 | ドキュメントキング",
  description: "ドキュメントキングサービスの利用規約をご案内いたします。",
  keywords: [
    "ドキュメントキング", "利用規約", "サービス規約", "無料ファイル変換", "ドキュメントキング利用規定", "ドキュメントキングポリシー"
  ],
  alternates: {
    canonical: "https://pdfers.com/terms",
  },
  openGraph: {
    title: "利用規約 | ドキュメントキング",
    description: "ドキュメントキングサービスの利用規約をご案内いたします。",
    url: "https://pdfers.com/terms",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "ドキュメントキング利用規約" }
    ],
    siteName: "ドキュメントキング",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "利用規約 | ドキュメントキング",
    description: "ドキュメントキングサービスの利用規約をご案内いたします。",
    images: ["/og-image.png"]
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">利用規約</h1>
      <ol className="list-decimal ml-6 space-y-4 text-sm">
        <li>
          <b>サービス概要</b>
          <ul className="list-disc ml-6 mt-2">
            <li>ドキュメントキングは、誰でも自由に利用できる無料ファイル変換サービスです。</li>
            <li>会員登録およびログイン手続きなしで利用可能です。</li>
          </ul>
        </li>
        <li>
          <b>利用者の義務</b>
          <ul className="list-disc ml-6 mt-2">
            <li>利用者は、著作権等関連法令に違反しないファイルのみをアップロードする必要があります。</li>
            <li>違法コンテンツ、ウイルス、個人情報が含まれたファイルの変換を禁止します。</li>
          </ul>
        </li>
        <li>
          <b>サービス提供および責任</b>
          <ul className="list-disc ml-6 mt-2">
            <li>サイトは無料でファイル変換機能を提供します。</li>
            <li>ファイル変換結果物の正確性、保存、復元等について保証せず、データ損失等の問題について法的責任を負いません。</li>
          </ul>
        </li>
        <li>
          <b>サービスの変更および終了</b>
          <ul className="list-disc ml-6 mt-2">
            <li>サービス内容は事前予告なしに変更または中断される場合があります。</li>
          </ul>
        </li>
        <li>
          <b>その他</b>
          <ul className="list-disc ml-6 mt-2">
            <li>本規約は2025年7月19日から適用されます。</li>
            <li>規約に変更がある場合は、ホームページでお知らせします。</li>
          </ul>
        </li>
      </ol>
      <p className="mt-8 text-xs text-gray-400">
        本規約および方針に同意しない場合は、サービス利用を中止していただけます。
      </p>
    </div>
  );
}