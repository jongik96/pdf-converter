"use client";
import { useState, useEffect } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handlePdfSplit } from "@/lib/converters/pdfSplit";
import { BiSolidFilePdf } from "react-icons/bi"



export default function PdfSplitPage() {
  const [file, setFile] = useState(null);
  const [ranges, setRanges] = useState(""); // "1-3,5,7-8"
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [downloadFilename, setDownloadFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const MAX_FILE_SIZE_MB = 100;
  const MAX_TOTAL_SIZE_MB = 100;

    const isValidFile = (file) => {
    if (file.type !== "application/pdf") {
        alert("PDFファイルのみアップロードできます。");
        return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("ファイル容量は最大100MBまで許可されています。");
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
    if (f.size > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("ファイル容量は100MBを超えることはできません。");
        return;
    }

    setFile(f);
    setIsConverted(false);
    };
  
    const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;
    if (f.size > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("ファイル容量は100MBを超えることはできません。");
        return;
    }
    setFile(f);
    setIsConverted(false);
    };

  const handleConvertClick = async () => {
    if (!file || !ranges) {
      alert("PDFファイルと分割範囲を入力してください。");
      return;
    }
    setIsConverting(true);
    const result = await handlePdfSplit(file, ranges);
    setIsConverting(false);
    if (result?.success) {
      setDownloadUrl(result.downloadUrl);
      setDownloadFilename(result.filename);
      setIsConverted(true);
    } else {
              alert("分割に失敗しました。再試行してください。");
    }
  };

  const handleDownload = () => {
    if (!downloadUrl || !downloadFilename) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadFilename;
    link.click();
  };

  const resetConverter = () => {
    setFile(null);
    setRanges("");
    setDownloadUrl(null);
    setDownloadFilename(null);
    setIsConverted(false);
  };

  useEffect(() => {
    if (isConverted && downloadUrl && downloadFilename) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadFilename;
      link.click();
    }
  }, [isConverted, downloadUrl, downloadFilename]);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/tools" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            他のツールを見る
          </Link>
        </div>
        <div className="text-center mb-12">
            <div className="text-6xl mb-4 flex justify-center items-center">
                <BiSolidFilePdf size={60} color="#FF4646" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF分割</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">ページ範囲を入力してPDFを複数に分割してください。</p>
        </div>
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* 업로드/입력 영역 */}
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
                                          <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">ここにPDFをドラッグまたはクリックしてアップロードしてください</p>
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
              {/* 범위 입력란 */}
              {file && (
                <div className="my-6">
                  <label className="block mb-2 font-semibold text-gray-900">
                    分割するページ範囲 <span className="text-gray-400 text-sm">（例：1-3,5,7-8）</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full px-4 py-2"
                    value={ranges}
                    onChange={e => setRanges(e.target.value)}
                    placeholder="例：1-3,5,7-8"
                  />
                </div>
              )}
              {/* 변환/다운로드 버튼 */}
              {file && (
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !file || !ranges}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          分割中...
                        </>
                      ) : (
                        "PDF分割する"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        分割が完了しました！
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        分割されたPDFをダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        別のPDFを分割する
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