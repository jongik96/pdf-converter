// lib/converters/pdfExtract.js

export async function handleConvert(file, pages) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("pages", pages); // 예: "1,3,5-7"

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.networkkings.website";

    // 1) 변환(페이지 추출) 요청
    const response = await fetch(`${API_BASE}/convert/pdf-extract`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success)
      throw new Error(result.error || "PDF 페이지 추출 실패");

    // 2) blob 다운로드 제거 → same-tab으로 서버 다운로드 이동
    const downloadUrl = `${API_BASE}/download/${encodeURIComponent(
      result.filename
    )}`;
    if (typeof window !== "undefined") {
      window.location.assign(downloadUrl);
    }

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 페이지 추출 오류:", error);
    return { success: false };
  }
}