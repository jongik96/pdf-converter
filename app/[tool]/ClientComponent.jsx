"use client";
import { useState, useCallback, useEffect } from "react"
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { handleConvert as handlePdfToWord } from "@/lib/converters/pdfToWord"
import { handleConvert as handlePdfToImage } from "@/lib/converters/pdfToImage"
import { handleConvert as handlePdfToExcel } from "@/lib/converters/pdfToExcel"
import { handleConvert as handlePdfToPpt } from "@/lib/converters/pdfToPpt"
import { handleConvert as handleWordToPdf } from "@/lib/converters/wordToPdf"
import { handleConvert as handleImageToPdf } from "@/lib/converters/imageToPdf"
import { handleConvert as handleExcelToPdf } from "@/lib/converters/excelToPdf"
import { handleConvert as handlePptToPdf } from "@/lib/converters/pptToPdf"
import { handleConvert as handleJpgToPng } from "@/lib/converters/jpgToPng"
import { handleConvert as handlePngToJpg } from "@/lib/converters/pngToJpg"
import { handleConvert as handleHeicToJpg } from "@/lib/converters/heicToJpg"
import { handleConvert as handleJpgToWebp } from "@/lib/converters/jpgToWebp"
import { handleConvert as handlePngToWebp } from "@/lib/converters/pngToWebp"
import { useParams } from "next/navigation"
import { RiFileWord2Fill, RiFileImageFill, RiFileExcel2Fill, RiFilePpt2Fill, RiCustomSize , RiFileZipFill } from "react-icons/ri"
import { BiSolidFilePng, BiSolidFileJpg} from "react-icons/bi"
import { BsFiletypeHeic } from "react-icons/bs"
import { SiWebtrees } from "react-icons/si"



const MAX_FILES = 20;
const MAX_FILE_SIZE_MB = 100;

// 각 도구별 허용 mime type (최소 1개만 체크)
const mimeMap = {
  ".pdf": ["application/pdf"],
  ".docx": ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ".xlsx": ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel"],
  ".csv": ["text/csv"],
  ".ppt": [
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ],
  ".pptx": ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ".jpg": ["image/jpeg"],
  ".jpeg": ["image/jpeg"],
  ".png": ["image/png"],
  ".webp": ["image/webp"],
  ".heic": ["image/heic", "image/heif"],
};

function getAcceptMime(acceptStr) {
  // ".jpg,.png" 등에서 각각의 확장자별 MIME을 전부 배열로 반환
  return acceptStr.split(",").flatMap(ext => (mimeMap[ext.trim()] || []));
}

// 단일 파일: 확장자 + 용량 체크
function isValidFile(file, acceptStr) {
  const acceptMimeTypes = getAcceptMime(acceptStr);
  if (!acceptMimeTypes.includes(file.type)) {
    alert("지원하지 않는 파일 형식입니다.");
    return false;
  }
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    alert("파일 용량은 최대 100MB까지만 허용됩니다.");
    return false;
  }
  return true;
}

