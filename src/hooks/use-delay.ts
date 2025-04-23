import { useState, useEffect } from 'react';

export const useDelay = (delay: number) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showContent;
};
