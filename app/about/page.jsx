// app/about/page.jsx 상단에 추가

import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDFer紹介 - 国内1位無料文書変換サイト",
  description: "PDFerは誰でも簡単に使用できる100%無料文書変換サイトです。超高速変換、強力なセキュリティ、最高品質を国内サーバーで提供します。会員登録・インストールなしで、クリック1回でファイル変換完了！",
  keywords: "PDFer, 無料文書変換, PDF変換, 画像変換, オフィス変換, 国内文書変換サイト, ファイル変換, 高速変換, 安全なファイル削除",
  alternates: {
    canonical: "https://pdfers.com/about",
  },  
  openGraph: {
    title: "PDFer紹介 - 国内1位無料文書変換サイト",
    description: "インストールも会員登録も不要の無料変換！PDF、オフィス、画像まで国内最適化サーバーで超高速処理、最高のセキュリティまで。",
    url: "https://pdfers.com/about",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDFerサービス紹介" }
    ],
  }
};

export default function Page() {
  return <ClientComponent />;
}
