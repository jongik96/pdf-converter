import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import SchemaOrganization from "@/components/SchemaOrganization";
import SchemaWebApp from "@/components/SchemaWebApp";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ドキュメントキング - 無料ファイル変換機",
  description: "ドキュメントキングでPDF、Word、Excel、PowerPoint、画像ファイルを簡単で高速に無料で変換してください。インストール・会員登録なしで完全無料！国内サーバーを運営しているため、どこよりも高速な速度を楽しめます！",
  keywords: [
    "ドキュメントキング", "ファイル変換", "PDF変換", "画像変換", "文書変換機", "ウェブ変換ツール", "jpg png heic pdf xlsx ppt"
  ],
  alternates: {
    canonical: "https://pdfers.com/"
  },
  openGraph: {
    title: "ドキュメントキング - 無料ファイル変換機",
    description: "PDF、画像、文書を簡単で高速に無料変換！",
    url: "https://pdfers.com",
    siteName: "ドキュメントキング",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ドキュメントキングメイン画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ドキュメントキング - 無料ファイル変換機",
    description: "PDF、画像、文書を簡単で高速に無料変換！",
    images: ["/og-image.png"],
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
    "google-adsense-account": "ca-pub-2232732758246542",
    "naver-site-verification": "a15e9c24bed6fa364370353014afb579be302a6a",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SchemaOrganization />
        <SchemaWebApp />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2232732758246542"
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