// lib/converters/pdfSplit.js

export async function handleConvert(file, ranges) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("ranges", ranges);

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.pdfers.com";

    // 1) 변환(PDF 분할) 요청
    const response = await fetch(`${API_BASE}/convert/pdf-split`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 분할 실패");

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
    console.error("PDF 분할 오류:", error);
    return { success: false };
  }
}