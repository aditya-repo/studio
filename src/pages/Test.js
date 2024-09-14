import React, { useState } from "react";
import AddNewFile from "../components/AddNewFile"; // Adjust path as necessary
import ProgressBar from "../components/ProgressBar"; // Adjust path as necessary

const FileUploadContainer = () => {
  const [progress, setProgress] = useState(0);
  const [fileSize, setFileSize] = useState(0);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleProgress = (progressData) => {
    setProgress(progressData.progress);
    setFileSize(progressData.fileSize);
    setUploadedSize(progressData.uploadedSize);
    setUploadSpeed(progressData.uploadSpeed);
    setRemainingTime(progressData.remainingTime);
  };

  return (
    <div className="p-4">
      <AddNewFile onProgress={handleProgress} />
      <div className="mt-4">
        <ProgressBar
          progress={progress}
          fileSize={fileSize}
          uploadedSize={uploadedSize}
          uploadSpeed={uploadSpeed}
          remainingTime={remainingTime}
        />
      </div>
    </div>
  );
};

export default FileUploadContainer;
