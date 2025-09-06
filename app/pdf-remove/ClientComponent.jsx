// app/pdf-remove/page.jsx

"use client";
import { useState, useEffect  } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { handleConvert as handlePdfRemove } from "@/lib/converters/pdfRemove";
import { BiSolidFilePdf } from "react-icons/bi"



export default function PdfRemovePage() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(""); // "1,3,5" 등 제거할 페이지
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

    const MAX_FILE_SIZE_MB = 100;

    const isValidFile = (file) => {
    if (file.type !== "application/pdf") {
        alert("PDFファイルのみアップロードできます。");
        return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("ファイルサイズは最大100MBまで可能です。");
        return false;
    }
    return true;
    };

    const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    };

    const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;
    const f = droppedFiles[0];
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
    };

    const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
    };

  const handleConvertClick = async () => {
    if (!file || !pages) return;
    setIsConverting(true);
    const result = await handlePdfRemove(file, pages);
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
              alert("PDFページ削除に失敗しました。再試行してください。");
    }
  };

  const handleDownload = () => {
    if (!convertedUrl || !convertedFilename) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = convertedFilename;
    link.click();
  };

  const resetConverter = () => {
    setFile(null);
    setPages("");
    setConvertedUrl(null);
    setConvertedFilename(null);
    setIsConverted(false);
  };

    useEffect(() => {
    if (isConverted && convertedUrl && convertedFilename) {
        const link = document.createElement("a");
        link.href = convertedUrl;
        link.download = convertedFilename;
        link.click();
    }
    }, [isConverted, convertedUrl, convertedFilename]);   

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            すべてのツールを見る
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <BiSolidFilePdf size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDFページ削除</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PDFから不要なページを削除してください！例：2,5,7-10
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
                <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 
                    ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                {file ? (
                  <div className="space-y-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="text-lg font-medium text-gray-900">{file.name}</p>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        PDFファイルをドラッグまたはクリックしてアップロードしてください
                      </p>
                      <p className="text-sm text-gray-500">対応ファイル: .pdf</p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf"
                    />
                    <label htmlFor="file-upload">
                      <Button asChild className="cursor-pointer">
                        <span>
                          <FileText className="w-4 h-4 mr-2" />
                          ファイル選択
                        </span>
                      </Button>
                    </label>
                  </div>
                )}
              </div>

              {/* 페이지 입력 */}
              {file && (
                <div className="mt-6 space-y-4">
                  <label className="block mb-2 text-md text-gray-700 font-medium">
                    削除するページ番号を入力（例：1,3,5-7）
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full px-2 py-2 text-lg"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="例：2,5,8-10"
                  />
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !pages}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          処理中...
                        </>
                      ) : (
                        "ページ削除"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        変換が完了しました！
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        結果ファイルをダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        別のファイルを処理する
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}