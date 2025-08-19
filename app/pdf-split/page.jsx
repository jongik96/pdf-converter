import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF分割 - 希望のページ範囲で分割 | 文書キング",
  description: "PDFファイルを希望のページ単位で簡単に素早く分割しましょう！複数範囲指定、無料オンラインPDF分割サービス。",
  keywords: [
    "PDF分割", "PDF分割", "PDF分割", "PDF複数に", "PDF範囲分割", "無料PDF分割", "文書キング"
  ],
  alternates: {
    canonical: "https://www.pdfers.com/pdf-split",
  },
  openGraph: {
    title: "PDF分割 - 希望のページ範囲で分割 | 文書キング",
    description: "ページ範囲を入力してPDFを複数に分割！希望の部分のみを選んで安全に分割してください。",
    url: "https://www.pdfers.com/pdf-split",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF分割" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF分割 - 希望のページ範囲で分割 | 文書キング",
    description: "ページ範囲を入力してPDFを複数に分割！希望の部分のみを選んで安全に分割してください。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}