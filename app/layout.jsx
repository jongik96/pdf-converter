import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AnalyticsWrapper from "@/components/AnalyticsWrapper"
import Script from "next/script"
import SchemaOrganization from "@/components/SchemaOrganization";
import SchemaWebApp from "@/components/SchemaWebApp";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PDFer - 無料ファイル変換機",
  description: "PDFerでPDF、Word、Excel、PowerPoint、画像ファイルを簡単で高速に無料で変換してください。インストール・会員登録なしで完全無料！国内サーバーを運営しているため、どこよりも高速な速度を楽しめます！PDF変換、Word変換、Excel変換、画像変換、PDF結合・分割・圧縮など20以上の無料ツールを提供。ビジネス、教育、個人用途に最適なオンラインファイル変換サービスです。",
  keywords: [
    "PDFer", "ファイル変換", "PDF変換", "画像変換", "文書変換機", "ウェブ変換ツール", "jpg png heic pdf xlsx ppt"
  ],
  alternates: {
    canonical: "https://pdfers.com/"
  },
  openGraph: {
    title: "PDFer - 無料ファイル変換機",
    description: "PDF、画像、文書を簡単で高速に無料変換！",
    url: "https://pdfers.com",
    siteName: "PDFer",
    images: [
      {
        url: "https://pdfers.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PDFerメイン画像",
        type: "image/png",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDFer - 無料ファイル変換機",
    description: "PDF、画像、文書を簡単で高速に無料変換！",
    images: ["https://pdfers.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "icon", url: "/web-app-manifest-192.png", sizes: "192x192" },
      { rel: "icon", url: "/web-app-manifest-512.png", sizes: "512x512" },
    ],
  },
  other: {
    "google-adsense-account": "ca-pub-8843011911940029",
    "naver-site-verification": "a15e9c24bed6fa364370353014afb579be302a6a",
    "google-site-verification": "yqkVQBxT2fP3xB4pWMOxF8qs71zX_7uhUwNASymtdBA",
    // 카카오톡 공유를 위한 추가 메타데이터
    "og:image": "https://pdfers.com/og-image.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "ドキュメントキングメイン画像",
    // 추가 소셜미디어 지원
    "twitter:image": "https://pdfers.com/og-image.png",
    "twitter:image:alt": "ドキュメントキングメイン画像",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="yqkVQBxT2fP3xB4pWMOxF8qs71zX_7uhUwNASymtdBA" />
        {/* 카카오톡 및 소셜미디어 공유를 위한 추가 메타태그 */}
        <meta property="og:image" content="https://pdfers.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="PDFerメイン画像" />
        <meta name="twitter:image" content="https://pdfers.com/og-image.png" />
        <meta name="twitter:image:alt" content="PDFerメイン画像" />
        {/* 카카오톡 특별 지원 */}
        <meta name="kakao:image" content="https://pdfers.com/og-image.png" />
      </head>
      <body className={inter.className}>
        <SchemaOrganization />
        <SchemaWebApp />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AnalyticsWrapper />
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8843011911940029"
          crossOrigin="anonymous"
        />
        {/* 네이버 애널리틱스 lazyOnload 적용 */}
        <Script
          src="https://wcs.naver.net/wcslog.js"
          strategy="lazyOnload"
        />
        <Script
          id="naver-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "82a9610ad38048";
              if (window.wcs) { wcs_do(); }
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MCP4X0SJ8P`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MCP4X0SJ8P', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* 정말 필요한 경우에만 preconnect/preload 직접 추가, 아래는 선택사항 */}
        <link rel="preconnect" href="https://ssl.pstatic.net" crossOrigin="" />
        <link rel="preconnect" href="https://nam.veta.naver.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="/_next/static/css/0540e53a0da54d97.css" />

      </body>
    </html>
  )
}