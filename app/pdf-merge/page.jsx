import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF結合 - 複数PDFを一度に結合 | ドキュメントキング",
  description: "複数のPDFファイルを高速で1つに結合してください！最大5個、100MBまで無料で結合。インストール・会員登録なしですぐに利用可能。複数のPDF文書を1つのファイルにまとめて、整理・保存・共有を簡単に。ビジネス、教育、個人用途に最適な無料PDF結合ツールです。",
  keywords: [
    "PDF結合", "PDF結合", "複数PDF一ファイル", "無料PDF結合", "PDF Merge", "ドキュメントキング"
  ],
  alternates: {
    canonical: "https://pdfers.com/pdf-merge",
  },
  openGraph: {
    title: "PDF結合 - 複数PDFを一度に結合 | ドキュメントキング",
    description: "複数のPDFをアップロードして一度に結合！国内最強PDF結合サービス。簡単で安全に使用してください。",
    url: "https://pdfers.com/pdf-merge",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF結合" }
    ],
    siteName: "ドキュメントキング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF結合 - 複数PDFを一度に結合 | ドキュメントキング",
    description: "複数のPDFをアップロードして一度に結合！国内最強PDF結合サービス。簡単で安全に使用してください。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}