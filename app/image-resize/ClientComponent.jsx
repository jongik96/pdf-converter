"use client";
import { useState, useRef, useEffect  } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { handleConvert as handleImageResize } from "@/lib/converters/imageResize";
import { RiCustomSize } from "react-icons/ri";




const ACCEPTED_TYPES = ".jpg .jpeg .png .webp .heic";
const MAX_FILE_SIZE_MB = 100;

// 허용되는 MIME 타입 리스트
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  // 필요시 추가
];

export default function ImageResizePage() {
  const [file, setFile] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [keepRatio, setKeepRatio] = useState(true);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const imgRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // ---------- 확장자, 용량 체크 함수 추가 ----------
  const isValidFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("画像ファイルのみアップロードできます。\n(jpg、png、webp、heicなど)");
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert("ファイル容量は最大100MBまで許可されています。");
      return false;
    }
    return true;
  };
  // -------------------------------------------------

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const f = files[0];
      if (!isValidFile(f)) return;
      setFile(f);
      setIsConverted(false);

      const img = new window.Image();
      img.src = URL.createObjectURL(f);
      img.onload = () => {
        setOriginalSize({ width: img.width, height: img.height });
        setWidth(img.width);
        setHeight(img.height);
        imgRef.current = img;
      };
    }
  };

  // 파일 업로드 및 원본 사이즈 추출
  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;
    setFile(f);
    setIsConverted(false);

    const img = new window.Image();
    img.src = URL.createObjectURL(f);
    img.onload = () => {
      setOriginalSize({ width: img.width, height: img.height });
      setWidth(img.width);
      setHeight(img.height);
      imgRef.current = img;
    };
  };

  // 비율 유지 체크박스
  const handleWidthChange = (e) => {
    const w = Number(e.target.value);
    setWidth(w);
    if (keepRatio && originalSize) {
      const ratio = originalSize.height / originalSize.width;
      setHeight(Math.round(w * ratio));
    }
  };
  const handleHeightChange = (e) => {
    const h = Number(e.target.value);
    setHeight(h);
    if (keepRatio && originalSize) {
      const ratio = originalSize.width / originalSize.height;
      setWidth(Math.round(h * ratio));
    }
  };

  // 변환 처리
  const handleConvertClick = async () => {
    if (!file || !width || !height) return;
    setIsConverting(true);
    const result = await handleImageResize(file, width, height);
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
              alert("画像変換に失敗しました。再試行してください。");
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
    setOriginalSize(null);
    setWidth("");
    setHeight("");
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
            他のツールを見る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            {/* 여기에 아이콘 넣기 */}
            <RiCustomSize size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">画像サイズ変更</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">希望のサイズで画像をリサイズしてください。アスペクト比の維持も可能です！</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* 업로드/설정 영역 */}
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
                      <p className="text-sm text-gray-500">
                        元のサイズ: {originalSize ? `${originalSize.width} x ${originalSize.height} px` : "不明"}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                      <div>
                        <label className="mr-2 font-semibold">幅(px)</label>
                        <input
                          type="number"
                          className="border rounded w-28 px-2 py-1"
                          value={width}
                          onChange={handleWidthChange}
                          disabled={!originalSize}
                        />
                      </div>
                      <span className="mx-2 text-gray-400">×</span>
                      <div>
                        <label className="mr-2 font-semibold">高さ(px)</label>
                        <input
                          type="number"
                          className="border rounded w-28 px-2 py-1"
                          value={height}
                          onChange={handleHeightChange}
                          disabled={!originalSize}
                        />
                      </div>
                      <label className="flex items-center ml-4 text-sm">
                        <input
                          type="checkbox"
                          checked={keepRatio}
                          onChange={() => setKeepRatio(!keepRatio)}
                          className="mr-1"
                        />
                        アスペクト比維持
                      </label>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      別のファイル選択
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">ここに画像をドラッグまたはクリックしてアップロードしてください</p>
                      <p className="text-sm text-gray-500">対応ファイル: {ACCEPTED_TYPES}</p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      accept={ACCEPTED_TYPES}
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
                      disabled={isConverting || !file || !width || !height}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          変換中...
                        </>
                      ) : (
                        "変換する"
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
                        変換された画像をダウンロード
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        別の画像を変換する
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