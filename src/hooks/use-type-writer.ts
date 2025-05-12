import { useEffect, useMemo, useState } from 'react';

export const useTypewriter = (text: string, speed = 20) => {
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const displayText = useMemo(() => text.slice(0, index), [index]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return `${displayText}${showCursor ? '|' : ''}`;
};