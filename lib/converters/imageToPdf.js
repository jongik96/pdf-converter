// lib/converters/imageToPdf.js

export async function handleConvert(files) {
  const formData = new FormData();
  // 여러 장 이미지 파일 추가
  files.forEach((file) => {
    formData.append("files", file); // 서버에서 files로 받음 (list)
  });

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.networkkings.website";

    // 1) 변환 요청
    const response = await fetch(`${API_BASE}/convert/image-to-pdf`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // 2) 서버가 attachment로 내려주므로 같은 탭으로 바로 이동
    const downloadUrl = `${API_BASE}/download/${encodeURIComponent(
      result.filename
    )}`;

    if (typeof window !== "undefined") {
      // 인앱/모바일 호환성 ↑ : 새 탭 대신 same-tab 이동
      window.location.assign(downloadUrl);
    }

    // UI에서 링크 표시가 필요하면 활용
    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("❌ 이미지→PDF 변환 중 오류:", error);
    return { success: false };
  }
}