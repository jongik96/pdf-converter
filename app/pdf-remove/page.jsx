import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDFページ削除 - 不要なページのみ削除 | ドキュメントキング",
  description: "PDFファイルから不要なページのみを選んで高速で削除！複数ページ一度に削除可能。インストール・会員登録なしで無料で利用してください。PDFから不要なページを選択して削除し、必要な部分だけを残せます。文書編集、資料整理、ファイル最適化に最適な無料PDF編集ツールです。",
  keywords: [
    "PDFページ削除", "PDFページ削除", "PDF一ページ削除", "PDF編集", "PDFページ除去", "無料PDF削除", "ドキュメントキング"
  ],
  alternates: {
    canonical: "https://pdfers.com/pdf-remove",
  },
  openGraph: {
    title: "PDFページ削除 - 不要なページのみ削除 | ドキュメントキング",
    description: "PDFから不要なページのみを選んで削除してください！簡単で安全な国内代表PDF編集サービス。",
    url: "https://pdfers.com/pdf-remove",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDFページ削除" }
    ],
    siteName: "ドキュメントキング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF페이지削除 - 不要なページのみ削除 | ドキュメントキング",
    description: "PDFから不要なページのみを選んで削除してください！簡単で安全な国内代表PDF編集サービス。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}