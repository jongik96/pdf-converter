"use client";
import { useState, useCallback, useEffect } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handlePdfCompress } from "@/lib/converters/pdfCompress"; // 백엔드 연결
import { BiSolidFilePdf } from "react-icons/bi"




export default function PdfCompressPage() {
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [quality, setQuality] = useState("ebook"); // 기본값 'ebook'(균형)

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

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;
    const f = droppedFiles[0];
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
  }, []);

  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
  };

  // 압축 변환
    const handleConvertClick = async () => {
    if (!file) return;
    setIsConverting(true);
    // 여기서 quality 함께 전달
    const result = await handlePdfCompress(file, quality);
    setIsConverting(false);

    if (result?.success) {
        setConvertedUrl(result.downloadUrl);
        setConvertedFilename(result.filename);
        setIsConverted(true);
    } else {
        alert("PDF圧縮に失敗しました。再試行してください。");
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
          <Link
            href="/tools"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            他のツールを見る
          </Link>
        </div>
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <BiSolidFilePdf size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF容量削減</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PDFファイルをより軽く圧縮いたします。（品質劣化最小化）
          </p>
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
                {file ? (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        ここにPDFをドラッグまたはクリックしてアップロードしてください
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
              {file && (
            <>
                {/* 👇 여기에 추가 */}
                <div className="mb-3 flex gap-3 justify-center">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="printer"
                    checked={quality === "printer"}
                    onChange={() => setQuality("printer")}
                    />
                    <span>高画質</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="ebook"
                    checked={quality === "ebook"}
                    onChange={() => setQuality("ebook")}
                    />
                    <span>標準</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="screen"
                    checked={quality === "screen"}
                    onChange={() => setQuality("screen")}
                    />
                    <span>最大圧縮</span>
                </label>
                </div>                
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !file}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          圧縮中...
                        </>
                      ) : (
                        "圧縮する"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        圧縮が完了しました！
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        圧縮されたPDFをダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent"
                      >
                        別のファイルを圧縮する
                      </Button>
                    </div>
                  )}
                </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 상세 설명 섹션 */}
        <div className="max-w-4xl mx-auto mt-16 px-4 space-y-8">
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PDF圧縮とは？</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PDF圧縮は、PDFファイルのサイズを削減して軽量化する機能です。大容量のPDFファイルをメールで送信したり、ウェブサイトにアップロードしたりする際に非常に便利です。PDFerの無料PDF圧縮ツールを使用すると、画質を保ちながらファイルサイズを最大90%まで削減できます。
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">PDF圧縮のメリット</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>メール送信が容易になります - 大容量ファイルも軽量化して送信可能</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>ストレージ節約 - クラウドやデバイスの容量を効率的に使用</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>ウェブアップロード速度向上 - ファイルサイズが小さくなり、アップロードが速い</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>共有が簡単 - 軽量PDFは共有やダウンロードが速い</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Q. PDF圧縮で画質は劣化しますか？</h3>
                <p className="text-gray-700 leading-relaxed">
                  高品質モードでは画質を最大限に維持しながら圧縮します。最大圧縮モードでは画質を多少犠牲にしますが、ファイルサイズを大幅に削減できます。用途に応じて圧縮レベルを選択できます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Q. どのくらいのサイズまで圧縮できますか？</h3>
                <p className="text-gray-700 leading-relaxed">
                  ファイルの内容によって異なりますが、平均的に50-90%のサイズ削減が可能です。画像が多いPDFほど圧縮効果が高く、テキスト中心のPDFは圧縮効果が低い傾向があります。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Q. 圧縮されたPDFは安全ですか？</h3>
                <p className="text-gray-700 leading-relaxed">
                  はい、完全に安全です。アップロードされたファイルは変換後1時間以内に自動削除され、サーバーに保存されません。すべての通信はSSL暗号化で保護されています。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}