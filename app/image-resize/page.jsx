import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "画像サイズ調整 - JPG、PNG、HEIC、WEBP無料リサイズ | 文書キング",
  description: "画像サイズを自由に調整してください！JPG、PNG、WEBP、HEICなど多様な形式対応、完全無料。アスペクト比維持、高品質画像リサイズ、文書キングで高速で簡単に！",
  keywords: [
    "画像リサイズ", "画像サイズ調整", "JPGリサイズ", "PNGリサイズ", "HEICリサイズ", "WEBPリサイズ",
    "無料画像サイズ変更", "画像サイズ変更", "画像最適化", "文書キング"
  ],
  alternates: {
    canonical: "https://pdfers.com/image-resize",
  },
  openGraph: {
    title: "画像サイズ調整 - JPG、PNG、HEIC、WEBP無料リサイズ | 文書キング",
    description: "JPG、PNG、HEIC、WEBP画像を高品質で高速リサイズ！無料で簡単で高速に画像サイズを調整してみてください。",
    url: "https://pdfers.com/image-resize",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "画像サイズ調整" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "画像サイズ調整 - JPG、PNG、HEIC、WEBP無料リサイズ | 文書キング",
    description: "JPG、PNG、HEIC、WEBP画像を高品質で高速リサイズ！無料で簡単で高速に画像サイズを調整してみてください。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}