// lib/converters/pdfToPpt.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.pdfers.com";

    // ❶ 변환 요청
    const response = await fetch(`${API_BASE}/convert/pdf-to-ppt`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // ❷ blob 다운로드 제거 → same-tab으로 서버 다운로드 이동
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
    console.error("❌ 변환 중 오류 발생:", error);
    return { success: false };
  }
}