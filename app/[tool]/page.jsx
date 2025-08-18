import ClientComponent from "./ClientComponent";
export async function generateMetadata({ params }) {
  const metadataMap = {
    "pdf-to-word": {
      title: "PDFをWordに変換 - ドキュメントキング",
      description: "PDFファイルをDOCX Wordファイルに無料変換！オンラインで簡単で高速に変換してください。",
      keywords: "PDF Word変換, PDF DOCX変換, 無料PDF変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/pdf-to-word",
      },
      openGraph: {
        title: "PDFをWordに変換 - ドキュメントキング",
        description: "PDFファイルをDOCX Wordファイルに無料変換！オンラインで簡単で高速に変換してください。",
        url: "https://pdfers.com/pdf-to-word",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDFをWordに変換" }
        ]
      }
    },
    "pdf-to-image": {
      title: "PDFを画像に変換 - ドキュメントキング",
      description: "PDFファイルをJPG/PNG画像に変換！一度に複数ページ変換可能。",
      keywords: "PDF画像変換, PDF JPG, PDF PNG, 無料PDF変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/pdf-to-image",
      },
      openGraph: {
        title: "PDFを画像に変換 - ドキュメントキング",
        description: "PDFファイルをJPG/PNG画像に変換！一度に複数ページ変換可能。",
        url: "https://pdfers.com/pdf-to-image",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDFを画像に変換" }
        ]
      }
    },
    "pdf-to-excel": {
      title: "PDFをExcelに変換 - ドキュメントキング",
      description: "PDFファイルをXLSX/CSV Excelファイルに無料変換！表/リスト抽出に最適化。",
      keywords: "PDF Excel変換, PDF XLSX, PDF CSV, 無料PDF変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/pdf-to-excel",
      },
      openGraph: {
        title: "PDFをExcelに変換 - ドキュメントキング",
        description: "PDFファイルをXLSX/CSV Excelファイルに無料変換！表/リスト抽出に最適化。",
        url: "https://pdfers.com/pdf-to-excel",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDFをExcelに変換" }
        ]
      }
    },
    "pdf-to-ppt": {
      title: "PDFをPowerPointに変換 - ドキュメントキング",
      description: "PDFファイルをPPTX PowerPointファイルに無料変換！プレゼンテーション制作を高速化。",
      keywords: "PDF PPT変換, PDF PPTX, PDF PowerPoint, 無料PDF変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/pdf-to-ppt",
      },
      openGraph: {
        title: "PDFをPowerPointに変換 - ドキュメントキング",
        description: "PDFファイルをPPTX PowerPointファイルに無料変換！プレゼンテーション制作を高速化。",
        url: "https://pdfers.com/pdf-to-ppt",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDFをPowerPointに変換" }
        ]
      }
    },
    "word-to-pdf": {
      title: "WordをPDFに変換 - ドキュメントキング",
      description: "Word(.docx)ファイルをPDFに無料変換！印刷/共有に最適化されたフォーマット提供。",
      keywords: "Word PDF変換, DOCX PDF, 無料Word変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/word-to-pdf",
      },
      openGraph: {
        title: "WordをPDFに変換 - ドキュメントキング",
        description: "Word(.docx)ファイルをPDFに無料変換！印刷/共有に最適化されたフォーマット提供。",
        url: "https://pdfers.com/word-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "WordをPDFに変換" }
        ]
      }
    },
    "image-to-pdf": {
      title: "画像をPDFに変換 - ドキュメントキング",
      description: "複数枚の画像を1つのPDFに結合！JPG、PNGなど多様な画像対応。",
      keywords: "画像PDF変換, JPG PDF, PNG PDF, 画像結合, 無料変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/image-to-pdf",
      },
      openGraph: {
        title: "画像をPDFに変換 - ドキュメントキング",
        description: "複数枚の画像を1つのPDFに結合！JPG、PNGなど多様な画像対応。",
        url: "https://pdfers.com/image-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "画像をPDFに変換" }
        ]
      }
    },
    "excel-to-pdf": {
      title: "ExcelをPDFに変換 - ドキュメントキング",
      description: "Excel(xlsx, csv)ファイルをPDFに無料変換！印刷/提出用に簡単に変換。",
      keywords: "Excel PDF変換, XLSX PDF, CSV PDF, 無料Excel変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/excel-to-pdf",
      },
      openGraph: {
        title: "ExcelをPDFに変換 - ドキュメントキング",
        description: "Excel(xlsx, csv)ファイルをPDFに無料変換！印刷/提出用に簡単に変換。",
        url: "https://pdfers.com/excel-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "ExcelをPDFに変換" }
        ]
      }
    },
    "ppt-to-pdf": {
      title: "PowerPointをPDFに変換 - ドキュメントキング",
      description: "PowerPoint(PPT, PPTX)をPDF文書に無料変換！プレゼンテーションファイルも簡単に印刷。",
      keywords: "PowerPoint PDF変換, PPT PDF, PPTX PDF, 無料PowerPoint変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/ppt-to-pdf",
      },
      openGraph: {
        title: "PowerPointをPDFに変換 - ドキュメントキング",
        description: "PowerPoint(PPT, PPTX)をPDF文書に無料変換！プレゼンテーションファイルも簡単に印刷。",
        url: "https://pdfers.com/ppt-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PowerPointをPDFに変換" }
        ]
      }
    },
    "jpg-to-png": {
      title: "JPGをPNGに変換 - ドキュメントキング",
      description: "JPG画像を高画質PNGに無料変換！簡単に画像形式変換可能。",
      keywords: "JPG PNG変換, 画像形式変換, 無料JPG変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/jpg-to-png",
      },
      openGraph: {
        title: "JPGをPNGに変換 - ドキュメントキング",
        description: "JPG画像を高画質PNGに無料変換！簡単に画像形式変換可能。",
        url: "https://pdfers.com/jpg-to-png",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "JPGをPNGに変換" }
        ]
      }
    },
    "png-to-jpg": {
      title: "PNGをJPGに変換 - ドキュメントキング",
      description: "PNG画像を高画質JPGに無料変換！写真、スクリーンショット形式変換も簡単に。",
      keywords: "PNG JPG変換, 画像形式変換, 無料PNG変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/png-to-jpg",
      },
      openGraph: {
        title: "PNGをJPGに変換 - ドキュメントキング",
        description: "PNG画像を高画質JPGに無料変換！写真、スクリーンショット形式変換も簡単に。",
        url: "https://pdfers.com/png-to-jpg",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PNGをJPGに変換" }
        ]
      }
    },
    "heic-to-jpg": {
      title: "HEICをJPGに変換 - ドキュメントキング",
      description: "HEIC画像をJPGに変換！iPhone写真互換性問題を一発で解決。",
      keywords: "HEIC JPG変換, iPhone写真変換, 無料HEIC変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/heic-to-jpg",
      },
      openGraph: {
        title: "HEICをJPGに変換 - ドキュメントキング",
        description: "HEIC画像をJPGに変換！iPhone写真互換性問題を一発で解決。",
        url: "https://pdfers.com/heic-to-jpg",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "HEICをJPGに変換" }
        ]
      }
    },
    "jpg-to-webp": {
      title: "JPGをWEBPに変換 - ドキュメントキング",
      description: "JPG画像をWeb最適化WEBP形式に無料変換！画像圧縮まで一度に。",
      keywords: "JPG WEBP変換, 画像圧縮, Web最適化画像, 無料変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/jpg-to-webp",
      },
      openGraph: {
        title: "JPGをWEBPに変換 - ドキュメントキング",
        description: "JPG画像をWeb最適化WEBP形式に無料変換！画像圧縮まで一度に。",
        url: "https://pdfers.com/jpg-to-webp",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "JPGをWEBPに変換" }
        ]
      }
    },
    "png-to-webp": {
      title: "PNGをWEBPに変換 - ドキュメントキング",
      description: "PNG画像をWEBP形式に無料変換！画像品質は維持、容量は削減。",
      keywords: "PNG WEBP変換, 画像圧縮, Web最適化画像, 無料変換, ドキュメントキング",
      alternates: {
        canonical: "https://pdfers.com/png-to-webp",
      },
      openGraph: {
        title: "PNGをWEBPに変換 - ドキュメントキング",
        description: "PNG画像をWEBP形式に無料変換！画像品質は維持、容量は削減。",
        url: "https://pdfers.com/png-to-webp",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PNGをWEBPに変換" }
        ]
      }
    }
  };

  const meta = metadataMap[params.tool];
  if (!meta) {
    return {
      title: "ドキュメントキング - 無料文書/画像変換サイト",
      description: "PDF、画像、オフィスファイルを簡単で高速に変換してください。",
      alternates: {
        canonical: "https://pdfers.com/"
      }
    };
  }
  return meta;
}
export default function Page() { return <ClientComponent />; }