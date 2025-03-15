// src/hooks/useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handler = (e) => setIsDarkMode(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handler);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handler);
  }, []);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
