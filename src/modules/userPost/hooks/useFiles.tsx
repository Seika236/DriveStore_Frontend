import { useState } from "react";

export function UseFiles() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const setFileHandler = (files: File[]) => {
    setImageFiles(files);
  };

  return {
    imageFiles,
    setFileHandler,
  };
}
