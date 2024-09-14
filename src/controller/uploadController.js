const chunkSize = 1 * 1024 * 1024; // 1 MB chunk size

export const uploadFile = async (file, startChunk, totalChunks, onProgress) => {
  let uploadedSize = 0;
  let previousUploadedSize = 0;
  let previousTime = Date.now();

  for (
    let start = startChunk * chunkSize;
    start < file.size;
    start += chunkSize
  ) {
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);
    const index = start / chunkSize;

    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("fileName", file.name);
    formData.append("totalChunks", totalChunks);
    formData.append("chunkIndex", index);

    const response = await fetch("http://localhost:4000/upload-chunk", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    uploadedSize += chunk.size;
    const currentTime = Date.now();
    const elapsedTime = (currentTime - previousTime) / 1000; // in seconds
    const speed = (uploadedSize - previousUploadedSize) / elapsedTime; // bytes per second

    const remainingChunks = totalChunks - index - 1;
    const estimatedRemainingTime = (remainingChunks * chunkSize) / speed;

    previousUploadedSize = uploadedSize;
    previousTime = currentTime;

    onProgress({
      progress: Math.round(((index + 1) / totalChunks) * 100),
      fileSize: file.size,
      uploadedSize,
      uploadSpeed: (speed / (1024 * 1024)).toFixed(2), // MB/s
      remainingTime: Math.round(estimatedRemainingTime),
    });
  }
};

export const resumeUpload = async (fileName, totalChunks) => {
  const response = await fetch("http://localhost:4000/resume-upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName,
      totalChunks,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
