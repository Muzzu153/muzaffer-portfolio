import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contentEl = document.getElementById('article-content');
      if (!contentEl) return;

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // Use the article's height for a more accurate progress bar
      const articleTop = contentEl.offsetTop;
      const articleHeight = contentEl.scrollHeight;
      
      const scrollableHeight = articleHeight - clientHeight;
      const currentScroll = scrollTop - articleTop;

      if (currentScroll > 0 && scrollableHeight > 0) {
        const scrollPercentage = (currentScroll / scrollableHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercentage)));
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};