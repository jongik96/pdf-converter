"use client";
import { Loader2, FileText, Download } from "lucide-react";

export default function LoadingSpinner({ 
  message = "변환 중...", 
  showProgress = false, 
  progress = 0,
  type = "default" 
}) {
  const getIcon = () => {
    switch (type) {
      case "upload":
        return <FileText className="w-8 h-8 text-blue-500" />;
      case "convert":
        return <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />;
      case "download":
        return <Download className="w-8 h-8 text-green-500" />;
      default:
        return <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="mb-4">
        {getIcon()}
      </div>
      
      <p className="text-lg font-medium text-gray-700 mb-2">
        {message}
      </p>
      
      {showProgress && (
        <div className="w-full max-w-xs">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            {progress}% 완료
          </p>
        </div>
      )}
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        잠시만 기다려주세요...
      </p>
    </div>
  );
}

// 전체 화면 로딩 오버레이
export function FullScreenLoading({ message = "처리 중..." }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4">
        <LoadingSpinner message={message} />
      </div>
    </div>
  );
}

// 파일 업로드 진행률 표시
export function UploadProgress({ progress, fileName }) {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 truncate">
          {fileName}
        </span>
        <span className="text-sm text-gray-500">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
} 