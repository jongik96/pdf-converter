import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* 로고 및 설명 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">ドキュメントキング</span>
            </Link>
            <p className="text-gray-400 text-sm">
              無料で簡単で高速に文書と画像を変換してください。<br />
              インストールと会員登録なしですぐに利用可能です。
            </p>
          </div>

          {/* PDF 편집 */}
          <div>
            <h3 className="font-semibold mb-4">PDF編集</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pdf-merge" className="hover:text-white">PDF結合</Link></li>
              <li><Link href="/pdf-split" className="hover:text-white">PDF分割</Link></li>
              <li><Link href="/pdf-remove" className="hover:text-white">PDFページ削除</Link></li>
              <li><Link href="/pdf-extract" className="hover:text-white">PDFページ抽出</Link></li>
              <li><Link href="/pdf-compress" className="hover:text-white">PDF容量削減</Link></li>
            </ul>
          </div>

          {/* PDF 변환 */}
          <div>
            <h3 className="font-semibold mb-4">PDFを変換</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pdf-to-word" className="hover:text-white">PDFをWordに変換</Link></li>
              <li><Link href="/pdf-to-image" className="hover:text-white">PDFを画像に変換</Link></li>
              <li><Link href="/pdf-to-excel" className="hover:text-white">PDFをExcelに変換</Link></li>
              <li><Link href="/pdf-to-ppt" className="hover:text-white">PDFをPowerPointに変換</Link></li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">PDFに変換</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/word-to-pdf" className="hover:text-white">WordをPDFに変換</Link></li>
              <li><Link href="/image-to-pdf" className="hover:text-white">画像をPDFに変換</Link></li>
              <li><Link href="/excel-to-pdf" className="hover:text-white">ExcelをPDFに変換</Link></li>
              <li><Link href="/ppt-to-pdf" className="hover:text-white">PowerPointをPDFに変換</Link></li>
            </ul>
          </div>

          {/* 이미지 도구 */}
          <div>
            <h3 className="font-semibold mb-4">画像ツール</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/image-compress" className="hover:text-white">画像容量削減</Link></li>
              <li><Link href="/image-resize" className="hover:text-white">画像サイズ変更</Link></li>
              <li><Link href="/jpg-to-png" className="hover:text-white">JPGをPNGに</Link></li>
              <li><Link href="/png-to-jpg" className="hover:text-white">PNGをJPGに</Link></li>
              <li><Link href="/heic-to-jpg" className="hover:text-white">HEICをJPGに</Link></li>
              <li><Link href="/jpg-to-webp" className="hover:text-white">JPGをWEBPに</Link></li>
              <li><Link href="/png-to-webp" className="hover:text-white">PNGをWEBPに</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 ドキュメントキング. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}