"use client";
import { useState, useEffect } from "react";
import { Upload, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handlePdfMerge } from "@/lib/converters/pdfMerge"; // converter 함수만 호출
import { BiSolidFilePdf } from "react-icons/bi"



const ACCEPTED_TYPES = ".pdf";

export default function PdfMergePage() {
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);


  
const MAX_FILE_SIZE_MB = 100;
const MAX_TOTAL_SIZE_MB = 100;
const MAX_FILES = 5;

    // 파일 선택
    const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);

    const validFiles = selected.filter((file) => {
        if (file.type !== "application/pdf") {
        alert("PDFファイルのみアップロードできます。");
        return false;
        }
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("ファイル容量は最大100MBまで許可されています。");
        return false;
        }
        return true;
    });

    const combined = [...files, ...validFiles].slice(0, MAX_FILES);

    const totalSize = combined.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("総容量は100MBを超えることはできません。");
        return;
    }

    setFiles(combined);
    setIsConverted(false);
    };

    // 드래그 오버
    const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
    };

    // 드래그 아웃
    const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    };

    // 드롭
    const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const dropped = Array.from(e.dataTransfer.files || []);

    const validFiles = dropped.filter((file) => {
        if (file.type !== "application/pdf") {
        alert("PDFファイルのみアップロードできます。");
        return false;
        }
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("파일 용량은 최대 100MB까지만 허용됩니다.");
        return false;
        }
        return true;
    });

    const combined = [...files, ...validFiles].slice(0, MAX_FILES);

    const totalSize = combined.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("総容量は100MBを超えることはできません。");
        return;
    }

    setFiles(combined);
    setIsConverted(false);
    };
  // 변환
  const handleConvertClick = async () => {
    if (!files.length) return;
    setIsConverting(true);
    const result = await handlePdfMerge(files); // converter만 호출
    setIsConverting(false);
    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
              alert("PDF結合に失敗しました。再試行してください。");
    }
  };

  const handleDownload = () => {
    if (!convertedUrl || !convertedFilename) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = convertedFilename;
    link.click();
  };

    // 파일 제거
    const handleRemoveFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    };

  const resetConverter = () => {
    setFiles([]);
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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/tools" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            他のツールを見る
          </Link>
        </div>
        <div className="text-center mb-12">
            <div className="text-6xl mb-4 flex justify-center items-center">
                <BiSolidFilePdf size={60} color="#FF4646" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF結合</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">複数のPDFファイルを一つに結合いたします。</p>
        </div>
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
                <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 
                    ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                style={{ minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                {files.length > 0 ? (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{files.length}個のPDFがアップロードされました</p>
                      <ul className="text-sm text-gray-700 mb-2">
                        {files.map((f, idx) => (
                              <li key={idx} className="flex justify-between items-center">
                                {f.name}
                                <button
                                    onClick={() => handleRemoveFile(idx)}
                                    className="text-red-500 ml-2 text-xs"
                                >
                                    ❌
                                </button>
                              </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">ここにPDFをドラッグまたはクリックしてアップロードしてください</p>
                      <p className="text-sm text-gray-500">対応ファイル: {ACCEPTED_TYPES}</p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      accept={ACCEPTED_TYPES}
                      multiple
                    />
                    <label htmlFor="file-upload">
                      <Button asChild className="cursor-pointer">
                        <span>
                          ファイル選択
                        </span>
                      </Button>
                    </label>
                  </div>
                )}
              </div>
              {/* 변환/다운로드 버튼 */}
              {files.length > 0 && (
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || files.length === 0}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          変換中...
                        </>
                      ) : (
                        "結合する"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        結合完了！
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        結合されたPDFをダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        別のPDFを結合する
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