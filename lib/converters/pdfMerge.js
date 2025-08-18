export async function handleConvert(files) {
  const formData = new FormData();
  // 여러 파일 업로드
  files.forEach((file) => formData.append("files", file));

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.networkkings.website";

    // 1) 변환(PDF 병합) 요청
    const response = await fetch(`${API_BASE}/convert/pdf-merge`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 병합 실패");

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
    console.error("PDF 병합 오류:", error);
    return { success: false };
  }
}