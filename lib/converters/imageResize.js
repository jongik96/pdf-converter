// lib/converters/imageResize.js

export async function handleConvert(file, width, height, keepRatio = true) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("keepRatio", keepRatio);

  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_API_BASE || "https://api.networkkings.website";

    // 1) 변환 요청
    const response = await fetch(`${API_BASE}/convert/image-resize`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "이미지 리사이즈 실패");

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
    console.error("이미지 리사이즈 오류:", error);
    return { success: false };
  }
}