// 여러 파일 (이미지 to pdf): 전부 검사
function areValidFiles(files, acceptStr) {
  const acceptMimeTypes = getAcceptMime(acceptStr);
  for (let file of files) {
    if (!acceptMimeTypes.includes(file.type)) {
      alert("지원하지 않는 파일 형식이 있습니다.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert("파일 용량은 최대 100MB까지만 허용됩니다.");
      return false;
    }
  }
  return true;
}




const toolsData = {
  "pdf-to-word": {
    name: "PDFをワードに変換",
    description: "PDFファイルを.docxに変換いたします！",
    icon: <RiFileWord2Fill size={60} color="#185ABD" />,
    acceptedTypes: ".pdf",
    outputFormat: "Word Document (.docx)",
    instructions: ["PDFファイルをアップロードしてください", "変換ボタンをクリックしてください", "変換されたワードファイルをダウンロードしてください"],
  },
  "pdf-to-image": {
    name: "PDFを画像に変換",
    description: "PDFファイルをJPGまたはPNG画像に変換いたします。",
    icon: <RiFileImageFill size={60} color="#FFB100" />,
    acceptedTypes: ".pdf",
    outputFormat: "Image (.jpgまたは.png)",
    instructions: [
      "PDFファイルをアップロードしてください",
      "画像形式（JPGまたはPNG）を選択してください",
      "変換ボタンをクリックしてください",
      "ZIPファイルで画像をダウンロードしてください"
    ],
  },
  "pdf-to-excel": {
    name: "PDFをエクセルに変換",
    description: "PDFファイルを.xlsxまたは.csvに変換いたします！",
    icon: <RiFileExcel2Fill size={60} color="#1BC47D" />,
    acceptedTypes: ".pdf",
    outputFormat: "Excel (.xlsxまたは.csv)",
    instructions: [
      "PDFファイルをアップロードしてください",
      "エクセル形式（XLSXまたはCSV）を選択してください",
      "変換ボタンをクリックしてください",
      "変換されたファイルをダウンロードしてください"
    ],
  },
  "pdf-to-ppt": {
    name: "PDFをパワーポイントに変換",
    description: "PDFファイルを.pptxに変換いたします！",
    icon: <RiFilePpt2Fill size={60} color="#F76808" />,
    acceptedTypes: ".pdf",
    outputFormat: "PowerPoint (.pptx)",
    instructions: [
      "PDFファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたパワーポイントファイルをダウンロードしてください"
    ],
  },
  "word-to-pdf": {
    name: "ワードをPDFに変換",
    description: "Word(.doc, .docx)ファイルをPDFに素早く変換いたします。",
    icon: <RiFileWord2Fill size={60} color="#185ABD" />,
    acceptedTypes: ".docx",
    outputFormat: "PDF Document (.pdf)",
    instructions: [
      "Wordファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたPDFファイルをダウンロードしてください"
    ],
  },
  "image-to-pdf": {
    name: "画像をPDFに変換",
    description: "複数枚のJPG、PNG画像を1つのPDFファイルにまとめます。",
    icon: <RiFileImageFill size={60} color="#FFB100" />,
    acceptedTypes: ".jpg,.jpeg,.png",
    outputFormat: "PDF Document (.pdf)",
    instructions: [
      "画像ファイル（JPG、PNG）を複数枚アップロードしてください",
      "変換ボタンを押すとPDFにまとまります",
      "完成したPDFファイルをダウンロードしてください"
    ],
  },
  "excel-to-pdf": {
    name: "ExcelをPDFに変換",
    description: "エクセル(xlsx, csv)ファイルをPDFに変換いたします。",
    icon: <RiFileExcel2Fill size={60} color="#1BC47D" />,
    acceptedTypes: ".xlsx,.csv",
    outputFormat: "PDF Document (.pdf)",
    instructions: [
      "エクセル(.xlsx, .csv)ファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "完成したPDFファイルをダウンロードしてください"
    ],
  },
  "ppt-to-pdf": {
    name: "パワーポイントをPDFに変換",
    description: "パワーポイント(.ppt, .pptx)ファイルをPDF文書に変換いたします。",
    icon: <RiFilePpt2Fill size={60} color="#F76808" />,
    acceptedTypes: ".ppt,.pptx",
    outputFormat: "PDF文書 (.pdf)",
    instructions: [
      "パワーポイントファイル(.ppt, .pptx)をアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたPDFファイルをダウンロードしてください"
    ],
  },
  "jpg-to-png": {
    name: "JPGをPNGに変換",
    description: "JPG画像をPNG画像に素早く変換いたします。",
    icon: <BiSolidFilePng size={60} color="#F76808" />,
    acceptedTypes: ".jpg,.jpeg",
    outputFormat: "PNG (.png)",
    instructions: [
      "JPGファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたPNGファイルをダウンロードしてください",
    ],
  },
  "png-to-jpg": {
    name: "PNGをJPGに変換",
    description: "PNG画像をJPG画像に素早く変換いたします。",
    icon: <BiSolidFileJpg size={60} color="#FF7043" />,
    acceptedTypes: ".png",
    outputFormat: "JPG (.jpg)",
    instructions: [
      "PNGファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたJPGファイルをダウンロードしてください",
    ],
  },
  "heic-to-jpg": {
    name: "HEICをJPGに変換",
    description: "HEIC画像をJPGファイルに変換いたします。",
    icon: <BsFiletypeHeic size={60} color="#3DDC97" />,
    acceptedTypes: ".heic",
    outputFormat: "JPG (.jpg)",
    instructions: [
      "HEICファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたJPGファイルをダウンロードしてください",
    ],
  },
  "jpg-to-webp": {
    name: "JPGをWEBPに変換",
    description: "JPG画像をWEBPファイルに変換いたします。",
    icon: <SiWebtrees size={60} color="#185ABD" />,
    acceptedTypes: ".jpg",
    outputFormat: "WEBP (.webp)",
    instructions: [
      "JPGファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたWEBPファイルをダウンロードしてください",
    ],
  },
  "png-to-webp": {
    name: "PNGをWEBPに変換",
    description: "PNG画像をWEBPファイルに変換いたします。",
    icon: <SiWebtrees size={60} color="#185ABD" />,
    acceptedTypes: ".png",
    outputFormat: "WEBP (.webp)",
    instructions: [
      "PNGファイルをアップロードしてください",
      "変換ボタンをクリックしてください",
      "変換されたWEBPファイルをダウンロードしてください",
    ],
  },
};

export default function ToolPage() {
  const params = useParams() // useParams 훅 사용
  const toolData = toolsData[params.tool]

  if (!toolData) {
    notFound()
  }

  const [file, setFile] = useState(null)
  const [imgFormat, setImgFormat] = useState("jpg"); // pdf-to-image에서만 사용
  const [excelFormat, setExcelFormat] = useState("xlsx"); // pdf-to-excel에서만 사용
  const [files, setFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false)
  const [isConverted, setIsConverted] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  const [convertedUrl, setConvertedUrl] = useState(null)
  const [convertedFilename, setConvertedFilename] = useState(null)

  const handleRemoveFile = (idx) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== idx));
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);

    if (params.tool === "image-to-pdf") {
      if (!areValidFiles(droppedFiles, toolData.acceptedTypes)) return;
      setFiles(prevFiles => {
        const uniqueFiles = droppedFiles.filter(
          (f) => !prevFiles.some((pf) => pf.name === f.name && pf.size === f.size)
        );
        const allFiles = [...prevFiles, ...uniqueFiles];
        if (allFiles.length > MAX_FILES) {
          alert(`최대 ${MAX_FILES}장까지만 업로드할 수 있습니다.`);
          return allFiles.slice(0, MAX_FILES);
        }
        return allFiles;
      });
      setIsConverted(false);
    } else {
      if (droppedFiles.length > 0) {
        const f = droppedFiles[0];
        if (!isValidFile(f, toolData.acceptedTypes)) return;
        setFile(f);
        setIsConverted(false);
      }
    }
  }, [params.tool, toolData.acceptedTypes]);

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files);
    if (params.tool === "image-to-pdf") {
      if (!areValidFiles(selected, toolData.acceptedTypes)) return;
      setFiles(prevFiles => {
        const uniqueFiles = selected.filter(
          (f) => !prevFiles.some((pf) => pf.name === f.name && pf.size === f.size)
        );
        const allFiles = [...prevFiles, ...uniqueFiles];
        if (allFiles.length > MAX_FILES) {
          alert(`최대 ${MAX_FILES}장까지만 업로드할 수 있습니다.`);
          return allFiles.slice(0, MAX_FILES);
        }
        return allFiles;
      });
      setIsConverted(false);
    } else {
      if (selected.length > 0) {
        const f = selected[0];
        if (!isValidFile(f, toolData.acceptedTypes)) return;
        setFile(f);
        setIsConverted(false);
      }
    }
  };

  const handleConvertClick = async () => {
    if (
      (params.tool === "image-to-pdf" && files.length === 0) ||
      (params.tool !== "image-to-pdf" && !file)
    ) return;
    setIsConverting(true);

    let result;
    if (params.tool === "pdf-to-image") {
      result = await handlePdfToImage(file, imgFormat);
    } else if (params.tool === "pdf-to-excel") {
      result = await handlePdfToExcel(file, excelFormat);
    } else if (params.tool === "pdf-to-ppt") {   
      result = await handlePdfToPpt(file);
    } else if (params.tool === "pdf-to-word") {
      result = await handlePdfToWord(file);
    } else if (params.tool === "word-to-pdf") {  
      result = await handleWordToPdf(file);
    } else if (params.tool === "image-to-pdf") { 
      result = await handleImageToPdf(files);    
    } else if (params.tool === "excel-to-pdf") {
      result = await handleExcelToPdf(file);
    } else if (params.tool === "ppt-to-pdf") {
      result = await handlePptToPdf(file);
    } else if (params.tool === "jpg-to-png") {
      result = await handleJpgToPng(file); 
    } else if (params.tool === "png-to-jpg") {
      result = await handlePngToJpg(file); 
    } else if (params.tool === "heic-to-jpg") {
      result = await handleHeicToJpg(file); 
    } else if (params.tool === "jpg-to-webp") {
      result = await handleJpgToWebp(file);       
    } else if (params.tool === "png-to-webp") {
      result = await handlePngToWebp(file);        
    } else {
      result = await handlePdfToWord(file);
    }
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
      alert("변환 실패. 다시 시도해주세요.");
    }
  };

  const handleDownload = () => {
    if (!convertedUrl || !convertedFilename) return

    const link = document.createElement("a")
    link.href = convertedUrl
    link.download = convertedFilename
    link.click()
  }

  const resetConverter = () => {
    setFile(null)
    setFiles([]) 
    setIsConverting(false)
    setIsConverted(false)
  }

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
            다른 도구 보러 가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">{toolData.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{toolData.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{toolData.description}</p>
        </div>

        {/* Main Conversion Interface */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* File Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-6 transition-colors duration-300 
                  flex flex-col justify-center items-center text-center
                  ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {params.tool === "image-to-pdf"
                  ? files.length > 0
                    ? (
                      // 여러 장 업로드된 상태 (리스트 보여줌)
                      <div className="space-y-4 text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-gray-900">
                            {files.length}장 업로드됨
                          </p>
                          <ul className="text-sm text-gray-700 mb-2 text-center">
                            {files.map((f, idx) => (
                              <li key={idx} className="inline-flex items-center gap-2 justify-center mb-1">
                                <span>{f.name}</span>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="p-1"
                                  onClick={() => handleRemoveFile(idx)}
                                  title="삭제"
                                >
                                  <span className="text-red-400 font-bold text-lg">×</span>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="outline" size="sm" onClick={resetConverter}>
                          다른 파일 선택
                        </Button>
                      </div>
                    )
                    : (
                      // 아무것도 안 올렸을 때: 안내문구+input
                      <div className="space-y-4 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-gray-900">여기에 파일을 드래그하거나 클릭하여 업로드하세요</p>
                          <p className="text-sm text-gray-500">지원 파일: {toolData.acceptedTypes}</p>
                          <p className="text-sm text-gray-500">변환 결과: {toolData.outputFormat}</p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                          accept={toolData.acceptedTypes}
                          multiple={params.tool === "image-to-pdf"}
                        />
                        <label htmlFor="file-upload">
                          <Button asChild className="cursor-pointer">
                            <span>
                              <FileText className="w-4 h-4 mr-2" />
                              파일 선택
                            </span>
                          </Button>
                        </label>
                      </div>
                    )
                  : file
                    ? (
                      // 단일 파일 업로드된 상태
                      <div className="space-y-4">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={resetConverter}>
                          다른 파일 선택
                        </Button>
                      </div>
                    )
                    : (
                      // 파일 안 올렸을 때: 안내문구+input
                      <div className="space-y-4 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-gray-900">여기에 파일을 드래그하거나 클릭하여 업로드하세요</p>
                          <p className="text-sm text-gray-500">지원 파일: {toolData.acceptedTypes}</p>
                          <p className="text-sm text-gray-500">변환 결과: {toolData.outputFormat}</p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                          accept={toolData.acceptedTypes}
                        />
                        <label htmlFor="file-upload">
                          <Button asChild className="cursor-pointer">
                            <span>
                              <FileText className="w-4 h-4 mr-2" />
                              파일 선택
                            </span>
                          </Button>
                        </label>
                      </div>
                    )
                }
              </div>

              {params.tool === "pdf-to-image" && (
                <div className="flex justify-center gap-6 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="img-format"
                      value="jpg"
                      checked={imgFormat === "jpg"}
                      onChange={() => setImgFormat("jpg")}
                    />
                    JPG로 변환
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="img-format"
                      value="png"
                      checked={imgFormat === "png"}
                      onChange={() => setImgFormat("png")}
                    />
                    PNG로 변환
                  </label>
                </div>
              )}

              {params.tool === "pdf-to-excel" && (
                <div className="flex justify-center gap-6 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="excel-format"
                      value="xlsx"
                      checked={excelFormat === "xlsx"}
                      onChange={() => setExcelFormat("xlsx")}
                    />
                    XLSX로 변환
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="excel-format"
                      value="csv"
                      checked={excelFormat === "csv"}
                      onChange={() => setExcelFormat("csv")}
                    />
                    CSV로 변환
                  </label>
                </div>
              )}

              {/* Action Buttons */}
              {(params.tool === "image-to-pdf" ? files.length > 0 : file) && (
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || (params.tool === "image-to-pdf" ? files.length === 0 : !file)}
                      className="w-full h-12 text-lg"
                      size="lg">
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          변환 중...
                        </>
                      ) : (
                        params.tool === "pdf-to-image"
                          ? `${imgFormat.toUpperCase()}로 변환하기`
                          : params.tool === "image-to-pdf"
                            ? "PDF로 변환하기"
                            : `${toolData.outputFormat.split(" ")[0]}로 변환`
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        변환이 완료되었습니다!
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        변환된 파일 다운로드
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        다른 파일 변환하기
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{toolData.name}하는 방법</h3>
              <ol className="space-y-2">
                {toolData.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
