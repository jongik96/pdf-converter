export default function SchemaOrganization() {
  return (
    <>
      {/* Organization 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PDFer",
            legalName: "PDFer",
            url: "https://pdfers.com",
            logo: "https://pdfers.com/og-image.png",
            description: "PDFerはPDF、Word、Excel、画像など多様なファイルを簡単で高速に無料で変換できる国内1位Webサービスです。",
            email: "contact@pdfers.com",
            sameAs: [
              "https://pdfers.com",
              // SNS 채널이 있으면 여기에 추가
              // 예시: "https://blog.naver.com/yourblog", "https://www.instagram.com/yourbrand/"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "contact@pdfers.com",
                contactType: "customer support",
                availableLanguage: ["Korean", "English"],
                areaServed: "KR"
              }
            ],
            // 한국 법적 사업자면 아래처럼 추가 가능(없으면 생략)
            // address: {
            //   "@type": "PostalAddress",
            //   addressCountry: "KR",
            //   addressLocality: "서울특별시",
            // },
            // 브랜드 또는 서비스명 여러 개 쓸 경우:
            brand: {
              "@type": "Brand",
              name: "PDFer"
            },
            // 서비스 설명 추가
            serviceArea: {
              "@type": "AdministrativeArea",
              name: "日本"
            },
            foundingDate: "2025-07",
            // 창립자(실제 법인/개인 공개 원할 때)
            // founder: { "@type": "Person", name: "박잭" }
          })
        }}
      />
      {/* WebSite 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PDFer",
            url: "https://pdfers.com",
            description: "PDFerは国内無料文書/画像変換サービスです。会員登録、インストールなしで簡単で高速にファイル変換！",
            inLanguage: "ja",
            publisher: {
              "@type": "Organization",
              name: "PDFer"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://pdfers.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}