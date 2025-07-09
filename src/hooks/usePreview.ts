import { useState } from 'react';

export const usePreview = () => {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => setShowPreview(!showPreview);
  const showPreviewMode = () => setShowPreview(true);
  const showCode = () => setShowPreview(false);

  return {
    showPreviewMode,
    togglePreview,
    showPreview,
    showCode,
  };
};
