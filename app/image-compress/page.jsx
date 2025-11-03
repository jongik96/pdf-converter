import ClientComponent from "./ClientComponent";

// app/image-compress/page.jsx 상단에 추가
export const metadata = {
  title: "画像容量削減 - JPG、PNG、HEIC、WEBP無料圧縮 | 文書キング",
  description: "画像品質を調整して容量を1/10まで削減しましょう！JPG、PNG、WEBP、HEICなど様々なフォーマット対応、完全無料。ファイル損失のない高品質画像圧縮、文書キングで素早く簡単に！",
  keywords: [
    "画像圧縮", "JPG圧縮", "PNG圧縮", "HEIC圧縮", "WEBP圧縮",
    "無料画像容量削減", "画像クオリティ調整", "画像最適化", "文書キング"
  ],
  alternates: {
    canonical: "https://pdfers.com/image-compress",
  },
  openGraph: {
    title: "画像容量削減 - JPG、PNG、HEIC、WEBP無料圧縮 | 文書キング",
    description: "JPG、PNG、HEIC、WEBP画像を高品質で素早く圧縮！無料で簡単に素早く画像容量を削減しましょう。",
    url: "https://pdfers.com/image-compress",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "画像容量削減" }
    ],
    siteName: "文書キング",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "画像容量削減 - JPG、PNG、HEIC、WEBP無料圧縮 | 文書キング",
    description: "JPG、PNG、HEIC、WEBP画像を高品質で素早く圧縮！無料で簡単に素早く画像容量を削減しましょう。",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}