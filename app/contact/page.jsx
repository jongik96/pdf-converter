export const metadata = {
  title: "お問い合わせ | ドキュメントキング",
  description: "ドキュメントキングサービス利用中にご不明な点がございましたら、いつでもお気軽にお問い合わせください。",
  keywords: [
    "ドキュメントキング", "お問い合わせ", "カスタマーセンター", "お問い合わせ", "メールお問い合わせ", "バグ報告", "サービスお問い合わせ", "フィードバック", "文書変換サイト"
  ],
  alternates: {
    canonical: "https://pdfers.com/contact",
  },  
  openGraph: {
    title: "お問い合わせ | ドキュメントキング",
    description: "ドキュメントキングサービス利用中にご不明な点がございましたら、いつでもお気軽にお問い合わせください。迅速で親切にご回答いたします。",
    url: "https://pdfers.com/contact",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "ドキュメントキングお問い合わせ" }
    ],
    siteName: "ドキュメントキング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ | ドキュメントキング",
    description: "ドキュメントキングサービス利用中にご不明な点がございましたら、いつでもお気軽にお問い合わせください。",
    images: ["/og-image.png"]
  }
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <p className="mb-8 text-gray-700">
        ドキュメントキングサービスに関してご不明な点、改善要望、バグ報告など、どのようなお問い合わせも歓迎いたします。<br />
        下記メールまたはお問い合わせフォームでご連絡いただければ、迅速にご回答いたします。
      </p>
      <div className="bg-gray-100 rounded p-6 mb-6">
        <p className="mb-2 font-semibold">メールお問い合わせ</p>
        <a href="mailto:contact@pdfers.com" className="text-blue-700 underline font-mono">
          contact@pdfers.com
        </a>
      </div>
      {/* 今後のフォーム導入時に下記コメント解除 */}
      <form className="space-y-4">
        <input type="text" placeholder="お名前" className="border rounded w-full p-2" />
        <input type="email" placeholder="メールアドレス" className="border rounded w-full p-2" />
        <textarea placeholder="お問い合わせ内容" rows={5} className="border rounded w-full p-2"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold">お問い合わせ送信</button>
      </form>
      <p className="mt-10 text-xs text-gray-400">
        回答はすべて直接確認後、メールで送信いたします。
      </p>
    </div>
  );
}