import { useEffect, useMemo, useState } from 'react';

export const useTypewriter = (text: string, speed = 20, cursor = false) => {
  const [index, setIndex] = useState(0); //starting point
  const [showCursor, setShowCursor] = useState(true);

  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed]);

  useEffect(() => {
    if (!cursor) {
      setShowCursor(false);
      return;
    }

    const cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    return () => {
      clearInterval(cursorBlinkInterval);
    };
  }, [cursor]);

  return `${displayText}${cursor && showCursor ? '|' : ''}`;
};
