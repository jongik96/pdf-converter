import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "ドキュメントキングすべてのファイル変換ツール集 - PDF/Word/画像/Excel変換",
  description: "PDF変換、Word変換、Excel変換、画像変換などすべてのファイル変換を一箇所で！高速で安全、100%無料、クリック数回で完了するドキュメントキングツール集。",
  keywords: [
    "PDF変換", "Word変換", "Excel変換", "画像変換", "ファイル変換ツール",
    "無料ファイル変換", "オンラインファイル変換", "ドキュメントキング"
  ],
  alternates: {
    canonical: "https://pdfers.com/tools",
  },
  openGraph: {
    title: "ドキュメントキングすべてのファイル変換ツール集 - PDF/Word/画像/Excel変換",
    description: "PDF/Word/Excel/画像などすべてのファイル変換を一度に！誰でも無料で使えるオールインワン変換ツール、ドキュメントキング。",
    url: "https://pdfers.com/tools",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "ドキュメントキングすべてのファイル変換ツール" }
    ],
    siteName: "ドキュメントキング",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ドキュメントキングすべてのファイル変換ツール集 - PDF/Word/画像/Excel変換",
    description: "PDF/Word/Excel/画像などすべてのファイル変換を一度に！誰でも無料で使えるオールインワン変換ツール、ドキュメントキング。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}