// /components/SchemaWebApp.js
"use client";
export default function SchemaWebApp() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ドキュメントキング",
          "url": "https://pdfers.com/",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript. Works on Chrome, Safari, Edge, Firefox, Mobile browsers.",
          "description": "ドキュメントキングはPDF、Word、Excel、画像など多様なファイルを簡単で高速に変換する100%無料オンライン変換ツールです。",
          "inLanguage": "ja",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "JPY"
          },
          "author": {
            "@type": "Organization",
            "name": "ドキュメントキング",
            "url": "https://pdfers.com/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ドキュメントキング",
            "url": "https://pdfers.com/"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1200"
          },
          "screenshot": "https://pdfers.com/og-image.png",
          "email": "contact@pdfers.com",
          "sameAs": [
            "https://pdfers.com/",
            // SNS, 블로그 있으면 추가
          ]
        })
      }}
    />
  );
}