// app/pdf-extract/page.jsx

"use client";
import { useState, useEffect } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert } from "@/lib/converters/pdfExtract";
import { BiSolidFilePdf } from "react-icons/bi"



export default function PdfExtractPage() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(""); // "1,2,5-7" 식 입력
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
    const result = await handleConvert(file, pages);
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
              alert("PDFページ抽出に失敗しました。再試行してください。");
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
        <div className="mb-8">
          <Link href="/tools" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ツール一覧に戻る
          </Link>
        </div>
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <BiSolidFilePdf size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDFページ抽出</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            希望のページのみを選んで新しいPDFとして抽出してください。（例：1,2,5-7）
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
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <input
                        type="text"
                        className="border rounded w-56 px-2 py-1"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                        placeholder="예: 1,3,5-7"
                      />
                      <span className="text-xs text-gray-400">カンマ（,）で区切り、範囲は-で入力</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">ここにPDFファイルをドラッグまたはクリックしてアップロードしてください</p>
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
              {/* 변환/다운로드 버튼 */}
              {file && (
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !file || !pages}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          抽出中...
                        </>
                      ) : (
                        "ページ抽出"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        抽出が完了しました！
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        抽出されたPDFをダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        別のファイルを抽出する
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