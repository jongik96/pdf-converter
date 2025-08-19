import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDFページ抽出 - 希望のページのみ抽出 | 文書キング",
  description: "PDFから必要なページのみを素早く抽出！1,2,5-7ページのように自由に指定して新しいPDFとして保存してください。100%無料、会員登録・インストール不要。",
  keywords: [
    "PDFページ抽出", "PDF一部保存", "PDF希望のページのみ", "PDF抽出ツール", "無料PDF抽出", "文書キング"
  ],
  alternates: {
    canonical: "https://www..pdfers.com/pdf-extract",
  },
  openGraph: {
    title: "PDFページ抽出 - 希望のページのみ抽出 | 文書キング",
    description: "複雑なPDF文書、必要なページのみを選んで新しいPDFを作成しましょう！国内最強の無料抽出サービス。",
    url: "https://www.pdfers.com/pdf-extract",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDFページ抽出" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF페이지抽出 - 希望のページのみ抽出 | 文書キング",
    description: "複雑なPDF文書、必要なページのみを選んで新しいPDFを作成しましょう！国内最強の無料抽出サービス。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}