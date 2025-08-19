import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF容量削減 - 無料PDF圧縮 | 文書キング",
  description: "PDFファイルを最大90%まで圧縮！高画質から超軽量まで、品質劣化最小化で素早く簡単にPDF容量を削減しましょう。100%無料、インストール不要。",
  keywords: [
    "PDF圧縮", "PDF容量削減", "無料PDF圧縮", "PDFファイルサイズ削減", "PDF軽量化", "文書キング"
  ],
  alternates: {
    canonical: "https://www.pdfers.coms/pdf-compress",
  },
  openGraph: {
    title: "PDF容量削減 - 無料PDF圧縮 | 文書キング",
    description: "PDFファイルをクリック一つで超簡単圧縮！高画質維持、高速処理、無料提供。モバイル・PCどこでも使用。",
    url: "https://www.pdfers.com/pdf-compress",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF容量削減" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF容量削減 - 無料PDF圧縮 | 文書キング",
    description: "PDFファイルをクリック一つで超簡単圧縮！高画質維持、高速処理、無料提供。モバイル・PCどこでも使用。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}