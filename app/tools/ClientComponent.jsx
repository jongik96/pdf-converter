import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { RiFileWord2Fill, RiFileImageFill, RiFileExcel2Fill, RiFilePpt2Fill, RiCustomSize , RiFileZipFill } from "react-icons/ri"
import { BiSolidFilePng, BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi"
import { BsFiletypeHeic } from "react-icons/bs"
import { SiWebtrees } from "react-icons/si"



const toolCategories = [
  {
    name: "PDF編集",
    tools: [
      {
        name: "PDF結合",
        description: "2つのPDFファイルを結合します。",
        href: "/pdf-merge",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      { name: "PDF分割", 
        description: "PDFを複数のファイルに分割します。", 
        href: "/pdf-split", 
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,},
      {
        name: "PDFページ削除",
        description: "不要なページのみ選択して削除します。",
        href: "/pdf-remove",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      {
        name: "PDFページ抽出",
        description: "指定したページだけを抽出します。",
        href: "/pdf-extract",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      {
        name: "PDF容量削減",
        description: "画質を保ちながらPDFのファイルサイズを圧縮します。",
        href: "/pdf-compress",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },      
    ],
  },  
  {
    name: "PDFを変換",
    tools: [
      {
        name: "PDFをWordに変換",
        description: "PDFを.docxに変換します。",
        href: "/pdf-to-word",
        icon: <RiFileWord2Fill size={36} color="#185ABD" />,
      },
      { name: "PDFを画像に変換", description: "PDFを.jpgまたは.pngに変換します。", href: "/pdf-to-image", icon: <RiFileImageFill size={36} color="#FFD500" />,},
      {
        name: "PDFをExcelに変換",
        description: "PDFを.xlsxまたは.csvに変換します。",
        href: "/pdf-to-excel",
        icon: <RiFileExcel2Fill size={36} color="#1BC47D" />,
      },
      {
        name: "PDFをPowerPointに変換",
        description: "PDFを.pptxに変換します。",
        href: "/pdf-to-ppt",
        icon: <RiFilePpt2Fill size={36} color="#FF8000" />,
      },
    ],
  },
  {
    name: "PDFに変換",
    tools: [
      { name: "WordをPDFに変換", description: ".docxファイルをPDFに変換します。", href: "/word-to-pdf", icon: <RiFileWord2Fill size={36} color="#185ABD" />, },
      { name: "画像をPDFに変換", description: ".pngまたは.jpgファイルをPDFに変換します。", href: "/image-to-pdf", icon: <RiFileImageFill size={36} color="#FFD500" />, },
      { name: "ExcelをPDFに変換", description: ".xlsxまたは.csvファイルをPDFに変換します。", href: "/tools/excel-to-pdf", icon: <RiFileExcel2Fill size={36} color="#1BC47D" />,},
      { name: "PowerPointをPDFに変換", description: ".pptxファイルをPDFに変換します。", href: "/ppt-to-pdf", icon: <RiFilePpt2Fill size={36} color="#FF8000" />, },
    ],
  },
  {
    name: "画像ツール",
    tools: [
      { name: "画像サイズ変更", description: "ご希望のサイズに画像を変換します。", href: "/image-resize", icon: <RiCustomSize size={36} color="#FF4646" />,},
      { name: "画像容量削減", description: "画像ファイル(jpgまたはpng)を圧縮して容量を削減します。", href: "/image-compress", icon: <RiFileZipFill size={36} color="#FF4646" />, },      
      { name: "JPGをPNGに変換", description: "JPGファイルをPNGに変換します。", href: "/jpg-to-png", icon:  <BiSolidFilePng size={36} color="#F76808" />,  },
      { name: "PNGをJPGに変換", description: "PNGファイルをJPGに変換します。", href: "/png-to-jpg", icon:  <BiSolidFileJpg size={36} color="#FF7043" />,  },
      { name: "HEICをJPGに変換", description: "HEICファイルをJPGに変換します。", href: "/heic-to-jpg", icon:  <BsFiletypeHeic size={36} color="#3DDC97" />,  },
      { name: "JPGをWEBPに変換", description: "JPGファイルをWEBPに変換します。", href: "/jpg-to-webp", icon:  <SiWebtrees size={36} color="#185ABD" />,  },
      { name: "PNGをWEBPに変換", description: "PNGファイルをWEBPに変換します。", href: "/png-to-webp", icon:  <SiWebtrees size={36} color="#185ABD" />  },

    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ドキュメントキングのすべてのツール集</h1>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PDF変換、Word変換、Excel変換、画像変換などすべてのファイル変換を一度に！高速で安全、100%無料ファイル変換ツールで今すぐ変換を始めてみてください。
            </p>
        </div>

        {/* Tool Categories */}
        <div className="space-y-16">
          {toolCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.tools.map((tool) => (
                  <Link key={tool.name} href={tool.href}>
                    <Card
                      className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                        <div className="mb-4 flex items-center justify-center">{tool.icon}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        <div
                          className="flex items-center justify-center text-green-600 text-sm font-medium">
                          変換へ進む <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
