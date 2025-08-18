// lib/converters/pdfRemove.js

export async function handleConvert(file, removePages) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("pages", removePages);

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.networkkings.website";

    // 1) 변환(PDF 페이지 제거) 요청
    const response = await fetch(`${API_BASE}/convert/pdf-remove`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success)
      throw new Error(result.error || "PDF 페이지 제거 실패");

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
    console.error("PDF 페이지 제거 오류:", error);
    return { success: false };
  }
}