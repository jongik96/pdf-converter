import { track } from '@vercel/analytics';

// 파일 변환 이벤트 추적
export const trackFileConversion = (conversionType, fileSize, success = true) => {
  track('file_conversion', {
    type: conversionType,
    file_size: fileSize,
    success: success,
    timestamp: new Date().toISOString()
  });
};

// 페이지 방문 이벤트 추적
export const trackPageView = (pageName) => {
  track('page_view', {
    page: pageName,
    timestamp: new Date().toISOString()
  });
};

// 에러 이벤트 추적
export const trackError = (errorType, errorMessage) => {
  track('error', {
    type: errorType,
    message: errorMessage,
    timestamp: new Date().toISOString()
  });
};

// 사용자 행동 추적
export const trackUserAction = (action, details = {}) => {
  track('user_action', {
    action: action,
    ...details,
    timestamp: new Date().toISOString()
  });
};

// 파일 다운로드 추적
export const trackDownload = (fileType, fileSize) => {
  track('file_download', {
    file_type: fileType,
    file_size: fileSize,
    timestamp: new Date().toISOString()
  });
};
